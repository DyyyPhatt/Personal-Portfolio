import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
  FaFigma,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiPostman,
  SiJirasoftware,
  SiSpring,
} from "react-icons/si";

const skills = [
  {
    name: "HTML/CSS",
    level: 85,
    category: "frontend",
    icon: <FaHtml5 className="text-orange-500" />,
  },
  {
    name: "JavaScript",
    level: 80,
    category: "frontend",
    icon: <FaJs className="text-yellow-400" />,
  },
  {
    name: "TypeScript",
    level: 80,
    category: "frontend",
    icon: <SiTypescript className="text-blue-600" />,
  },
  {
    name: "React",
    level: 80,
    category: "frontend",
    icon: <FaReact className="text-cyan-400" />,
  },

  {
    name: "Java Spring Boot",
    level: 85,
    category: "backend",
    icon: <SiSpring className="text-green-500" />,
  },
  {
    name: "Python",
    level: 70,
    category: "backend",
    icon: <FaPython className="text-blue-400" />,
  },
  {
    name: "MongoDB",
    level: 85,
    category: "backend",
    icon: <SiMongodb className="text-green-600" />,
  },
  {
    name: "MySQL",
    level: 80,
    category: "backend",
    icon: <FaDatabase className="text-blue-500" />,
  },

  {
    name: "Git/Github",
    level: 75,
    category: "tools",
    icon: <FaGitAlt className="text-red-500" />,
  },
  {
    name: "Figma",
    level: 70,
    category: "tools",
    icon: <FaFigma className="text-pink-500" />,
  },
  {
    name: "Postman",
    level: 80,
    category: "tools",
    icon: <SiPostman className="text-orange-500" />,
  },
  {
    name: "Jira",
    level: 70,
    category: "tools",
    icon: <SiJirasoftware className="text-blue-600" />,
  },
];

const categories = ["all", "frontend", "backend", "tools"];

const getLevelLabel = (level) => {
  if (level >= 85) return "Proficient";
  if (level >= 75) return "Intermediate";
  return "Basic";
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                {skill.icon}
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}% – {getLevelLabel(skill.level)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
