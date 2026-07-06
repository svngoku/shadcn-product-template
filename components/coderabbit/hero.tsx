import { ArrowRight, Github, Gitlab, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* subtle grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(1 0 0) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)",
        }}
      />
      {/* orange glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]"
      />

      <div className="mx-auto max-w-5xl px-4 pb-16 pt-20 text-center sm:pt-28">
        <h1 className="font-title text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          Cut code review time <br className="hidden sm:block" />
          {"& bugs in half, "}
          <span className="text-primary">instantly.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-muted-foreground">
          Reviews for AI-powered teams who move fast (but don&apos;t break
          things).
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href="#"
            className="group inline-flex items-center gap-3 rounded-xl bg-foreground px-7 py-4 text-lg font-semibold text-background transition-transform hover:-translate-y-0.5"
          >
            Try it for free
            <ArrowRight className="size-5 text-primary transition-transform group-hover:translate-x-1" />
          </a>

          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span>2-click install</span>
            <span className="flex items-center gap-2.5">
              <Gitlab className="size-4 text-[#fc6d26]" />
              <Github className="size-4" />
              <Mail className="size-4" />
            </span>
          </div>
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          Also available in{" "}
          <a href="#" className="text-foreground underline underline-offset-4">
            CLI
          </a>{" "}
          &{" "}
          <a href="#" className="text-foreground underline underline-offset-4">
            IDE
          </a>
        </p>
      </div>
    </section>
  );
}
