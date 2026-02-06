type Metric = { value: string; label: string };
type MetricsProps = { metrics: Metric[]; title?: string; className?: string };

export default function Metrics({
  metrics,
  title = "Impact Metrics",
  className = "",
}: MetricsProps) {
  return (
    <section
      id="metrics"
      className={`py-12 sm:py-16 md:py-20 bg-[#f4f6f2] ${className}`}
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-6xl text-center">
        {/* Section title with bg and rounded corners */}
        {title && (
          <h2 className="inline-block bg-white px-6 py-3 rounded-lg border border-[#556b2f] font-serif text-2xl sm:text-3xl md:text-4xl text-[#2f4f2f] mb-8">
            {title}
          </h2>
        )}

        {/* Metrics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          {metrics.map((metric, idx) => (
            <div key={idx} className="text-center">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2f4f2f]">
                {metric.value}
              </p>
              <p className="mt-1 sm:mt-2 text-[#556b2f] text-sm sm:text-base md:text-lg">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
