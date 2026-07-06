const COMPANIES = [
  "Clerk",
  "Life360",
  "Memberstack",
  "NVIDIA",
  "Dialpad",
  "ConsumerAffairs",
  "Ashby",
  "TaskRabbit",
];

export function LogoCloud() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-24 text-center">
      <h2 className="font-title text-2xl font-bold tracking-tight sm:text-3xl">
        Trusted by <span className="text-accent">15,000+</span> customers
      </h2>

      <div className="mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-4">
        {COMPANIES.map((name) => (
          <span
            key={name}
            className="font-title text-lg font-semibold text-muted-foreground/70 transition-colors hover:text-foreground"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
