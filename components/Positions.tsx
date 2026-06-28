type Position = {
  title: string;
  organization?: string;
  period?: string;
  description?: string;
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
        {title && (
          <h2 className="inline-block border border-[#b99d5b]/30 bg-white/[0.04] px-6 py-3 font-serif text-2xl sm:text-3xl md:text-4xl text-[#f6f1df] mb-8">
            {title}
          </h2>
        )}

        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {positions.map((pos, idx) => (
            <div
              key={idx}
              className="bg-white/[0.035] p-5 rounded-lg shadow-sm border border-white/10 text-left"
            >
              <h3 className="font-bold text-[#f6f1df] text-lg sm:text-xl md:text-2xl">
                {pos.title}
              </h3>
              {pos.organization && (
                <p className="text-[#7ef0b0] text-sm sm:text-base mt-1">{pos.organization}</p>
              )}
              {pos.period && (
                <p className="text-[#b99d5b] text-sm sm:text-base mt-1">{pos.period}</p>
              )}
              {pos.description && (
                <p className="text-[#c9d2c4] text-sm sm:text-base mt-3 leading-7">
                  {pos.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
