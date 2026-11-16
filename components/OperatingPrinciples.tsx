import { buildDomains } from "@/data/site";

const principles = [
  {
    number: "01",
    title: "Architecture before interface.",
    description:
      "I start with roles, data, constraints and operating incentives so the interface reflects how the institution actually works.",
  },
  {
    number: "02",
    title: "Evidence over theatre.",
    description:
      "Production links, public source, releases and measured system behaviour matter more than presentation alone.",
  },
  {
    number: "03",
    title: "Build for the environment.",
    description:
      "African systems need to work across real connectivity, operational constraints, imperfect processes and institutional change.",
  },
];

export default function OperatingPrinciples() {
  return (
    <section id="approach" className="section border-y border-[#23384d] bg-[#0d1b2a]">
      <div className="site-shell">
        <div className="grid gap-7 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="section-label">APPROACH / OPERATING MODEL</p>
            <h2 className="section-title mt-5">Executive judgment. Engineering discipline.</h2>
          </div>
          <p className="lead max-w-2xl lg:justify-self-end">
            The technical decision is only useful when it improves how an organisation sees, decides, coordinates and executes.
          </p>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-3 md:gap-5">
          {principles.map((principle) => (
            <article key={principle.number} className="panel flex min-h-72 flex-col p-5 sm:p-7">
              <p className="font-mono text-xs tracking-[.16em] text-[#d7a84b]">{principle.number}</p>
              <h3 className="mt-12 max-w-[15ch] text-2xl font-semibold leading-tight tracking-[-.03em]">{principle.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#9eadba]">{principle.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 border-t border-[#23384d] pt-7">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="font-mono text-[.66rem] uppercase tracking-[.16em] text-[#d7a84b]">CAPABILITY MAP</p>
              <p className="mt-2 max-w-md text-sm leading-6 text-[#9eadba]">Domains where operating judgment and implementation meet.</p>
            </div>
            <div className="flex max-w-4xl flex-wrap gap-2">
              {buildDomains.map((domain) => (
                <span key={domain} className="rounded-full border border-[#23384d] bg-[#07111f]/45 px-3 py-2 text-xs text-[#dbe5ec]">{domain}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
