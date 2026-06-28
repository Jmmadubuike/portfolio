import { profile } from "@/data/profile";

function SocialIcon({ platform }: { platform: string }) {
  const common = "h-4 w-4";

  switch (platform) {
    case "instagram":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
          <circle cx="17" cy="7" r="1" fill="currentColor" />
        </svg>
      );
    case "linkedin":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M6.94 8.98H3.88V20h3.06V8.98ZM5.41 4a1.78 1.78 0 1 0 0 3.56A1.78 1.78 0 0 0 5.41 4ZM20.12 13.72c0-3.3-1.76-4.84-4.11-4.84a3.55 3.55 0 0 0-3.2 1.76h-.04V8.98H9.84V20h3.05v-5.45c0-1.44.27-2.84 2.06-2.84 1.77 0 1.79 1.65 1.79 2.93V20h3.05l.33-6.28Z" />
        </svg>
      );
    case "facebook":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M14.1 8.65V6.9c0-.84.57-1.04.97-1.04h2.46V2.02L14.15 2C10.39 2 9.53 4.82 9.53 6.63v2.02H7v3.96h2.53V22h4.57v-9.39h3.09l.41-3.96h-3.5Z" />
        </svg>
      );
    case "github":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.19-3.37-1.19-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.55 9.55 0 0 1 12 6c.85 0 1.7.11 2.5.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.86V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
        </svg>
      );
    case "x":
    default:
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.7 3h3.06l-6.69 7.65L22 21h-6.2l-4.85-6.34L5.4 21H2.34l7.15-8.18L2 3h6.36l4.38 5.8L17.7 3Zm-1.07 16.18h1.7L7.44 4.73H5.62l11.01 14.45Z" />
        </svg>
      );
  }
}

export default function Footer() {
  return (
    <footer className="bg-[#050706] border-t border-white/10 py-8 sm:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-serif text-lg text-[#f6f1df] sm:text-xl">
          J. Mmadubuike
        </p>
        <p className="mt-2 text-xs text-[#c9d2c4] sm:text-sm">
          &copy; {new Date().getFullYear()} Joseph Mmadubuike. All rights reserved.
        </p>

        <div className="mx-auto mt-4 flex max-w-4xl flex-col items-center justify-center gap-2 text-xs text-[#c9d2c4] sm:flex-row sm:flex-wrap sm:gap-x-4 sm:text-sm">
          <a
            href={`mailto:${profile.contact.publicEmail}`}
            className="break-all text-[#7ef0b0] hover:underline"
          >
            {profile.contact.publicEmail}
          </a>
          <span className="hidden text-white/25 sm:inline">/</span>
          <span className="whitespace-nowrap">{profile.contact.publicPhone}</span>
          <span className="hidden text-white/25 sm:inline">/</span>
          <a
            href={profile.contact.domain}
            className="break-all text-[#d7c99b] hover:underline"
          >
            {profile.contact.domain.replace("https://", "")}
          </a>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          {profile.socialLinks.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              title={social.label}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-[#dbe5d7] transition hover:border-[#7ef0b0]/40 hover:text-[#7ef0b0]"
            >
              <SocialIcon platform={social.platform} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
