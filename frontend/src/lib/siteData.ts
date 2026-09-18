export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  price: string;
  category: "Free Zone" | "Mainland" | "Offshore";
  badge: string;
  description: string;
  overview: string;
  image: string;
  stats: { label: string; value: string }[];
  benefits: string[];
  licenses: { title: string; description: string }[];
  workspaces: { title: string; description: string }[];
  process: string[];
  requirements: string[];
};

export const services: Service[] = [
  {
    slug: "dubai-free-zone",
    title: "Dubai Free Zone Company Setup",
    shortTitle: "Dubai Free Zone",
    price: "AED 9,999",
    category: "Free Zone",
    badge: "Highest prestige",
    description: "Build a globally credible company in Dubai’s most connected business hubs.",
    overview:
      "Dubai Free Zones give international founders a clear launchpad: full foreign ownership, sector-focused infrastructure, and a direct route to a confident UAE presence. StartupDesk helps you choose the right authority, activity, workspace, and banking path from day one.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1800&q=85",
    stats: [
      { label: "Typical setup", value: "3–5 days" },
      { label: "Ownership", value: "100% foreign" },
      { label: "Activities", value: "Up to 3" },
    ],
    benefits: ["Premium Dubai address", "Flexible office solutions", "Fast-track licensing", "Banking introduction"],
    licenses: [
      { title: "Service license", description: "For consultancy, technology, marketing, education, and professional services." },
      { title: "Commercial license", description: "For import, export, distribution, and trading activities." },
      { title: "E-commerce license", description: "For online retail, platforms, and digital commerce models." },
    ],
    workspaces: [
      { title: "Flexi desk", description: "A cost-efficient business address with access to shared facilities." },
      { title: "Dedicated desk", description: "A consistent workspace for founders and small operating teams." },
      { title: "Private office", description: "A professional, lockable space for confidential work and meetings." },
    ],
    process: ["Select your structure and activity", "Prepare KYC and incorporation documents", "Receive your license and lease package"],
    requirements: ["Passport copy for shareholders and manager", "Proof of address and recent photo", "Business activity and ownership details", "KYC and sanctions declaration"],
  },
  {
    slug: "spc-free-zone",
    title: "SPC Free Zone Formation",
    shortTitle: "SPC Free Zone",
    price: "AED 5,750",
    category: "Free Zone",
    badge: "Fastest approval",
    description: "A flexible Sharjah launchpad for founders who want speed, value, and optionality.",
    overview:
      "Sharjah Publishing City Free Zone is designed for modern founders who need multiple activities, a lean cost base, and a straightforward path to their first UAE license. StartupDesk handles the details so you can focus on your next milestone.",
    image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1800&q=85",
    stats: [
      { label: "Approval", value: "24 hours" },
      { label: "Activities", value: "Up to 5" },
      { label: "Desk", value: "Included" },
    ],
    benefits: ["Multi-activity flexibility", "Quick e-license pathway", "Cost-conscious packages", "Founder-friendly support"],
    licenses: [
      { title: "Publishing & media", description: "For content, publishing, creative, and communications businesses." },
      { title: "Service license", description: "For advisory, software, marketing, and specialist services." },
      { title: "Commercial license", description: "For selected trading and e-commerce operations." },
    ],
    workspaces: [
      { title: "Shared workspace", description: "A practical base for solo founders and lean teams." },
      { title: "Meeting room", description: "Professional space for pitches, workshops, and client sessions." },
      { title: "Virtual presence", description: "A focused company setup without unnecessary office overhead." },
    ],
    process: ["Clarify your activities and visa needs", "Submit founder documents for verification", "Activate your license and business package"],
    requirements: ["Passport copy for each shareholder", "Passport photo and contact details", "Selected activities and company name", "Proof of residential address"],
  },
  {
    slug: "shams-free-zone",
    title: "Sharjah Media City Company Setup",
    shortTitle: "SHAMS Free Zone",
    price: "AED 5,750",
    category: "Free Zone",
    badge: "Popular for tech & creative",
    description: "Launch a media, technology, or creative venture with an agile setup built for growth.",
    overview:
      "SHAMS offers a modern base for creative professionals, digital companies, and technology-led ventures. We make the choice simple by matching your activity and ambition to the right package, then staying close through every handover.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1800&q=85",
    stats: [
      { label: "Activities", value: "Up to 10" },
      { label: "Office", value: "Flexible" },
      { label: "Setup", value: "Remote-ready" },
    ],
    benefits: ["Creative-sector fit", "Combined activities", "Flexible workspace options", "Ongoing advisory support"],
    licenses: [
      { title: "Media license", description: "For content creation, production, publishing, and digital media." },
      { title: "Professional license", description: "For consultants, agencies, and specialized service providers." },
      { title: "E-commerce license", description: "For online brands and digital-first commerce businesses." },
    ],
    workspaces: [
      { title: "Co-working space", description: "A collaborative base for independent operators and small teams." },
      { title: "Dedicated desk", description: "A dependable space when your business needs a regular rhythm." },
      { title: "Studio or office", description: "More room to produce, meet, and build your operating presence." },
    ],
    process: ["Map your activity mix and operating model", "Confirm your company name and documents", "Receive your license and workspace options"],
    requirements: ["Passport and visa copy where applicable", "Simple business activity summary", "Proof of address", "Manager and shareholder details"],
  },
  {
    slug: "mainland",
    title: "Dubai Mainland Company Setup",
    shortTitle: "Dubai Mainland",
    price: "AED 14,500",
    category: "Mainland",
    badge: "Trade anywhere in UAE",
    description: "Create a fully operational Dubai company with access to local markets and public contracts.",
    overview:
      "Mainland structures are built for businesses that want the broadest trading access in the UAE. StartupDesk coordinates the license, activity approvals, office requirements, and next-step compliance so your company can operate with confidence.",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1800&q=85",
    stats: [
      { label: "Ownership", value: "100% foreign" },
      { label: "Trading", value: "UAE-wide" },
      { label: "Contracts", value: "Eligible" },
    ],
    benefits: ["Direct local trading", "Government tender access", "Flexible office choices", "Scalable visa capacity"],
    licenses: [
      { title: "Commercial license", description: "For businesses trading, distributing, importing, or exporting goods." },
      { title: "Professional license", description: "For consultancy and expert service businesses." },
      { title: "Industrial license", description: "For production, assembly, and manufacturing activities." },
    ],
    workspaces: [
      { title: "Serviced office", description: "A ready-to-operate address with a more established presence." },
      { title: "Private office", description: "A focused environment for teams, clients, and regulated work." },
      { title: "Warehouse", description: "Space for inventory, logistics, and operational businesses." },
    ],
    process: ["Choose activity and legal structure", "Secure approvals and compliant office address", "Collect your license and begin operations"],
    requirements: ["Passport and Emirates ID copies where relevant", "Business plan or activity description", "Lease or office documentation", "Corporate documents for entity shareholders"],
  },
  {
    slug: "offshore",
    title: "UAE Offshore Company Formation",
    shortTitle: "UAE Offshore",
    price: "AED 6,999",
    category: "Offshore",
    badge: "Asset protection",
    description: "Structure international holdings with a discreet, compliant UAE offshore vehicle.",
    overview:
      "An offshore company can support international asset holding, cross-border contracting, and group structuring when it is the right fit for your objectives. StartupDesk helps you understand the structure before you commit, with clarity at every step.",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1800&q=85",
    stats: [
      { label: "Best for", value: "Holdings" },
      { label: "Setup", value: "Remote-ready" },
      { label: "Support", value: "End-to-end" },
    ],
    benefits: ["International asset holding", "Cross-border structuring", "Confidential governance", "Clear compliance guidance"],
    licenses: [
      { title: "Holding company", description: "For ownership of shares, property, and strategic investments." },
      { title: "Group structure", description: "For founders consolidating regional and international interests." },
      { title: "International vehicle", description: "For carefully planned cross-border commercial arrangements." },
    ],
    workspaces: [
      { title: "Registered address", description: "A compliant address for company records and correspondence." },
      { title: "Governance support", description: "Structured documentation for directors and shareholders." },
      { title: "Advisory desk", description: "Ongoing support as your ownership structure evolves." },
    ],
    process: ["Review objectives and ownership structure", "Prepare KYC and corporate documents", "Complete incorporation and governance handover"],
    requirements: ["Passport and proof of address", "Shareholder and director details", "Corporate documents when relevant", "Purpose and source-of-funds overview"],
  },
];

export const licenses = [
  { title: "General Trading License", icon: "GT", description: "Trade multiple product categories across import, export, and distribution activities." },
  { title: "E-commerce & Digital", icon: "EC", description: "Sell products and services online through your own store or major platforms." },
  { title: "Professional Consultancy", icon: "PC", description: "Offer specialist advice across strategy, technology, finance, marketing, and more." },
  { title: "Commercial License", icon: "CM", description: "Operate a focused trading business with a clear commercial activity scope." },
  { title: "Freelance & Independent", icon: "FL", description: "Work independently in media, IT, education, design, and specialist fields." },
  { title: "Industrial License", icon: "IN", description: "Support manufacturing, assembly, processing, and product-based operations." },
];
