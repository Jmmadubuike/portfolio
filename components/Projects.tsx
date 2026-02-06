type Project = {
  name: string;
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
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-[#f4f6f2]">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="inline-block bg-white px-6 py-3 rounded-lg border border-[#556b2f] font-serif text-2xl sm:text-3xl md:text-4xl text-[#2f4f2f] mb-8 text-center">
          {title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg border border-[#556b2f] shadow-sm hover:shadow-lg transition">
              {project.image && (
                <img src={project.image} alt={project.name} className="rounded mb-3" />
              )}
              <h3 className="text-[#2f4f2f] font-bold text-lg sm:text-xl md:text-2xl">
                {project.name}
              </h3>
              <p className="text-[#556b2f] mt-1">{project.description}</p>
              {project.technologies && (
                <p className="mt-2 text-[#6b8b3d] font-semibold text-sm">
                  Tech: {project.technologies.join(", ")}
                </p>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-[#556b2f] hover:underline font-semibold"
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
