import Image from "next/image";
import Link from "next/link";
import type { WorkProject } from "@/data/work";

type WorkCardProps = {
  project: WorkProject;
  compact?: boolean;
};

export default function WorkCard({ project, compact = false }: WorkCardProps) {
  return (
    <article className="panel panel-hover group flex h-full flex-col overflow-hidden transition duration-300">
      <Link href={`/work/${project.slug}`} className="block focus-visible:outline-offset-[-4px]">
        <div className={`relative overflow-hidden border-b border-[#23384d] bg-white ${compact ? "aspect-[16/10]" : "aspect-[16/9]"}`}>
          <Image
            src={project.image}
            alt={`${project.name} public platform preview`}
            fill
            sizes={compact ? "(max-width:768px) 100vw,33vw" : "(max-width:768px) 100vw,50vw"}
            className="object-cover object-top transition duration-500 group-hover:scale-[1.015]"
          />
          <span className="absolute left-4 top-4 rounded-md border border-white/10 bg-[#07111f]/92 px-2.5 py-1.5 font-mono text-[.6rem] uppercase tracking-[.14em] text-[#16c7d9]">
            Live production
          </span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="section-label">{project.category}</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-[-.035em]">
          <Link href={`/work/${project.slug}`} className="hover:text-white">{project.name}</Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-[#9eadba]">{project.description}</p>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[#23384d] pt-4">
          <Link href={`/work/${project.slug}`} className="inline-flex min-h-11 items-center text-sm font-semibold text-[#16c7d9] hover:text-white">
            View system brief <span className="ml-2" aria-hidden="true">→</span>
          </Link>
          <a href={project.url} target="_blank" rel="noreferrer" aria-label={`Open the live ${project.name} platform`} className="inline-flex min-h-11 items-center text-xs font-semibold text-[#9eadba] hover:text-white">
            Visit live <span className="ml-1.5" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}
