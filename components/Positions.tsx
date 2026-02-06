type Position = {
  title: string;
  organization?: string;
  period?: string;
};

type PositionsProps = {
  positions: Position[];
  title?: string;
};

export default function Positions({ positions, title = "Positions & Appointments" }: PositionsProps) {
  if (!positions || positions.length === 0) return null;

  return (
    <section id="positions" className="py-12 sm:py-16 md:py-20">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-6xl text-center">
        {/* Section title with background and rounded corners */}
        {title && (
          <h2 className="inline-block bg-white px-6 py-3 rounded-lg border border-[#556b2f] font-serif text-2xl sm:text-3xl md:text-4xl text-[#2f4f2f] mb-8">
            {title}
          </h2>
        )}

        {/* Positions grid */}
        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {positions.map((pos, idx) => (
            <div
              key={idx}
              className="bg-[#f4f6f2] p-4 rounded-lg shadow-sm border border-[#556b2f]"
            >
              <h3 className="font-bold text-[#2f4f2f] text-lg sm:text-xl md:text-2xl">
                {pos.title}
              </h3>
              {pos.organization && (
                <p className="text-[#556b2f] text-sm sm:text-base mt-1">{pos.organization}</p>
              )}
              {pos.period && (
                <p className="text-[#556b2f] text-sm sm:text-base mt-1">{pos.period}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
