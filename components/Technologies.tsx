type TechnologiesProps = {
  techs: string[];
  title?: string;
};

export default function Technologies({ techs, title = "Technologies & Skills" }: TechnologiesProps) {
  if (!techs || techs.length === 0) return null;

  return (
    <section id="technologies" className="py-12 sm:py-16 md:py-20 bg-[#f4f6f2]">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="inline-block bg-white px-6 py-3 rounded-lg border border-[#556b2f] font-serif text-2xl sm:text-3xl md:text-4xl text-[#2f4f2f] mb-8">
          {title}
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {techs.map((tech, idx) => (
            <span key={idx} className="bg-[#6b8b3d] text-white px-3 py-1 rounded-full font-semibold text-sm sm:text-base">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
