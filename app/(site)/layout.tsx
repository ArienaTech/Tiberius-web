import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/sections/SiteFooter";
import UnlockScroll from "@/components/UnlockScroll";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <UnlockScroll />
      <SiteHeader />
      <main className="inner-main">{children}</main>
      <SiteFooter />
    </>
  );
}
