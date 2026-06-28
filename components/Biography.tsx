import ExecutiveSection from "@/components/ExecutiveSection";

type BiographyProps = {
  paragraphs: string[];
};

export default function Biography({ paragraphs }: BiographyProps) {
  return (
    <ExecutiveSection
      id="biography"
      eyebrow="Executive Biography"
      title="Nigerian technology leadership built around systems, execution, and institutional utility."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6 md:p-8">
          <p className="font-mono text-sm uppercase tracking-[0.22em] text-[#7ef0b0]">
            Operating Thesis
          </p>
          <p className="mt-5 text-2xl font-semibold leading-snug text-[#f6f1df]">
            Software is most valuable when it becomes infrastructure: visible,
            measurable, locally adaptable, and useful inside real institutions.
          </p>
        </div>

        <div className="space-y-5 text-base leading-8 text-[#c9d2c4] md:text-lg">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </ExecutiveSection>
  );
}
