import { ArrowRight } from "lucide-react";

const STATS = [
  { value: "6M", label: "Repositories" },
  { value: "75M", label: "Defects found" },
  { value: "15,000+", label: "Customers" },
];

export function Stats() {
  return (
    <section id="customers" className="mx-auto max-w-6xl px-4 pb-24">
      <div className="rounded-3xl border border-border bg-card/40 p-8 sm:p-12">
        <h2 className="font-title text-center text-3xl font-bold tracking-tight sm:text-4xl">
          The leader in AI code reviews
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-background/40 p-8 text-center"
            >
              <p className="font-title text-5xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span>Most installed AI App</span>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
          >
            Why teams prefer CodeRabbit
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
