import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { Reveal } from "@/components/Reveal";
import { blogPosts, getBlogPost, formatBlogDate } from "@/lib/blog-data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} - Faith Property Services`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <main>
      <PageHero
        title={post.title}
        subtitle={`${formatBlogDate(post.date)} · ${post.readTime}`}
        image={post.image}
        backLink={{ label: "All Articles", href: "/blog" }}
      />

      <section className="relative bg-navy-deep/75 py-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-navy-deep via-navy-deep/70 via-30% to-transparent" />
        <Reveal className="container-x relative mx-auto max-w-3xl space-y-5">
          {post.body.map((p, i) => (
            <p key={i} className="font-body text-lg leading-relaxed text-white/70">
              {p}
            </p>
          ))}
        </Reveal>
      </section>

      <CTA />
    </main>
  );
}
