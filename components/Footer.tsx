import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="bg-[#050706] border-t border-white/10 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-serif text-xl text-[#f6f1df]">
          J. Mmadubuike
        </p>
        <p className="mt-2 text-[#c9d2c4] text-sm sm:text-base">
          &copy; {new Date().getFullYear()} Joseph Mmadubuike. All rights
          reserved.
        </p>
        <p className="mt-3 text-[#c9d2c4] text-sm sm:text-base">
          Contact:{" "}
          <a
            href={`mailto:${profile.contact.publicEmail}`}
            className="text-[#7ef0b0] hover:underline"
          >
            {profile.contact.publicEmail}
          </a>{" "}
          | {profile.contact.publicPhone}
        </p>
        <p className="mt-2 text-[#c9d2c4] text-sm sm:text-base">
          <a
            href={profile.contact.domain}
            className="text-[#d7c99b] hover:underline"
          >
            {profile.contact.domain.replace("https://", "")}
          </a>{" "}
          | {profile.contact.twitter}
        </p>
      </div>
    </footer>
  );
}
