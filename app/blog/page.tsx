import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BlogHero from "@/components/BlogHero";
import CTA from "@/components/CTA";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { blogPosts, formatBlogDate } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog - Faith Property Services",
  description:
    "Cleaning tips, industry insights, and news from Faith Property Services — Melbourne and Victoria's trusted commercial cleaning experts.",
};

export default function BlogPage() {
  return (
    <main>
      <BlogHero />

      <section className="relative bg-navy-deep/75 py-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-navy-deep via-navy-deep/70 via-30% to-transparent" />
        <div className="container-x relative">
          <RevealGroup className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <RevealItem key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white/[0.04] ring-1 ring-white/10 transition-shadow duration-300 hover:shadow-xl hover:shadow-cyan/5"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/50 via-navy-deep/10 to-navy-deep/25" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-cyan/80">
                      {formatBlogDate(post.date)} · {post.readTime}
                    </div>
                    <h2 className="mt-3 font-heading text-xl font-semibold text-white">{post.title}</h2>
                    <p className="mt-3 flex-1 font-body text-sm text-white/60">{post.excerpt}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 font-body text-sm font-semibold text-cyan">
                      Read More
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CTA light="cloud" />
    </main>
  );
}
