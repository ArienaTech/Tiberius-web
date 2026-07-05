import type { Metadata } from "next";
import { PageHero } from "@/components/content/Primitives";

export const metadata: Metadata = {
  title: "Shop | Tiberius Digital",
  description: "Digital products and merchandise from Tiberius Digital — launching soon.",
  alternates: { canonical: "https://www.tiberius.co.nz/shop" },
};

export default function ShopPage() {
  return (
    <PageHero
      eyebrow="Coming soon"
      title="Shop"
      lede="Our shop is launching soon — digital products, playbooks and merchandise from the Tiberius team. In the meantime, get in touch and we'll let you know the moment it's live."
      ctaLabel="Notify Me"
      ctaSubject="Shop — notify me when it launches"
    />
  );
}
