import { processSteps } from "@/lib/site-data";
import { SectionHeading } from "@/components/site/SectionHeading";

export function Process() {
  return (
    <section className="container-x py-20 lg:py-28">
      <SectionHeading
        eyebrow="Design to Move-In"
        title="Seven steps, one project manager"
        desc="A predictable path from first call to handover, with fixed checkpoints you sign off at every stage."
      />

      {/* Desktop horizontal timeline */}
      <div className="mt-16 hidden lg:block">
        <div className="relative">
          <div className="absolute top-6 right-0 left-0 h-px bg-border" />
          <ol className="relative grid grid-cols-7 gap-4">
            {processSteps.map((s, i) => (
              <li key={s.no} className="rise-in" style={{ animationDelay: `${i * 70}ms` }}>
                <span className="grid h-12 w-12 place-items-center rounded-full border border-border bg-card font-display text-base text-primary shadow-card transition-colors hover:border-primary">
                  {s.no}
                </span>
                <h3 className="mt-5 font-display text-lg leading-tight">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Mobile vertical timeline */}
      <ol className="mt-12 space-y-8 border-l border-border pl-8 lg:hidden">
        {processSteps.map((s) => (
          <li key={s.no} className="relative">
            <span className="absolute -left-[3.25rem] grid h-10 w-10 place-items-center rounded-full border border-border bg-card font-display text-sm text-primary">
              {s.no}
            </span>
            <h3 className="font-display text-lg">{s.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
