import {
  GitPullRequest,
  MessageSquareCode,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Workflow,
} from "lucide-react";

const FEATURES = [
  {
    icon: GitPullRequest,
    title: "Context-aware PR reviews",
    body: "CodeRabbit understands your entire codebase to deliver line-by-line feedback that actually makes sense.",
  },
  {
    icon: MessageSquareCode,
    title: "Committable suggestions",
    body: "Accept one-click fixes directly in your pull request without leaving GitHub or GitLab.",
  },
  {
    icon: ShieldCheck,
    title: "Catch bugs before merge",
    body: "Surface security issues, edge cases, and regressions the moment they’re introduced.",
  },
  {
    icon: Sparkles,
    title: "AI chat on every diff",
    body: "Ask questions about any change and get instant, repository-aware answers.",
  },
  {
    icon: TerminalSquare,
    title: "Works in CLI & IDE",
    body: "Run reviews locally in your terminal or right inside your editor of choice.",
  },
  {
    icon: Workflow,
    title: "2-click install",
    body: "Connect your repo and start getting reviews in under a minute. No config required.",
  },
];

export function Features() {
  return (
    <section id="agent" className="mx-auto max-w-6xl px-4 pb-24">
      <div className="max-w-2xl">
        <h2 className="font-title text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Code reviews were hard before. Now, they feel{" "}
          <span className="text-primary">impossible.</span>
        </h2>
        <p className="mt-4 text-pretty text-lg text-muted-foreground">
          Your team moves fast with AI. But fast shouldn&apos;t mean sloppy. We
          make sure every line still earns its merge.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature) => (
          <div
            key={feature.title}
            className="group rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/40"
          >
            <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
              <feature.icon className="size-5" />
            </span>
            <h3 className="mt-4 font-title text-lg font-semibold">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {feature.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
