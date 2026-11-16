import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { leadership } from "@/data/site";

export const metadata: Metadata = {
  title: "About — Technology Leadership & Systems Architecture",
  description:
    "Joseph Mmadubuike is a technology executive and systems architect building practical digital infrastructure across African institutions, businesses and emerging markets.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "profile",
    url: "/about",
    title: "About Joseph Mmadubuike",
    description:
      "Technology leadership, systems architecture and hands-on delivery for African institutions and emerging markets.",
    images: [{ url: "/images/joseph/josephmmadubuike.jpeg", alt: "Joseph Mmadubuike" }],
  },
};

const principles = [
  {
    number: "01",
    title: "Architecture before interface.",
    description: "Start with roles, data, constraints and incentives so the interface reflects how the institution actually works.",
  },
  {
    number: "02",
    title: "Evidence over theatre.",
    description: "Production systems, public releases and measurable behaviour matter more than presentation alone.",
  },
  {
    number: "03",
    title: "Build for the operating environment.",
    description: "Dependable African systems must work across real connectivity, operational constraints and institutional change.",
  },
];

const practiceAreas = [
  "Systems architecture",
  "Product engineering",
  "API and platform design",
  "Role-based access",
  "Operational dashboards",
  "Developer infrastructure",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="relative overflow-hidden border-b border-[#23384d] pt-28">
          <div className="absolute inset-0 grid-bg opacity-60" />
          <div className="absolute -left-48 top-0 h-[32rem] w-[32rem] rounded-full bg-[#16c7d9]/10 blur-[120px]" />
          <div className="site-shell relative grid gap-9 py-10 sm:py-14 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:gap-14 lg:py-20">
            <div>
              <p className="font-mono text-[.66rem] uppercase tracking-[.16em] text-[#708293]">
                <Link href="/" className="hover:text-white">Joseph Mmadubuike</Link> <span aria-hidden="true">/</span> About
              </p>
              <p className="section-label mt-8">ABOUT / EXECUTIVE + TECHNICAL</p>
              <h1 className="display mt-5 max-w-[13ch]">Leadership grounded in system reality.</h1>
              <p className="lead mt-6 max-w-2xl">
                I work where enterprise decisions meet hands-on engineering: framing the operating problem, designing the system and staying accountable through delivery.
              </p>
              <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
                <Link href="/portfolio" className="btn btn-primary w-full sm:w-auto">Explore the portfolio <span aria-hidden="true">→</span></Link>
                <Link href="/contact" className="btn btn-secondary w-full sm:w-auto">Start a conversation</Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[30rem] lg:justify-self-end">
              <div className="absolute -inset-3 rounded-[2.25rem] border border-[#23384d]" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.8rem] border border-[#23384d] bg-[#122235]">
                <Image
                  src="/images/joseph/josephmmadubuike.jpeg"
                  alt="Portrait of Joseph Mmadubuike"
                  fill
                  priority
                  sizes="(max-width:1024px) 90vw,40vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,#07111f_0%,transparent_52%),linear-gradient(130deg,rgba(215,168,75,.12),transparent_50%)]" />
                <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/10 bg-[#07111f]/82 p-4 backdrop-blur-md">
                  <p className="font-mono text-[.6rem] uppercase tracking-[.18em] text-[#d7a84b]">Operating thesis</p>
                  <p className="mt-2 text-sm leading-6 text-[#dbe5ec]">Software matters when it becomes infrastructure people can depend on.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="site-shell grid gap-9 lg:grid-cols-[.78fr_1.22fr] lg:gap-14">
            <div>
              <p className="section-label">PROFILE / CONTEXT</p>
              <h2 className="section-title mt-5">Engineering with institutional reality in view.</h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-[#9eadba] sm:text-lg">
              <p>
                Joseph Mmadubuike is a Nigerian technology leader and systems architect focused on practical digital infrastructure for African institutions, businesses and emerging markets.
              </p>
              <p>
                His work starts with the operational problem behind the interface: how people coordinate, how institutions maintain visibility, where accountability breaks down and what a dependable system must make easier.
              </p>
              <p>
                His practice spans product architecture, full-stack delivery, APIs, dashboards, access control and indigenous-language computing. Leadership experience keeps the work grounded in teams, incentives and long-term operability.
              </p>
            </div>
          </div>
        </section>

        <section id="leadership" className="section border-y border-[#23384d] bg-[#0d1b2a]">
          <div className="site-shell grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="section-label">LEADERSHIP / EXPERIENCE</p>
              <h2 className="section-title mt-5">The decisions behind the delivery.</h2>
              <p className="lead mt-6 max-w-xl">Senior technology leadership across media, digital transformation, platform strategy and product delivery.</p>
            </div>
            <div className="border-t border-[#23384d]">
              {leadership.map((item) => (
                <article key={item.role} className="grid gap-3 border-b border-[#23384d] py-6 sm:grid-cols-[8rem_1fr] sm:gap-6 sm:py-8">
                  <p className="font-mono text-xs uppercase tracking-wider text-[#d7a84b]">{item.period}</p>
                  <div>
                    <h3 className="text-xl font-semibold sm:text-2xl">{item.role}</h3>
                    <p className="mt-1 text-sm text-[#16c7d9]">{item.organization}</p>
                    <p className="mt-3 max-w-2xl leading-7 text-[#9eadba]">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="site-shell">
            <div className="grid gap-6 lg:grid-cols-[1fr_.75fr] lg:items-end">
              <div>
                <p className="section-label">APPROACH / OPERATING MODEL</p>
                <h2 className="section-title mt-5">Executive judgment. Engineering discipline.</h2>
              </div>
              <p className="lead max-w-xl lg:justify-self-end">The technical decision is only useful when it improves how an organisation sees, decides, coordinates and executes.</p>
            </div>
            <div className="mt-9 grid gap-3 md:grid-cols-3">
              {principles.map((principle) => (
                <article key={principle.number} className="panel p-5 sm:p-7">
                  <p className="font-mono text-xs tracking-[.16em] text-[#d7a84b]">{principle.number}</p>
                  <h3 className="mt-10 text-2xl font-semibold leading-tight tracking-[-.03em]">{principle.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#9eadba]">{principle.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section border-y border-[#23384d] bg-[#0d1b2a]">
          <div className="site-shell grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-center">
            <div>
              <p className="section-label">PRACTICE / TECHNICAL RANGE</p>
              <h2 className="section-title mt-5">From architecture to operated system.</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {practiceAreas.map((area, index) => (
                <div key={area} className="panel flex items-center justify-between gap-4 p-4">
                  <p className="font-semibold">{area}</p>
                  <span className="font-mono text-[.62rem] text-[#16c7d9]">{String(index + 1).padStart(2, "0")}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="site-shell panel flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="section-label">NEXT / DIRECT ENGAGEMENT</p>
              <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">Need senior technical judgment?</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#9eadba]">Consultation is available at $100 per hour. Mentorship is scoped after an initial conversation.</p>
            </div>
            <Link href="/contact" className="btn btn-primary w-full lg:w-auto">Contact Joseph <span aria-hidden="true">→</span></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
