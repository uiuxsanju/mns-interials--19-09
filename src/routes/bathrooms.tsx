import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { images } from "@/lib/site-data";

const title = "Bathroom Interior Design & Renovation | Aarambh Interiors";
const description =
  "Bathroom design with stone tiling, waterproofing, vanity units, brass fittings and warm, well-planned lighting.";

export const Route = createFileRoute("/bathrooms")({
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
      eyebrow="Bathrooms"
      title="Stone, brass and dependable waterproofing"
      desc="Everything behind the tile matters as much as the finish. We rebuild slope, waterproofing and plumbing before the first tile goes down."
      image={images.bathroom}
      intro={{
        heading: "Finished well, sealed better",
        body: "Bathroom work is the easiest place to cut corners, so we document waterproofing and slope testing with photos before tiling and share it with you.",
        points: [
          "Full waterproofing with ponding test records",
          "Vanity units in moisture-resistant materials",
          "Anti-skid floors and large-format wall tiling",
          "Concealed cisterns, rain showers, brass fittings",
          "Mirror lighting and exhaust planning",
        ],
      }}
      types={[
        { title: "Stone & Brass", desc: "Warm neutrals with aged brass fittings.", image: images.bathroom },
        { title: "Compact Guest Bath", desc: "Wall-hung fixtures to free up floor.", image: images.spacesaving },
        { title: "Spa Master Bath", desc: "Walk-in shower with niche lighting.", image: images.bathroom },
      ]}
      priceNote="Bathroom renovations typically start at ₹1.6 lakh per bathroom."
    />
  ),
});
