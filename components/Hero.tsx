import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";
import { kwechiri } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 grid-bg opacity-70" />
      <div className="absolute -left-48 top-0 h-[34rem] w-[34rem] rounded-full bg-[#16c7d9]/10 blur-[120px]" />
      <div className="absolute -right-52 top-[28rem] h-[30rem] w-[30rem] rounded-full bg-[#d7a84b]/[.07] blur-[120px]" />

      <div className="site-shell relative grid min-h-[calc(100svh-6rem)] items-center gap-9 py-10 sm:gap-12 sm:py-14 lg:grid-cols-[1.1fr_.9fr] lg:py-16">
        <div className="hero-enter">
          <div className="flex flex-wrap items-center gap-2.5">
            <p className="section-label">CTO / SYSTEMS / AFRICA</p>
            <span className="h-1 w-1 rounded-full bg-[#708293]" aria-hidden="true" />
            <p className="font-mono text-[.66rem] uppercase tracking-[.16em] text-[#9eadba]">Available for strategic work</p>
          </div>

          <h1 className="display mt-6 max-w-[18ch]">
            Technology Executive.<br />
            Systems Architect.<br />
            <span className="text-[#9eadba]">Building African</span><br />
            <span className="text-[#16c7d9]">Digital Infrastructure.</span>
          </h1>

          <p className="lead mt-7 max-w-2xl">
            I turn complex institutional problems into dependable platforms across education, governance, commerce, media and emerging markets.
          </p>
          <p className="mt-5 max-w-2xl border-l border-[#d7a84b]/50 pl-4 text-sm leading-7 text-[#dbe5ec] sm:text-base">
            Creator of <Link href="/kwechiri" className="font-semibold text-[#d7a84b] hover:text-white">Kwechiri</Link>, an Igbo-first programming language published on npm and available in VS Code.
          </p>

          <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
            <a href="#contact" className="btn btn-primary w-full sm:w-auto">Start a Conversation <span aria-hidden="true">↗</span></a>
            <Link href="/kwechiri" className="btn btn-secondary w-full sm:w-auto">Explore Kwechiri <span aria-hidden="true">→</span></Link>
            <a href="#systems" className="btn btn-secondary w-full sm:w-auto">See Production Systems</a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[34rem] lg:mx-0 lg:justify-self-end">
          <div className="absolute -inset-3 rounded-[2.4rem] border border-[#23384d] sm:-inset-5 sm:rounded-[3rem]" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.8rem] border border-[#23384d] bg-[#122235] sm:rounded-[2.4rem]">
            <Image
              src="/images/joseph/josephmmadubuike.jpeg"
              alt="Portrait of Joseph Mmadubuike"
              fill
              priority
              sizes="(max-width:1024px) 92vw,40vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,#07111f_0%,transparent_50%),linear-gradient(130deg,rgba(22,199,217,.13),transparent_48%)]" />
            <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/10 bg-[#07111f]/82 p-4 backdrop-blur-md sm:inset-x-5 sm:bottom-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-mono text-[.6rem] uppercase tracking-[.18em] text-[#d7a84b]">Flagship / Released</p>
                  <p className="mt-1.5 font-semibold">Kwechiri {kwechiri.version}</p>
                </div>
                <div className="flex gap-2 text-[.64rem] font-semibold uppercase tracking-wider text-[#9eadba]">
                  <a href={kwechiri.links.npm} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 px-2.5 py-1.5 hover:border-[#16c7d9] hover:text-white">npm</a>
                  <a href={kwechiri.links.vscode} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 px-2.5 py-1.5 hover:border-[#16c7d9] hover:text-white">VS Code</a>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-4 text-right font-mono text-[.62rem] uppercase tracking-[.17em] text-[#708293]">
            {profile.name} / {profile.location.short.toUpperCase()}
          </p>
        </div>
      </div>
    </section>
  );
}
