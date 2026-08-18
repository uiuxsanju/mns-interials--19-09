import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { images } from "@/lib/site-data";

const title = "Home Office & Study Room Interiors | Aarambh Interiors";
const description =
  "Home office design with built-in desks, cable management, acoustic treatment and lighting planned for video calls.";

export const Route = createFileRoute("/home-office")({
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
      eyebrow="Home Office"
      title="A workspace that closes at 7pm"
      desc="Built-in desks, hidden cabling and lighting positioned for calls — designed to disappear into the room after hours."
      image={images.office}
      intro={{
        heading: "Focused corners in real apartments",
        body: "Most Indian homes don't have a spare room. We carve a proper workstation out of a bedroom corner, a balcony edge or a passage wall without making it look temporary.",
        points: [
          "Built-in desks sized to your monitor setup",
          "Concealed cable trays and power points",
          "Overhead and under-desk storage",
          "Glare-free task lighting for video calls",
          "Acoustic panelling and soft furnishings",
        ],
      }}
      types={[
        { title: "Built-in Study", desc: "Full-wall desk with shelving above.", image: images.office },
        { title: "Bedroom Nook", desc: "Compact desk integrated with wardrobe.", image: images.spacesaving },
        { title: "Shared Workspace", desc: "Two-person desk for working couples.", image: images.crockery },
      ]}
      priceNote="Home office units typically start at ₹52,000."
    />
  ),
});
