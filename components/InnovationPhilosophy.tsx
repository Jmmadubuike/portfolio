import ExecutiveSection from "@/components/ExecutiveSection";
import Image from "next/image";

type InnovationPhilosophyProps = {
  principles: string[];
  convergenceDomains: string[];
};

export default function InnovationPhilosophy({
  principles,
  convergenceDomains,
}: InnovationPhilosophyProps) {
  return (
    <ExecutiveSection
      id="philosophy"
      eyebrow="Innovation Philosophy"
      title="Technology as institutional infrastructure, not decoration."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6 md:p-8">
          <div className="space-y-5 text-base leading-8 text-[#c9d2c4] md:text-lg">
            <p>
              Joseph Mmadubuike approaches technology not merely as software
              development, but as institutional infrastructure.
            </p>
            <p>
              His work focuses on solving systemic operational problems through
              visibility systems, automation, analytics, accountability
              frameworks, and scalable platform ecosystems.
            </p>
          </div>

          <div className="mt-8 grid gap-3">
            {principles.map((principle) => (
              <div
                key={principle}
                className="border-l border-[#7ef0b0] bg-black/20 px-4 py-3 text-[#f6f1df]"
              >
                {principle}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-[#7ef0b0]/20 bg-[#0d1711] p-6 md:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#7ef0b0]">
            Convergence Interests
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {convergenceDomains.map((domain) => (
              <span
                key={domain}
                className="rounded-full border border-white/10 px-3 py-2 text-sm text-[#dbe5d7]"
              >
                {domain}
              </span>
            ))}
          </div>
          <div className="mt-8 overflow-hidden rounded-lg border border-white/10 bg-black/20">
            <Image
              src="/images/brand/system-architecture.png"
              alt="Abstract systems architecture grid"
              width={1600}
              height={1000}
              className="h-auto w-full opacity-90"
            />
          </div>
        </div>
      </div>
    </ExecutiveSection>
  );
}
