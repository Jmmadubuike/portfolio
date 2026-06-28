import ExecutiveSection from "@/components/ExecutiveSection";
import Positions from "@/components/Positions";
import Timeline from "@/components/Timeline";

type Position = {
  title: string;
  organization?: string;
  period?: string;
  description?: string;
};

type TimelineEvent = {
  year: string;
  title: string;
  description: string;
};

type LeadershipProfileProps = {
  positions: Position[];
  timelineEvents: TimelineEvent[];
};

export default function LeadershipProfile({
  positions,
  timelineEvents,
}: LeadershipProfileProps) {
  return (
    <ExecutiveSection
      id="leadership"
      eyebrow="Leadership and Career"
      title="From engineering leadership to enterprise innovation and platform-driven digital transformation."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6 md:p-8">
          <div className="space-y-5 text-base leading-8 text-[#c9d2c4]">
            <p>
              As Managing Director of Five Stars Digital Media, Joseph
              Mmadubuike leads the company&apos;s technology, media, product
              development, digital transformation, and innovation strategy.
            </p>
            <p>
              Under his leadership, the organization has expanded into software
              engineering, digital infrastructure, media technology, educational
              systems, enterprise solutions, branding, and digital commerce.
            </p>
            <p>
              Before joining Five Stars Digital Media, he served as Chief
              Technology Officer at Diaspora Digital Media, contributing to
              technological architecture and digital expansion initiatives
              focused on African communities locally and internationally.
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-[#b99d5b]/30 bg-[#17170f] p-6 md:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#b99d5b]">
            Strategic Evolution
          </p>
          <p className="mt-4 text-xl leading-8 text-[#f6f1df]">
            His transition from CTO to Managing Director represents a move from
            engineering leadership into enterprise innovation, ecosystem
            development, and infrastructure-grade platform strategy.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <Positions positions={positions} title="Current and Former Leadership" />
      </div>
      <div className="mt-10">
        <Timeline events={timelineEvents} />
      </div>
    </ExecutiveSection>
  );
}
