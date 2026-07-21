import Image from "next/image";
import { foundersNoteContent } from "@/lib/content";

export function FoundersNote() {
  return (
    <section className="relative z-10 min-h-screen bg-transparent">
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-8 xl:gap-24">
        <div className="relative max-w-xl lg:max-w-none">
          <p className="text-xs font-semibold tracking-[0.3em] text-sage uppercase md:text-sm">
            {foundersNoteContent.eyebrow}
          </p>

          <h2 className="gradient-text mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-tight">
            {foundersNoteContent.heading}
          </h2>

          <div className="relative mt-8 md:mt-10">
            <span
              className="font-highlight pointer-events-none absolute -top-6 -left-1 text-[5rem] leading-none text-lavender/35 select-none sm:text-[6rem] md:-top-8 md:text-[7rem]"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <blockquote className="relative pl-2 text-lg leading-relaxed text-charcoal/75 md:text-xl md:leading-relaxed">
              {foundersNoteContent.quote}
            </blockquote>
          </div>

          <footer className="mt-10 border-t border-lavender/30 pt-8 md:mt-12">
            <p className="text-lg font-semibold text-charcoal">
              {foundersNoteContent.name}
            </p>
            <p className="mt-1 text-sm tracking-wide text-sage uppercase">
              {foundersNoteContent.role}
            </p>
          </footer>
        </div>

        <div className="mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-purple-deep/15 ring-1 ring-sage/10">
            <Image
              src={foundersNoteContent.image}
              alt={foundersNoteContent.name}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 28rem"
              className="object-cover object-top"
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-purple-deep/10 to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
