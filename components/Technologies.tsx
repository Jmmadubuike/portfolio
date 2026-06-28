type TechnologiesProps = {
  techs: string[];
  title?: string;
};

export default function Technologies({ techs, title = "Technologies & Skills" }: TechnologiesProps) {
  if (!techs || techs.length === 0) return null;

  return (
    <section id="technologies" className="py-16 sm:py-20 md:py-24 bg-[#050706]">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="inline-block border border-[#b99d5b]/30 bg-white/[0.04] px-6 py-3 font-serif text-2xl sm:text-3xl md:text-4xl text-[#f6f1df] mb-8">
          {title}
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {techs.map((tech, idx) => (
            <span key={idx} className="border border-white/10 bg-white/[0.04] text-[#dbe5d7] px-3 py-1 rounded-full font-semibold text-sm sm:text-base">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
