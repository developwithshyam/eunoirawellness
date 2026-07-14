import Link from "next/link";
import {
  Reveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { blogPosts } from "@/lib/content";

export function BlogPreview() {
  return (
    <section id="blog" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <SectionHeading
            title="Resources & Insights"
            subtitle="Expert articles to support your mental health journey"
          />
        </Reveal>

        <StaggerContainer className="mt-12 grid gap-8 md:grid-cols-3">
          {blogPosts.map((post) => (
            <StaggerItem key={post.title}>
              <Link
                href={post.href}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-sage/20 bg-white transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-deep/5"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-purple-mid/20 via-lavender/20 to-sage/20" />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-purple-deep transition-colors group-hover:text-purple-mid">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/70">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 text-sm font-semibold text-sage">
                    Read more →
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
