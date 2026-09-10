import ExecutiveSection from "@/components/ExecutiveSection";
import Image from "next/image";

type VisionQuoteProps = {
  quote: string;
};

export default function VisionQuote({ quote }: VisionQuoteProps) {
  return (
    <ExecutiveSection
      id="vision"
      eyebrow="Vision and Legacy"
      title="Building beyond digital trends."
    >
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-6">
          <p className="text-base leading-8 text-[#c9d2c4] md:text-lg">
            Through his leadership at Five Stars Digital Media and a growing
            portfolio of digital platforms, Joseph Mmadubuike is positioning
            himself among a new generation of African technology builders focused
            on long-term infrastructure creation.
          </p>
          <div className="overflow-hidden rounded-lg border border-white/10 bg-black/20">
            <Image
              src="/images/brand/african-digital-infrastructure.png"
              alt="Abstract African digital infrastructure network"
              width={1600}
              height={1000}
              className="h-auto w-full opacity-90"
            />
          </div>
        </div>
        <figure className="rounded-lg border border-[#b99d5b]/30 bg-[#17170f] p-6 md:p-8">
          <blockquote className="font-serif text-2xl leading-snug text-[#f6f1df] md:text-4xl">
            &ldquo;{quote}&rdquo;
          </blockquote>
          <figcaption className="mt-6 text-sm text-[#d7c99b]">
            Joseph Mmadubuike
            <br />
            Former GM, Five Stars Digital Media
          </figcaption>
        </figure>
      </div>
    </ExecutiveSection>
  );
}
