import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Positions from "@/components/Positions";
import Timeline from "@/components/Timeline";
import Metrics from "@/components/Metrics";
import Honors from "@/components/Honors";
import MediaArchive from "@/components/MediaArchive";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";

import { profile } from "@/data/profile";
import { positions } from "@/data/positions";
import { timelineEvents } from "@/data/timeline";
import { metrics } from "@/data/metrics";
import { honors } from "@/data/honors";
import { mediaItems } from "@/data/media";
import { projects } from "@/data/projects";
import { technologies } from "@/data/technologies";

export default function Page() {
  return (
    <>
      <Navbar />

      <main className="bg-[#f4f6f2] text-slate-900">
        {/* HERO */}
        <Hero
          name="Joseph Mmadubuike"
          title={profile.title}
          summary={profile.summary}
          bgImage="/images/joseph/jtm.jpg"
        />

        {/* TECHNOLOGIES / SKILLS */}
        <Technologies techs={technologies} />

        {/* POSITIONS & APPOINTMENTS */}
        <Positions positions={positions} />

        {/* LEADERSHIP IMPACT */}
        <Section
          id="impact"
          title="Leadership Impact"
          className="mt-16 md:mt-28"
        >
          <p>
            Led the design and execution of large-scale digital and operational
            systems, translating vision into{" "}
            <span className="text-[#556b2f] font-semibold">
              measurable growth, efficiency, and adoption
            </span>{" "}
            across multiple initiatives.
          </p>

          <p className="mt-4">
            Built and coordinated platforms connecting technology, people, and
            process — with a focus on sustainability, governance, and long-term
            value creation.
          </p>

          <p className="mt-4">
            Consistently operated at the intersection of engineering and
            leadership, aligning stakeholders, infrastructure, and execution
            without compromising technical integrity.
          </p>
        </Section>

        {/* TIMELINE */}
        <Section id="timeline" className="mt-12">
          <Timeline events={timelineEvents} />
        </Section>

        {/* METRICS */}
        <Section id="metrics" className="mt-12">
          <Metrics metrics={metrics} />
        </Section>

        {/* PROJECTS */}
        <Section id="projects" className="mt-12">
          <Projects projects={projects} />
        </Section>

        {/* HONORS */}
        <Section id="honors" className="mt-12">
          <Honors honors={honors} />
        </Section>

        {/* MEDIA */}
        <Section id="media" className="mt-12">
          <MediaArchive
            title="Media & Publications"
            items={mediaItems}
          />
        </Section>
      </main>

      <Footer />
    </>
  );
}
