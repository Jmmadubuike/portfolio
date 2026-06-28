import Image from "next/image";

type Project = {
  name: string;
  category?: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
};

type ProjectsProps = {
  projects: Project[];
  title?: string;
};

export default function Projects({ projects, title = "Projects" }: ProjectsProps) {
  if (!projects || projects.length === 0) return null;

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 bg-[#050706] px-4 sm:px-6 lg:px-8">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-[#b99d5b]">
          Major Platforms
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#f6f1df] mb-8">
          {title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white/[0.035] p-5 rounded-lg border border-white/10 shadow-sm hover:border-[#7ef0b0]/35 transition">
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.name}
                  width={600}
                  height={360}
                  className="rounded mb-3"
                />
              )}
              {project.category && (
                <p className="mb-2 inline-flex rounded-full border border-[#7ef0b0]/25 bg-[#7ef0b0]/10 px-3 py-1 text-xs font-semibold text-[#7ef0b0]">
                  {project.category}
                </p>
              )}
              <h3 className="text-[#f6f1df] font-bold text-lg sm:text-xl md:text-2xl">
                {project.name}
              </h3>
              <p className="text-[#c9d2c4] mt-2 leading-7">{project.description}</p>
              {project.technologies && (
                <p className="mt-3 text-[#d7c99b] font-semibold text-sm">
                  Tech: {project.technologies.join(", ")}
                </p>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-[#7ef0b0] hover:underline font-semibold"
                >
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
