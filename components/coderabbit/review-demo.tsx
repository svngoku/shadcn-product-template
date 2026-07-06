import { AlertTriangle, ChevronRight, Circle } from "lucide-react";

function RabbitAvatar() {
  return (
    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
      <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
        <path d="M7 2c.6 0 1 .9 1 2v4a4 4 0 0 1 8 0V4c0-1.1.4-2 1-2s1 .9 1 2v5.5A6.5 6.5 0 0 1 12.5 22h-1A6.5 6.5 0 0 1 6 9.5V4c0-1.1.4-2 1-2Z" />
      </svg>
    </span>
  );
}

function UserAvatar({ initials }: { initials: string }) {
  return (
    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-muted text-[11px] font-semibold text-muted-foreground">
      {initials}
    </span>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
      {children}
    </span>
  );
}

export function ReviewDemo() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-24">
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Left: summary panel */}
        <div className="rounded-2xl border border-border bg-card/60 p-5">
          <div className="mb-4 flex items-center gap-2">
            <RabbitAvatar />
            <span className="text-sm font-medium">coderabbitai</span>
            <Tag>bot</Tag>
            <span className="text-xs text-muted-foreground">1 min ago</span>
          </div>

          <p className="text-sm font-semibold text-foreground">
            Estimated code review effort
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            🚀 3 (Moderate) · ⏱ ~20 minutes
          </p>

          <div className="mt-5 space-y-2.5">
            {[
              "Nitpick comments (3)",
              "Review details",
              "Files selected for processing (11)",
              "Files with no reviewable changes (2)",
            ].map((row) => (
              <div
                key={row}
                className="flex items-center gap-2 rounded-lg border border-border/60 bg-background/40 px-3 py-2 text-sm text-foreground/90"
              >
                <ChevronRight className="size-4 text-muted-foreground" />
                {row}
              </div>
            ))}
          </div>
        </div>

        {/* Right: inline comment thread */}
        <div className="rounded-2xl border border-border bg-card/60 p-5">
          <div className="flex items-start gap-3">
            <RabbitAvatar />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">coderabbitai</span>
                <Tag>bot</Tag>
                <span className="text-xs text-muted-foreground">1 min ago</span>
              </div>

              <div className="mt-2 flex items-center gap-2 text-sm">
                <AlertTriangle className="size-4 text-primary" />
                <span className="font-semibold italic">Potential issue</span>
                <span className="text-muted-foreground">|</span>
                <Circle className="size-3 fill-yellow-500 text-yellow-500" />
                <span className="font-semibold italic">Minor</span>
              </div>

              <p className="mt-2 text-sm text-muted-foreground">
                A 404 might be more suitable for not found errors.
              </p>

              {/* diff */}
              <div className="mt-3 overflow-hidden rounded-lg border border-border font-mono text-xs">
                <div className="flex items-center gap-2 bg-destructive/15 px-3 py-1.5 text-destructive">
                  <span>-</span>
                  <span>status_code=400,</span>
                </div>
                <div className="flex items-center gap-2 bg-accent/15 px-3 py-1.5 text-accent">
                  <span>+</span>
                  <span>status_code=404,</span>
                </div>
              </div>

              <button className="mt-3 inline-flex items-center gap-1.5 text-sm text-foreground/80 hover:text-foreground">
                <ChevronRight className="size-4" />
                Committable suggestion
              </button>
            </div>
          </div>

          <div className="my-4 h-px bg-border" />

          <div className="flex items-start gap-3">
            <UserAvatar initials="JB" />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">jbrooks215</span>
                <Tag>author</Tag>
                <span className="text-xs text-muted-foreground">Now</span>
              </div>
              <p className="mt-1.5 text-sm text-foreground/90">
                Great catch! Just fixed it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
