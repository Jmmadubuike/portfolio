import type { GitHubSignal } from "@/data/github";
import { kwechiri } from "@/data/site";
import { workProjects } from "@/data/work";

type ExecutionSignalProps = {
  signal: GitHubSignal;
};

const numberFormat = new Intl.NumberFormat("en-NG");
const syncFormat = new Intl.DateTimeFormat("en-NG", {
  dateStyle: "medium",
  timeZone: "UTC",
});

export default function ExecutionSignal({ signal }: ExecutionSignalProps) {
  const proofs = [
    { value: numberFormat.format(signal.publicRepos), label: "Public repositories" },
    { value: `${workProjects.length}`, label: "Live production systems" },
    { value: kwechiri.version, label: "Kwechiri release" },
  ];

  return (
    <section id="activity" aria-labelledby="activity-title" className="border-y border-[#23384d] bg-[#091624]">
      <div className="site-shell py-5 sm:py-7 lg:py-8">
        <div className="panel grid overflow-hidden lg:grid-cols-[1.05fr_1.95fr]">
          <div className="border-b border-[#23384d] p-5 sm:p-6 lg:border-b-0 lg:border-r">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#16c7d9] opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#16c7d9]" />
              </span>
              <h2 id="activity-title" className="font-mono text-[.66rem] font-semibold uppercase tracking-[.18em] text-[#16c7d9]">Active engineering signal</h2>
            </div>
            <div className="mt-5 flex items-end gap-3">
              <p className="text-[clamp(3rem,12vw,5.25rem)] font-semibold leading-none tracking-[-.07em] text-[#f4f7fa]">{numberFormat.format(signal.commitCount)}</p>
              <p className="max-w-24 pb-1 text-xs leading-5 text-[#9eadba] sm:max-w-32">public commits authored</p>
            </div>
            <a href="https://github.com/Jmmadubuike" target="_blank" rel="noreferrer" className="text-link mt-5 inline-flex min-h-11 items-center text-sm font-semibold">
              Inspect GitHub activity <span className="ml-2" aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="grid sm:grid-cols-3">
            {proofs.map((proof, index) => (
              <div key={proof.label} className={`p-5 sm:p-6 ${index > 0 ? "border-t border-[#23384d] sm:border-l sm:border-t-0" : ""}`}>
                <p className="text-3xl font-semibold tracking-[-.05em] text-[#f4f7fa] sm:text-4xl">{proof.value}</p>
                <p className="mt-3 max-w-40 text-sm leading-6 text-[#9eadba]">{proof.label}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-3 text-right font-mono text-[.62rem] uppercase tracking-[.14em] text-[#708293]">
          {signal.live ? "GitHub sync" : "Last verified snapshot"} · {syncFormat.format(new Date(signal.lastSynced))}
        </p>
      </div>
    </section>
  );
}
