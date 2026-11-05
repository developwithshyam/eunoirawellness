import Image from "next/image";
import { therapists, therapistsSection } from "@/lib/content";

const TEAM_MEMBER_ALT = "Eunoira Wellness team member";

function TherapistCard({
  therapist,
  priority = false,
}: {
  therapist: (typeof therapists)[number];
  priority?: boolean;
}) {
  const alt =
    "name" in therapist && therapist.name
      ? therapist.name
      : TEAM_MEMBER_ALT;

  return (
    <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl">
      <Image
        src={therapist.image}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-purple-deep/90 via-purple-deep/30 to-transparent" />
      <div className="absolute bottom-0 left-0 p-5 md:p-6">
        {"name" in therapist && therapist.name ? (
          <h3 className="text-lg font-semibold text-white">{therapist.name}</h3>
        ) : null}
        {therapist.credentials.map((line, i) => (
          <p
            key={line}
            className={`mt-1 ${i === 0 ? "text-sm text-white/90" : "text-xs text-white/75"}`}
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

export function TherapistsSection() {
  return (
    <section
      id="therapists"
      className="relative z-10 -mt-16 bg-transparent pt-8 pb-20 md:-mt-24 md:pt-12 md:pb-28"
    >
      <div className="mx-auto mt-28 max-w-7xl px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <h2 className="text-3xl font-semibold text-purple-deep md:text-4xl lg:text-5xl">
            {therapistsSection.heading}
          </h2>
          <p className="text-lg leading-relaxed text-charcoal/70 lg:max-w-md lg:justify-self-end">
            {therapistsSection.subheading}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {therapists.map((therapist, index) => (
            <TherapistCard
              key={therapist.image}
              therapist={therapist}
              priority={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
