import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Biography from "@/components/Biography";
import SystemsPortfolio from "@/components/SystemsPortfolio";
import PlatformCategories from "@/components/PlatformCategories";
import LeadershipProfile from "@/components/LeadershipProfile";
import InnovationPhilosophy from "@/components/InnovationPhilosophy";
import TechnologyDomains from "@/components/TechnologyDomains";
import VisionQuote from "@/components/VisionQuote";
import ExecutiveCTA from "@/components/ExecutiveCTA";
import MediaArchive from "@/components/MediaArchive";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Metrics from "@/components/Metrics";

import { profile } from "@/data/profile";
import { positions } from "@/data/positions";
import { timelineEvents } from "@/data/timeline";
import { metrics } from "@/data/metrics";
import { mediaItems } from "@/data/media";
import { projects } from "@/data/projects";
import { technologies } from "@/data/technologies";
import { systems } from "@/data/systems";
import {
  biographyParagraphs,
  convergenceDomains,
  innovationAreas,
  philosophyPrinciples,
  technologyDomains,
  visionQuote,
} from "@/data/executive";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: profile.displayName,
  url: profile.domain,
  jobTitle: profile.title,
  worksFor: {
    "@type": "Organization",
    name: "Five Stars Digital Media",
  },
  alumniOf: {
    "@type": "Organization",
    name: "Diaspora Digital Media",
  },
  knowsAbout: technologyDomains,
};

export default function Page() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050706] text-[#f6f1df]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />

        <Hero
          name={profile.displayName}
          eyebrow="Nigerian Technology Executive / Systems Architect"
          title={profile.headline}
          summary={profile.summary}
          bgImage="/images/joseph/jtm.jpg"
          primaryCta={{
            label: "Explore Systems",
            href: "#systems",
          }}
          secondaryCta={{
            label: "Read Biography",
            href: "#biography",
          }}
          tertiaryCta={{
            label: "Start a Strategic Conversation",
            href: `mailto:${profile.contact.publicEmail}`,
          }}
        />

        <Biography paragraphs={biographyParagraphs} />
        <SystemsPortfolio systems={systems} />
        <PlatformCategories areas={innovationAreas} />
        <LeadershipProfile positions={positions} timelineEvents={timelineEvents} />
        <InnovationPhilosophy
          principles={philosophyPrinciples}
          convergenceDomains={convergenceDomains}
        />
        <Projects projects={projects} title="Major Platforms" />
        <TechnologyDomains domains={technologyDomains} />
        <Metrics metrics={metrics} title="Operational Evidence" />
        <MediaArchive title="Work Archive / Evidence" items={mediaItems} />
        <Technologies techs={technologies} title="Technical Execution Layer" />
        <VisionQuote quote={visionQuote} />
        <ExecutiveCTA />
      </main>

      <Footer />
    </>
  );
}
