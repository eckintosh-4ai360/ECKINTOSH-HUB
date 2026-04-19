export type ServiceId = "barbershop" | "gaming" | "chopbar" | "momo" | "phone";

export type PriceLine = {
  label: string;
  price: number | null;
  note?: string;
};

export type Service = {
  id: ServiceId;
  name: string;
  tagline: string;
  summary: string;
  description: string;
  href: string;
  cta: string;
  featured: boolean;
  highlights: string[];
  pricing: PriceLine[];
};

export const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gaming", href: "/gaming" },
  { label: "Menu", href: "/menu" },
  { label: "Contact", href: "/contact" },
];

export const services: Service[] = [
  {
    id: "barbershop",
    name: "Barbershop",
    tagline: "Sharp cuts without the wait",
    summary: "Book ahead or walk in for precise cuts, fades, beard work, and quick touch-ups.",
    description:
      "The barbershop is the anchor of the compound. It is built for speed, style, and a smoother arrival, whether you are coming in before work or on a relaxed weekend stop.",
    href: "/book",
    cta: "Book a cut",
    featured: true,
    highlights: ["Walk-in friendly", "WhatsApp confirmations", "Beard trims available"],
    pricing: [
      { label: "Haircut", price: 30 },
      { label: "Shape-up or edge-up", price: 20 },
      { label: "Haircut and beard trim", price: 45 },
      { label: "Full groom", price: 65 },
    ],
  },
  {
    id: "gaming",
    name: "Gaming Lounge",
    tagline: "Big-screen sessions all day",
    summary: "Drop in for quick matches, tournaments, or longer sessions with friends.",
    description:
      "The lounge is designed to keep energy high and decisions easy. Pricing is straightforward, the setup is comfortable, and you can pair a session with food or a fresh cut in the same stop.",
    href: "/gaming",
    cta: "See lounge pricing",
    featured: false,
    highlights: ["Hourly and half-day plans", "Popular titles ready", "Free Wi-Fi"],
    pricing: [
      { label: "Quick session", price: 15 },
      { label: "Standard two-hour session", price: 25 },
      { label: "Half-day session", price: 45 },
      { label: "Full-day session", price: 80 },
    ],
  },
  {
    id: "chopbar",
    name: "Chop Bar",
    tagline: "Real food, cooked fresh daily",
    summary: "Breakfast, mains, sides, and drinks prepared in-house throughout the day.",
    description:
      "The menu leans into familiar Ghanaian comfort food with fast-moving favorites and fresh daily specials. It is easy to order, easy to pair with the rest of the compound, and easy to come back to.",
    href: "/menu",
    cta: "See the menu",
    featured: false,
    highlights: ["Breakfast from 7 AM", "Daily local favorites", "Easy takeaway orders"],
    pricing: [
      { label: "Breakfast plates from", price: 12 },
      { label: "Main meals from", price: 30 },
      { label: "Sides from", price: 3 },
      { label: "Drinks from", price: 3 },
    ],
  },
  {
    id: "momo",
    name: "Mobile Money",
    tagline: "Fast transactions, fewer queues",
    summary: "Handle transfers, cash-outs, and mobile money errands while the rest of your visit keeps moving.",
    description:
      "The mobile money desk keeps the everyday practical side of your stop efficient. It is there for quick transactions, short waits, and the kind of convenience that makes the whole compound more useful.",
    href: "/services",
    cta: "See all services",
    featured: false,
    highlights: ["MTN, Telecel, and AirtelTigo", "Quick cash-in and cash-out", "Easy add-on stop"],
    pricing: [
      { label: "MTN MoMo", price: null, note: "Standard network rates" },
      { label: "Telecel Cash", price: null, note: "Standard network rates" },
      { label: "AirtelTigo Money", price: null, note: "Standard network rates" },
    ],
  },
  {
    id: "phone",
    name: "Phone Kiosk",
    tagline: "Repairs and accessories on-site",
    summary: "Drop off a repair, pick up an accessory, or sort out your device while you eat or wait.",
    description:
      "The kiosk gives the compound one more useful reason to visit. It covers practical fixes and common accessories so you can solve a device problem without making a second trip elsewhere.",
    href: "/services",
    cta: "See all services",
    featured: false,
    highlights: ["Same-day fixes on many jobs", "Cases and chargers stocked", "Pair it with other stops"],
    pricing: [
      { label: "Battery replacement", price: 60 },
      { label: "Charging port repair", price: 50 },
      { label: "Charger", price: 30 },
      { label: "Screen protector", price: 10 },
    ],
  },
];

export const homeStats = [
  { value: "5", label: "Services under one roof" },
  { value: "7 AM", label: "Weekday opening time" },
  { value: "10 min", label: "Typical booking confirmation" },
  { value: "7 days", label: "Something open every week" },
];

export const compoundJourneys = [
  {
    title: "Clean cut, then cool off",
    description:
      "Reserve your chair, freshen up, and slide into the gaming lounge while the rest of your crew arrives.",
    services: ["barbershop", "gaming"] as ServiceId[],
  },
  {
    title: "Sort errands without leaving",
    description:
      "Handle a transfer, pick up a charger, and still have time to sit down for a proper meal before heading out.",
    services: ["momo", "phone", "chopbar"] as ServiceId[],
  },
  {
    title: "Make the stop feel worth it",
    description:
      "Turn one quick appointment into a fuller experience with food, music, and a little extra time to stay.",
    services: ["barbershop", "chopbar", "gaming"] as ServiceId[],
  },
];

export const quickLinks = [
  {
    title: "Reserve a chair",
    description: "Choose your cut, pick a time, and arrive to a smoother visit.",
    href: "/book",
  },
  {
    title: "Check gaming rates",
    description: "See hourly plans, extras, and the current lounge lineup.",
    href: "/gaming",
  },
  {
    title: "Browse the menu",
    description: "Plan breakfast, lunch, or an easy add-on meal before you arrive.",
    href: "/menu",
  },
];

export const gamingPlans = [
  {
    id: "quick",
    name: "Quick Session",
    hours: 1,
    price: 15,
    perHour: 15,
    tag: "",
    perks: ["One seat", "Any game title", "Free Wi-Fi", "Easy walk-in option"],
  },
  {
    id: "standard",
    name: "Standard",
    hours: 2,
    price: 25,
    perHour: 12.5,
    tag: "Most popular",
    perks: ["Two-hour block", "Reserved seat", "Free Wi-Fi", "Best short-session balance"],
  },
  {
    id: "halfday",
    name: "Half Day",
    hours: 4,
    price: 45,
    perHour: 11.25,
    tag: "Best value",
    perks: ["Four-hour stay", "Priority seat reservation", "One free drink", "Strong group option"],
  },
  {
    id: "fullday",
    name: "Full Day",
    hours: 8,
    price: 80,
    perHour: 10,
    tag: "",
    perks: ["Up to eight hours", "Dedicated seat", "Two free drinks", "One free snack"],
  },
];

export const gamingExtras = [
  { label: "Extra controller rental", price: 5, per: "per session" },
  { label: "Private room booking", price: 50, per: "per hour" },
  { label: "Tournament entry", price: 20, per: "per player" },
  { label: "Headset rental", price: 5, per: "per session" },
];

export const gamingTitles = [
  "EA Sports FC 25",
  "Mortal Kombat 1",
  "Call of Duty",
  "GTA V",
  "NBA 2K25",
  "Tekken 8",
  "Gran Turismo 7",
  "Rocket League",
  "God of War",
];

export const menuCategories = [
  {
    id: "breakfast",
    name: "Breakfast",
    emoji: "Sunrise",
    time: "7:00 AM to 11:00 AM",
    items: [
      { name: "Hausa Koko and Koose", description: "Spiced millet porridge with fried bean cakes", price: 20, popular: true },
      { name: "Waakye breakfast plate", description: "Rice and beans with egg, spaghetti, and shito", price: 25, popular: false },
      { name: "Bread and egg stew", description: "Toasted bread with rich tomato egg stew", price: 15, popular: false },
      { name: "Tom brown porridge", description: "Roasted cornmeal porridge, sweetened to taste", price: 12, popular: false },
      { name: "Fried yam and egg", description: "Crispy fried yam with scrambled or fried egg", price: 22, popular: true },
      { name: "Akara and porridge", description: "Bean fritters served with warm porridge", price: 18, popular: false },
    ],
  },
  {
    id: "mains",
    name: "Main Meals",
    emoji: "Pot",
    time: "11:00 AM to 8:00 PM",
    items: [
      { name: "Jollof rice and chicken", description: "Party-style jollof with smoky grilled or fried chicken", price: 45, popular: true },
      { name: "Fufu and light soup", description: "Hand-pounded fufu with tomato light soup and fish or goat", price: 40, popular: true },
      { name: "Banku and tilapia", description: "Fermented dough with grilled tilapia and pepper sauce", price: 50, popular: true },
      { name: "Waakye deluxe", description: "Waakye with meat, egg, wele, spaghetti, gari, and shito", price: 40, popular: false },
      { name: "Fried rice and chicken", description: "Ghanaian-style fried rice with mixed vegetables and chicken", price: 45, popular: false },
      { name: "Kontomire stew and yam", description: "Rich cocoyam leaf stew with boiled yam", price: 35, popular: false },
      { name: "Groundnut soup and rice ball", description: "Slow-cooked peanut soup with omotuo rice balls", price: 40, popular: false },
      { name: "Kelewele and beans", description: "Spiced fried plantain with beans stew", price: 30, popular: false },
    ],
  },
  {
    id: "sides",
    name: "Sides and Extras",
    emoji: "Tray",
    time: "All day",
    items: [
      { name: "Extra meat, chicken", description: "Grilled or fried chicken piece", price: 20, popular: false },
      { name: "Extra meat, goat", description: "Tender stewed goat meat", price: 25, popular: false },
      { name: "Fried plantain", description: "Spiced fried ripe plantain", price: 10, popular: true },
      { name: "Gari and beans", description: "Gari soakings with cowpea stew", price: 15, popular: false },
      { name: "Boiled egg", description: "Simple add-on protein", price: 5, popular: false },
      { name: "Extra shito", description: "House black pepper sauce", price: 3, popular: false },
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    emoji: "Cup",
    time: "All day",
    items: [
      { name: "Sobolo", description: "Fresh-brewed hibiscus drink served chilled", price: 8, popular: true },
      { name: "Pineapple juice", description: "Freshly blended with no added sugar", price: 10, popular: false },
      { name: "Yoghurt drink", description: "Cold and easy to pair with breakfast", price: 5, popular: false },
      { name: "Malta", description: "Classic malt beverage served cold", price: 8, popular: false },
      { name: "Mineral water", description: "Sachet or bottled water", price: 3, popular: false },
      { name: "Soft drinks", description: "Coke, Fanta, or Sprite", price: 7, popular: false },
      { name: "Bissap ginger blend", description: "Hibiscus and fresh ginger blend", price: 12, popular: true },
    ],
  },
];

export const barberServices = [
  { label: "Haircut", price: 30 },
  { label: "Shape-up or edge-up", price: 20 },
  { label: "Haircut and beard trim", price: 45 },
  { label: "Full groom", price: 65 },
  { label: "Kids cut, under 12", price: 25 },
  { label: "Beard trim only", price: 20 },
];

export const timeSlots = [
  "7:00 AM",
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
];

export const contactInfo = {
  address: "Mumford, Ghana (exact address shared after booking confirmation)",
  phone: "+233 XX XXX XXXX",
  whatsapp: "+233 XX XXX XXXX",
  email: "hello@thehubMumford.com",
  instagram: "@thehubMumford",
  hours: {
    weekday: "Monday to Saturday: 7:00 AM to 9:00 PM",
    weekend: "Sunday: 9:00 AM to 6:00 PM",
  },
};
