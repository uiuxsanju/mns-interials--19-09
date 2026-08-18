import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { images } from "@/lib/site-data";

const title = "Modular Kitchens — L, U, Parallel & Island | Aarambh Interiors";
const description =
  "Modular kitchens built with BWP-grade ply, moisture-sealed edges and soft-close hardware, backed by a 10-year warranty.";

export const Route = createFileRoute("/modular-kitchens")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Modular Kitchen"
      title="A kitchen planned around how you cook"
      desc="Work triangles, tall-unit storage and finishes that survive Indian cooking — engineered, not assembled."
      image={images.kitchen}
      intro={{
        heading: "Built for daily Indian cooking",
        body: "We start from your appliance list and cooking habits, then design the layout around reach, ventilation and clean-up. Every carcass is BWP-grade, every edge sealed, every hinge soft-close.",
        points: [
          "L, U, parallel, island and straight layouts",
          "Acrylic, laminate, PU and membrane shutter finishes",
          "Tall units, magic corners, pull-out baskets, cutlery organisers",
          "Quartz, granite and sintered stone countertops",
          "10-year warranty on modular components",
        ],
      }}
      types={[
        { title: "Graphite Handleless", desc: "Matte shutters with a routed groove profile.", image: images.kitchen },
        { title: "Warm Wood Island", desc: "Oak-toned island with breakfast overhang.", image: images.crockery },
        { title: "Compact Parallel", desc: "Two-run layout for narrow apartment kitchens.", image: images.spacesaving },
      ]}
      priceNote="Kitchens typically start at ₹1.85 lakh for a compact 2BHK layout."
    />
  ),
});
