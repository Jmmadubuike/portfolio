type SectionProps = {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  id,
  title,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`px-4 sm:px-6 lg:px-8 mx-auto max-w-6xl ${className}`}
    >
      {title && (
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2f4f2f] mb-6 text-center">
          {title}
        </h2>
      )}
      <div className="text-center text-[#2f4f2f]">
        {children}
      </div>
    </section>
  );
}
