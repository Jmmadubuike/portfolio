import Link from "next/link";
import Image from "next/image";
import { kwechiri } from "@/data/site";

export default function KwechiriFeature() {
  return (
    <section id="kwechiri" className="section relative overflow-hidden border-b border-[#23384d] bg-[#0d1b2a]">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="site-shell relative grid gap-7 lg:grid-cols-[.65fr_1.35fr] lg:items-center lg:gap-12">
        <div>
          <div className="relative aspect-square w-full max-w-[17rem] overflow-hidden rounded-3xl border border-[#d7a84b]/35 bg-black shadow-2xl shadow-black/30">
            <Image src="/images/projects/kwechiri/kwechiri-logo-main.png" alt="Kwechiri — Igbo-first programming language logo" fill sizes="(max-width:1024px) 80vw,28vw" className="object-contain" />
          </div>
          <p className="section-label mt-6 !text-[#d7a84b]">LANG / 001 · NPM + VS CODE</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-.04em] sm:text-4xl">Kwechiri</h2>
          <p className="mt-2 text-lg font-semibold text-[#dbe5ec]">An Igbo-first programming language.</p>
        </div>
        <div>
          <p className="lead">{kwechiri.description}</p>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#9eadba]">{kwechiri.note}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {kwechiri.layers.slice(0, 3).map((layer) => (
              <span key={layer.name} className="rounded-full border border-[#23384d] px-3 py-2 text-xs text-[#9eadba]">
                {layer.name} <span className="text-[#d7a84b]">/ {layer.status}</span>
              </span>
            ))}
          </div>
          <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap">
            <Link href="/portfolio/kwechiri" className="btn btn-primary w-full sm:w-auto">Explore Kwechiri <span aria-hidden="true">→</span></Link>
            <a href={kwechiri.links.npm} target="_blank" rel="noreferrer" className="btn btn-secondary w-full sm:w-auto">Install from npm <span aria-hidden="true">↗</span></a>
            <a href={kwechiri.links.vscode} target="_blank" rel="noreferrer" className="btn btn-secondary w-full sm:w-auto">VS Code extension <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
