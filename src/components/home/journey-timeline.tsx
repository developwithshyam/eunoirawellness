import { Sparkles } from "lucide-react";
import {
  Reveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { journeyContent } from "@/lib/content";

export function JourneyTimeline() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <SectionHeading
            title={journeyContent.heading}
            subtitle={journeyContent.body}
          />
        </Reveal>

        <StaggerContainer className="relative mt-16 grid gap-8 md:grid-cols-3 md:gap-6">
          <div className="absolute top-8 right-[16.67%] left-[16.67%] hidden h-0.5 md:block bg-gradient-to-r from-purple-mid via-lavender to-sage" />

          {journeyContent.stages.map((stage, index) => (
            <StaggerItem key={stage.label}>
              <div className="relative flex flex-col items-center text-center">
                <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-purple-deep/10">
                  {index === 2 ? (
                    <Sparkles className="h-7 w-7 text-sage" />
                  ) : (
                    <span className="text-xl font-semibold text-purple-deep">
                      {index + 1}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-purple-deep">
                  {stage.label}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-charcoal/70">
                  {stage.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
