import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkCard from "@/components/WorkCard";
import { getRelatedWork, getWorkProject, workProjects } from "@/data/work";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return workProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getWorkProject(slug);

  if (!project) return {};

  const title = `${project.name} — ${project.category}`;
  return {
    title,
    description: project.description,
    alternates: { canonical: `/portfolio/${project.slug}` },
    openGraph: {
      type: "website",
      url: `/portfolio/${project.slug}`,
      title: `${title} | Joseph Mmadubuike`,
      description: project.description,
      images: [{ url: project.image, alt: `${project.name} public platform preview` }],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getWorkProject(slug);

  if (!project) notFound();

  const related = getRelatedWork(project.slug);
  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: project.name,
    url: project.url,
    description: project.description,
    creator: {
      "@type": "Person",
      name: "Joseph Mmadubuike",
      url: "https://www.josephmmadubuike.com",
    },
  };

  return (
    <>
      <Navbar />
      <main id="main-content">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd).replace(/</g, "\\u003c") }} />

        <section className="relative overflow-hidden border-b border-[#23384d] pt-28">
          <div className="absolute inset-0 grid-bg opacity-55" />
          <div className="absolute -right-44 top-0 h-[30rem] w-[30rem] rounded-full bg-[#16c7d9]/10 blur-[120px]" />
          <div className="site-shell relative grid gap-9 py-10 sm:py-14 lg:grid-cols-[.95fr_1.05fr] lg:items-center lg:gap-14 lg:py-18">
            <div>
              <p className="font-mono text-[.66rem] uppercase tracking-[.16em] text-[#708293]">
                <Link href="/" className="hover:text-white">Joseph Mmadubuike</Link> <span aria-hidden="true">/</span>{" "}
                <Link href="/portfolio" className="hover:text-white">Portfolio</Link> <span aria-hidden="true">/</span> {project.name}
              </p>
              <p className="section-label mt-8">{project.category}</p>
              <h1 className="display mt-5 max-w-[12ch]">{project.name}</h1>
              <p className="lead mt-6 max-w-2xl">{project.description}</p>
              <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
                <a href={project.url} target="_blank" rel="noreferrer" className="btn btn-primary w-full sm:w-auto">
                  Visit live platform <span aria-hidden="true">↗</span>
                </a>
                <Link href="/contact" className="btn btn-secondary w-full sm:w-auto">Discuss similar work</Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-[#9eadba]">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#16c7d9]" aria-hidden="true" /> Live production
                </span>
                <span className="font-mono tracking-wide text-[#16c7d9]">{project.domain}</span>
              </div>
            </div>

            <div className="panel overflow-hidden">
              <div className="relative aspect-[16/11] border-b border-[#23384d] bg-white">
                <Image
                  src={project.image}
                  alt={`${project.name} public platform preview`}
                  fill
                  priority
                  sizes="(max-width:1024px) 100vw,50vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="grid grid-cols-3 gap-px bg-[#23384d]">
                <div className="bg-[#0d1b2a] p-4">
                  <p className="font-mono text-[.58rem] uppercase tracking-[.14em] text-[#708293]">Status</p>
                  <p className="mt-2 text-sm font-semibold">Live</p>
                </div>
                <div className="bg-[#0d1b2a] p-4">
                  <p className="font-mono text-[.58rem] uppercase tracking-[.14em] text-[#708293]">Surface</p>
                  <p className="mt-2 text-sm font-semibold">Web platform</p>
                </div>
                <div className="bg-[#0d1b2a] p-4">
                  <p className="font-mono text-[.58rem] uppercase tracking-[.14em] text-[#708293]">Category</p>
                  <p className="mt-2 text-sm font-semibold">{project.family}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="site-shell grid gap-9 lg:grid-cols-[.78fr_1.22fr] lg:gap-14">
            <div>
              <p className="section-label">BRIEF / OPERATING CONTEXT</p>
              <h2 className="section-title mt-5">The system behind the interface.</h2>
            </div>
            <div>
              <p className="text-xl leading-9 text-[#dbe5ec]">{project.context}</p>
              <p className="mt-5 text-base leading-8 text-[#9eadba]">
                This platform is part of a broader practice of translating institutional workflows into structured digital systems with clear access, operational visibility and a public-facing product surface.
              </p>
            </div>
          </div>
        </section>

        <section className="section border-y border-[#23384d] bg-[#0d1b2a]">
          <div className="site-shell">
            <div className="grid gap-6 lg:grid-cols-[1fr_.75fr] lg:items-end">
              <div>
                <p className="section-label">CAPABILITY / SYSTEM SCOPE</p>
                <h2 className="section-title mt-5">What the platform coordinates.</h2>
              </div>
              <p className="lead max-w-xl lg:justify-self-end">
                The operating areas represented by the public system and its surrounding workflows.
              </p>
            </div>
            <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {project.capabilities.map((capability, index) => (
                <article key={capability} className="panel p-5">
                  <p className="font-mono text-xs tracking-[.14em] text-[#d7a84b]">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-8 text-lg font-semibold">{capability}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="site-shell">
            <div className="panel grid gap-7 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="section-label">PUBLIC EVIDENCE</p>
                <h2 className="mt-4 text-2xl font-semibold tracking-[-.03em] sm:text-3xl">Review {project.name} in production.</h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#9eadba]">
                  The live product is the primary evidence: inspect the interface, public routes and operating model directly.
                </p>
              </div>
              <a href={project.url} target="_blank" rel="noreferrer" className="btn btn-primary w-full lg:w-auto">
                Open {project.domain} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="section border-y border-[#23384d] bg-[#0d1b2a]">
          <div className="site-shell">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="section-label">NEXT / RELATED SYSTEMS</p>
                <h2 className="section-title mt-5">More production work.</h2>
              </div>
              <Link href="/portfolio" className="text-link inline-flex min-h-11 items-center font-semibold">View full portfolio <span className="ml-2" aria-hidden="true">→</span></Link>
            </div>
            <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {related.map((item) => <WorkCard key={item.slug} project={item} compact />)}
            </div>
          </div>
        </section>

        <section className="section border-t border-[#23384d]">
          <div className="site-shell panel flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="section-label">NEXT / DIRECT CONTACT</p>
              <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">Discuss work in this category.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#9eadba]">Use the Contact page to discuss a comparable system, consultation or mentorship.</p>
            </div>
            <Link href="/contact" className="btn btn-primary w-full lg:w-auto">Contact Joseph <span aria-hidden="true">→</span></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
