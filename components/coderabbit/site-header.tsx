"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Agent", href: "#agent" },
  { label: "Enterprise", href: "#enterprise" },
  { label: "Customers", href: "#customers" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Announcement bar */}
      <div className="w-full border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2.5 text-center text-sm">
          <span className="text-muted-foreground">
            CodeRabbit is now in the Claude Marketplace!
          </span>
          <a
            href="#"
            className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
          >
            Learn more
            <ArrowRight className="size-3.5" />
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <a href="#" className="flex items-center gap-2">
            <Image
              src="/coderabbit-mark.png"
              alt="CodeRabbit logo"
              width={32}
              height={32}
              className="size-8"
            />
            <span className="font-title text-xl font-bold tracking-tight">
              CodeRabbit
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-foreground/80 transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <button className="inline-flex items-center gap-1 text-sm text-foreground/80 transition-colors hover:text-foreground">
              Resources
              <ChevronDown className="size-4" />
            </button>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <div className="mr-1 h-6 w-px bg-border" />
            <a
              href="#"
              className="text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              Log In
            </a>
            <Button
              variant="outline"
              className="border-primary/60 bg-transparent text-primary hover:bg-primary/10 hover:text-primary"
            >
              Get a free trial
            </Button>
          </div>

          <button
            className="inline-flex size-10 items-center justify-center rounded-md text-foreground lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-border/60 lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
              {[...NAV_LINKS, { label: "Resources", href: "#resources" }].map(
                (link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-foreground"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ),
              )}
              <div className="mt-3 flex flex-col gap-2">
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-muted"
                >
                  Log In
                </a>
                <Button
                  variant="outline"
                  className="border-primary/60 bg-transparent text-primary hover:bg-primary/10 hover:text-primary"
                >
                  Get a free trial
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
