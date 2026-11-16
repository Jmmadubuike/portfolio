import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ExecutionSignal from "@/components/ExecutionSignal";
import KwechiriFeature from "@/components/KwechiriFeature";
import OperatingPrinciples from "@/components/OperatingPrinciples";
import ContactForm from "@/components/ContactForm";
import WorkCard from "@/components/WorkCard";
import { getGitHubSignal } from "@/data/github";
import { profile } from "@/data/profile";
import { kwechiri, leadership } from "@/data/site";
import { workProjects } from "@/data/work";

export const revalidate = 21600;

const featuredSlugs = ["school-grid", "vote-guard-africa", "sanjose-mart"];
const featured = workProjects.filter((project) => featuredSlugs.includes(project.slug));
const additionalWork = workProjects.filter((project) => !featuredSlugs.includes(project.slug));

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

const buzzbuntuJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.buzzbuntu.com/#website",
  name: "BuzzBuntu",
  alternateName: "Africa's Pulse",
  url: "https://www.buzzbuntu.com",
  description: "BuzzBuntu is a live platform for discovering and connecting with African people, stories, culture, enterprise and opportunities.",
  inLanguage: "en",
  creator: { "@id": `${profile.domain}/#person` },
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
            __html: JSON.stringify([personJsonLd, websiteJsonLd, kwechiriJsonLd, buzzbuntuJsonLd]).replace(/</g, "\\u003c"),
          }}
        />

        <Hero />
        <ExecutionSignal signal={githubSignal} />

        <KwechiriFeature />

        <section id="systems" className="section">
          <div className="site-shell">
            <div className="grid gap-6 lg:grid-cols-[1fr_.8fr] lg:items-end">
              <div>
                <p className="section-label">SYSTEMS / SELECTED PRODUCTION WORK</p>
                <h2 className="section-title mt-5">Built for operators, institutions and scale.</h2>
              </div>
              <p className="lead max-w-xl lg:justify-self-end">
                Three representative platforms across public education, civic accountability and digital commerce, each running in production.
              </p>
            </div>

            <div className="mt-10 space-y-4 sm:mt-14 sm:space-y-6">
              {featured.map((project, index) => (
                <article key={project.slug} className="panel grid overflow-hidden lg:grid-cols-2">
                  <Link
                    href={`/work/${project.slug}`}
                    aria-label={`View the ${project.name} system brief`}
                    className={`group relative min-h-60 overflow-hidden border-b border-[#23384d] bg-[#0a1623] sm:min-h-72 lg:border-b-0 ${index % 2 ? "lg:order-2 lg:border-l" : "lg:border-r"}`}
                  >
                    <Image
                      src={project.image}
                      alt={`${project.name} live homepage`}
                      fill
                      sizes="(max-width:1024px) 100vw,50vw"
                      className="object-cover object-top transition duration-500 group-hover:scale-[1.015]"
                    />
                    <span className="absolute left-4 top-4 rounded-md border border-[#23384d] bg-[#07111f]/90 px-3 py-2 font-mono text-[.62rem] uppercase tracking-[.15em] text-[#16c7d9] sm:left-5 sm:top-5">
                      SYS / {String(index + 1).padStart(3, "0")} · LIVE
                    </span>
                    <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#16c7d9] text-xl text-[#07111f]" aria-hidden="true">
                      →
                    </span>
                  </Link>
                  <div className="flex flex-col justify-center p-5 sm:p-8 lg:p-10 xl:p-12">
                    <p className="section-label">{project.category}</p>
                    <h3 className="mt-4 text-3xl font-semibold tracking-[-.04em] sm:text-4xl">
                      <Link href={`/work/${project.slug}`} className="hover:text-white">{project.name}</Link>
                    </h3>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-[#9eadba] sm:text-base">{project.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.capabilities.slice(0, 3).map((item) => (
                        <span key={item} className="rounded-md border border-[#23384d] px-3 py-2 text-xs text-[#9eadba]">{item}</span>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
                      <Link href={`/work/${project.slug}`} className="inline-flex min-h-11 items-center text-sm font-semibold text-[#16c7d9] hover:text-white">
                        View system brief <span className="ml-2" aria-hidden="true">→</span>
                      </Link>
                      <a href={project.url} target="_blank" rel="noreferrer" className="text-link inline-flex min-h-11 items-center text-sm font-semibold">
                        Visit live <span className="ml-2" aria-hidden="true">↗</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-[#23384d] pt-5 sm:flex-row sm:items-center">
              <p className="text-sm text-[#708293]">Additional live products span events, media, learning, food commerce and operational accountability.</p>
              <Link href="/work" className="text-link inline-flex min-h-11 items-center font-semibold">Explore the complete work index <span className="ml-2" aria-hidden="true">→</span></Link>
            </div>
          </div>
        </section>

        <OperatingPrinciples />

        <section id="leadership" className="section">
          <div className="site-shell grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="section-label">LEADERSHIP / EXECUTIVE + TECHNICAL</p>
              <h2 className="section-title mt-5">The decisions behind the delivery.</h2>
              <p className="lead mt-6 max-w-xl">
                I work at the boundary between enterprise strategy and hands-on system design, where technical decisions become operational outcomes.
              </p>
              <div className="mt-7 grid gap-2 text-sm text-[#9eadba] sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <p className="panel p-3.5">Technology strategy</p>
                <p className="panel p-3.5">Platform delivery</p>
                <p className="panel p-3.5">Team operating systems</p>
                <p className="panel p-3.5">Institutional change</p>
              </div>
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

        <section id="evidence" className="section border-y border-[#23384d] bg-[#0d1b2a]">
          <div className="site-shell">
            <div className="grid gap-6 lg:grid-cols-[1fr_.8fr] lg:items-end">
              <div>
                <p className="section-label">MORE / PUBLIC PRODUCTS</p>
                <h2 className="section-title mt-5">The wider body of work.</h2>
              </div>
              <p className="lead max-w-xl lg:justify-self-end">
                Explore the remaining public systems across media, learning, food commerce, events and operational accountability.
              </p>
            </div>

            <div className="mt-9 grid gap-4 sm:mt-12 md:grid-cols-2 xl:grid-cols-3">
              {additionalWork.map((project) => <WorkCard key={project.slug} project={project} compact />)}
            </div>
            <div className="mt-6 border-t border-[#23384d] pt-5 text-right">
              <Link href="/work" className="text-link inline-flex min-h-11 items-center font-semibold">Open the Work index <span className="ml-2" aria-hidden="true">→</span></Link>
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
                  His practice spans product architecture, full-stack delivery, APIs, dashboards, access control and indigenous-language computing. Leadership experience keeps the work grounded in teams, incentives and long-term operability.
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

        <section id="philosophy" aria-labelledby="philosophy-statement" className="section relative overflow-hidden border-t border-[#23384d]">
          <div className="absolute inset-0 grid-bg" />
          <div className="site-shell relative">
            <p className="section-label">WORKING PRINCIPLE / 001</p>
            <h2 id="philosophy-statement" className="mt-7 max-w-6xl text-[clamp(2rem,5.7vw,5rem)] font-semibold leading-[1.04] tracking-[-.05em]">
              Software becomes more valuable when it stops being merely software <span className="text-[#9eadba]">and becomes infrastructure people depend on.</span>
            </h2>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/kwechiri" className="btn btn-secondary">See the flagship release <span aria-hidden="true">→</span></Link>
              <p className="font-mono text-[.66rem] uppercase tracking-[.15em] text-[#708293]">Systems / Language / Delivery</p>
            </div>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
