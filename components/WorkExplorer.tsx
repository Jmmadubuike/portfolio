"use client";

import { useState } from "react";
import WorkCard from "@/components/WorkCard";
import { workFamilies, workProjects } from "@/data/work";

export default function WorkExplorer() {
  const [activeFamily, setActiveFamily] = useState<(typeof workFamilies)[number]>("All");
  const visibleProjects =
    activeFamily === "All" ? workProjects : workProjects.filter((project) => project.family === activeFamily);

  return (
    <div>
      <div className="flex flex-col gap-4 border-y border-[#23384d] py-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by operating area">
          {workFamilies.map((family) => (
            <button
              key={family}
              type="button"
              onClick={() => setActiveFamily(family)}
              aria-pressed={activeFamily === family}
              className={`min-h-10 rounded-full border px-3.5 py-2 text-xs font-semibold transition-colors ${
                activeFamily === family
                  ? "border-[#16c7d9] bg-[#16c7d9] text-[#07111f]"
                  : "border-[#23384d] bg-[#0d1b2a] text-[#9eadba] hover:border-[#16c7d9] hover:text-white"
              }`}
            >
              {family}
            </button>
          ))}
        </div>
        <p className="font-mono text-[.66rem] uppercase tracking-[.14em] text-[#708293]" aria-live="polite">
          {visibleProjects.length} {visibleProjects.length === 1 ? "system" : "systems"} shown
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2 xl:gap-5">
        {visibleProjects.map((project) => (
          <WorkCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
