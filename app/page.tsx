import { SiteHeader } from "@/components/coderabbit/site-header";
import { Hero } from "@/components/coderabbit/hero";
import { ReviewDemo } from "@/components/coderabbit/review-demo";
import { Stats } from "@/components/coderabbit/stats";
import { LogoCloud } from "@/components/coderabbit/logo-cloud";
import { Features } from "@/components/coderabbit/features";
import { CtaFooter } from "@/components/coderabbit/cta-footer";

export default function Page() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <ReviewDemo />
        <Stats />
        <LogoCloud />
        <Features />
        <CtaFooter />
      </main>
    </div>
  );
}
