type ExecutiveSectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export default function ExecutiveSection({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: ExecutiveSectionProps) {
  return (
    <section id={id} className={`px-4 sm:px-6 lg:px-8 py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 md:mb-10">
          {eyebrow && (
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-[#b99d5b]">
              {eyebrow}
            </p>
          )}
          <h2 className="max-w-4xl font-serif text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-[#f6f1df]">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
