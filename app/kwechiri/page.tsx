import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Brand from "@/components/Brand";
import { kwechiri } from "@/data/site";

export const metadata: Metadata = {
  title: "Kwechiri — The Igbo-first Programming Language",
  description:
    "Kwechiri is an Igbo-first programming language by Joseph Mmadubuike. The CLI is published on npm and the language is supported in VS Code.",
  alternates: { canonical: "/kwechiri" },
  openGraph: {
    type: "website",
    url: "/kwechiri",
    title: "Kwechiri — The Igbo-first Programming Language",
    description:
      "An Igbo-first programming language published on npm with official VS Code support.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kwechiri — The Igbo-first Programming Language",
    description:
      "An Igbo-first programming language by Joseph Mmadubuike, published on npm and supported in VS Code.",
  },
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  name: "Kwechiri",
  description: kwechiri.description,
  softwareVersion: kwechiri.version,
  url: kwechiri.links.website,
  codeRepository: kwechiri.links.source,
  runtimePlatform: "Node.js",
  programmingLanguage: "Kwechiri",
  license: "https://opensource.org/licenses/MIT",
  author: {
    "@type": "Person",
    name: "Joseph Mmadubuike",
    url: "https://www.josephmmadubuike.com",
  },
};

export default function KwechiriPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd).replace(/</g, "\\u003c") }} />

        <section className="relative min-h-[80svh] overflow-hidden border-b border-[#23384d] pt-28">
          <div className="absolute inset-0 grid-bg" />
          <div className="absolute right-0 top-10 h-[35rem] w-[35rem] rounded-full bg-[#d7a84b]/10 blur-[130px]" />
          <div className="site-shell relative grid min-h-[calc(80svh-7rem)] items-center gap-12 py-16 lg:grid-cols-[1.12fr_.88fr]">
            <div>
              <Link href="/" className="mb-10 block w-fit text-sm font-bold text-[#f4f7fa] hover:text-[#16c7d9]"><Brand /></Link>
              <p className="section-label !text-[#d7a84b]">LANG / 001 · NPM + VS CODE</p>
              <h1 className="display mt-6 max-w-5xl">Kwechiri<span className="text-[#d7a84b]">_</span><br /><span className="text-[#9eadba]">An Igbo-first programming language.</span></h1>
              <p className="lead mt-9 max-w-3xl">{kwechiri.description}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#status" className="btn btn-primary">Explore the release <span aria-hidden="true">↓</span></a>
                <a href={kwechiri.links.npm} target="_blank" rel="noreferrer" className="btn btn-secondary">Install from npm <span aria-hidden="true">↗</span></a>
                <a href={kwechiri.links.vscode} target="_blank" rel="noreferrer" className="btn btn-secondary">VS Code extension <span aria-hidden="true">↗</span></a>
              </div>
            </div>
            <div className="relative mx-auto aspect-square w-full max-w-[31rem] overflow-hidden rounded-[2rem] border border-[#d7a84b]/35 bg-white shadow-2xl shadow-black/40">
              <Image src="/images/projects/live/kwechiri-logo.jpeg" alt="Kwechiri — programming in Igbo logo" fill priority sizes="(max-width:1024px) 88vw,38vw" className="object-contain" />
            </div>
          </div>
        </section>

        <section id="status" className="section">
          <div className="site-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="section-label">STATUS / RELEASED</p>
              <h2 className="section-title mt-5">Kwechiri 1.1.0 is available. The language is still evolving.</h2>
            </div>
            <div>
              <p className="lead">{kwechiri.note}</p>
              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                {kwechiri.layers.map((layer) => (
                  <article key={layer.name} className="panel p-6">
                    <span className="font-mono text-[.65rem] uppercase tracking-[.15em] text-[#d7a84b]">{layer.status}</span>
                    <h3 className="mt-8 text-2xl font-semibold">{layer.name}</h3>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="quickstart" className="section border-y border-[#23384d] bg-[#0d1b2a]">
          <div className="site-shell grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <p className="section-label">QUICK / START</p>
              <h2 className="section-title mt-5">Install and run Kwechiri.</h2>
              <p className="lead mt-7">The CLI requires Node.js 20 or newer. Kwechiri source files use the <code className="font-mono text-[#16c7d9]">.kwe</code> extension.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={kwechiri.links.source} target="_blank" rel="noreferrer" className="btn btn-primary">View source <span aria-hidden="true">↗</span></a>
                <a href={kwechiri.links.website} target="_blank" rel="noreferrer" className="btn btn-secondary">kwechiri.dev <span aria-hidden="true">↗</span></a>
              </div>
            </div>
            <div className="panel overflow-hidden">
              <div className="border-b border-[#23384d] px-5 py-4">
                <p className="font-mono text-[.65rem] uppercase tracking-[.16em] text-[#16c7d9]">TERMINAL / NPM</p>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-sm leading-7 text-[#f4f7fa]"><code>{`npm install --global kwechiri@${kwechiri.version}\nkwechiri hello.kwe`}</code></pre>
              <div className="border-y border-[#23384d] px-5 py-4">
                <p className="font-mono text-[.65rem] uppercase tracking-[.16em] text-[#d7a84b]">EXAMPLE / KWECHIRI</p>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-sm leading-7 text-[#f4f7fa]"><code>{`ọrụ kelee(aha) {\n  bipụta("Ndewo " + aha)\n}\n\nkelee("Ụwa")`}</code></pre>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="site-shell grid gap-12 lg:grid-cols-2">
            <div>
              <p className="section-label">DESIGN / PHILOSOPHY</p>
              <h2 className="section-title mt-5">Language is part of computing culture.</h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-[#9eadba]">
              <p>Kwechiri asks what becomes possible when an African language is considered at the language-design layer—not only translated into an interface after the technology has already been defined.</p>
              <p>The project explores indigenous-language computing, accessible developer experience and the relationship between technical systems and cultural identity.</p>
              <p>The current release includes Unicode Igbo identifiers, an npm CLI and VS Code diagnostics. Future capabilities remain documented as the implementation develops.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="site-shell">
            <p className="section-label">ECOSYSTEM / ROADMAP</p>
            <h2 className="section-title mt-5">Released foundations. A broader vision ahead.</h2>
            <p className="lead mt-7 max-w-3xl">Kwechiri 1.1.0 provides the released language and compiler foundations. The longer-term vision includes broader documentation, tooling and the future Kwechiri Browser.</p>
            <ol className="mt-14 grid gap-4 lg:grid-cols-4">
              {kwechiri.roadmap.map((item, index) => (
                <li key={item.name} className="panel relative min-h-56 p-6">
                  <span className="font-mono text-xs text-[#16c7d9]">0{index + 1}</span>
                  <h3 className="mt-16 text-xl font-semibold">{item.name}</h3>
                  <p className="mt-3 font-mono text-[.65rem] uppercase tracking-[.15em] text-[#d7a84b]">{item.status}</p>
                  {index < kwechiri.roadmap.length - 1 && <span className="absolute -right-3 top-1/2 z-10 hidden text-[#16c7d9] lg:block" aria-hidden="true">→</span>}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section bg-[#d7a84b] text-[#07111f]">
          <div className="site-shell">
            <p className="font-mono text-xs font-semibold uppercase tracking-[.18em]">LANG / AVAILABLE NOW</p>
            <h2 className="mt-6 max-w-4xl text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-none tracking-[-.05em]">Install Kwechiri. Follow the work. Build with us.</h2>
            <p className="mt-7 max-w-2xl text-lg leading-8">The npm CLI and VS Code extension are publicly available. The source repository and language roadmap continue in public.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={kwechiri.links.npm} target="_blank" rel="noreferrer" className="btn border-[#07111f] bg-[#07111f] !text-white">Install from npm <span aria-hidden="true">↗</span></a>
              <a href={kwechiri.links.source} target="_blank" rel="noreferrer" className="btn border-[#07111f]">View source <span aria-hidden="true">↗</span></a>
              <a href="#contact" className="btn border-[#07111f]">Ask about Kwechiri <span aria-hidden="true">↓</span></a>
            </div>
          </div>
        </section>

        <ContactForm context="Kwechiri" theme="gold" />
      </main>
      <Footer />
    </>
  );
}
