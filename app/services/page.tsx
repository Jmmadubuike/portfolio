import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Consultation & Mentorship",
  description:
    "Book technical consultation with Joseph Mmadubuike at $100 per hour, or request scope-based mentorship and receive pricing after an initial discussion.",
  alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    url: "/services",
    title: "Consultation & Mentorship | Joseph Mmadubuike",
    description:
      "Technical consultation at $100 per hour and scope-based mentorship for individuals and teams.",
  },
};

const followLinks = profile.socialLinks.filter((link) => ["tiktok", "instagram", "x"].includes(link.platform));

const process = [
  {
    number: "01",
    title: "Reach out with context.",
    description: "Explain what you want, the challenge you are facing and the outcome you need.",
  },
  {
    number: "02",
    title: "Clarify the scope.",
    description: "We discuss goals, constraints, experience level and the most useful form of support.",
  },
  {
    number: "03",
    title: "Agree the engagement.",
    description: "Consultation is $100 per hour. Mentorship pricing is confirmed after scope is agreed.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="relative overflow-hidden border-b border-[#23384d] pt-28">
          <div className="absolute inset-0 grid-bg opacity-60" />
          <div className="absolute -right-40 top-0 h-[28rem] w-[28rem] rounded-full bg-[#d7a84b]/[.08] blur-[120px]" />
          <div className="site-shell relative py-12 sm:py-16 lg:py-20">
            <p className="font-mono text-[.66rem] uppercase tracking-[.16em] text-[#708293]">
              <Link href="/" className="hover:text-white">Joseph Mmadubuike</Link> <span aria-hidden="true">/</span> Services
            </p>
            <p className="section-label mt-8">SERVICES / DIRECT SUPPORT</p>
            <h1 className="display mt-5 max-w-[13ch]">Clear advice. Focused guidance.</h1>
            <p className="lead mt-6 max-w-2xl">
              Senior technical consultation for organisations and scope-based mentorship for individuals building their capability.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="site-shell grid gap-4 md:grid-cols-2">
            <article className="panel flex flex-col p-6 sm:p-8">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="section-label">CONSULTATION</p>
                  <h2 className="mt-5 text-3xl font-semibold tracking-[-.04em] sm:text-4xl">Technical and strategic advice.</h2>
                </div>
                <p className="shrink-0 text-right"><span className="text-4xl font-semibold tracking-[-.05em]">$100</span><span className="block text-xs text-[#9eadba]">per hour</span></p>
              </div>
              <p className="mt-6 text-base leading-8 text-[#9eadba]">
                Suitable for architecture reviews, platform planning, technical due diligence, delivery strategy and senior product decisions.
              </p>
              <ul className="mt-6 grid gap-2 text-sm text-[#dbe5ec]">
                <li className="border-l border-[#16c7d9] pl-3">System and platform architecture</li>
                <li className="border-l border-[#16c7d9] pl-3">Product and technical strategy</li>
                <li className="border-l border-[#16c7d9] pl-3">Delivery and engineering decisions</li>
              </ul>
              <a href="#contact" className="btn btn-primary mt-8 w-full sm:w-auto">Request a consultation <span aria-hidden="true">↓</span></a>
            </article>

            <article className="panel flex flex-col p-6 sm:p-8">
              <p className="section-label">MENTORSHIP</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-.04em] sm:text-4xl">Guidance shaped around your scope.</h2>
              <p className="mt-3 font-mono text-xs uppercase tracking-[.14em] text-[#d7a84b]">Price confirmed after discussion</p>
              <p className="mt-6 text-base leading-8 text-[#9eadba]">
                Reach out first and explain what you want to achieve. Mentorship scope, cadence and pricing are agreed only after understanding your goals and current stage.
              </p>
              <ul className="mt-6 grid gap-2 text-sm text-[#dbe5ec]">
                <li className="border-l border-[#d7a84b] pl-3">Career and technical direction</li>
                <li className="border-l border-[#d7a84b] pl-3">Product-building guidance</li>
                <li className="border-l border-[#d7a84b] pl-3">Scope-specific mentorship plan</li>
              </ul>
              <a href="#contact" className="btn btn-secondary mt-8 w-full sm:w-auto">Request mentorship <span aria-hidden="true">↓</span></a>
            </article>
          </div>
        </section>

        <section className="section border-y border-[#23384d] bg-[#0d1b2a]">
          <div className="site-shell">
            <p className="section-label">PROCESS / HOW IT WORKS</p>
            <div className="mt-6 grid gap-6 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
              <h2 className="section-title">Start with the problem, not the package.</h2>
              <p className="lead max-w-xl lg:justify-self-end">Every engagement begins with a clear conversation about what you need and what outcome matters.</p>
            </div>
            <div className="mt-9 grid gap-3 md:grid-cols-3">
              {process.map((item) => (
                <article key={item.number} className="panel p-5 sm:p-6">
                  <p className="font-mono text-xs tracking-[.14em] text-[#d7a84b]">{item.number}</p>
                  <h3 className="mt-10 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#9eadba]">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="site-shell grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div>
              <p className="section-label">FOLLOW / @JMMADUBUIKE</p>
              <h2 className="section-title mt-5">Follow the work in public.</h2>
              <p className="lead mt-5 max-w-lg">Product updates, technical thinking and new work across social platforms.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {followLinks.map((link) => (
                <a key={link.platform} href={link.url} target="_blank" rel="noreferrer" className="panel panel-hover p-5 transition duration-300">
                  <p className="font-mono text-[.62rem] uppercase tracking-[.14em] text-[#708293]">{link.label}</p>
                  <p className="mt-8 text-lg font-semibold">{link.handle}</p>
                  <p className="mt-2 text-sm text-[#16c7d9]">Follow <span aria-hidden="true">↗</span></p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <ContactForm context="Consultation or mentorship" />
      </main>
      <Footer />
    </>
  );
}
