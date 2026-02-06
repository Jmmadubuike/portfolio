import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://jmmadubuike.eduace.org"),

  title: {
    default: "Joseph Mmadubuike",
    template: "%s | Joseph Mmadubuike",
  },

  description:
    "Joseph Mmadubuike is a tech leader, digital strategist, and media executive driving innovation, diaspora engagement, and sustainable digital transformation in Africa.",

  keywords: [
    "Joseph Mmadubuike",
    "JMmadubuike",
    "Diaspora Leader",
    "Tech Executive",
    "Digital Transformation",
    "Diaspora Engagement",
    "Media Leadership",
    "Nigeria Diaspora",
    "Innovation Africa",
  ],

  authors: [{ name: "Joseph Mmadubuike", url: "https://jmmadubuike.eduace.org" }],
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

  // Favicons / icons
  icons: {
    icon: "https://jmmadubuike.eduace.org/images/joseph/profile.jpeg",
    shortcut: "https://jmmadubuike.eduace.org/images/joseph/profile.jpeg",
    apple: "https://jmmadubuike.eduace.org/images/joseph/profile.jpeg",
  },

  // Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://jmmadubuike.eduace.org",
    title: "Joseph Mmadubuike",
    description:
      "Tech leader, digital strategist, and media executive advancing digital transformation and diaspora engagement in Africa.",
    siteName: "Joseph Mmadubuike",
    images: [
      {
        url: "https://jmmadubuike.eduace.org/images/joseph/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Joseph Mmadubuike",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Joseph Mmadubuike",
    description:
      "Tech leader, digital strategist, and media executive shaping Africa’s future through innovation and diaspora engagement.",
    images: ["https://jmmadubuike.eduace.org/images/joseph/profile.jpeg"],
  },

  alternates: {
    canonical: "https://jmmadubuike.eduace.org",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#f4f6f2] text-[#2f4f2f] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
