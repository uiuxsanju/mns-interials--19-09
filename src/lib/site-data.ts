import kitchen from "@/assets/kitchen.jpg";
import living from "@/assets/living.jpg";
import bedroom from "@/assets/bedroom.jpg";
import wardrobe from "@/assets/wardrobe.jpg";
import bathroom from "@/assets/bathroom.jpg";
import office from "@/assets/office.jpg";
import pooja from "@/assets/pooja.jpg";
import tvunit from "@/assets/tvunit.jpg";
import ceiling from "@/assets/ceiling.jpg";
import spacesaving from "@/assets/spacesaving.jpg";
import foyer from "@/assets/foyer.jpg";
import crockery from "@/assets/crockery.jpg";
import kids from "@/assets/kids.jpg";
import hero from "@/assets/hero-living.jpg";
import person1 from "@/assets/person1.jpg";
import person2 from "@/assets/person2.jpg";
import person3 from "@/assets/person3.jpg";
import person4 from "@/assets/person4.jpg";

export const images = {
  hero,
  kitchen,
  living,
  bedroom,
  wardrobe,
  bathroom,
  office,
  pooja,
  tvunit,
  ceiling,
  spacesaving,
  foyer,
  crockery,
  kids,
};

export const brand = {
  name: "Aarambh Interiors",
  tagline: "Designed for the way India lives",
  phone: "+91 98200 41200",
  phoneHref: "tel:+919820041200",
  whatsapp: "https://wa.me/919820041200?text=Hi%20Aarambh%20Interiors%2C%20I%27d%20like%20a%20free%20estimate",
  email: "hello@aarambhinteriors.in",
  address: "3rd Floor, Vireta House, 14 Linking Road, Bandra West, Mumbai 400050",
};

export type Category = {
  title: string;
  desc: string;
  image: string;
  to?: string;
};

export const categories: Category[] = [
  { title: "Modular Kitchens", desc: "Ergonomic layouts with lifetime hardware.", image: kitchen, to: "/modular-kitchens" },
  { title: "Living Rooms", desc: "Warm, editorial spaces built to host.", image: living, to: "/living-rooms" },
  { title: "Bedrooms", desc: "Quiet palettes and considered storage.", image: bedroom, to: "/bedrooms" },
  { title: "Wardrobes", desc: "Sliding, hinged and walk-in systems.", image: wardrobe, to: "/wardrobes" },
  { title: "Bathrooms", desc: "Stone, brass and soft-lit calm.", image: bathroom, to: "/bathrooms" },
  { title: "Home Office", desc: "Focused corners that disappear after work.", image: office, to: "/home-office" },
  { title: "Pooja Rooms", desc: "Crafted mandirs with layered lighting.", image: pooja, to: "/gallery" },
  { title: "TV Units", desc: "Panelled walls with hidden storage.", image: tvunit, to: "/gallery" },
  { title: "False Ceilings", desc: "Cove profiles and precision lighting.", image: ceiling, to: "/gallery" },
  { title: "Space Saving Furniture", desc: "Every inch earns its place.", image: spacesaving, to: "/gallery" },
];

export const solutions = [
  { title: "Modular Kitchen", image: kitchen },
  { title: "Wardrobes", image: wardrobe },
  { title: "TV Units", image: tvunit },
  { title: "Crockery Units", image: crockery },
  { title: "Study Tables", image: office },
  { title: "False Ceiling", image: ceiling },
  { title: "Lighting", image: living },
  { title: "Wallpaper", image: bedroom },
  { title: "Wall Paint", image: foyer },
  { title: "Bathroom", image: bathroom },
  { title: "Pooja Unit", image: pooja },
  { title: "Foyer", image: foyer },
  { title: "Kids Bedroom", image: kids },
  { title: "Movable Furniture", image: spacesaving },
];

export const processSteps = [
  { no: "01", title: "Consultation", desc: "Share your home plan, timeline and budget." },
  { no: "02", title: "Meet Your Designer", desc: "A dedicated designer visits your site." },
  { no: "03", title: "Design & Visualisation", desc: "3D walkthroughs of every room." },
  { no: "04", title: "Finalise Design", desc: "Lock materials, finishes and pricing." },
  { no: "05", title: "Manufacturing", desc: "Precision-built at our own factory." },
  { no: "06", title: "Installation", desc: "Supervised, dust-controlled fit-out." },
  { no: "07", title: "Move In", desc: "Deep-cleaned, handover with warranty." },
];

export const galleryItems = [
  { image: kitchen, cat: "Kitchen", title: "Graphite handleless kitchen" },
  { image: living, cat: "Living Room", title: "Arched-light living room" },
  { image: bedroom, cat: "Bedroom", title: "Tufted headboard suite" },
  { image: wardrobe, cat: "Wardrobe", title: "Mirrored sliding wardrobe" },
  { image: bathroom, cat: "Bathroom", title: "Stone and brass bath" },
  { image: office, cat: "Office", title: "Compact study nook" },
  { image: tvunit, cat: "Living Room", title: "Slatted media wall" },
  { image: crockery, cat: "Kitchen", title: "Glass-front crockery unit" },
  { image: kids, cat: "Bedroom", title: "Bunk-bed kids room" },
  { image: ceiling, cat: "Living Room", title: "Cove-lit ceiling" },
  { image: spacesaving, cat: "Bedroom", title: "Fold-away studio" },
  { image: pooja, cat: "Living Room", title: "Teak mandir unit" },
  { image: foyer, cat: "Living Room", title: "Panelled foyer" },
  { image: living, cat: "Living Room", title: "Linen and cane lounge" },
];

export const galleryTabs = ["All", "Kitchen", "Living Room", "Bedroom", "Wardrobe", "Bathroom", "Office"];

export const testimonials = [
  {
    name: "Ananya Rao",
    city: "Bengaluru",
    photo: person1,
    rating: 5,
    quote:
      "Our 3BHK was handed over in 46 days. The kitchen storage planning alone changed how our mornings run.",
  },
  {
    name: "Vikram Iyer",
    city: "Chennai",
    photo: person2,
    rating: 5,
    quote:
      "The 3D walkthrough was exactly what got built. No surprises on cost, no surprises on finish quality.",
  },
  {
    name: "Neha & Arjun",
    city: "Pune",
    photo: person3,
    rating: 5,
    quote:
      "They redesigned a compact 2BHK so well that guests assume we knocked down a wall. We didn't.",
  },
  {
    name: "Lakshmi Menon",
    city: "Kochi",
    photo: person4,
    rating: 5,
    quote:
      "Installation was tidy, on schedule and the service team still answers within a day, a year later.",
  },
];

export const faqs = [
  {
    q: "How does the interior design process work?",
    a: "It runs in seven stages: consultation, designer meeting, 3D design, finalisation, factory manufacturing, on-site installation and handover. You get a single project manager across all of them.",
  },
  {
    q: "How much do home interiors cost?",
    a: "A 2BHK typically ranges from ₹4.5–9 lakh and a 3BHK from ₹7–16 lakh, depending on scope, core material and finishes. Your estimate is itemised line by line before anything is booked.",
  },
  {
    q: "How long does the project take?",
    a: "Design usually takes 2–3 weeks. Manufacturing and installation take 35–50 days after design sign-off, depending on the number of rooms.",
  },
  {
    q: "Can I customise the designs?",
    a: "Every design is drawn for your exact floor plan. Layouts, shutter finishes, hardware brands, lighting and handles are all chosen by you.",
  },
  {
    q: "Do you provide modular kitchens?",
    a: "Yes. We build L, U, parallel and island kitchens with BWP-grade ply, moisture-sealed edges and soft-close hardware backed by a 10-year warranty.",
  },
  {
    q: "Do you provide wardrobes?",
    a: "Yes — hinged, sliding and walk-in wardrobes, with internal accessories such as pull-out trays, lofts, mirror panels and lighting.",
  },
  {
    q: "Do you provide complete home interiors?",
    a: "Yes. Full-home packages cover kitchen, wardrobes, TV and crockery units, false ceilings, lighting, painting, wallpaper, bathrooms and movable furniture.",
  },
  {
    q: "Do you provide installation?",
    a: "All installation is done by our own supervised crews with dust sheeting, daily site cleaning and a final quality check before handover.",
  },
  {
    q: "Do you provide after-sales support?",
    a: "Yes. A dedicated service line handles service requests, and modular products carry a 10-year warranty with free first-year service visits.",
  },
];
