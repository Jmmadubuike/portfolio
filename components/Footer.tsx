import Link from "next/link";
import { profile } from "@/data/profile";
import Brand from "@/components/Brand";

const quickLinks=[
  { label: "Systems", href: "/#systems" },
  { label: "Kwechiri", href: "/kwechiri" },
  { label: "Leadership", href: "/#leadership" },
  { label: "About", href: "/#about" },
];

const headingClass="font-mono text-[.65rem] uppercase tracking-[.18em] text-[#16c7d9]";
const linkClass="transition-colors hover:text-white";

export default function Footer(){
  const year=new Date().getFullYear();
  const phoneHref=`tel:${profile.contact.publicPhone.replace(/[^+\d]/g,"")}`;
  const alternatePhoneHref=`tel:${profile.contact.alternatePhoneNigeria.replace(/[^+\d]/g,"")}`;
  return <footer className="border-t border-[#23384d] bg-[#050d18] py-12">
    <div className="site-shell">
      <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1.2fr] md:gap-12">
        <div>
          <Link href="/" className="text-xl font-bold"><Brand/></Link>
          <p className="mt-4 max-w-md leading-7 text-[#9eadba]">{profile.headline}</p>
          <p className="mt-5 text-sm font-semibold text-[#f4f7fa]">{profile.companyTitle}</p>
          <p className="mt-1 text-sm text-[#708293]">{profile.formerTitle}</p>
        </div>
        <nav aria-label="Footer navigation">
          <p className={headingClass}>Explore</p>
          <ul className="mt-5 space-y-3 text-sm text-[#9eadba]">
            {quickLinks.map(link=><li key={link.label}><Link href={link.href} className={linkClass}>{link.label}</Link></li>)}
          </ul>
        </nav>
        <div>
          <p className={headingClass}>Connect</p>
          <ul className="mt-5 space-y-3 text-sm text-[#9eadba]">
            <li><a href={`mailto:${profile.contact.publicEmail}`} className={linkClass}>{profile.contact.publicEmail}</a></li>
            <li><a href={phoneHref} className={linkClass}>{profile.contact.publicPhone}</a></li>
            <li><a href={alternatePhoneHref} className={linkClass}>{profile.contact.alternatePhoneNigeria}</a></li>
            <li className="text-[#708293]">Based in {profile.location.display}</li>
          </ul>
          <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-[#9eadba]">
            {profile.socialLinks.map(link=><li key={link.platform}><a href={link.url} target="_blank" rel="noreferrer" className={linkClass}>{link.label}</a></li>)}
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-[#23384d] pt-6 text-xs text-[#708293]">
        <p>© {year} Joseph Mmadubuike. All rights reserved.</p>
        <p className="mt-2 font-mono uppercase tracking-[.16em]">{profile.location.display} · {profile.technicalAlias}</p>
      </div>
    </div>
  </footer>;
}
