import { Briefcase, BookOpen } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";

export const TimelineSection = () => {
  const { t } = useTranslation();
  const timelineData = t("timeline.items", { returnObjects: true });

  return (
    <section
      id="experience"
      className="py-24 px-4 bg-background min-h-screen transition-colors duration-300"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-extrabold mb-20 text-center text-foreground">
          Education & Experience
        </h2>

        <div className="relative">
          {/* Vertical timeline line center */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1 border-border h-full border-l"></div>

          {timelineData.map(
            ({ id, type, period, title, place, description }, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <div
                  key={id}
                  className={`mb-16 w-full md:w-1/2 relative ${
                    isLeft ? "pr-8 md:left-0" : "pl-8 md:left-1/2"
                  }`}
                >
                  {/* Dot & icon on timeline line */}
                  <span
                    className={`absolute top-5 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-primary-foreground bg-primary shadow-lg ${
                      isLeft ? "right-[-52px]" : "left-[-52px]"
                    }`}
                    style={{ boxShadow: "0 0 10px rgba(0,0,0,0.15)" }}
                  >
                    {type === "education" ? (
                      <BookOpen size={20} />
                    ) : (
                      <Briefcase size={20} />
                    )}
                  </span>

                  {/* Connector line from timeline dot to card */}
                  <div
                    className={`hidden md:block absolute top-5 w-7 h-[4px] bg-border ${
                      isLeft ? "right-[1px]" : "left-[-1px]"
                    }`}
                  ></div>

                  {/* Content card */}
                  <div
                    className={`bg-card p-6 rounded-xl shadow-xs border border-border transition-transform duration-300 ease-in-out cursor-default hover:shadow-2xl hover:scale-[1.03] ${
                      isLeft ? "text-right" : "text-left"
                    }`}
                  >
                    <time className="block mb-1 text-sm font-semibold text-foreground/70">
                      {period}
                    </time>
                    <h3 className="text-2xl font-bold mb-2 text-foreground">
                      {title}
                    </h3>
                    <p className="italic text-sm mb-3 text-foreground/60">
                      {place}
                    </p>
                    <p className="text-foreground">{description}</p>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};
