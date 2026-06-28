import ExecutiveSection from "@/components/ExecutiveSection";

type PlatformCategoriesProps = {
  areas: string[];
};

export default function PlatformCategories({ areas }: PlatformCategoriesProps) {
  return (
    <ExecutiveSection
      id="categories"
      eyebrow="Innovation Areas"
      title="Platform work mapped to sectors where African institutions and markets need stronger digital infrastructure."
    >
      <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
        {areas.map((area) => (
          <div
            key={area}
            className="rounded-lg border border-white/10 bg-white/[0.035] p-4 text-sm font-semibold text-[#dbe5d7]"
          >
            {area}
          </div>
        ))}
      </div>
    </ExecutiveSection>
  );
}
