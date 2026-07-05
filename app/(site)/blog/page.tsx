import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/content/Primitives";
import SmartImg from "@/components/SmartImg";
import { blogPosts } from "@/lib/blogData";
import { placeholderImg, sizedImg } from "@/lib/placeholder";

export const metadata: Metadata = {
  title: "Marketing Blog | Insights & Strategies | Tiberius Digital",
  description: "Insights, strategies, and tips to help your business thrive in the digital landscape.",
  alternates: { canonical: "https://www.tiberius.co.nz/blog" },
};

export default function BlogIndexPage() {
  return (
    <>
      <PageHero
        title="Tiberius Blog"
        lede="Insights, strategies, and tips to help your business thrive in the digital landscape."
        ctaLabel="Book a Strategy Call"
        ctaSubject="Blog — book a strategy call"
      />

      <section className="content-section">
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <Link className="blog-card" href={`/blog/${post.slug}`} key={post.slug}>
              <SmartImg
                className="blog-thumb"
                src={post.image ? sizedImg(post.image, 800, 450) : placeholderImg(post.title, 400, 220)}
                fallback={placeholderImg(post.title, 400, 220)}
                alt={post.title}
                width={400}
                height={220}
                loading="lazy"
              />
              <span className="blog-date">{post.date}</span>
              <h3>{post.title}</h3>
              <p>{post.teaser}</p>
              <span className="blog-more">Read More →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
