import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Categories } from "@/components/sections/Categories";
import { EstimateSection } from "@/components/sections/EstimateSection";
import { Process } from "@/components/sections/Process";
import { Solutions } from "@/components/sections/Solutions";
import { WhyUs } from "@/components/sections/WhyUs";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Faq } from "@/components/sections/Faq";

const title = "Aarambh Interiors — Full Home Interiors, Kitchens & Wardrobes";
const description =
  "Premium full home interiors, modular kitchens and wardrobes with 3D design, fixed itemised pricing, a 46-day handover and a 10-year warranty.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Categories />
      <EstimateSection />
      <Process />
      <Solutions />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <CtaBanner />
      <Faq />
    </>
  );
}
