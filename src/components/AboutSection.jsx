import { Briefcase, Code, User, GraduationCap, FileText } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";

export const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <Trans
            i18nKey="about.title"
            components={{ 1: <span className="text-primary" /> }}
          />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              {t("about.intro_heading")}
            </h3>
            <p className="text-muted-foreground">{t("about.para_1")}</p>
            <p className="text-muted-foreground">{t("about.para_2")}</p>
            <p className="text-muted-foreground">{t("about.para_3")}</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center sm:justify-start">
              <a href="#contact" className="cosmic-button">
                {t("about.get_in_touch")}
              </a>
              <a
                href="/CV_DaoDuyPhat_Front-end_EN.pdf"
                className="flex items-center gap-2 px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                download
              >
                <FileText className="h-5 w-5" />
                {t("about.download_cv")}
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
                    {t("about.frontend_title")}
                  </h4>
                  <p className="text-muted-foreground">
                    {t("about.frontend_desc")}
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
                  <h4 className="font-semibold text-lg">
                    {t("about.uiux_title")}
                  </h4>
                  <p className="text-muted-foreground">
                    {t("about.uiux_desc")}
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
                  <h4 className="font-semibold text-lg">
                    {t("about.learning_title")}
                  </h4>
                  <p className="text-muted-foreground">
                    {t("about.learning_desc")}
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
