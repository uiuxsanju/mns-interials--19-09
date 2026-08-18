import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { images } from "@/lib/site-data";

const title = "Bedroom Interior Design & Storage | Aarambh Interiors";
const description =
  "Master, guest and kids bedroom interiors with headboard panelling, wardrobes, study units and soft lighting.";

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
      desc="Headboard panelling, hidden storage and a lighting plan that dims down to bedtime without a single harsh source."
      image={images.bedroom}
      intro={{
        heading: "Calm palettes, serious storage"
        }
        // eslint-disable-next-line
        }
      types={[]}
      priceNote=""
    />
  ),
});
