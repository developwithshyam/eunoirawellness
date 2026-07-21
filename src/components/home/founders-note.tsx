import Image from "next/image";
import { foundersNoteContent } from "@/lib/content";

export function FoundersNote() {
  return (
    <section className="relative z-10 bg-white lg:bg-transparent">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 sm:px-8 md:py-20 lg:min-h-screen lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 xl:gap-24">
        <div className="relative max-w-xl lg:max-w-none">
          <p className="text-xs font-semibold tracking-[0.3em] text-sage uppercase md:text-sm">
            {foundersNoteContent.eyebrow}
          </p>

          <h2 className="gradient-text mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[3.25rem] lg:leading-tight">
            {foundersNoteContent.heading}
          </h2>

          <div className="relative mt-6 md:mt-10">
            <span
              className="font-highlight pointer-events-none absolute -top-4 -left-1 text-[4rem] leading-none text-lavender/35 select-none sm:text-[5rem] md:-top-8 md:text-[7rem]"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <blockquote className="relative pl-2 text-base leading-relaxed text-charcoal/75 md:text-xl md:leading-relaxed">
              {foundersNoteContent.quote}
            </blockquote>
          </div>

          <footer className="mt-8 hidden border-t border-lavender/30 pt-8 lg:block lg:mt-12">
            <p className="text-lg font-semibold text-charcoal">
              {foundersNoteContent.name}
            </p>
            <p className="mt-1 text-sm tracking-wide text-purple-mid/70 uppercase">
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
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-purple-deep/90 via-purple-deep/20 to-transparent lg:from-purple-deep/10 lg:to-transparent"
              aria-hidden="true"
            />
            <div className="absolute bottom-0 left-0 p-5 md:p-6 lg:hidden">
              <p className="text-lg font-semibold text-white">
                {foundersNoteContent.name}
              </p>
              <p className="mt-1 text-sm tracking-wide text-white/85 uppercase">
                {foundersNoteContent.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
