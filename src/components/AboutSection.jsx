import { Briefcase, Code, User, GraduationCap, FileText } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Hi, I'm Duy Phat — a Front-End Developer in the making.
            </h3>
            <p className="text-muted-foreground">
              I'm a final-year Software Engineering student at Ho Chi Minh City
              University of Technology and Education (HCMUTE), specializing in
              Software Engineering.
            </p>
            <p className="text-muted-foreground">
              Though I haven't yet worked in a corporate environment, I've
              cultivated a solid foundation in front-end development through
              academic coursework and personal side projects.
            </p>
            <p className="text-muted-foreground">
              I enjoy building clean, responsive, and accessible interfaces
              using tools like HTML, CSS, JavaScript, React, Tailwind CSS, and
              Vite. I'm committed to continuous learning and passionate about
              turning ideas into interactive experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center sm:justify-start">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/CV_DaoDuyPhat_Front-end_EN.pdf"
                className="flex items-center gap-2 px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                download
              >
                <FileText className="h-5 w-5" />
                Download CV
              </a>
            </div>
          </div>

          {/* Skill Cards Section */}
          <div className="grid grid-cols-1 gap-6">
            {/* Front-End Development */}
            <div className="gradient-border p-6 card-hover animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Front-End Development
                  </h4>
                  <p className="text-muted-foreground">
                    Strong grasp of HTML, CSS, JavaScript, and React. Skilled in
                    crafting responsive, modern interfaces using tools like
                    Tailwind CSS and Vite.
                  </p>
                </div>
              </div>
            </div>

            {/* UI/UX */}
            <div className="gradient-border p-6 card-hover animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Fundamentals</h4>
                  <p className="text-muted-foreground">
                    Understanding user-centered design, wireframing, and layout
                    structure. Applying design thinking to deliver better user
                    experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* Academic Experience */}
            <div className="gradient-border p-6 card-hover animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Academic Projects</h4>
                  <p className="text-muted-foreground">
                    Hands-on experience through team assignments and class
                    projects. Practicing Agile methodologies and version control
                    in collaborative settings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
