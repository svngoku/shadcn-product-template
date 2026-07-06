import Image from "next/image";
import { ArrowRight, Github, Gitlab, Mail } from "lucide-react";

const FOOTER_COLS = [
  {
    title: "Product",
    links: ["Agent", "Enterprise", "Pricing", "Changelog", "Integrations"],
  },
  {
    title: "Resources",
    links: ["Docs", "Blog", "Customers", "Community", "Status"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Contact", "Security", "Privacy"],
  },
];

export function CtaFooter() {
  return (
    <>
      {/* CTA */}
      <section id="pricing" className="mx-auto max-w-6xl px-4 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card/60 px-6 py-16 text-center sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]"
          />
          <h2 className="font-title text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Ship faster. Break nothing.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-lg text-muted-foreground">
            Join 15,000+ teams shipping better code with AI reviews on every
            pull request.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-4 text-lg font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Get a free trial
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-7 py-4 text-lg font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Book a demo
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div>
            <a href="#" className="flex items-center gap-2">
              <Image
                src="/coderabbit-mark.png"
                alt="CodeRabbit logo"
                width={28}
                height={28}
                className="size-7"
              />
              <span className="font-title text-lg font-bold tracking-tight">
                CodeRabbit
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              AI code reviews for teams who move fast but don&apos;t break
              things.
            </p>
            <div className="mt-5 flex items-center gap-4 text-muted-foreground">
              <a href="#" aria-label="GitHub" className="hover:text-foreground">
                <Github className="size-5" />
              </a>
              <a href="#" aria-label="GitLab" className="hover:text-foreground">
                <Gitlab className="size-5" />
              </a>
              <a href="#" aria-label="Email" className="hover:text-foreground">
                <Mail className="size-5" />
              </a>
            </div>
          </div>

          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-foreground">
                {col.title}
              </p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border/60">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:px-6">
            <p>© {new Date().getFullYear()} CodeRabbit. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-foreground">
                Terms
              </a>
              <a href="#" className="hover:text-foreground">
                Privacy
              </a>
              <a href="#" className="hover:text-foreground">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
