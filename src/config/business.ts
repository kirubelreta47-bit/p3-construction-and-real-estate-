/**
 * Business Configuration & Legal Facts
 * Centralized repository of all corporate identifiers, contact points, physical locations,
 * licensing credentials, and price ranges.
 * 
 * NOTE: Values marked with `// TODO: VERIFY WITH CLIENT` need explicit client validation before final launch.
 */

export interface OfficeLocation {
  id: string;
  name: string;
  area: string;
  streetAddress: string;
  locality: string;
  region: string;
  postalCode: string;
  country: string;
  focus: string;
  hours: string;
  phone: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  mapUrl?: string;
  embedUrl?: string;
}

export const BUSINESS_CONFIG = {
  // Legal & Corporate Identity
  legalName: 'P3 Construction Group & Real Estate', // TODO: VERIFY WITH CLIENT
  shortName: 'P3 Construction & Real Estate',
  tagline: 'Premier Construction Engineering & Luxury Real Estate Developers in Addis Ababa',
  mowudLicense: 'GC-01/ET/9824', // TODO: VERIFY WITH CLIENT
  licenseTitle: 'MoWUD Class-1 General Contractor #GC-01/ET/9824', // TODO: VERIFY WITH CLIENT

  // Contact Points
  primaryPhone: '+251 11 661 4455', // TODO: VERIFY WITH CLIENT
  secondaryPhone: '+251 91 123 7890', // TODO: VERIFY WITH CLIENT
  whatsAppNumber: '251911237890', // TODO: VERIFY WITH CLIENT
  email: 'info.p3construction@gmail.com', // TODO: VERIFY WITH CLIENT

  // Price Ranges
  constructionPriceRange: 'ETB 28,000 - ETB 68,000 / m²', // TODO: VERIFY WITH CLIENT
  propertyPriceRange: 'ETB 9,500,000 - 29,000,000', // TODO: VERIFY WITH CLIENT

  // Standard Weekly Working Hours
  standardHours: [
    {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00', // TODO: VERIFY WITH CLIENT
      closes: '18:30'  // TODO: VERIFY WITH CLIENT
    },
    {
      days: ['Saturday'],
      opens: '08:30', // TODO: VERIFY WITH CLIENT
      closes: '16:00'  // TODO: VERIFY WITH CLIENT
    }
  ],

  // Office Locations in Addis Ababa
  offices: [
    {
      id: 'hq-22-mazoria',
      name: '22 Mazoria Executive & Sales Headquarters',
      area: '22 Mazoria (Haya Hulet)',
      streetAddress: 'P3 Plaza, 4th Floor, 22 Mazoria (Beside Gollagul Tower)', // TODO: VERIFY WITH CLIENT
      locality: 'Addis Ababa',
      region: 'Addis Ababa',
      postalCode: '1000',
      country: 'ET',
      focus: 'Real Estate Sales, Architectural Consultations & Executive Management',
      hours: 'Mon – Fri: 8:00 AM – 6:30 PM | Sat: 8:30 AM – 4:00 PM', // TODO: VERIFY WITH CLIENT
      phone: '+251 11 661 4455', // TODO: VERIFY WITH CLIENT
      coordinates: {
        latitude: 9.0142, // TODO: VERIFY WITH CLIENT
        longitude: 38.7845 // TODO: VERIFY WITH CLIENT
      },
      mapUrl: 'https://maps.google.com/?q=22+Mazoria+Addis+Ababa+Ethiopia',
      embedUrl: 'https://maps.google.com/maps?q=9.0142,38.7845&hl=en&z=15&output=embed'
    },
    {
      id: 'branch-haile-garment',
      name: 'Haile Garment Branch & Operations Office',
      area: 'Haile Garment Corridor',
      streetAddress: 'Haile Garment - CDC, WPQM+8H2', // TODO: VERIFY WITH CLIENT
      locality: 'Addis Ababa',
      region: 'Addis Ababa',
      postalCode: '1000',
      country: 'ET',
      focus: 'Branch Office, Engineering Advisory & Regional Operations Management',
      hours: 'Mon – Sat: 8:00 AM – 6:00 PM', // TODO: VERIFY WITH CLIENT
      phone: '+251 91 123 7890', // TODO: VERIFY WITH CLIENT
      coordinates: {
        latitude: 8.9377004, // TODO: VERIFY WITH CLIENT
        longitude: 38.7355523 // TODO: VERIFY WITH CLIENT
      },
      mapUrl: 'https://maps.google.com/?q=Haile+Garment+Addis+Ababa+Ethiopia',
      embedUrl: 'https://maps.google.com/maps?q=8.9377004,38.7355523&hl=en&z=15&output=embed'
    }
  ] as OfficeLocation[]
};
