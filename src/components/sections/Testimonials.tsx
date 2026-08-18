import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/lib/site-data";
import { SectionHeading } from "@/components/site/SectionHeading";

export function Testimonials() {
  const track = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.85), behavior: "smooth" });
  };

  return (
    <section className="bg-sand py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Happy Homes"
          title="Customer stories from across India"
          action={
            <div className="flex gap-2">
              <button
                aria-label="Previous testimonials"
                onClick={() => scrollBy(-1)}
                className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card transition-colors hover:border-primary hover:text-primary"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                aria-label="Next testimonials"
                onClick={() => scrollBy(1)}
                className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card transition-colors hover:border-primary hover:text-primary"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          }
        />
        <div
          ref={track}
          className="scrollbar-none mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
        >
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="w-[85%] shrink-0 snap-start rounded-2xl border border-border bg-card p-7 shadow-card sm:w-[48%] lg:w-[32%]"
            >
              <div className="flex gap-1 text-primary">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 font-display text-lg leading-relaxed text-ink">“{t.quote}”</p>
              <div className="mt-7 flex items-center gap-3">
                <img
                  src={t.photo}
                  alt={t.name}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="h-12 w-12 shrink-0 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-ink">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.city}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
