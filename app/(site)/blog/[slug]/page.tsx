import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/content/Primitives";
import { blogPosts, getPostBySlug, type BlogBlock } from "@/lib/blogData";
import { placeholderImg } from "@/lib/placeholder";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Tiberius Digital Blog`,
    description: post.teaser,
    alternates: { canonical: `https://www.tiberius.co.nz/blog/${post.slug}` },
  };
}

function Block({ block }: { block: BlogBlock }) {
  if (block.type === "h3") return <h3>{block.text}</h3>;
  if (block.type === "quote") return <blockquote>{block.text}</blockquote>;
  if (block.type === "ul")
    return (
      <ul>
        {block.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  return <p>{block.text}</p>;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <PageHero
        eyebrow={post.date}
        title={post.title}
        lede={post.teaser}
        ctaLabel="Book a Strategy Call"
        ctaSubject={`Blog — ${post.title}`}
      />

      <section className="content-section narrow" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <img
          className="blog-hero-img"
          src={placeholderImg(post.title, 1000, 460)}
          alt={post.title}
          width={1000}
          height={460}
          loading="lazy"
        />
      </section>

      <section className="content-section narrow">
        {post.blocks ? (
          <div className="prose">
            {post.blocks.map((block, i) => (
              <Block block={block} key={i} />
            ))}
          </div>
        ) : (
          <div className="prose">
            <p>
              This article is being migrated from our CMS — in the meantime, here&apos;s the short version: {post.teaser}
            </p>
          </div>
        )}

        {post.related && post.related.length > 0 && (
          <div style={{ marginTop: 48 }}>
            <h4 style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: 12 }}>
              Related Services
            </h4>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              {post.related.map((r) => (
                <Link key={r.href} href={r.href} style={{ color: "var(--brass)", textDecoration: "underline", textUnderlineOffset: 3 }}>
                  {r.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>

      <section className="content-section" style={{ paddingTop: 0 }}>
        <Link href="/blog" style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--ink-3)" }}>
          ← Back to all articles
        </Link>
      </section>
    </>
  );
}
