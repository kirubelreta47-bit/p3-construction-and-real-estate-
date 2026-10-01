import { 
  ServiceItem, 
  ProcessPhase, 
  StatMetric, 
  ManifestoPillar, 
  RealEstateProperty, 
  ProjectItem, 
  NewsArticle,
  FAQItem,
  TeamMember,
  TestimonialItem
} from './types';

import { BUSINESS_CONFIG } from './config/business';

export interface CoreDiscipline {
  id: string;
  title: string;
  iconType: string;
  description: string;
  subfeatures: string[];
  linkService: string;
}

export const COMPANY_INFO = {
  name: BUSINESS_CONFIG.legalName,
  shortName: BUSINESS_CONFIG.shortName,
  tagline: BUSINESS_CONFIG.tagline,
  mowudLicense: BUSINESS_CONFIG.licenseTitle,
  phone1: BUSINESS_CONFIG.primaryPhone,
  phone2: BUSINESS_CONFIG.secondaryPhone,
  email: BUSINESS_CONFIG.email,
  sites: BUSINESS_CONFIG.offices.map(office => ({
    id: office.id,
    name: office.name,
    area: office.area,
    address: `${office.streetAddress}, ${office.locality}`,
    focus: office.focus,
    hours: office.hours,
    mapUrl: office.mapUrl || '',
    embedUrl: office.embedUrl || '',
    phone: office.phone
  }))
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

export const PROCESS_PHASES: ProcessPhase[] = [
  {
    phaseNum: '01',
    code: 'FEASIBILITY-SOIL',
    name: 'Consultation & Geotechnical Core Drilling',
    subtitle: 'Site investigation, basalt rock depth mapping & seismic risk auditing',
    timeframe: 'Weeks 1 – 3',
    objective: 'Establish definitive soil bearing capacity, groundwater tables, and structural foundation feasibility in 22 Mazoria or Haile Garment.',
    gateChecks: [
      { item: 'Borehole Core Sampling', requirement: 'Standard Penetration Test (SPT) down to bedrock depth', criticality: 'CRITICAL' },
      { item: 'Topographic Boundary Survey', requirement: 'Addis Ababa Cadastral Masterplan alignment', criticality: 'MANDATORY' },
      { item: 'Investment Feasibility', requirement: 'Financial milestone ROI & unit yield analysis', criticality: 'HIGH' }
    ],
    keyDeliverables: ['Geotechnical Soil Investigation Report', 'Foundation Type Recommendations (Raft vs. Deep Piles)', 'Preliminary Feasibility Dossier'],
    signOffRole: 'Senior Geotechnical Engineer & Client'
  },
  {
    phaseNum: '02',
    code: 'ARCH-BIM-SEISMIC',
    name: 'Architectural Design & 3D BIM Structural Modeling',
    subtitle: 'Full 3D modeling, ETABS finite element calculation, and EBCS-8 compliance',
    timeframe: 'Weeks 4 – 8',
    objective: 'Transform client vision into high-efficiency architectural layouts and earthquake-resilient reinforced concrete dual frames.',
    gateChecks: [
      { item: 'Structural Finite Element Modeling', requirement: 'ETABS & SAFE stress and wind deflection checks', criticality: 'CRITICAL' },
      { item: '3D BIM Clash Detection', requirement: 'Zero conflicts between MEP pipes, elevators & beams', criticality: 'HIGH' },
      { item: 'Daylight & Ventilation Efficiency', requirement: 'Optimization of Addis Ababa natural light and thermal comfort', criticality: 'HIGH' }
    ],
    keyDeliverables: ['Complete Architectural Working Drawings', 'Certified Structural Calculation Book', '3D Photorealistic Renderings & VR Tour'],
    signOffRole: 'Lead Architect & Chief Structural Engineer (PE)'
  },
  {
    phaseNum: '03',
    code: 'PERMIT-CADASTRE',
    name: 'Municipal Permitting & Regulatory Approvals',
    subtitle: 'City building permit acquisition, utility right-of-way, and masterplan clearance',
    timeframe: 'Weeks 8 – 12',
    objective: 'Secure 100% legal building permits from Addis Ababa Construction & Building Permit Bureau with zero regulatory ambiguities.',
    gateChecks: [
      { item: 'MoWUD Class-1 Compliance Verification', requirement: 'Authorized engineering registration stamp', criticality: 'MANDATORY' },
      { item: 'Environmental & Fire Safety Sign-off', requirement: 'Addis Fire & Emergency Prevention Agency clearance', criticality: 'HIGH' },
      { item: 'EEU & AAWSA Utility Allocation', requirement: 'Dedicated 3-phase grid transformer & water main connections', criticality: 'MANDATORY' }
    ],
    keyDeliverables: ['Official Addis Ababa Municipal Building Permit', 'Approved Architectural & Structural Stamped Blueprints', 'Legal Site Hoarding & Demolition Clearances'],
    signOffRole: 'Municipal Building Authority Officer'
  },
  {
    phaseNum: '04',
    code: 'BUILD-QAQC',
    name: 'Class-1 Precision Construction & Material Batching',
    subtitle: 'C35/45 concrete testing, high-yield rebar, and laser-guided superstructure execution',
    timeframe: 'Milestone Phased',
    objective: 'Execute high-rise construction with zero structural defects, continuous slump tests, and strict FIDIC contract supervision.',
    gateChecks: [
      { item: '7-Day & 28-Day Crushing Tests', requirement: 'C35/45 ready-mix compressive strength compliance', criticality: 'CRITICAL' },
      { item: 'Apex B500B Rebar Tensile Check', requirement: 'Tensile yield strength certificate per steel consignment', criticality: 'CRITICAL' },
      { item: 'Independent Third-Party Audit', requirement: 'Weekly site progress logs & photographic milestone audits', criticality: 'HIGH' }
    ],
    keyDeliverables: ['Foundation Pour Quality Clearance', 'Floor-by-Floor Slab Handover Records', 'MEP Pressure Test Certificates'],
    signOffRole: 'Resident QA/QC Materials Engineer'
  },
  {
    phaseNum: '05',
    code: 'HANDOVER-TITLE',
    name: 'Milestone Handover & Guaranteed Title Deed Transfer',
    subtitle: 'Final snagging audit, Occupancy Certificate clearance, and individual Yekartab Bet issuance',
    timeframe: 'Final Phase',
    objective: 'Deliver flawless turn-key keys with certified municipal occupancy authorization and registered legal title deed ownership.',
    gateChecks: [
      { item: 'Comprehensive Snagging Audit', requirement: '100% resolution of interior fixtures, glazing & electrical outlets', criticality: 'HIGH' },
      { item: 'Addis Ababa Occupancy Certificate', requirement: 'Official Municipal authorization for commercial/residential occupancy', criticality: 'MANDATORY' },
      { item: 'Individual Title Deed Issuance', requirement: 'Yekartab Bet transferred directly into buyer’s legal name', criticality: 'CRITICAL' }
    ],
    keyDeliverables: ['Individual Registered Title Deed (የካርታ ቤት)', '10-Year Decennial Structural Warranty Certificate', 'Turnkey Key Handover & Resident Welcome Pack'],
    signOffRole: 'P3 Executive Managing Director & Municipal Land Registrar'
  }
];

export const MANIFESTO_PILLARS: ManifestoPillar[] = [];

export const PARTNER_LOGOS = [
  { id: 'p-1', name: 'MOWUD', category: 'Class-1 GC Licensing (#GC-01/ET/9824)' },
  { id: 'p-2', name: 'COMMERCIAL BANK OF ETHIOPIA', category: 'Escrow & Diaspora Account Partner' },
  { id: 'p-3', name: 'AWASH BANK', category: 'Mortgage & Home Financing Facility' },
  { id: 'p-4', name: 'SCHINDLER', category: 'High-Speed Precision Elevator Systems' },
  { id: 'p-5', name: 'APEX REBAR', category: 'High-Yield B500B Seismic Steel' },
  { id: 'p-6', name: 'READYMIX ETHIOPIA', category: 'Batch-Certified C35/45 Concrete' }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Dawit Gebre-Mariam',
    role: 'Diaspora Real Estate Investor',
    company: 'Washington D.C. / Addis Ababa',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: 'Purchasing an off-plan apartment at P3 Sky Tower in 22 Mazoria while residing in the US was completely transparent. The milestone escrow account protected every dollar, and their team sent drone updates of every concrete pour. The individual title deed was transferred exactly as promised.',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Bethlehem Tadesse',
    role: 'Commercial Managing Director',
    company: 'Nexus Logistics & Trade Ethiopia',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    quote: 'We commissioned P3 for turnkey contracting on our commercial premises in 22. Their structural rigor, deep piling into volcanic rock, and flawless finishing delivered 3 months ahead of schedule. Truly a Class-1 contractor you can stake your balance sheet on.',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Eng. Michael Kebede',
    role: 'Senior Infrastructure Consultant & Homeowner',
    company: 'Resident at P3 Heights (Haile Garment)',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    quote: 'Being a civil engineer myself, I personally inspected the concrete cylinder crushing tests and seismic beam ties at Haile Garment. P3 refuses to cut corners. The backup water borehole and dedicated transformer make this the most resilient residential complex in the corridor.',
    rating: 5
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Eng. Yonas Hailu, PE',
    role: 'Chief Resident Structural Engineer',
    credential: 'MSc Structural Dynamics & Earthquake Engineering, AAU',
    experience: '18+ Years Experience',
    specialty: 'High-rise dual frames, post-tensioned slabs, EBCS-8 seismic standards',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'team-2',
    name: 'Arch. Rahel Demissie',
    role: 'Principal Architectural Director',
    credential: 'BArch Architecture & Urban Planning, EIABC',
    experience: '15+ Years Experience',
    specialty: 'Luxury residential typology, biophilic ventilation, 3D BIM integration',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'team-3',
    name: 'Eng. Solomon Bekele',
    role: 'Director of QA/QC & Geotechnical Systems',
    credential: 'BSc Civil & Geotechnical Engineering',
    experience: '16+ Years Experience',
    specialty: 'Foundation core drilling, C35/45 concrete crushing tests, FIDIC audits',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'team-4',
    name: 'Selamawit Assefa, Esq.',
    role: 'Head of Real Estate Escrow & Diaspora Advisory',
    credential: 'LL.B Commercial Real Estate Law & Land Administration',
    experience: '12+ Years Experience',
    specialty: 'Title deed (የካርታ ቤት) conveyancing, bank escrow compliance, remote PoA',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-title-deed',
    category: 'LEGAL & TITLE',
    question: 'How does P3 Construction guarantee legal title deed (Yekartab Bet / የካርታ ቤት) ownership?',
    questionAmharic: 'የካርታ ቤት ህጋዊ ባለቤትነት እንዴት ዋስትና ይሰጣል?',
    answer: 'Every property developed by P3 comes with an irrevocable legal guarantee of individual Title Deed (Yekartab Bet) ownership. Our projects possess verified Addis Ababa municipal land lease documentation and approved masterplans. Upon completion, the title deed is officially transferred and registered in your name directly through the Addis Ababa Land Administration Bureau.'
  },
  {
    id: 'faq-milestone-payment',
    category: 'PAYMENT & ESCROW',
    question: 'What are the payment milestones and bank escrow protections?',
    questionAmharic: 'የክፍያ ደረጃዎች እና የባንክ ዋስትና ምን ይመስላሉ?',
    answer: 'We provide structured milestone-based payment plans: 15% upon reservation/contract signing, followed by phased progress installments tied strictly to verified physical benchmarks (Foundation, Ground Floor, Mid-Rise Superstructure, Rough MEP, Finishing), and the final 10% held until key handover and title deed transfer. All transactions can be routed via bank escrow partnerships with Commercial Bank of Ethiopia (CBE) and Awash Bank.'
  },
  {
    id: 'faq-mowud-grade1',
    category: 'CONSTRUCTION',
    question: 'What does P3’s MoWUD Class-1 General Contractor license represent?',
    questionAmharic: 'የደረጃ 1 ጠቅላይ ስራ ተቋራጭ ፈቃድ ምን ያረጋግጣል?',
    answer: 'Class-1 (GC-1 #GC-01/ET/9824) is the highest operational classification awarded by the Ethiopian Ministry of Urban Development and Construction (MoWUD). It certifies that P3 maintains in-house heavy construction machinery, certified resident structural engineers, state-of-the-art testing equipment, and unlimited financial bonding capacity to execute high-rises exceeding 20+ stories.'
  },
  {
    id: 'faq-diaspora-buyers',
    category: 'DIASPORA',
    question: 'Can Ethiopian diaspora or overseas buyers purchase property remotely?',
    questionAmharic: 'ዲያስፖራዎች ከውጭ ሀገር ሆነው ቤት መግዛት ይችላሉ?',
    answer: 'Yes! Over 40% of our buyers are Ethiopian diaspora living in North America, Europe, and the Middle East. P3 provides a dedicated Diaspora Liaison Office. We facilitate authenticated Power of Attorney (PoA) guidance through Ethiopian embassies, secure foreign currency wire accounts (USD, EUR, GBP), and provide bi-weekly high-definition drone video inspections of your unit’s construction progress.'
  },
  {
    id: 'faq-handover-delays',
    category: 'WARRANTY',
    question: 'What are the project handover timelines and delay penalty guarantees?',
    questionAmharic: 'የማስረከቢያ ጊዜ እና የማዘግየት ቅጣት ዋስትናዎች ምንድን ናቸው?',
    answer: 'P3 sets clear contractual delivery deadlines: Q4 2026 for P3 Sky Tower (22 Mazoria) and Q2 2026 for P3 Heights (Haile Garment). Our contracts include contractual penalty clauses and liquid damages for unjustifiable contractor delays, ensuring we stay 100% accountable to your moving and investment timeline.'
  },
  {
    id: 'faq-structural-warranty',
    category: 'WARRANTY',
    question: 'What structural warranty and post-handover maintenance does P3 provide?',
    questionAmharic: 'የ10 ዓመት መዋቅራዊ ዋስትና እና የጥገና አገልግሎት ይሰጣል?',
    answer: 'We provide a 10-Year Decennial Structural Warranty covering all load-bearing reinforced concrete elements, foundation stability, and core earthquake frames. Additionally, all MEP systems, Schindler elevators, and backup generators carry a comprehensive 12-month defect liability period with dedicated on-site property management.'
  }
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
