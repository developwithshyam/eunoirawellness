import { Accordion } from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqItems } from "@/lib/content";

export function Faq() {
  return (
    <section id="faq" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <Reveal>
          <SectionHeading title="Frequently Asked Questions" />
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-12">
            <Accordion items={faqItems} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
