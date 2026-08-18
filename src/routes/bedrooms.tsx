import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { images } from "@/lib/site-data";

const title = "Bedroom Interior Design & Storage | Aarambh Interiors";
const description =
  "Master, guest and kids bedroom interiors with headboard panelling, wardrobes, study units and soft layered lighting.";

export const Route = createFileRoute("/bedrooms")({
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
      eyebrow="Bedrooms"
      title="Quiet rooms with generous storage"
      desc="Headboard panelling, hidden storage and lighting that dims down to bedtime without a single harsh source."
      image={images.bedroom}
      intro={{
        heading: "Calm palettes, serious storage",
        body: "Bedrooms carry more storage than any other room in an Indian home. We plan wardrobe volume, bed-box storage and a loft strategy first, then design the room around a restful palette.",
        points: [
          "Upholstered and panelled headboard walls",
          "Hydraulic storage beds and bedside units",
          "Study or dresser nooks in tight corners",
          "Two-level lighting with bedside dimming",
          "Kids and guest bedroom specialisation",
        ],
      }}
      types={[
        { title: "Master Suite", desc: "Tufted headboard with wardrobe wall.", image: images.bedroom },
        { title: "Kids Bedroom", desc: "Bunk beds with drawer storage below.", image: images.kids },
        { title: "Compact Studio", desc: "Fold-away furniture for small homes.", image: images.spacesaving },
      ]}
      priceNote="Bedroom packages typically start at ₹1.1 lakh including a two-door wardrobe."
    />
  ),
});
