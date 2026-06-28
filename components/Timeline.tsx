type TimelineEvent = { year: string; title: string; description: string };
type TimelineProps = { events: TimelineEvent[]; className?: string };

export default function Timeline({ events, className = "" }: TimelineProps) {
  return (
    <section id="timeline" className={`py-12 sm:py-16 md:py-20 ${className}`}>
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-6xl text-center">
        <h2 className="inline-block border border-[#b99d5b]/30 bg-white/[0.04] px-6 py-3 font-serif text-2xl sm:text-3xl md:text-4xl text-[#f6f1df] mb-8">
          Leadership Timeline
        </h2>

        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <div key={idx} className="bg-white/[0.035] p-5 rounded-lg shadow-sm border border-white/10 text-left">
              <p className="text-[#b99d5b] font-semibold text-sm sm:text-base">{event.year}</p>
              <h3 className="font-bold text-[#f6f1df] text-lg sm:text-xl md:text-2xl mt-1">
                {event.title}
              </h3>
              <p className="text-[#c9d2c4] text-sm sm:text-base md:text-lg mt-2 leading-7">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
