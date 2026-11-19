import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkExplorer from "@/components/WorkExplorer";
import { profile } from "@/data/profile";
import { workProjects } from "@/data/work";

export const metadata: Metadata = {
  title: "Portfolio — Production Systems",
  description:
    "Selected production systems by Joseph Mmadubuike across transport, public infrastructure, civic technology, commerce, media, education and operations.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    type: "website",
    url: "/portfolio",
    title: "Portfolio — Production Systems | Joseph Mmadubuike",
    description:
      "Explore verified public systems across transport, public infrastructure, commerce, media, education and operational technology.",
  },
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Portfolio — Production Systems",
  description: "Selected production platforms built by Joseph Mmadubuike.",
  url: "https://www.josephmmadubuike.com/portfolio",
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
              <Link href="/" className="hover:text-white">Joseph Mmadubuike</Link> <span aria-hidden="true">/</span> Portfolio
            </p>
            <div className="mt-8 grid gap-7 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
              <div>
                <p className="section-label">PORTFOLIO / PRODUCTION SYSTEMS</p>
                <h1 className="display mt-5 max-w-[14ch]">Systems built for consequence.</h1>
                <p className="lead mt-6 max-w-2xl">
                  Public platforms spanning transport, institutional oversight, civic accountability, commerce, media, education and operational control.
                </p>
                <a
                  href={profile.cv.path}
                  download={profile.cv.filename}
                  className="btn btn-secondary mt-6 w-full sm:w-auto"
                >
                  Download CV <span aria-hidden="true">↓</span>
                </a>
              </div>
              <div className="grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-[#23384d] bg-[#23384d]">
                <div className="bg-[#0d1b2a] p-4 sm:p-5">
                  <p className="text-3xl font-semibold tracking-[-.05em] sm:text-4xl">{workProjects.length}</p>
                  <p className="mt-2 text-xs leading-5 text-[#9eadba]">Live systems</p>
                </div>
                <div className="bg-[#0d1b2a] p-4 sm:p-5">
                  <p className="text-3xl font-semibold tracking-[-.05em] sm:text-4xl">5</p>
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
            <Link href="/portfolio/kwechiri" className="group flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
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
                <p className="section-label">PORTFOLIO / CASE STUDIES</p>
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

        <section className="section border-t border-[#23384d]">
          <div className="site-shell panel flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="section-label">CONTACT / NEW SYSTEM</p>
              <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">Need something comparable built?</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#9eadba]">Bring the operating problem and the required outcome. The system starts there.</p>
            </div>
            <Link href="/contact" className="btn btn-primary w-full lg:w-auto">Discuss a project <span aria-hidden="true">→</span></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
