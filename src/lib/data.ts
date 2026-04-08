// ============================================================
// PT. AGRI PRIMA INDOTAMA — Central Content Data Store
// Source: PT_Agri_Prima_Indotama_Website_Brief.md
// Update this file to change content across all pages.
// ============================================================

export const COMPANY = {
  name: "PT. Agri Prima Indotama",
  shortName: "PT. API",
  tagline: "Your Trusted Industrial Partner Since 1993",
  subTagline:
    "For over 30 years, PT. Agri Prima Indotama has delivered integrated industrial solutions — from spare parts supply to full installation and maintenance — serving the Palm Oil, F&B, Healthcare, Electronics, and more across Sumatra, Kalimantan, and beyond.",
  founded: "1993",
  sister: "PT. Agri Prima Indonesia (Batam)",
  locations: ["Medan, Sumatera Utara"],
  email: "tigor.api@gmail.com",
  phone: "+62 813 7286 4065",
  phone2: "+62 812 7606 4177",
  fax: null,
  address: {
    line1: "Jl. Rotan Baru No. A-9",
    line2: "Petisah Tengah",
    city: "Medan",
    province: "Sumatera Utara",
    country: "Indonesia",
  },
  certifications: [] as string[],
  social: {
    linkedin: "#",
    instagram: "#",
  },
};

export const STATS = [
  {
    value: "30+",
    label: "Years Experience",
    sub: "Since 1993, Medan",
  },
  {
    value: "20+",
    label: "Corporate Clients",
    sub: "Across Sumatra & Kalimantan",
  },
  {
    value: "6",
    label: "Global Partner Regions",
    sub: "Europe, USA, Japan & more",
  },
  {
    value: "8+",
    label: "Industries Served",
    sub: "Palm Oil, F&B, Healthcare...",
  },
];

export type ServiceType = "general" | "item-supply";

export interface Service {
  id: string;
  num: string;
  type: ServiceType;
  category: string;
  icon: string;
  title: string;
  shortDesc: string;
  desc: string;
  features: string[];
}

export const SERVICES: Service[] = [
  {
    id: "palm-oil",
    num: "01",
    type: "general",
    category: "Core Specialization",
    icon: "factory",
    title: "Palm Oil Industrial Support (PKS)",
    shortDesc:
      "Complete spare parts supply and installation for Palm Mill (PKS) operations — from sterilizers to kernel transport systems.",
    desc:
      "We provide full installation and supply of spare parts for Palm Mill (PKS), covering every stage of the extraction process. Our experienced team handles structural, mechanical, and system work to maximize your mill's uptime and throughput.",
    features: [
      "Auger Sterilizer Installation",
      "Screw Conveyor Fabrication",
      "Sterilizer Door Installation",
      "Screw Press & Digester Installation",
      "Kernel Transport Systems",
      "Vibrating Screen & Ducting",
      "Water Clarifier Tank",
      "Nut Polishing Drum",
      "Genset Installation",
      "LTDS Ducting & Clay Bath",
      "Fan Cyclon Station",
      "Digester & Blowdown Chamber",
    ],
  },
  {
    id: "phe",
    num: "02",
    type: "general",
    category: "Heat Exchange",
    icon: "heat_exchanger",
    title: "Plate Heat Exchanger (PHE) Service",
    shortDesc:
      "Trained service personnel for PHE unit performance checks, plate cleaning, regasketing, and hydro testing.",
    desc:
      "We are capable of servicing all major Heat Exchanger types with fully trained personnel. From Shell & Tube to Spiral Heat Exchangers, our comprehensive service contracts keep your thermal systems operating at full efficiency.",
    features: [
      "Unit Performance Check",
      "Troubleshooting & Inspection",
      "Chemical Soaking & Hydro Blasting",
      "Re-Gasketing",
      "Hydro Testing & Dye Penetrant Test",
      "Ultraviolet Inspection Test",
      "Shell & Tube Heat Exchanger Service",
      "Spiral Heat Exchanger Service",
      "Service Contracts",
    ],
  },
  {
    id: "chiller",
    num: "03",
    type: "general",
    category: "Thermal Management",
    icon: "ac_unit",
    title: "ABS & Electric Chiller Service",
    shortDesc:
      "Full chiller repair, overhaul, and maintenance — ABS absorption chillers, electric chillers, and AHU systems.",
    desc:
      "Full chiller repair and maintenance capabilities covering both ABS absorption chillers and electric chillers. We handle everything from new supply and installation to full overhaul, retubing, and contract maintenance services.",
    features: [
      "System Design",
      "On-Site Visual Inspection",
      "Supply & Installation of New Chillers",
      "Contract Maintenance Services",
      "A/C & Electrical Troubleshooting",
      "Overhauling Chillers",
      "Testing & Commissioning",
      "Retubing (ABS & Electric)",
      "AHU System Service",
    ],
  },
  {
    id: "cooling-tower",
    num: "04",
    type: "general",
    category: "Cooling Systems",
    icon: "water_drop",
    title: "Cooling Tower — Supply & Service",
    shortDesc:
      "Cleaning and servicing of clean and dirty cooling towers, plus complete parts supply.",
    desc:
      "We provide comprehensive cooling tower maintenance and supply services, covering both clean and dirty cooling towers across Palm Oil, Food & Beverage, and industrial facility applications.",
    features: [
      "Clean Cooling Tower Service",
      "Dirty Cooling Tower Cleaning",
      "Cooling Tower Parts Supply",
      "Inspection & Reporting",
    ],
  },
  {
    id: "boiler",
    num: "05",
    type: "general",
    category: "Steam Systems",
    icon: "local_fire_department",
    title: "Boiler Cleaning & Service",
    shortDesc:
      "Boiler cleaning, servicing, and spare parts supply to keep your steam systems safe and efficient.",
    desc:
      "Boiler maintenance is critical to production safety and efficiency. We provide complete boiler cleaning and servicing solutions along with genuine spare parts supply for industrial boiler systems.",
    features: [
      "Boiler Cleaning & Service",
      "Boiler Parts Supply",
      "Safety Inspection",
      "Performance Optimization",
    ],
  },
  {
    id: "machining",
    num: "06",
    type: "general",
    category: "In-House Workshop",
    icon: "precision_manufacturing",
    title: "Machining Workshop",
    shortDesc:
      "In-house lathe machining workshop for custom part fabrication and precision machining work.",
    desc:
      "Our in-house machining workshop is equipped with lathe machines and precision tooling, enabling us to custom-fabricate replacement parts and components — reducing lead time and dependence on imported parts.",
    features: [
      "Lathe Machine Operations",
      "Custom Part Fabrication",
      "Precision Machining",
      "Replacement Parts Production",
    ],
  },
  {
    id: "mec-civil",
    num: "07",
    type: "general",
    category: "Engineering Works",
    icon: "engineering",
    title: "Mechanical, Electrical & Civil Works",
    shortDesc:
      "General M&E and civil engineering — HVAC, fire protection, plumbing, and water piping installation.",
    desc:
      "General mechanical, electrical, and civil engineering works covering fire protection systems, HVAC, plumbing, and water piping installation — integrating multiple disciplines under a single, accountable contractor.",
    features: [
      "Fire Protection Systems",
      "HVAC Systems",
      "Plumbing Works",
      "Water Piping Installation",
      "Electrical Works",
      "Civil Engineering",
    ],
  },
  {
    id: "chemicals",
    num: "08",
    type: "item-supply",
    category: "Industrial Consumables",
    icon: "science",
    title: "Chemical Distribution",
    shortDesc:
      "Authorized distributor of specialty industrial chemicals — water treatment, coolants, and process chemicals.",
    desc:
      "As an authorized distributor of specialty chemicals, we supply comprehensive water treatment and process chemical solutions to industrial facilities. Our portfolio covers boiler, cooling, RO, wastewater, and lubrication applications.",
    features: [
      "Boiler Water Treatment Chemicals",
      "Cooling Water Treatment Chemicals",
      "Reverse Osmosis (RO) Chemicals",
      "Waste Water Treatment Chemicals",
      "PAY-OFF Chemical",
      "PET ROFER Coolant",
    ],
  },
  {
    id: "spare-parts",
    num: "09",
    type: "item-supply",
    category: "Authorized Supply",
    icon: "shopping_cart",
    title: "Spare Parts & Product Supply",
    shortDesc:
      "Direct supply of genuine parts from premium global brands — Bearings, Pumps, Belts, and Automation components.",
    desc:
      "Leveraging over 30 years of global partnerships, we supply genuine replacement parts from the world's most trusted manufacturers. We ensure your operations never stop due to part failure, offering fast delivery and technical support for every item.",
    features: [
      "Bearings & O-Rings",
      "Hydraulic & Pneumatic Control",
      "Pumps & Rotary Equipment",
      "Electrical & Automation Sensors",
      "Belting & Power Transmission",
      "Plantation Tools & Equipment",
    ],
  },
];

export const PARTS_BRANDS = [
  {
    category: "Bearings, O-Rings & Linear Motion",
    brands: "SKF, NSK, NTN, FAG, Koyo, EZO, Mitsubishi, INA, THK, IKO, Timken, Nachi",
    icon: "settings",
  },
  {
    category: "Belting & Conveyor",
    brands: "Bando, Optibelt, Ammeraal Beltech",
    icon: "conveyor_belt",
  },
  {
    category: "Hydraulic & Pneumatic Control",
    brands: "CKD, Festo, SMC, Tai Sin",
    icon: "compress",
  },
  {
    category: "Sensors, Timers & Controllers",
    brands: "Hanyoung Nux, Omron, ABB, Hager, CHNT, Legrand, Fuji Electric, Schneider",
    icon: "sensors",
  },
  {
    category: "Servo Motor & Amplifier",
    brands: "Panasonic, Toshiba, Bosch, Siemens, Mitsubishi Electric, Schneider Electric",
    icon: "electric_bolt",
  },
  {
    category: "Centrifugal & Rotary Pumps",
    brands: "Baldor, Danfoss, Grundfos, Flowserve, Lowara, Armstrong, KSB, Ebara, Wilo",
    icon: "water_pump",
  },
  {
    category: "Palm Oil Plantation Tools",
    brands: "ELEE brand",
    icon: "agriculture",
  },
];

export const PARTNERS = [
  {
    name: "Europe",
    role: "Regional Partners",
    desc: "Close cooperation with leading European manufacturers across industrial equipment, bearings, and specialty chemicals.",
    flag: "🇪🇺",
  },
  {
    name: "USA",
    role: "Technology Partners",
    desc: "American industrial technology suppliers covering pumps, drives, and automation systems.",
    flag: "🇺🇸",
  },
  {
    name: "Japan",
    role: "Manufacturing Partners",
    desc: "Japanese precision engineering — bearings, sensors, servo motors, and control equipment.",
    flag: "🇯🇵",
  },
  {
    name: "China",
    role: "Supply Partners",
    desc: "Chinese industrial component and equipment suppliers for competitive, high-volume procurement.",
    flag: "🇨🇳",
  },
  {
    name: "Taiwan",
    role: "Technology Partners",
    desc: "Taiwanese manufacturers specializing in pneumatic, hydraulic, and electronic control systems.",
    flag: "🇹🇼",
  },
  {
    name: "Singapore",
    role: "Distribution Hub",
    desc: "Singapore-based distributors and regional agents for fast delivery across Southeast Asia.",
    flag: "🇸🇬",
  },
];

export const INDUSTRIES = [
  { name: "Palm Oil Industry", icon: "eco", primary: true },
  { name: "Electronic Industry", icon: "memory", primary: false },
  { name: "Healthcare & Pharmaceutical", icon: "local_hospital", primary: false },
  { name: "Pulp & Paper", icon: "article", primary: false },
  { name: "Railway (PT. Railink)", icon: "train", primary: false },
  { name: "Energy Sector", icon: "bolt", primary: false },
];

export const PROJECTS = [
  { type: "work", month: "March", year: "2023", client: "PT. Pacific Indopalm Industri", scope: "PHE Service & Cooling Tower Maintenance", category: "phe", location: "Medan" },
  { type: "work", month: "November", year: "2022", client: "PT. Able Commodities Indonesia", scope: "Integrated Industrial Maintenance", category: "mec-civil", location: "Medan" },
  { type: "work", month: "August", year: "2022", client: "PT. VVF KIM II MABAR", scope: "Chiller Service & Mechanical Works", category: "chiller", location: "Medan" },
  { type: "work", month: "September", year: "2021", client: "PT. Railink Medan", scope: "Mechanical & Electrical Maintenance", category: "mec-civil", location: "Medan" },
  { type: "work", month: "May", year: "2021", client: "PT. Tanjung Sarana Lestari", scope: "Palm Oil Mill Support (Astra Group)", category: "palm-oil", location: "Palu" },
  { type: "work", month: "July", year: "2020", client: "PT. Lingga Tiga Sawit", scope: "PKS Installation & Palm Mill Support", category: "palm-oil", location: "Sumatra" },
  { type: "work", month: "February", year: "2020", client: "PT. Simpang Kanan Lestarindo", scope: "PHE Cleaning & Regasketing", category: "phe", location: "Sumatra" },
  { type: "work", month: "October", year: "2019", client: "PT. Inno Wangsa Oil & Fat", scope: "Chiller Overhaul & Chemical Treatment", category: "chiller", location: "Medan" },
  { type: "work", month: "June", year: "2019", client: "PT. Energi Unggul Persada", scope: "Industrial Support Services", category: "mec-civil", location: "Kalimantan" },
  { type: "work", month: "January", year: "2018", client: "PT. Sari Dumai Sejati", scope: "Boiler & Cooling Tower Service", category: "boiler", location: "Dumai" },
  { type: "work", month: "November", year: "2017", client: "PT. Steelindo Wahana Perkasa", scope: "Mechanical Engineering Works", category: "mec-civil", location: "Medan" },
  { type: "work", month: "September", year: "2016", client: "PT. Agro Murni", scope: "Palm Oil Industrial Support", category: "palm-oil", location: "Sumatra" },
  { type: "work", month: "January", year: "2013", client: "PT. Intan Sejati Andalan", scope: "Chiller & HVAC Service", category: "chiller", location: "Duri" },
  { type: "work", month: "August", year: "2012", client: "PT. Kreasi Jaya Adhikarya", scope: "Civil & Mechanical Engineering", category: "mec-civil", location: "Medan" },
];

export const MISSION_VISION = {
  mission: {
    title: "Our Mission",
    icon: "rocket_launch",
    text: "To be a trusted one-stop industrial partner — delivering quality spare parts, maintenance services, and engineering solutions that optimize client production efficiency, reduce operating costs, and create cleaner, safer working environments.",
  },
  vision: {
    title: "Our Vision",
    icon: "visibility",
    text: "To become the most trusted industrial support company in Sumatra and Indonesia, recognized for our technical expertise, global partnerships, and unwavering commitment to product quality and service excellence.",
  },
  values: [
    { num: "01", label: "Quality", desc: "Committed to product quality and service excellence in every engagement." },
    { num: "02", label: "Efficiency", desc: "Optimizing client production efficiency through integrated solutions." },
    { num: "03", label: "Innovation", desc: "Continuous R&D to stay ahead of industrial technology developments." },
    { num: "04", label: "Integrity", desc: "Transparent partnerships built on trust and long-term relationships." },
  ],
};

export const TIMELINE = [
  {
    year: "1993",
    title: "Company Founded",
    desc: "PT. Agri Prima Indotama established in Medan, Sumatera Utara, initially focused on Palm Oil Mill (PKS) industrial support and spare parts supply.",
  },
  {
    year: "Late 1990s",
    title: "Global Partnerships Established",
    desc: "Began representing well-known manufacturers from Europe, USA, Japan, and Singapore — expanding our product catalog and technical capabilities.",
  },
  {
    year: "2000s",
    title: "Service Portfolio Expansion",
    desc: "Extended capabilities to include PHE servicing, chiller maintenance, cooling tower works, and chemical distribution — becoming a true one-stop industrial partner.",
  },
  {
    year: "2010s",
    title: "Sister Company in Batam",
    desc: "PT. Agri Prima Indonesia established in Batam to extend our industrial service reach across the Riau Archipelago and wider Indonesian market.",
  },
  {
    year: "2015",
    title: "In-House Workshop Launch",
    desc: "Launched our machining workshop with lathe machines, enabling custom part fabrication and reducing client dependence on imported replacement parts.",
  },
  {
    year: "2020+",
    title: "Expanded Across Kalimantan",
    desc: "Extended service reach to Kalimantan with clients such as PT. Energi Unggul Persada, solidifying our position as an Indonesia-wide industrial partner.",
  },
];

export const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about-us" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export const VALUE_PROPS = [
  {
    icon: "verified",
    title: "30+ Years Experience",
    desc: "Since 1993 in Palm Oil Industrial Support — one of Sumatra's most experienced industrial partners.",
  },
  {
    icon: "hub",
    title: "One-Stop Solution",
    desc: "From spare parts supply to full installation and maintenance — engineering, chemicals, and service under one roof.",
  },
  {
    icon: "public",
    title: "Global Partnerships",
    desc: "Representing top manufacturers from Europe, USA, Japan, China, Taiwan, and Singapore.",
  },
  {
    icon: "build",
    title: "In-House Workshop",
    desc: "Our machining workshop enables custom fabrication and reduces lead times for critical replacement parts.",
  },
];
