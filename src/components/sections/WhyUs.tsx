import { Gem, HardHat, LifeBuoy, Timer } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";

const features = [
  {
    icon: Gem,
    title: "Premium Quality Materials",
    desc: "BWP-grade ply, moisture-sealed edges and hardware from brands with a decade-long warranty.",
  },
  {
    icon: HardHat,
    title: "Professional Designers",
    desc: "In-house designers with 8+ years of residential work, not freelancers assigned by rotation.",
  },
  {
    icon: Timer,
    title: "On-Time Delivery",
    desc: "A contractual handover date, with a penalty clause on us if the project slips.",
  },
  {
    icon: LifeBuoy,
    title: "Post-Installation Support",
    desc: "A dedicated service line, free first-year visits and spares stocked for a decade.",
  },
];

export function WhyUs() {
  return (
    <section className="container-x py-20 lg:py-28">
      <SectionHeading eyebrow="Why Choose Us" title="Built on four non-negotiables" align="center" />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <article
            key={f.title}
            className="group rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift"
          >
            <span className="grid h-14 w-14 place-items-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <f.icon className="h-6 w-6" />
            </span>
            <h3 className="mt-6 font-display text-xl leading-snug">{f.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
