import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { referContent } from "@/lib/content";

export function ReferCta() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-charcoal px-8 py-14 text-center md:px-16 md:py-20">
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-purple-mid/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-lavender/20 blur-3xl" />

            <div className="relative">
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                {referContent.heading}
              </h2>
              <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-white/70">
                {referContent.body}
              </p>
              <Button
                href="/contact?intent=general"
                className="mt-8 !bg-white !text-purple-deep hover:!bg-white/90"
              >
                {referContent.cta}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
