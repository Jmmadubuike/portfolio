import { profile } from "@/data/profile";

export default function ExecutiveCTA() {
  return (
    <section id="contact" className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="mx-auto max-w-7xl rounded-lg border border-[#7ef0b0]/25 bg-[#0f1712] p-6 shadow-2xl shadow-black/30 md:p-10">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#b99d5b]">
          Strategic Conversation
        </p>
        <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_0.45fr] lg:items-end">
          <div>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-[#f6f1df] md:text-5xl">
              Need infrastructure-grade technology for an institution, market,
              or operating system?
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[#c9d2c4] md:text-lg">
              Start a serious conversation around education systems, commerce
              infrastructure, governance platforms, media technology,
              operational intelligence, or African digital transformation.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${profile.contact.publicEmail}`}
              className="inline-flex items-center justify-center rounded-md bg-[#7ef0b0] px-5 py-3 text-sm font-semibold text-[#061008] hover:bg-[#a5ffc9] transition"
            >
              Start a Strategic Conversation
            </a>
            <a
              href="#systems"
              className="inline-flex items-center justify-center rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-[#f6f1df] hover:bg-white/[0.06] transition"
            >
              Explore Systems
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
