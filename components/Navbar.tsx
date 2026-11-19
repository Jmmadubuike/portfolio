"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Brand from "@/components/Brand";
import { profile } from "@/data/profile";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };

    desktopQuery.addEventListener("change", closeOnDesktop);
    return () => desktopQuery.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!open) return;

    const trigger = triggerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusable = () => Array.from(dialogRef.current?.querySelectorAll<HTMLElement>(focusableSelector) ?? []);
    focusable()[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const elements = focusable();
      if (elements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = elements[0];
      const lastElement = elements[elements.length - 1];
      const activeElement = document.activeElement;

      if (!dialogRef.current?.contains(activeElement)) {
        event.preventDefault();
        firstElement.focus();
      } else if (event.shiftKey && activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      trigger?.focus();
    };
  }, [open]);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#23384d]/70 bg-[#07111f]/82 backdrop-blur-xl">
        <nav className="site-shell flex h-[4.5rem] items-center justify-between" aria-label="Primary navigation">
          <Link href="/" className="text-sm font-bold tracking-[-.02em] sm:text-base">
            <Brand />
          </Link>
          <div className="hidden items-center gap-7 lg:flex">
            <a
              href={profile.cv.path}
              download={profile.cv.filename}
              className="inline-flex min-h-10 items-center rounded-md border border-[#d7a84b]/50 px-3.5 py-2 text-sm font-semibold text-[#d7a84b] transition-colors hover:border-[#d7a84b] hover:bg-[#d7a84b]/10 hover:text-white"
            >
              Download CV
            </a>
            {links.map((link) => (
              <Link key={link.label} href={link.href} className="text-sm text-[#9eadba] transition-colors hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
          <button
            ref={triggerRef}
            type="button"
            className="min-h-11 rounded-md border border-[#23384d] px-3.5 py-2 text-sm lg:hidden"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            Menu
          </button>
        </nav>
      </header>

      {open && (
        <div
          id="mobile-menu"
          ref={dialogRef}
          className="fixed inset-0 z-[60] bg-[#07111f] p-5 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="mx-auto flex h-full max-w-lg flex-col">
            <div className="flex items-center justify-between border-b border-[#23384d] pb-5">
              <Link href="/" onClick={() => setOpen(false)} className="font-bold">
                <Brand />
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="min-h-11 rounded-md border border-[#23384d] px-3.5 py-2"
                aria-label="Close navigation"
              >
                Close
              </button>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-2">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-14 items-center rounded-lg px-2 text-3xl font-semibold transition-colors hover:bg-white/[0.04]"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={profile.cv.path}
                download={profile.cv.filename}
                onClick={() => setOpen(false)}
                className="mt-4 flex min-h-14 items-center justify-center rounded-lg border border-[#d7a84b]/50 bg-[#d7a84b]/10 px-4 text-xl font-semibold text-[#d7a84b] transition-colors hover:border-[#d7a84b] hover:text-white"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
