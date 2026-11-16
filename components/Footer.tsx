import Link from "next/link";
import { profile } from "@/data/profile";
import { workProjects } from "@/data/work";
import Brand from "@/components/Brand";

const headingClass = "font-mono text-[.65rem] uppercase tracking-[.18em] text-[#16c7d9]";
const linkClass = "transition-colors hover:text-white";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#23384d] bg-[#050d18] py-12">
      <div className="site-shell">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-[1.1fr_.55fr_1fr_.9fr] xl:gap-12">
          <div>
            <Link href="/" className="text-xl font-bold"><Brand /></Link>
            <p className="mt-4 max-w-md leading-7 text-[#9eadba]">{profile.headline}</p>
            <p className="mt-5 text-sm font-semibold text-[#f4f7fa]">{profile.companyTitle}</p>
            <p className="mt-1 text-sm text-[#708293]">{profile.formerTitle}</p>
            <a href="https://github.com/Jmmadubuike" target="_blank" rel="noreferrer" className="mt-5 inline-flex min-h-11 items-center font-mono text-[.65rem] uppercase tracking-[.15em] text-[#d7a84b] hover:text-white">
              Public development activity <span className="ml-2" aria-hidden="true">↗</span>
            </a>
          </div>

          <nav aria-label="Main pages">
            <p className={headingClass}>Navigate</p>
            <ul className="mt-5 space-y-3 text-sm text-[#9eadba]">
              <li><Link href="/" className={linkClass}>Home</Link></li>
              <li><Link href="/about" className={linkClass}>About</Link></li>
              <li><Link href="/portfolio" className={linkClass}>Portfolio</Link></li>
              <li><Link href="/contact" className={linkClass}>Contact</Link></li>
            </ul>
          </nav>

          <nav aria-label="Portfolio projects">
            <p className={headingClass}>Portfolio</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-[#9eadba]">
              {workProjects.map((project) => (
                <li key={project.slug}>
                  <Link href={`/portfolio/${project.slug}`} className={linkClass}>{project.name}</Link>
                </li>
              ))}
              <li><Link href="/portfolio/kwechiri" className={linkClass}>Kwechiri</Link></li>
            </ul>
          </nav>

          <div>
            <p className={headingClass}>Contact</p>
            <ul className="mt-5 space-y-3 text-sm text-[#9eadba]">
              <li><a href={`mailto:${profile.contact.publicEmail}`} className={linkClass}>{profile.contact.publicEmail}</a></li>
              <li><Link href="/contact#services" className={linkClass}>Consultation</Link></li>
              <li><Link href="/contact#services" className={linkClass}>Mentorship</Link></li>
              <li className="text-[#708293]">Based in {profile.location.display}</li>
            </ul>
            <ul className="mt-5 space-y-2 text-sm text-[#9eadba]">
              {profile.socialLinks.map((link) => (
                <li key={link.platform}>
                  <a href={link.url} target="_blank" rel="noreferrer" className={`${linkClass} inline-flex min-h-8 items-center gap-2`}>
                    {link.label}
                    {"handle" in link && <span className="text-xs text-[#708293]">{link.handle}</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[#23384d] pt-6 text-xs text-[#708293]">
          <p>© {year} Joseph Mmadubuike. All rights reserved.</p>
          <p className="mt-2 font-mono uppercase tracking-[.16em]">{profile.location.display} · {profile.technicalAlias}</p>
        </div>
      </div>
    </footer>
  );
}
