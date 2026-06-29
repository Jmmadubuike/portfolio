"use client";

import Image from "next/image";
import { useState } from "react";

type HeroProps = {
  name: string;
  eyebrow?: string;
  title: string;
  summary: string;
  bgImage?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  tertiaryCta?: {
    label: string;
    href: string;
  };
  className?: string;
};

export default function Hero({
  name,
  eyebrow,
  title,
  summary,
  bgImage = "/images/joseph/jtm.jpg",
  primaryCta,
  secondaryCta,
  tertiaryCta,
  className = "",
}: HeroProps) {
  const [showMore, setShowMore] = useState(false);
  const preview = summary.split("\n")[0];

  return (
    <section
      className={`relative flex min-h-[88vh] items-end overflow-hidden md:min-h-screen md:items-center ${className}`}
    >
      <Image
        src={bgImage}
        alt={`${name} portrait`}
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "62% center" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(5,7,6,0.98)_0%,rgba(5,7,6,0.9)_42%,rgba(5,7,6,0.36)_68%,rgba(5,7,6,0.08)_100%)]" />
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_56%_36%,rgba(255,255,255,0.2),transparent_34%)] md:block" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(126,240,176,0.13),transparent_28%),linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:auto,72px_72px,72px_72px]" />
      <div className="absolute right-8 top-28 z-10 hidden h-[62vh] max-h-[620px] min-h-[440px] w-[30vw] min-w-[360px] overflow-hidden rounded-lg border border-white/15 bg-[#050706] shadow-2xl shadow-black/40 xl:block">
        <Image
          src={bgImage}
          alt={`${name} portrait detail`}
          fill
          sizes="30vw"
          className="object-cover"
          style={{ objectPosition: "52% center" }}
        />
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 md:py-24">
        <div className="max-w-5xl text-center lg:max-w-4xl lg:text-left">
          <div className="relative mx-auto mb-6 aspect-[4/3] max-h-72 w-full max-w-sm overflow-hidden rounded-lg border border-white/15 bg-[#050706] shadow-2xl shadow-black/35 md:hidden">
            <Image
              src={bgImage}
              alt={`${name} portrait detail`}
              fill
              sizes="(max-width: 768px) 90vw"
              className="object-cover"
              style={{ objectPosition: "52% center" }}
            />
          </div>
          {eyebrow && (
            <p className="mx-auto mb-4 max-w-[20rem] break-words font-mono text-xs uppercase leading-5 tracking-[0.24em] text-[#b99d5b] lg:mx-0 lg:max-w-none">
              {eyebrow}
            </p>
          )}
          <p className="text-sm font-semibold text-[#7ef0b0]">{name}</p>
          <h1 className="mx-auto mt-4 max-w-[18rem] break-words font-serif text-2xl font-semibold leading-tight text-[#f6f1df] sm:max-w-5xl sm:text-5xl md:text-6xl lg:mx-0 lg:text-7xl">
            {title}
          </h1>

          <p className="mx-auto mt-5 max-w-[18rem] text-sm leading-7 text-[#c9d2c4] sm:max-w-3xl sm:text-base md:text-lg md:leading-8 lg:mx-0">
            {showMore ? summary : preview}
          </p>
          {summary !== preview && (
            <button
              className="mt-2 text-[#d8e8b6] underline font-semibold"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Read less" : "Read more"}
            </button>
          )}

          {(primaryCta || secondaryCta || tertiaryCta) && (
            <div className="mt-7 flex flex-col sm:flex-row sm:flex-wrap gap-3 justify-center lg:justify-start">
              {primaryCta && (
                <a
                  href={primaryCta.href}
                  className="inline-flex items-center justify-center rounded-md bg-[#7ef0b0] px-4 py-3 text-sm sm:px-5 sm:text-base font-semibold text-[#061008] shadow-sm hover:bg-[#a5ffc9] transition"
                >
                  {primaryCta.label}
                </a>
              )}
              {secondaryCta && (
                <a
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-md border border-white/20 px-4 py-3 text-sm sm:px-5 sm:text-base font-semibold text-[#f6f1df] hover:bg-white/10 transition"
                >
                  {secondaryCta.label}
                </a>
              )}
              {tertiaryCta && (
                <a
                  href={tertiaryCta.href}
                  className="inline-flex items-center justify-center rounded-md border border-[#b99d5b]/45 px-4 py-3 text-sm sm:px-5 sm:text-base font-semibold text-[#d7c99b] hover:bg-[#b99d5b]/10 transition"
                >
                  {tertiaryCta.label}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
