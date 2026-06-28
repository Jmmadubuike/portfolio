"use client";

import { useState } from "react";

type HeroProps = {
  name: string;
  eyebrow?: string;
  title: string;
  summary: string;
  bgImage?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  tertiaryCta?: {
    label: string;
    href: string;
  };
  className?: string;
};

export default function Hero({
  name,
  eyebrow,
  title,
  summary,
  bgImage = "/images/joseph/jtm.jpg",
  primaryCta,
  secondaryCta,
  tertiaryCta,
  className = "",
}: HeroProps) {
  const [showMore, setShowMore] = useState(false);
  const preview = summary.split("\n")[0];

  return (
    <section
      className={`relative flex items-end overflow-hidden md:items-center ${className} 
        min-h-[88vh] md:min-h-screen`}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(5,7,6,0.98)_0%,rgba(5,7,6,0.84)_36%,rgba(5,7,6,0.48)_70%,rgba(5,7,6,0.2)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(126,240,176,0.18),transparent_28%),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:auto,72px_72px,72px_72px]" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 md:py-24">
        <div className="max-w-5xl text-center lg:text-left">
          {eyebrow && (
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-[#b99d5b]">
              {eyebrow}
            </p>
          )}
          <p className="text-sm font-semibold text-[#7ef0b0]">{name}</p>
          <h1 className="mt-4 max-w-5xl font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-[#f6f1df] mx-auto lg:mx-0">
            {title}
          </h1>

          <p className="mt-5 max-w-3xl text-[#c9d2c4] text-sm sm:text-base md:text-lg leading-7 md:leading-8 mx-auto lg:mx-0">
            {showMore ? summary : preview}
          </p>
          {summary !== preview && (
            <button
              className="mt-2 text-[#d8e8b6] underline font-semibold"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Read less" : "Read more"}
            </button>
          )}

          {(primaryCta || secondaryCta || tertiaryCta) && (
            <div className="mt-7 flex flex-col sm:flex-row sm:flex-wrap gap-3 justify-center lg:justify-start">
              {primaryCta && (
                <a
                  href={primaryCta.href}
                  className="inline-flex items-center justify-center rounded-md bg-[#7ef0b0] px-4 py-3 text-sm sm:px-5 sm:text-base font-semibold text-[#061008] shadow-sm hover:bg-[#a5ffc9] transition"
                >
                  {primaryCta.label}
                </a>
              )}
              {secondaryCta && (
                <a
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-md border border-white/20 px-4 py-3 text-sm sm:px-5 sm:text-base font-semibold text-[#f6f1df] hover:bg-white/10 transition"
                >
                  {secondaryCta.label}
                </a>
              )}
              {tertiaryCta && (
                <a
                  href={tertiaryCta.href}
                  className="inline-flex items-center justify-center rounded-md border border-[#b99d5b]/45 px-4 py-3 text-sm sm:px-5 sm:text-base font-semibold text-[#d7c99b] hover:bg-[#b99d5b]/10 transition"
                >
                  {tertiaryCta.label}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
