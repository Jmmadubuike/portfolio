import Link from "next/link";
import Image from "next/image";
import { kwechiri } from "@/data/site";

export default function KwechiriFeature() {
  return (
    <section id="kwechiri" className="section relative overflow-hidden border-b border-[#23384d] bg-[#0d1b2a]">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="site-shell relative grid gap-8 lg:grid-cols-[.78fr_1.22fr] lg:items-center lg:gap-12">
        <div>
          <div className="relative aspect-square w-full max-w-[22rem] overflow-hidden rounded-3xl border border-[#d7a84b]/35 bg-white shadow-2xl shadow-black/30">
            <Image src="/images/projects/live/kwechiri-logo.jpeg" alt="Kwechiri — programming in Igbo logo" fill sizes="(max-width:1024px) 80vw,28vw" className="object-contain" />
          </div>
          <p className="section-label mt-7 !text-[#d7a84b]">LANG / 001 · NPM + VS CODE</p>
          <h2 className="section-title mt-5">Kwechiri</h2>
          <p className="mt-4 text-xl font-semibold text-[#dbe5ec] sm:text-2xl">An Igbo-first programming language.</p>
        </div>
        <div>
          <p className="lead">{kwechiri.description}</p>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#9eadba]">{kwechiri.note}</p>
          <div className="mt-7 grid grid-cols-1 gap-2.5 min-[420px]:grid-cols-2 sm:gap-3">
            {kwechiri.layers.map((layer) => (
              <div key={layer.name} className="panel p-4">
                <p className="font-semibold">{layer.name}</p>
                <p className="mt-2 font-mono text-[.65rem] uppercase tracking-[.15em] text-[#d7a84b]">{layer.status}</p>
              </div>
            ))}
          </div>
          <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap">
            <Link href="/kwechiri" className="btn btn-primary w-full sm:w-auto">Explore Kwechiri <span aria-hidden="true">→</span></Link>
            <a href={kwechiri.links.npm} target="_blank" rel="noreferrer" className="btn btn-secondary w-full sm:w-auto">Install from npm <span aria-hidden="true">↗</span></a>
            <a href={kwechiri.links.vscode} target="_blank" rel="noreferrer" className="btn btn-secondary w-full sm:w-auto">VS Code extension <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
