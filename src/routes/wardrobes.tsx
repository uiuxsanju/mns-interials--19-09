import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { images } from "@/lib/site-data";

const title = "Wardrobes — Sliding, Hinged & Walk-in | Aarambh Interiors";
const description =
  "Custom wardrobes with internal organisers, lofts, mirror panels and lighting, made to your ceiling height.";

export const Route = createFileRoute("/wardrobes")({
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
      eyebrow="Wardrobes"
      title="Storage that fits the wall and the wardrobe habit"
      desc="Floor-to-ceiling systems planned around what you actually own — sarees, suit-length hanging, luggage and linen."
      image={images.wardrobe}
      intro={{
        heading: "Designed to your ceiling, not to a catalogue",
        body: "We measure the exact opening, plan internal zoning for hanging, folded and seasonal storage, and finish the loft so nothing collects dust on top.",
        points: [
          "Sliding, hinged and walk-in configurations",
          "Mirror, laminate, lacquered glass and veneer shutters",
          "Pull-out trays, tie racks, drawer inserts and safes",
          "Profile lighting on sensors inside the wardrobe",
          "Anti-termite, moisture-resistant core material",
        ],
      }}
      types={[
        { title: "Mirrored Sliding", desc: "Space-saving in tight bedrooms.", image: images.wardrobe },
        { title: "Walk-in Dressing", desc: "Open modules with island drawers.", image: images.bedroom },
        { title: "Loft-integrated", desc: "Full-height with seasonal storage above.", image: images.spacesaving },
      ]}
      priceNote="Wardrobes typically start at ₹68,000 for a 6ft two-door unit."
    />
  ),
});
