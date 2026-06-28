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
      className={`py-16 sm:py-20 md:py-24 bg-[#050706] ${className}`}
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-6xl text-center">
        {title && (
          <h2 className="inline-block border border-[#b99d5b]/30 bg-white/[0.04] px-6 py-3 font-serif text-2xl sm:text-3xl md:text-4xl text-[#f6f1df] mb-8">
            {title}
          </h2>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          {metrics.map((metric, idx) => (
            <div key={idx} className="text-center rounded-lg border border-white/10 bg-white/[0.035] p-5">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#7ef0b0]">
                {metric.value}
              </p>
              <p className="mt-2 text-[#c9d2c4] text-sm sm:text-base md:text-lg">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
