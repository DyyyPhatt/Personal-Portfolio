import { ArrowDown } from "lucide-react";
import avatar from "@/assets/DaoDuyPhat-Avatar.jpg";
import { useTranslation } from "react-i18next";

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-5xl mx-auto text-center z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Avatar */}
          <img
            src={avatar}
            alt="Duy Phat Dao"
            className="w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-primary shadow-lg opacity-0 animate-fade-in rounded-full"
          />

          {/* Text content */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in">
                {t("hero.greeting")}
              </span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}
                {t("hero.name_primary")}
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                {" "}
                {t("hero.name_secondary")}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl opacity-0 animate-fade-in-delay-3">
              {t("hero.description")}
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button">
                {t("hero.view_work")}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">
          {t("hero.scroll")}
        </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
