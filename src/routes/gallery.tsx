import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Gallery } from "@/components/sections/Gallery";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { images } from "@/lib/site-data";

const title = "Design Gallery — Real Indian Homes | Aarambh Interiors";
const description =
  "Browse finished kitchens, living rooms, bedrooms, wardrobes, bathrooms and home offices photographed after handover.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Design Gallery"
        title="Inspiration from homes we've delivered"
        desc="Filter by room, open any photo full screen and save the direction you like for your consultation."
        image={images.living}
      />
      <Gallery heading={false} />
      <CtaBanner />
    </>
  );
}
