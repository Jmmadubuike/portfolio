"use client";

import { useState } from "react";

type HeroProps = {
  name: string;
  title: string;
  summary: string;
  bgImage?: string;
  className?: string;
};

export default function Hero({
  name,
  title,
  summary,
  bgImage = "/images/joseph/jtm.jpeg",
  className = "",
}: HeroProps) {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      className={`relative flex items-end md:items-center ${className} 
        h-[60vh] md:h-screen`} // 60% viewport height on mobile, full on md+
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay removed to show picture clearly */}

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-6 md:pb-0">
        <div className="max-w-4xl text-center lg:text-left">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-snug sm:leading-tight text-white">
            {name}
          </h1>

          <p className="mt-2 sm:mt-3 text-base sm:text-lg md:text-2xl text-[#6b8b3d] font-semibold">
            {title}
          </p>

          {/* Summary with Read More */}
          <p className="mt-3 sm:mt-4 text-white text-sm sm:text-base md:text-lg">
            {showMore ? summary : `${summary.slice(0, 120)}...`}
          </p>
          {summary.length > 120 && (
            <button
              className="mt-2 text-[#556b2f] underline font-semibold"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Read less" : "Read more"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
