import Image from "next/image";
import ExecutiveSection from "@/components/ExecutiveSection";

type SystemItem = {
  name: string;
  category: string;
  description: string;
  capabilities: string[];
  positioning: string;
  website?: string;
  image?: string;
};

type SystemsPortfolioProps = {
  systems: SystemItem[];
};

export default function SystemsPortfolio({ systems }: SystemsPortfolioProps) {
  return (
    <ExecutiveSection
      id="systems"
      eyebrow="Systems Portfolio"
      title="Infrastructure-grade platforms across African education, governance, commerce, mobility, healthcare, media, and operations."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {systems.map((system, index) => (
          <article
            key={system.name}
            className="group rounded-lg border border-white/10 bg-[#111712]/90 p-5 shadow-2xl shadow-black/20 transition hover:border-[#7ef0b0]/45 md:p-6"
          >
            {system.image && (
              <div className="mb-5 aspect-[16/9] overflow-hidden rounded-md border border-white/10 bg-[#050706]">
                <Image
                  src={system.image}
                  alt={`${system.name} interface screenshot`}
                  width={960}
                  height={540}
                  className="h-full w-full object-cover"
                />
              </div>
            )}

            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="font-mono text-xs text-[#b99d5b]">
                  SYS-{String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[#f6f1df]">
                  {system.name}
                </h3>
              </div>
              <span className="max-w-[12rem] rounded-full border border-[#7ef0b0]/25 px-3 py-1 text-xs font-semibold leading-5 text-[#7ef0b0] sm:max-w-none">
                {system.category}
              </span>
            </div>

            <p className="mt-4 text-sm leading-7 text-[#c9d2c4]">
              {system.description}
            </p>

            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {system.capabilities.slice(0, 4).map((capability) => (
                <p
                  key={capability}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-[#dbe5d7]"
                >
                  {capability}
                </p>
              ))}
            </div>
            {system.capabilities.length > 4 && (
              <p className="mt-3 text-sm font-semibold text-[#7ef0b0]">
                + {system.capabilities.length - 4} additional capability areas
              </p>
            )}

            <p className="mt-5 border-l border-[#b99d5b] pl-4 text-sm leading-7 text-[#d7c99b]">
              {system.positioning}
            </p>

            {system.website && (
              <a
                href={system.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex text-sm font-semibold text-[#7ef0b0] hover:underline"
              >
                Visit platform
              </a>
            )}
          </article>
        ))}
      </div>
    </ExecutiveSection>
  );
}
