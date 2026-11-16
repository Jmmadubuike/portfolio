import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ExecutionSignal from "@/components/ExecutionSignal";
import KwechiriFeature from "@/components/KwechiriFeature";
import ServicesPreview from "@/components/ServicesPreview";
import WorkCard from "@/components/WorkCard";
import { getGitHubSignal } from "@/data/github";
import { profile } from "@/data/profile";
import { kwechiri, leadership } from "@/data/site";
import { workProjects } from "@/data/work";

export const revalidate = 21600;

const featuredSlugs = ["school-grid", "vote-guard-africa", "sanjose-mart"];
const featured = workProjects.filter((project) => featuredSlugs.includes(project.slug));

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${profile.domain}/#person`,
  name: "Joseph Mmadubuike",
  alternateName: "J. Mmadubuike",
  jobTitle: profile.title,
  url: profile.domain,
  address: {
    "@type": "PostalAddress",
    addressRegion: profile.location.state,
    addressCountry: profile.location.countryCode,
  },
  image: `${profile.domain}/images/joseph/josephmmadubuike.jpeg`,
  sameAs: profile.socialLinks.map((link) => link.url),
  knowsAbout: [
    "Software Architecture",
    "Systems Engineering",
    "Digital Infrastructure",
    "African Technology",
    "Programming Languages",
    "Igbo-first programming",
    "BuzzBuntu",
    "Kwechiri",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Joseph Mmadubuike",
  url: profile.domain,
  description: "The technology portfolio and public engineering laboratory of Joseph Mmadubuike.",
};

const kwechiriJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  name: "Kwechiri",
  description: "An Igbo-first programming language published on npm and supported in VS Code.",
  softwareVersion: kwechiri.version,
  codeRepository: "https://github.com/Jmmadubuike/kwechiri-programming-language",
  url: "https://kwechiri.dev",
  author: { "@id": `${profile.domain}/#person` },
};

export default async function Page() {
  const githubSignal = await getGitHubSignal();

  return (
    <>
      <Navbar />
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personJsonLd, websiteJsonLd, kwechiriJsonLd]).replace(/</g, "\\u003c"),
          }}
        />

        <Hero />
        <ExecutionSignal signal={githubSignal} />
        <KwechiriFeature />

        <section id="systems" className="section">
          <div className="site-shell">
            <div className="grid gap-6 lg:grid-cols-[1fr_.8fr] lg:items-end">
              <div>
                <p className="section-label">WORK / SELECTED SYSTEMS</p>
                <h2 className="section-title mt-5">Production systems, with the full brief included.</h2>
              </div>
              <p className="lead max-w-xl lg:justify-self-end">
                Three representative platforms. Open any system brief for its operating context, capability scope and live product.
              </p>
            </div>

            <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {featured.map((project) => <WorkCard key={project.slug} project={project} compact />)}
            </div>

            <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-[#23384d] pt-5 sm:flex-row sm:items-center">
              <p className="text-sm text-[#708293]">The complete directory spans eight live systems across four operating families.</p>
              <Link href="/portfolio" className="text-link inline-flex min-h-11 items-center font-semibold">Explore the full portfolio <span className="ml-2" aria-hidden="true">→</span></Link>
            </div>
          </div>
        </section>

        <ServicesPreview />

        <section id="leadership" className="section border-y border-[#23384d] bg-[#0d1b2a]">
          <div className="site-shell grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="section-label">LEADERSHIP / EXECUTIVE + TECHNICAL</p>
              <h2 className="section-title mt-5">The decisions behind the delivery.</h2>
              <p className="lead mt-6 max-w-xl">
                I work at the boundary between enterprise strategy and hands-on system design, where technical decisions become operational outcomes.
              </p>
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

        <section id="about" className="section">
          <div className="site-shell grid gap-10 lg:grid-cols-[1fr_.72fr] lg:items-start">
            <div>
              <p className="section-label">ABOUT / OPERATING CONTEXT</p>
              <h2 className="section-title mt-5">Engineering with institutional reality in view.</h2>
              <div className="mt-7 max-w-3xl space-y-5 text-base leading-8 text-[#9eadba] sm:text-lg">
                <p>
                  Joseph Mmadubuike is a Nigerian technology leader and systems architect focused on practical digital infrastructure for African institutions, businesses and emerging markets.
                </p>
                <p>
                  His work starts with the operational problem behind the interface: how people coordinate, how institutions maintain visibility, where accountability breaks down and what a dependable system must make easier.
                </p>
                <p>
                  His practice spans product architecture, full-stack delivery, APIs, dashboards, access control and indigenous-language computing.
                </p>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="panel p-5">
                  <p className="section-label">FOCUS / SYSTEMS</p>
                  <p className="mt-4 leading-7 text-[#9eadba]">Architecture, implementation and operational clarity.</p>
                </div>
                <div className="panel p-5">
                  <p className="section-label">FOCUS / AFRICA</p>
                  <p className="mt-4 leading-7 text-[#9eadba]">Infrastructure designed around real emerging-market conditions.</p>
                </div>
              </div>
            </div>

            <div className="panel mx-auto w-full max-w-[26rem] overflow-hidden self-start lg:mx-0 lg:justify-self-end">
              <video
                className="aspect-[9/16] w-full bg-[#07111f] object-cover"
                controls
                playsInline
                preload="none"
                poster="/images/joseph/josephmmadubuike.jpeg"
                aria-label="Short portrait video featuring Joseph Mmadubuike"
              >
                <source src="/images/joseph/josephmmadubuike.mp4" type="video/mp4" />
                Your browser does not support embedded video. <a href="/images/joseph/josephmmadubuike.mp4">Download the video</a>.
              </video>
              <div className="flex items-center justify-between gap-4 border-t border-[#23384d] px-5 py-4">
                <p className="font-mono text-[.66rem] uppercase tracking-[.16em] text-[#9eadba]">JOSEPH / IN MOTION</p>
                <span className="h-2 w-2 rounded-full bg-[#16c7d9]" aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>

        <section className="section border-t border-[#23384d]">
          <div className="site-shell panel flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="section-label">CONTACT / NEXT STEP</p>
              <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">Start a focused conversation.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#9eadba]">Discuss a system, consultation or scope-based mentorship directly with Joseph.</p>
            </div>
            <Link href="/contact" className="btn btn-primary w-full lg:w-auto">Go to Contact <span aria-hidden="true">→</span></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
