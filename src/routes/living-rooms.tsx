import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { images } from "@/lib/site-data";

const title = "Living Room Interiors & TV Units | Aarambh Interiors";
const description =
  "Living room design with panelled media walls, false ceilings, layered lighting and furniture that suits Indian hosting.";

export const Route = createFileRoute("/living-rooms")({
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
      eyebrow="Living Room"
      title="The room your guests remember"
      desc="Media walls, seating plans, ceilings and lighting composed together so the space reads calm, not crowded."
      image={images.living}
      intro={{
        heading: "Planned for hosting and for Tuesday nights",
        body: "We map circulation first, then set seating, storage and lighting layers — ambient, task and accent — so the same room works for a full house and for one person with a book.",
        points: [
          "Panelled TV and media walls with concealed cabling",
          "False ceilings with cove and spot lighting",
          "Crockery units, bar units and display shelving",
          "Upholstery, rugs, curtains and art curation",
          "Foyer and pooja unit integration",
        ],
      }}
      types={[
        { title: "Slatted Media Wall", desc: "Warm wood battens with floating console.", image: images.tvunit },
        { title: "Cove-lit Ceiling", desc: "Recessed profile lighting across the span.", image: images.ceiling },
        { title: "Linen & Cane Lounge", desc: "Soft neutrals with natural textures.", image: images.living },
      ]}
      priceNote="Living room packages typically start at ₹1.4 lakh including the media wall."
    />
  ),
});
