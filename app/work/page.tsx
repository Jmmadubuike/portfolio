import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import WorkExplorer from "@/components/WorkExplorer";
import { workProjects } from "@/data/work";

export const metadata: Metadata = {
  title: "Work — Production Systems",
  description:
    "Selected production systems by Joseph Mmadubuike across public infrastructure, civic technology, commerce, media, education and operations.",
  alternates: { canonical: "/work" },
  openGraph: {
    type: "website",
    url: "/work",
    title: "Work — Production Systems | Joseph Mmadubuike",
    description:
      "Explore verified public systems across public infrastructure, commerce, media, education and operational technology.",
  },
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Work — Production Systems",
  description: "Selected production platforms built by Joseph Mmadubuike.",
  url: "https://www.josephmmadubuike.com/work",
  hasPart: workProjects.map((project) => ({
    "@type": "WebSite",
    name: project.name,
    url: project.url,
    description: project.description,
  })),
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd).replace(/</g, "\\u003c") }} />

        <section className="relative overflow-hidden border-b border-[#23384d] pt-28">
          <div className="absolute inset-0 grid-bg opacity-60" />
          <div className="absolute -right-40 top-0 h-[28rem] w-[28rem] rounded-full bg-[#16c7d9]/10 blur-[120px]" />
          <div className="site-shell relative py-12 sm:py-16 lg:py-20">
            <p className="font-mono text-[.66rem] uppercase tracking-[.16em] text-[#708293]">
              <Link href="/" className="hover:text-white">Joseph Mmadubuike</Link> <span aria-hidden="true">/</span> Work
            </p>
            <div className="mt-8 grid gap-7 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
              <div>
                <p className="section-label">WORK / PRODUCTION SYSTEMS</p>
                <h1 className="display mt-5 max-w-[14ch]">Systems built for consequence.</h1>
                <p className="lead mt-6 max-w-2xl">
                  Public platforms spanning institutional oversight, civic accountability, commerce, media, education and operational control.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-[#23384d] bg-[#23384d]">
                <div className="bg-[#0d1b2a] p-4 sm:p-5">
                  <p className="text-3xl font-semibold tracking-[-.05em] sm:text-4xl">{workProjects.length}</p>
                  <p className="mt-2 text-xs leading-5 text-[#9eadba]">Live systems</p>
                </div>
                <div className="bg-[#0d1b2a] p-4 sm:p-5">
                  <p className="text-3xl font-semibold tracking-[-.05em] sm:text-4xl">4</p>
                  <p className="mt-2 text-xs leading-5 text-[#9eadba]">Operating families</p>
                </div>
                <div className="bg-[#0d1b2a] p-4 sm:p-5">
                  <p className="text-3xl font-semibold tracking-[-.05em] sm:text-4xl">1</p>
                  <p className="mt-2 text-xs leading-5 text-[#9eadba]">Released language</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#23384d] bg-[#0d1b2a]">
          <div className="site-shell py-6">
            <Link href="/kwechiri" className="group flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#d7a84b]" aria-hidden="true" />
                <p className="text-sm"><span className="font-semibold">Kwechiri</span> <span className="text-[#9eadba]">— developer infrastructure and Igbo-first language design</span></p>
              </div>
              <span className="text-sm font-semibold text-[#d7a84b] group-hover:text-white">Open language platform <span aria-hidden="true">→</span></span>
            </Link>
          </div>
        </section>

        <section className="section">
          <div className="site-shell">
            <div className="grid gap-6 lg:grid-cols-[1fr_.75fr] lg:items-end">
              <div>
                <p className="section-label">SYSTEMS / CASE STUDIES</p>
                <h2 className="section-title mt-5">Explore the work by operating context.</h2>
              </div>
              <p className="lead max-w-xl lg:justify-self-end">
                Each brief connects the public product to the operational problem, system category and capability areas behind it.
              </p>
            </div>
            <div className="mt-8 sm:mt-10">
              <WorkExplorer />
            </div>
          </div>
        </section>

        <ContactForm context="New digital system" />
      </main>
      <Footer />
    </>
  );
}
