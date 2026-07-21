import { MessageCircle, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { assessmentStrip } from "@/lib/content";
import { getWhatsAppUrl, siteConfig } from "@/lib/site-config";

export function AssessmentStrip() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <div className="gradient-brand relative overflow-hidden rounded-3xl px-6 py-10 md:px-12 md:py-14">
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-xl" />

            <div className="relative flex flex-col items-center gap-8 text-center text-white md:flex-row md:text-left">
              <div className="flex-1">
                <p className="text-sm font-semibold tracking-wider text-white/80 uppercase">
                  {assessmentStrip.label}
                </p>
                <h3 className="mt-2 text-2xl font-semibold md:text-3xl">
                  Always Available for You
                </h3>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  href={siteConfig.bookingUrl}
                  variant="secondary"
                  className="!bg-white !text-purple-deep hover:!bg-white/90"
                >
                  <Video className="h-4 w-4" />
                  {assessmentStrip.meetLabel}
                </Button>
                <Button
                  href={getWhatsAppUrl("assessment")}
                  external
                  variant="outline"
                  className="!border-white !text-white hover:!bg-white/10"
                >
                  <MessageCircle className="h-4 w-4" />
                  {assessmentStrip.whatsappLabel}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
