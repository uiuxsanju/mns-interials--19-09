import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { WhyUs } from "@/components/sections/WhyUs";
import { images } from "@/lib/site-data";

const title = "About Aarambh Interiors — Designers, Factory, Warranty";
const description =
  "Founded in 2012, Aarambh Interiors designs in-house, manufactures in its own facility and has delivered 2,400+ homes across India.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { value: "2,400+", label: "Homes delivered" },
  { value: "5", label: "Cities served" },
  { value: "68", label: "In-house designers" },
  { value: "10 yr", label: "Modular warranty" },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A design studio with its own factory"
        desc="We kept manufacturing in-house so quality, price and timelines stay in one pair of hands — ours."
        image={images.foyer}
      />

      <section className="container-x py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl leading-tight sm:text-4xl">Started in a Bandra workshop, 2012</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Aarambh began with two designers and a carpentry unit that kept missing deadlines set by other
              people. So we bought the machines. Today our 42,000 sq ft facility outside Mumbai produces every
              modular component we install, which is why our handover dates hold.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We work with a single price sheet published to every customer, an itemised quote before booking,
              and one project manager who stays with your home from the first drawing to the final snag list.
            </p>
          </div>
          <div className="card-media overflow-hidden rounded-2xl shadow-card">
            <img src={images.living} alt="Finished living room project" loading="lazy" width={1200} height={900} className="h-full w-full object-cover" />
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-card p-7">
              <dt className="font-display text-3xl text-primary">{s.value}</dt>
              <dd className="mt-2 text-sm text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="bg-sand py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="How we work"
            title="Three commitments we put in writing"
            desc="Fixed itemised pricing before booking. A contractual handover date. A ten-year warranty with a stocked spares programme."
          />
        </div>
      </section>

      <WhyUs />
      <CtaBanner />
    </>
  );
}
