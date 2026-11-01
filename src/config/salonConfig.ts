export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  durationEstimate?: string;
  pricingNote: string;
  image: string;
  accentTitle?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Cuts & Styling' | 'Colour' | 'Treatments' | 'Studio Vibe';
  tag: string;
  aspect: 'square' | 'portrait' | 'landscape';
  image: string;
  caption: string;
}

export interface BusinessConfig {
  name: string;
  subTitle: string;
  category: string;
  tagline: string;
  address: {
    line1: string;
    line2: string;
    landmark: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    fullFormatted: string;
  };
  phoneDisplay: string;
  phoneRaw: string;
  whatsappNumber: string;
  googleRating: number;
  googleReviewCount: number;
  googleListingUrl: string;
  googleDirectionsUrl: string;
  openingHours: {
    days: string;
    hours: string;
    closesAt: string;
    isOpenToday: boolean;
    note: string;
  };
  services: ServiceItem[];
  gallery: GalleryItem[];
}

export const SALON_CONFIG: BusinessConfig = {
  name: "STYLE NEXUS",
  subTitle: "HAIR STUDIO · GUWAHATI",
  category: "Hair Salon",
  tagline: "Your Hair. Your Identity.",
  address: {
    line1: "5QMM+75M, Maniram Dewan Road",
    line2: "Near Anuradha Cinema Complex",
    landmark: "Located in Renu's Weaves",
    area: "Bamunimaidan",
    city: "Guwahati",
    state: "Assam",
    pincode: "781021",
    fullFormatted: "5QMM+75M, Maniram Dewan Road, Near Anuradha Cinema Complex, Bamunimaidan, Guwahati, Assam 781021"
  },
  phoneDisplay: "+91 60012 35320",
  phoneRaw: "+916001235320",
  whatsappNumber: "916001235320",
  googleRating: 5.0,
  googleReviewCount: 8,
  googleListingUrl: "https://www.google.com/maps/search/?api=1&query=STYLE+NEXUS+Maniram+Dewan+Road+Bamunimaidan+Guwahati",
  googleDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=STYLE+NEXUS+Maniram+Dewan+Road+Near+Anuradha+Cinema+Complex+Bamunimaidan+Guwahati+Assam+781021",
  openingHours: {
    days: "Monday – Sunday",
    hours: "10:00 AM – 8:30 PM",
    closesAt: "8:30 PM",
    isOpenToday: true,
    note: "Open until 8:30 PM according to listing. Please contact salon to confirm appointment slots."
  },
  services: [
    {
      id: "haircut-styling",
      number: "01",
      title: "HAIRCUT & STYLING",
      tagline: "Explore cuts and hairstyles suited to your preferred look.",
      description: "Precision tailoring engineered for your bone structure, hair density, and lifestyle. From textured crops and effortless layers to sculptural bobs and refined fades.",
      features: ["Custom Consultation", "Face-Shape Architecture", "Shampoo & Finishing Styling"],
      durationEstimate: "45–60 min",
      pricingNote: "Contact for Pricing",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
      accentTitle: "Precision Cuts & Styling"
    },
    {
      id: "hair-colour",
      number: "02",
      title: "HAIR COLOUR",
      tagline: "Discover colour styles and fresh looks.",
      description: "Artisanal dimensional tones, sun-kissed balayage, deep gloss glazes, and modern highlights tailored to enhance your natural skin warmth with zero compromises on strand health.",
      features: ["Balayage & Foilyage", "Dimensional Global Tones", "Grey Blending & Glossing"],
      durationEstimate: "90–150 min",
      pricingNote: "Contact for Pricing",
      image: "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?auto=format&fit=crop&w=900&q=80",
      accentTitle: "Dimensional & Creative Colour"
    },
    {
      id: "hair-treatments",
      number: "03",
      title: "HAIR TREATMENTS",
      tagline: "Hair care and treatment experiences.",
      description: "Deep molecular bond reconstructors, protein therapy, and anti-breakage hydration regimes designed to restore resilience, elasticity, and radiant moisture.",
      features: ["Bond Reinforcement", "Intensive Hydration Infusion", "Scalp Barrier Balancing"],
      durationEstimate: "45–75 min",
      pricingNote: "Contact for Pricing",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
      accentTitle: "Restorative Hair Rituals"
    },
    {
      id: "hair-spa",
      number: "04",
      title: "HAIR SPA",
      tagline: "A refreshing hair care experience.",
      description: "A restorative sensory pause combining acupressure scalp massage, botanical warm steam, and nutritive hair masks that calm tension while nourishing roots.",
      features: ["Aromatherapeutic Scalp Massage", "Warm Nutrient Steam", "Deep Conditioning Sealer"],
      durationEstimate: "60 min",
      pricingNote: "Contact for Pricing",
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=80",
      accentTitle: "Sensory Hair & Scalp Spa"
    },
    {
      id: "hair-smoothening",
      number: "05",
      title: "HAIR SMOOTHENING",
      tagline: "Explore professional hair smoothing options.",
      description: "Formulas crafted to tame stubborn frizz, lock in humidity resistance, and give long-lasting sleek manageability suited to the northeastern climate.",
      features: ["Frizz Elimination", "Mirror Sheen Finish", "Long-Lasting Humidity Defense"],
      durationEstimate: "120–180 min",
      pricingNote: "Contact for Pricing",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=80",
      accentTitle: "Professional Anti-Frizz & Smoothing"
    },
    {
      id: "hair-transformation",
      number: "06",
      title: "HAIR TRANSFORMATION",
      tagline: "Discover a new style and look.",
      description: "Complete signature makeover sessions combining thorough diagnostic analysis, customized structural cut, tonal refinement, and personalized styling masterclass.",
      features: ["Full Identity Diagnostic", "Structural Reshaping", "Home Maintenance Guidance"],
      durationEstimate: "90–120 min",
      pricingNote: "Contact for Pricing",
      image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=900&q=80",
      accentTitle: "Signature Look Makeover"
    }
  ],
  gallery: [
    {
      id: "gal-1",
      title: "Modern Texturized Bob with Fluid Movement",
      category: "Cuts & Styling",
      tag: "Editorial Cut",
      aspect: "portrait",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
      caption: "Precision sliced layers creating weightless bounce and effortless framing."
    },
    {
      id: "gal-2",
      title: "Warm Caramel & Copper Balayage",
      category: "Colour",
      tag: "Custom Palette",
      aspect: "landscape",
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=80",
      caption: "Hand-painted seamless ribbon transitions that catch dimensional studio light."
    },
    {
      id: "gal-3",
      title: "High-Gloss Silk Smoothing Therapy",
      category: "Treatments",
      tag: "Revival Care",
      aspect: "portrait",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=80",
      caption: "Intense cuticle sealing producing mirror-like reflection and weightless glide."
    },
    {
      id: "gal-4",
      title: "Sculpted Contemporary Men's Fade & Crop",
      category: "Cuts & Styling",
      tag: "Grooming",
      aspect: "square",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80",
      caption: "Crisp architectural graduation paired with textured crown definition."
    },
    {
      id: "gal-5",
      title: "Rich Espresso with Hazelnut Dimension",
      category: "Colour",
      tag: "Dimensional Tones",
      aspect: "square",
      image: "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?auto=format&fit=crop&w=900&q=80",
      caption: "Gentle lowlights and root depth imparting density and healthy shine."
    },
    {
      id: "gal-6",
      title: "Curated Studio Workstation & Tools",
      category: "Studio Vibe",
      tag: "Studio Aesthetic",
      aspect: "landscape",
      image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=900&q=80",
      caption: "Minimalist ergonomics and premium salon equipment in Bamunimaidan."
    }
  ]
};
