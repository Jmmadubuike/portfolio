import "./globals.css";
import type { Metadata } from "next";

const siteUrl = "https://www.josephmmadubuike.com";
const brandImage = `${siteUrl}/images/brand/og-cto-profile.png`;
const faviconImage = "/images/brand/favicon.png";
const shortTitle =
  "Joseph Mmadubuike | Technology Executive & Systems Architect";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: shortTitle,
    template: "%s | Joseph Mmadubuike",
  },

  description:
    "Joseph Mmadubuike is a Nigerian technology executive, digital strategist, systems architect, and Managing Director of Five Stars Digital Media, building scalable digital platforms across education, commerce, governance, media, logistics, healthcare, hospitality, transport, and entertainment technology.",

  keywords: [
    "Joseph Mmadubuike",
    "J. Mmadubuike",
    "jmmadubuike",
    "C!PHER",
    "Nigerian technology executive",
    "African technology builder",
    "systems architect",
    "digital strategist",
    "Civic Technology",
    "education technology",
    "digital infrastructure",
    "African innovation",
    "Five Stars Digital Media",
    "Diaspora Digital Media",
    "CTO",
    "VoteGuard",
    "SchoolGrid",
    "Eduace",
    "SanJoseMart",
    "EventsTribe",
  ],

  authors: [{ name: "Joseph Mmadubuike", url: siteUrl }],
  creator: "Joseph Mmadubuike",
  publisher: "Joseph Mmadubuike",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: faviconImage,
    shortcut: faviconImage,
    apple: faviconImage,
  },

  openGraph: {
    type: "profile",
    locale: "en_US",
    url: siteUrl,
    title: shortTitle,
    description:
      "Nigerian technology executive and systems architect building infrastructure-grade digital platforms across African education, commerce, governance, media, healthcare, transport, and entertainment technology.",
    siteName: "Joseph Mmadubuike",
    images: [
      {
        url: brandImage,
        width: 1200,
        height: 630,
        alt: "Joseph Mmadubuike - Technology Executive and Systems Architect",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: shortTitle,
    description:
      "Nigerian technology executive and systems architect building infrastructure-grade digital platforms across African education, commerce, governance, media, healthcare, transport, and entertainment technology.",
    creator: "@jmmadubuike",
    images: [brandImage],
  },

  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#050706] text-[#f6f1df] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
