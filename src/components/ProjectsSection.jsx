import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";

const projects = [
  {
    id: 1,
    image: "/Projects/PTTech-Ecommerce-Website.png",
    tags: ["React", "Java Spring Boot", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/DyyyPhatt/PTTech-Ecommerce-Website",
  },
  {
    id: 2,
    image: "/Projects/Personal-Portfolio.png",
    tags: ["React", "Vite", "TailwindCSS"],
    demoUrl: "https://personal-portfolio-five-swart-40.vercel.app/",
    githubUrl: "https://github.com/DyyyPhatt/Personal-Portfolio",
  },
];

export const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <Trans
            i18nKey="projects.title"
            components={{ 1: <span className="text-primary" /> }}
          />
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("projects.description")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={t(`projects.items.${index}.title`)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 5).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}

                  {project.tags.length > 5 && (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-muted text-foreground/60">
                      +{project.tags.length - 5}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-1 min-h-14 line-clamp-2 leading-snug text-primary">
                  {t(`projects.items.${index}.title`)}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-4">
                  {t(`projects.items.${index}.description`)}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/DyyyPhatt"
            rel="noopener noreferrer"
          >
            {t("projects.view_github")} <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
