import { ClipboardList, Heart, User, Users } from "lucide-react";
import Link from "next/link";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/reveal";
import { audienceCards } from "@/lib/content";

const iconMap = {
  user: User,
  users: Users,
  heart: Heart,
  clipboard: ClipboardList,
};

export function AudienceCards() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audienceCards.map((card) => {
            const Icon = iconMap[card.icon];
            return (
              <StaggerItem key={card.title}>
                <Link
                  href={card.href}
                  className="group flex h-full flex-col items-center rounded-2xl border border-transparent bg-cream p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-sage/40 hover:shadow-lg hover:shadow-purple-deep/5"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-purple-mid/10 text-purple-mid transition-colors group-hover:bg-purple-mid group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-purple-deep">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm text-sage">{card.subtitle}</p>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
