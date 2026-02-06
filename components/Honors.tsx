type Honor = { year: string; title: string; organization?: string };
type HonorsProps = { honors: Honor[]; className?: string };

export default function Honors({ honors, className = "" }: HonorsProps) {
  return (
    <section id="honors" className={`py-12 sm:py-16 md:py-20 ${className}`}>
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-6xl">
        
        {/* Section header */}
        <h2 className="inline-block bg-white px-6 py-3 rounded-lg border border-[#556b2f] font-serif text-2xl sm:text-3xl md:text-4xl text-[#2f4f2f] mb-8 text-center">
          Honors &amp; Awards
        </h2>

        {/* Honors grid */}
        <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {honors.map((honor, idx) => (
            <div
              key={idx}
              className="bg-[#f4f6f2] p-4 rounded-lg shadow-sm border border-[#556b2f]"
            >
              <p className="text-[#556b2f] font-semibold text-sm sm:text-base">
                {honor.year}
              </p>
              <h3 className="text-[#2f4f2f] font-bold text-lg sm:text-xl md:text-2xl mt-1">
                {honor.title}
              </h3>
              {honor.organization && (
                <p className="text-[#556b2f] text-sm sm:text-base md:text-lg mt-1">
                  {honor.organization}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
