import ExecutiveSection from "@/components/ExecutiveSection";

type TechnologyDomainsProps = {
  domains: string[];
};

export default function TechnologyDomains({ domains }: TechnologyDomainsProps) {
  return (
    <ExecutiveSection
      id="domains"
      eyebrow="Technology Domains"
      title="Strategic competence across platform architecture, operational intelligence, and emerging market infrastructure."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {domains.map((domain) => (
          <div
            key={domain}
            className="rounded-lg border border-white/10 bg-gradient-to-br from-white/[0.055] to-white/[0.02] p-4 text-[#f6f1df]"
          >
            <p className="font-semibold">{domain}</p>
          </div>
        ))}
      </div>
    </ExecutiveSection>
  );
}
