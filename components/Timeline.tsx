type TimelineEvent = { year: string; title: string; description: string };
type TimelineProps = { events: TimelineEvent[]; className?: string };

export default function Timeline({ events, className = "" }: TimelineProps) {
  return (
    <section id="timeline" className={`py-12 sm:py-16 md:py-20 ${className}`}>
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-6xl text-center">
        {/* Section title with background and rounded corners */}
        <h2 className="inline-block bg-white px-6 py-3 rounded-lg border border-[#556b2f] font-serif text-2xl sm:text-3xl md:text-4xl text-[#2f4f2f] mb-8">
          Leadership Timeline
        </h2>

        {/* Timeline grid */}
        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <div key={idx} className="bg-[#f4f6f2] p-4 rounded-lg shadow-sm border border-[#556b2f]">
              <p className="text-[#556b2f] font-semibold text-sm sm:text-base">{event.year}</p>
              <h3 className="font-bold text-[#2f4f2f] text-lg sm:text-xl md:text-2xl mt-1">
                {event.title}
              </h3>
              <p className="text-[#556b2f] text-sm sm:text-base md:text-lg mt-1">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
