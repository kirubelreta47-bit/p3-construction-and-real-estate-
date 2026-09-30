import { ServiceItem, ProcessPhase, StatMetric, ManifestoPillar, RealEstateProperty, ProjectItem, NewsArticle } from './types';

export interface CoreDiscipline {
  id: string;
  title: string;
  iconType: string;
  description: string;
  subfeatures: string[];
  linkService: string;
}

export const COMPANY_INFO = {
  name: 'P3 Construction Group & Real Estate',
  shortName: 'P3 Construction & Real Estate',
  tagline: 'Premier Construction Engineering & Luxury Real Estate Developers in Addis Ababa',
  mowudLicense: 'MoWUD Class-1 General Contractor & Developer #GC-01/ET/9824',
  phone1: '+251 11 661 4455',
  phone2: '+251 91 123 7890',
  email: 'info.p3construction@gmail.com',
  sites: [
    {
      id: 'site-22',
      name: '22 Mazoria Executive & Sales Headquarters',
      area: '22 Mazoria (Haya Hulet)',
      address: 'P3 Plaza, 4th Floor, 22 Mazoria (Beside Gollagul Tower), Addis Ababa',
      focus: 'Real Estate Sales, Architectural Consultations & Executive Management',
      hours: 'Mon – Fri: 8:00 AM – 6:30 PM | Sat: 8:30 AM – 4:00 PM',
      mapUrl: 'https://maps.google.com/?q=22+Mazoria+Addis+Ababa+Ethiopia',
      embedUrl: 'https://maps.google.com/maps?q=9.0142,38.7845&hl=en&z=15&output=embed',
      phone: '+251 11 661 4455'
    },
    {
      id: 'site-haile-garment',
      name: 'Haile Garment Site, Precast & Operations Yard',
      area: 'Haile Garment Corridor',
      address: 'Haile Garment - CDC, WPQM+8H2, Addis Ababa, Ethiopia',
      focus: 'Precast Engineering, Heavy Plant Equipment, Material Testing & Field Operations',
      hours: 'Mon – Sat: 7:30 AM – 6:00 PM (Site Operations)',
      mapUrl: 'https://www.google.com/maps/dir/9.0016017,38.8100846/Haile+Garment+-+CDC,+WPQM%2B8H2,+Addis+Ababa/@8.9667587,38.7300237,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x164b817d4823f5a1:0x258c702776808447!2m2!1d38.7355523!2d8.9377004',
      embedUrl: 'https://maps.google.com/maps?q=8.9377004,38.7355523&hl=en&z=15&output=embed',
      phone: '+251 91 123 7890'
    }
  ]
};

export const ADDIS_SUBCITIES = [
  '22 Mazoria (Haya Hulet)',
  'Haile Garment (Nifas Silk-Lafto)',
  'Bole (Commercial & High-Rise)',
  'Kirkos (Kazanchis / Financial District)',
  'CMC / Yeka (Luxury Residential Enclave)',
  'Lideta (Urban Renewal Corridor)',
  'Arada (Piazza / City Center)',
  'Akaki Kality (Industrial & Logistics Yard)'
];

export const PROJECT_TYPOLOGIES = [
  { id: 'p3-sky-22', name: 'P3 Sky Tower Residences (22 Mazoria)', typicalGfa: '34,500 m²' },
  { id: 'p3-hg', name: 'P3 Heights Executive Complex (Haile Garment)', typicalGfa: '28,200 m²' },
  { id: 'p3-commercial-22', name: 'P3 Prime Business & Commercial Hub (22 Axis)', typicalGfa: '22,400 m²' },
  { id: 'p3-penthouse-crown', name: 'The Crown Signature Penthouses (22 Mazoria)', typicalGfa: '8,400 m²' },
  { id: 'p3-villas-cmc', name: 'P3 Green Oasis Luxury Villas (CMC Zone)', typicalGfa: '18,500 m²' },
  { id: 'general-contracting', name: 'Turnkey General Contracting & Structural Engineering', typicalGfa: 'Custom Scope' }
];

export const REAL_ESTATE_PROPERTIES: RealEstateProperty[] = [
  {
    id: 'p3-sky-residence-22',
    title: 'P3 Sky Tower Residences (22 Mazoria)',
    category: 'RESIDENTIAL',
    status: 'Selling Fast',
    location: '22 Mazoria / Haya Hulet, Addis Ababa',
    siteZone: '22 Mazoria',
    price: 'ETB 14,800,000',
    priceUsd: '$115,000 USD',
    bedrooms: '2 – 4 Bedrooms',
    bathrooms: '2 – 4 Baths',
    area: '128 – 245 m²',
    handover: 'Q4 2026',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80'
    ],
    tagline: 'High-rise luxury living with panoramic city views, backup power & high-speed Schindler elevators.',
    description: 'P3 Sky Tower stands as a 24-story residential masterpiece in vibrant 22 Mazoria. Engineered with post-tensioned earthquake-resistant structural frames, European kitchen cabinetry, underground multi-level parking, and private sky lounges.',
    amenities: ['100% Guaranteed Individual Title Deed (Yekartab Bet)', 'Full Backup Silent Generators', 'Rooftop Heated Infinity Pool & Gym', 'Automated Basement Parking', 'High-Speed Fiber & Smart Intercom', '24/7 Monitored CCTV Security'],
    isFeatured: true
  },
  {
    id: 'p3-heights-haile-garment',
    title: 'P3 Heights Executive Complex (Haile Garment)',
    category: 'RESIDENTIAL',
    status: 'Under Construction',
    location: 'Haile Garment Area (WPQM+8H2), Addis Ababa',
    siteZone: 'Haile Garment',
    price: 'ETB 9,500,000',
    priceUsd: '$75,000 USD',
    bedrooms: '2 & 3 Bedrooms',
    bathrooms: '2 Baths',
    area: '105 – 175 m²',
    handover: 'Q2 2026',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80'
    ],
    tagline: 'Spacious modern family apartments with lush landscaped garden courtyards and dedicated daycare.',
    description: 'Located in the rapidly appreciating Haile Garment development corridor, P3 Heights provides contemporary urban living with sound-insulated double glazing, premium porcelain tiling, and continuous treated water reservoirs.',
    amenities: ['Deep Bored Water Well & Water Treatment Plant', 'Commercial Ground Retail (Supermarket & Pharmacy)', 'Gated Community with Access Control', 'Kids Playpark & Green Walking Trail', 'Flexible 3-Year Milestone Payment Plan'],
    isFeatured: true
  },
  {
    id: 'p3-penthouse-crown-22',
    title: 'The Crown Signature Penthouses (22 Mazoria)',
    category: 'PENTHOUSE',
    status: 'Selling Fast',
    location: '22 Mazoria Summit Floors, Addis Ababa',
    siteZone: '22 Mazoria',
    price: 'ETB 29,000,000',
    priceUsd: '$225,000 USD',
    bedrooms: '4 Bedrooms + Maid Suite',
    bathrooms: '5 Baths',
    area: '340 – 420 m²',
    handover: 'Q4 2026',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80'
    ],
    tagline: 'Ultra-exclusive double-height penthouses with private cantilevered sky terraces and Jacuzzi.',
    description: 'Designed for diplomats and discerning investors, the Crown Penthouses feature 6-meter double-height living ceilings, floor-to-ceiling Low-E curtain walls overlooking Addis Ababa skyline, and direct private key-card elevator access.',
    amenities: ['Direct Private Key-Card Lift Access', 'Private Jacuzzi & Sunset Sky Garden', 'Italian Marble Flooring & Poggenpohl Kitchens', 'Two Dedicated Underground Parking Bays', 'Personalized Concierge & Chauffeur Lounge'],
    isFeatured: true
  },
  {
    id: 'p3-commercial-plaza-22',
    title: 'P3 Prime Business & Commercial Hub (22 Axis)',
    category: 'COMMERCIAL',
    status: 'Pre-Launch',
    location: '22 Mazoria Main Commercial Avenue, Addis Ababa',
    siteZone: '22 Mazoria',
    price: 'From ETB 180,000 / m²',
    priceUsd: '$1,400 USD / m²',
    bedrooms: 'Modular Office Suites',
    bathrooms: 'Common Core Restrooms',
    area: '65 – 1,200 m²',
    handover: 'Q1 2027',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80'
    ],
    tagline: 'Grade-A corporate office headquarters & luxury brand retail showrooms on high-traffic 22 corridor.',
    description: 'A 18-story state-of-the-art corporate landmark offering flexible open-plan floor plates, energy-efficient solar facades, 3 basement levels of robotic parking, and banking halls on ground level.',
    amenities: ['Grade-A Corporate Certification', 'High-Traffic Retail Ground Floor Spaces', 'Triple High-Speed Schindler Elevators', 'Full Building Management System (BMS)', 'Dual Redundant Power & 40,000L Water Reserve'],
    isFeatured: false
  },
  {
    id: 'p3-green-villas-cmc',
    title: 'P3 Green Oasis Luxury Villas (CMC Zone)',
    category: 'RESIDENTIAL',
    status: 'Under Construction',
    location: 'CMC Sector, Addis Ababa',
    siteZone: 'CMC',
    price: 'ETB 24,500,000',
    priceUsd: '$190,000 USD',
    bedrooms: '4 & 5 Bedrooms',
    bathrooms: '4 Baths',
    area: '280 – 360 m²',
    handover: 'Q3 2026',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80'
    ],
    tagline: 'Private contemporary townhouses with solar photovoltaic roofs, private gardens, and 2-car garages.',
    description: 'An exclusive gated enclave of 36 contemporary villas nestled in quiet CMC. Engineered with biophilic principles, sound-deadened thermal mass concrete, and smart home automation.',
    amenities: ['Private Perimeter Walled Gardens', 'Integrated Rooftop Solar PV System', 'Clubhouse with Swimming Pool & Tennis Court', 'Guaranteed Title Deed Transfer Upon Handover'],
    isFeatured: false
  }
];

export const CORE_DISCIPLINES: CoreDiscipline[] = [
  {
    id: 'general-contracting',
    title: 'Turnkey General Contracting',
    iconType: 'floors',
    description: 'Full-cycle Class-1 building execution from deep excavation to MEP installation and luxury architectural finishes.',
    subfeatures: ['MoWUD Class-1 Licensed', 'Seismic RC Dual Frame', '10-Year Decennial Warranty'],
    linkService: 'Turnkey Construction & Real Estate Development'
  },
  {
    id: 'luxury-real-estate',
    title: 'Luxury Real Estate Development',
    iconType: 'rooms',
    description: 'Prime residential towers, commercial plazas, and penthouses in 22 Mazoria, Haile Garment, Bole, and CMC with 100% legal title deed guarantees.',
    subfeatures: ['Guaranteed Title Deed', 'Escrow Account Safety', 'Flexible Milestone Plans'],
    linkService: 'Luxury Real Estate Acquisition'
  },
  {
    id: 'structural-geotech',
    title: 'Engineering & Structural Rigor',
    iconType: 'basements',
    description: 'Advanced finite element structural modeling (ETABS/SAFE), deep bored piling, and geotechnical soil stabilization.',
    subfeatures: ['EBCS-8 Seismic Standards', 'FIDIC QA/QC Testing', 'Zero Structural Failures'],
    linkService: 'Structural Design & Geotechnical Auditing'
  }
];

export const STATS_DATA: StatMetric[] = [
  {
    id: 'stat-units',
    targetValue: 850,
    prefix: '',
    suffix: '+',
    decimals: 0,
    label: 'Luxury Units Delivered & Active',
    subtext: 'High-end apartments, penthouses, and commercial spaces engineered across prime Addis locations.',
    metricCode: 'METRIC-DEV-01',
    badge: 'DELIVERED HOMES'
  },
  {
    id: 'stat-capital',
    targetValue: 6.2,
    prefix: 'ETB ',
    suffix: 'B+',
    decimals: 1,
    label: 'Development Value Under Construction',
    subtext: 'Class-1 commercial high-rises and residential towers in 22 Mazoria and Haile Garment corridors.',
    metricCode: 'METRIC-CAP-02',
    badge: 'CAPITAL ASSETS'
  },
  {
    id: 'stat-safety',
    targetValue: 0,
    prefix: '',
    suffix: ' ZERO',
    decimals: 0,
    label: 'Structural Defect Record in 14 Years',
    subtext: 'Uncompromising engineering supervision, slump test verification, and EBCS-8 seismic compliance.',
    metricCode: 'METRIC-SAFE-03',
    badge: '100% STRUCTURAL INTEGRITY'
  },
  {
    id: 'stat-satisfaction',
    targetValue: 99.4,
    prefix: '',
    suffix: '%',
    decimals: 1,
    label: 'On-Time Handover & Client Satisfaction',
    subtext: 'Transparent milestone escrow billing and prompt title deed (Yekartab Bet) delivery.',
    metricCode: 'METRIC-SAT-04',
    badge: 'INVESTOR TRUST'
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'P3 Sky Tower (22 Mazoria)',
    category: 'BUILDINGS',
    subcategory: '24-Story Residential Landmark',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop',
    location: '22 Mazoria, Haya Hulet, Addis Ababa',
    area: '34,500 m²',
    client: 'P3 Real Estate Development',
    year: '2026',
    isFeatured: true,
    featuredTagline: 'Class-1 High-Rise Construction',
    description: '24-story residential luxury tower with 3 underground parking basements, post-tensioned slabs, and panoramic city views.'
  },
  {
    id: 'proj-2',
    title: 'P3 Heights Complex (Haile Garment)',
    category: 'RESIDENTIAL',
    subcategory: 'Twin Tower Residential Enclave',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=800&auto=format&fit=crop',
    location: 'Haile Garment (WPQM+8H2), Addis Ababa',
    area: '28,200 m²',
    client: 'P3 Group & Homeowners Consortium',
    year: '2026',
    isFeatured: false,
    description: 'Modern residential community with dedicated precast infrastructure, borehole water reserves, and commercial convenience retail.'
  },
  {
    id: 'proj-3',
    title: 'P3 Commercial Plaza (22 Axis)',
    category: 'COMMERCIAL',
    subcategory: 'Grade-A Corporate Headquarters',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    location: '22 Mazoria Commercial Strip',
    area: '22,400 m²',
    client: 'P3 Commercial Assets',
    year: '2025',
    isFeatured: false,
    description: '18-story commercial high-rise with curtain-wall Low-E glazing, robotic basement parking, and financial banking halls.'
  },
  {
    id: 'proj-4',
    title: 'Kazanchis Executive Towers',
    category: 'OFFICE',
    subcategory: 'Commercial Financial Center',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb180c5f5?q=80&w=800&auto=format&fit=crop',
    location: 'Kazanchis Financial District',
    area: '38,000 m²',
    client: 'Capital Investment Holdings',
    year: '2024',
    isFeatured: false,
    description: 'Turnkey structural construction and MEP engineering for high-density corporate offices.'
  },
  {
    id: 'proj-5',
    title: 'Haile Garment Precast & Logistics Yard',
    category: 'INFRASTRUCTURE',
    subcategory: 'Engineering & Fabrication Facility',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop',
    location: 'Haile Garment Site CDC',
    area: '45,000 m²',
    client: 'P3 Construction Operations',
    year: '2025',
    isFeatured: false,
    description: 'Central heavy machinery depot, concrete batching plant, and precast beam manufacturing facility.'
  },
  {
    id: 'proj-6',
    title: 'P3 Signature Penthouse Terraces',
    category: 'INTERIOR',
    subcategory: 'Ultra-Luxury Bespoke Interiors',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
    location: '22 Mazoria Summit Floors',
    area: '8,400 m²',
    client: 'Private Executive Clients',
    year: '2025',
    isFeatured: false,
    description: 'Double-height ceilings, bespoke Italian marble, private Jacuzzi terraces, and smart home automation.'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'general-contracting-turnkey',
    numberCode: 'P3-01',
    title: 'Turnkey General Contracting & Development',
    tagline: 'Complete Class-1 engineering construction, supply chain procurement, and architectural execution.',
    category: 'GENERAL CONTRACTING',
    standardCodes: ['MoWUD Class-1 GC', 'EBCS-EN Building Codes', 'FIDIC Standards'],
    description: 'We execute complete turnkey commercial and residential high-rises from ground breaking to key handover.',
    fieldDeliverables: ['Master Construction Schedule', 'QA/QC Cylinder Compressive Tests', 'Occupancy Certificate Clearance'],
    inspectionPoints: ['Pre-pour slump and rebar ties', 'Concrete curing and strength validation', 'MEP pressure tests'],
    localAddisContext: 'Calibrated for 22 Mazoria and Haile Garment geological conditions.',
    primaryRiskMitigated: 'Construction delays and substandard structural detailing.'
  }
];

export const PROCESS_PHASES: ProcessPhase[] = [];
export const MANIFESTO_PILLARS: ManifestoPillar[] = [];

export const PARTNER_LOGOS = [
  { id: 'p-1', name: 'MOWUD', category: 'Class-1 GC Licensing' },
  { id: 'p-2', name: 'SCHINDLER', category: 'Elevator Systems' },
  { id: 'p-3', name: 'APEX REBAR', category: 'High-Yield B500B Steel' },
  { id: 'p-4', name: 'READYMIX ET', category: 'C35/45 Concrete' },
  { id: 'p-5', name: 'SAINT GOBAIN', category: 'Acoustic Insulation' },
  { id: 'p-6', name: 'CBE ESCROW', category: 'Guaranteed Title Deeds' }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'news-1',
    tag: 'Real Estate',
    title: 'Why 22 Mazoria and Haile Garment are Addis Ababa’s highest ROI real estate corridors',
    excerpt: 'Analyzing infrastructure expansion, road connectivity, and rental yield appreciation across prime residential and commercial zones in Addis Ababa.',
    date: 'Sep 2026',
    readTime: '4 min read',
    author: 'P3 Real Estate Advisory Team',
    content: [
      'The urban transformation in 22 Mazoria and the expanding transport arteries connecting Haile Garment have spurred extraordinary capital appreciation of 18–24% annually.',
      '1. Prime connectivity: 22 Mazoria provides immediate 10-minute access to Bole Airport, Kazanchis financial hub, and Meskel Square.',
      '2. Haile Garment corridor offers superior plot sizes, modern infrastructure master planning, and value pricing for family living.',
      '3. P3 Construction Group provides direct developer pricing with guaranteed title deed (Yekartab Bet) protection upon completion.'
    ]
  },
  {
    id: 'news-2',
    tag: 'Engineering',
    title: 'MoWUD Class-1 structural standards: How P3 guarantees zero-defect building resilience',
    excerpt: 'From high-altitude concrete batching at 2,355m to Rift Valley seismic reinforcement detailing under revised EBCS-8 building codes.',
    date: 'Sep 2026',
    readTime: '5 min read',
    author: 'Chief Resident Engineer, P3 Group',
    content: [
      'At P3 Construction Group, our Class-1 MoWUD license reflects rigorous adherence to Ethiopian Building Codes (EBCS-EN) and international FIDIC standards.',
      'We test every batch of ready-mix concrete with slump and compressive crushing cylinders at 7 and 28 days.',
      'Our post-tensioned floor slabs maximize clear living spans while eliminating bulky interior columns.'
    ]
  },
  {
    id: 'news-3',
    tag: 'Investor Guide',
    title: 'Securing your property investment in Ethiopia: Escrow protections and title deeds',
    excerpt: 'Essential checklist for local and diaspora home buyers on verifying construction progress milestones and legal ownership guarantees.',
    date: 'Sep 2026',
    readTime: '4 min read',
    author: 'Legal & Escrow Counsel, P3 Group',
    content: [
      'Buying off-plan real estate in Addis Ababa requires verified contractor credentials and transparent financial milestone stages.',
      'P3 guarantees bank-held escrow milestones where payments are released strictly upon physical structural completion of each floor.',
      'All apartment buyers receive individualized title deed documents (Yekartab Bet) directly from the municipal land administration.'
    ]
  }
];
