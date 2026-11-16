import Link from "next/link";

export default function ServicesPreview() {
  return (
    <section id="services" className="section">
      <div className="site-shell">
        <div className="grid gap-6 lg:grid-cols-[1fr_.8fr] lg:items-end">
          <div>
            <p className="section-label">SERVICES / DIRECT ENGAGEMENT</p>
            <h2 className="section-title mt-5">Consultation and mentorship.</h2>
          </div>
          <p className="lead max-w-xl lg:justify-self-end">
            Focused technical guidance for decisions that affect architecture, delivery and long-term operating performance.
          </p>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-2">
          <article className="panel flex flex-col p-6 sm:p-8">
            <p className="section-label">CONSULTATION</p>
            <div className="mt-6 flex items-end justify-between gap-4">
              <h3 className="text-2xl font-semibold sm:text-3xl">Technical and strategic advice.</h3>
              <p className="shrink-0 text-right"><span className="text-3xl font-semibold tracking-[-.04em] sm:text-4xl">$100</span><span className="block text-xs text-[#9eadba]">per hour</span></p>
            </div>
            <p className="mt-5 flex-1 text-sm leading-7 text-[#9eadba]">
              Architecture reviews, platform strategy, product direction and senior technical decision support.
            </p>
            <Link href="/contact#contact" className="btn btn-primary mt-7 w-full sm:w-auto">Book a consultation <span aria-hidden="true">→</span></Link>
          </article>

          <article className="panel flex flex-col p-6 sm:p-8">
            <p className="section-label">MENTORSHIP</p>
            <div className="mt-6">
              <h3 className="text-2xl font-semibold sm:text-3xl">Scope-based guidance.</h3>
              <p className="mt-3 font-mono text-xs uppercase tracking-[.14em] text-[#d7a84b]">Pricing after discovery</p>
            </div>
            <p className="mt-5 flex-1 text-sm leading-7 text-[#9eadba]">
              Share your goals, experience and current challenge first. Mentorship scope and pricing are then agreed around what you actually need.
            </p>
            <Link href="/contact#contact" className="btn btn-secondary mt-7 w-full sm:w-auto">Discuss mentorship <span aria-hidden="true">→</span></Link>
          </article>
        </div>

        <div className="mt-5 text-right">
          <Link href="/contact#services" className="text-link inline-flex min-h-11 items-center font-semibold">Explore services and process <span className="ml-2" aria-hidden="true">→</span></Link>
        </div>
      </div>
    </section>
  );
}
