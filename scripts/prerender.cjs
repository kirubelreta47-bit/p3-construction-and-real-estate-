const fs = require('fs');
const path = require('path');

// 1. Determine SITE_URL
const rawSiteUrl = process.env.SITE_URL || process.env.VITE_SITE_URL || 'https://REPLACE-WITH-DOMAIN.com';
const SITE_URL = rawSiteUrl.replace(/\/+$/, '');

const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('Error: dist/index.html not found. Run `vite build` first.');
  process.exit(1);
}

const templateHtml = fs.readFileSync(templatePath, 'utf8');

// 2. Business facts (aligned with src/config/business.ts)
const business = {
  legalName: 'P3 Construction Group & Real Estate',
  shortName: 'P3 Construction & Real Estate',
  tagline: 'Premier Construction Engineering & Luxury Real Estate Developers in Addis Ababa',
  mowudLicense: 'GC-01/ET/9824',
  licenseTitle: 'MoWUD Class-1 General Contractor #GC-01/ET/9824',
  primaryPhone: '+251 11 661 4455',
  secondaryPhone: '+251 91 123 7890',
  email: 'info.p3construction@gmail.com',
  constructionPriceRange: 'ETB 28,000 - ETB 68,000 / m²',
  streetAddress: 'P3 Plaza, 4th Floor, 22 Mazoria (Beside Gollagul Tower)',
  locality: 'Addis Ababa',
  region: 'Addis Ababa',
  postalCode: '1000',
  country: 'ET',
  latitude: 9.0142,
  longitude: 38.7845
};

// 3. Complete route metadata registry
const routes = [
  {
    path: '/',
    outputPath: 'index.html',
    title: 'P3 Construction & Real Estate | Addis Ababa',
    description: 'Class-1 general contractor and real estate developer in Addis Ababa. Building construction, structural engineering, and apartments in 22 & Haile Garment.',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'ProfessionalService', 'GeneralContractor'],
      '@id': `${SITE_URL}/#organization`,
      'name': business.legalName,
      'alternateName': business.shortName,
      'url': `${SITE_URL}/`,
      'logo': `${SITE_URL}/favicon.svg`,
      'image': `${SITE_URL}/og-image.jpg`,
      'description': business.tagline,
      'telephone': business.primaryPhone,
      'email': business.email,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': business.streetAddress,
        'addressLocality': business.locality,
        'addressRegion': business.region,
        'postalCode': business.postalCode,
        'addressCountry': business.country
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': business.latitude,
        'longitude': business.longitude
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          'opens': '08:00',
          'closes': '18:30'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Saturday'],
          'opens': '08:30',
          'closes': '16:00'
        }
      ],
      'areaServed': [
        { '@type': 'City', 'name': 'Addis Ababa' },
        { '@type': 'AdministrativeArea', 'name': 'Bole Sub-City' },
        { '@type': 'AdministrativeArea', 'name': 'Nifas Silk-Lafto Sub-City' },
        { '@type': 'Country', 'name': 'Ethiopia' }
      ],
      'priceRange': business.constructionPriceRange,
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Construction & Real Estate Services in Addis Ababa',
        'itemListElement': [
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Construction Cost Estimation & BOQ Preparation',
              'url': `${SITE_URL}/services/cost-estimation`
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Structural Engineering & Seismic EBCS-8 Design',
              'url': `${SITE_URL}/services/structural-engineering`
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Turnkey General Contracting Class-1',
              'url': `${SITE_URL}/services/turnkey-construction`
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Geotechnical Soil Investigation & Core Drilling',
              'url': `${SITE_URL}/services/geotechnical-investigation`
            }
          }
        ]
      }
    }
  },
  {
    path: '/services',
    outputPath: 'services/index.html',
    aliasPath: 'services.html',
    title: 'Construction Services Addis Ababa | P3 Group',
    description: 'Class-1 general contracting, structural engineering, BOQ estimation, and soil investigation services across Addis Ababa and greater Ethiopia.',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      'name': `${business.legalName} - Engineering & General Contracting`,
      'url': `${SITE_URL}/services`,
      'telephone': business.primaryPhone,
      'email': business.email,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': business.streetAddress,
        'addressLocality': business.locality,
        'addressCountry': business.country
      }
    }
  },
  {
    path: '/services/cost-estimation',
    outputPath: 'services/cost-estimation/index.html',
    aliasPath: 'services/cost-estimation.html',
    title: 'Construction Cost Estimation Addis Ababa | P3',
    description: 'Accurate construction cost estimation, BOQ preparation, and current market m² rate advisory (ETB 28k–68k) in Addis Ababa, Ethiopia.',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Construction Cost Estimation & BOQ Advisory Addis Ababa',
      'serviceType': 'Construction Cost Estimation',
      'provider': {
        '@type': 'GeneralContractor',
        'name': business.legalName,
        'telephone': business.primaryPhone,
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': business.streetAddress,
          'addressLocality': business.locality,
          'addressCountry': business.country
        }
      },
      'areaServed': { '@type': 'City', 'name': 'Addis Ababa' },
      'description': 'Certified construction cost estimation, bill of quantities (BOQ) preparation, and quantity surveying in Addis Ababa.'
    }
  },
  {
    path: '/services/structural-engineering',
    outputPath: 'services/structural-engineering/index.html',
    aliasPath: 'services/structural-engineering.html',
    title: 'Structural Engineering Addis Ababa | P3 Group',
    description: 'Licensed structural engineering consultancy in Addis Ababa. EBCS-8 seismic analysis, ETABS modeling, dual frame, and post-tensioned slabs.',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Structural Engineering & Seismic Design Addis Ababa',
      'serviceType': 'Structural Engineering',
      'provider': {
        '@type': 'GeneralContractor',
        'name': business.legalName,
        'telephone': business.primaryPhone,
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': business.streetAddress,
          'addressLocality': business.locality,
          'addressCountry': business.country
        }
      },
      'areaServed': { '@type': 'City', 'name': 'Addis Ababa' },
      'description': 'Advanced finite element structural modeling, seismic dual frame engineering under EBCS-8 codes, and post-tensioned concrete slabs in Addis Ababa.'
    }
  },
  {
    path: '/services/turnkey-construction',
    outputPath: 'services/turnkey-construction/index.html',
    aliasPath: 'services/turnkey-construction.html',
    title: 'Turnkey General Contractor Addis Ababa | P3',
    description: 'Turnkey construction and general contracting in Addis Ababa by MoWUD Class-1 licensed builder (#GC-01/ET/9824). Commercial and residential builds.',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Turnkey General Contracting & Building Construction Addis Ababa',
      'serviceType': 'Turnkey General Contracting',
      'provider': {
        '@type': 'GeneralContractor',
        'name': business.legalName,
        'telephone': business.primaryPhone,
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': business.streetAddress,
          'addressLocality': business.locality,
          'addressCountry': business.country
        }
      },
      'areaServed': { '@type': 'City', 'name': 'Addis Ababa' },
      'description': 'End-to-end Class-1 general contracting, high-rise structural execution, MEP engineering, and interior finishing under MoWUD license GC-01/ET/9824.'
    }
  },
  {
    path: '/services/geotechnical-investigation',
    outputPath: 'services/geotechnical-investigation/index.html',
    aliasPath: 'services/geotechnical-investigation.html',
    title: 'Geotechnical Investigation Addis Ababa | P3',
    description: 'Expert geotechnical investigation, core drilling, SPT tests, and foundation engineering for expansive black cotton soils across Addis Ababa.',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Geotechnical Soil Investigation & Core Drilling Addis Ababa',
      'serviceType': 'Geotechnical Engineering',
      'provider': {
        '@type': 'GeneralContractor',
        'name': business.legalName,
        'telephone': business.primaryPhone,
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': business.streetAddress,
          'addressLocality': business.locality,
          'addressCountry': business.country
        }
      },
      'areaServed': { '@type': 'City', 'name': 'Addis Ababa' },
      'description': 'Rotary core drilling, Standard Penetration Tests (SPT), expansive black cotton soil stabilization, and deep piling foundation design in Addis Ababa.'
    }
  },
  {
    path: '/properties',
    outputPath: 'properties/index.html',
    aliasPath: 'properties.html',
    title: 'Apartments For Sale Addis Ababa | P3 Real Estate',
    description: 'Browse verified luxury apartments and penthouses for sale in 22 Mazoria and Haile Garment, Addis Ababa. Title deed (Yekartab Bet) guaranteed.',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'RealEstateAgent',
      'name': `${business.legalName} - Luxury Real Estate Addis Ababa`,
      'url': `${SITE_URL}/properties`,
      'telephone': business.primaryPhone,
      'email': business.email,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': business.streetAddress,
        'addressLocality': business.locality,
        'addressCountry': business.country
      }
    }
  },
  {
    path: '/projects',
    outputPath: 'projects/index.html',
    aliasPath: 'projects.html',
    title: 'Construction Projects Portfolio Addis Ababa | P3',
    description: 'Explore completed high-rises and active construction sites delivered by P3 Construction Group across Addis Ababa, Bole, and Nifas Silk.',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'GeneralContractor',
      'name': `${business.legalName} - Landmark Project Portfolio`,
      'url': `${SITE_URL}/projects`,
      'telephone': business.primaryPhone,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': business.streetAddress,
        'addressLocality': business.locality,
        'addressCountry': business.country
      }
    }
  },
  {
    path: '/contact',
    outputPath: 'contact/index.html',
    aliasPath: 'contact.html',
    title: 'Contact P3 Construction | Addis Ababa',
    description: 'Contact P3 Construction Group in Addis Ababa. Visit our 22 Mazoria Executive HQ or Haile Garment Branch Office. Call +251 11 661 4455.',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      'name': `${business.legalName} Contact Headquarters`,
      'url': `${SITE_URL}/contact`,
      'telephone': business.primaryPhone,
      'email': business.email,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': business.streetAddress,
        'addressLocality': business.locality,
        'addressCountry': business.country
      }
    }
  },
  {
    path: '/404',
    outputPath: '404.html',
    title: 'Page Not Found | P3 Construction Addis Ababa',
    description: 'The requested page was not found on P3 Construction Group & Real Estate website in Addis Ababa. Explore our turnkey contracting and luxury residences.',
    robots: 'noindex, nofollow',
    jsonLd: null
  }
];

// Helper to escape HTML special characters
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

console.log(`\n=== PRERENDERING WITH SITE_URL: ${SITE_URL} ===\n`);

const resultsTable = [];

routes.forEach(route => {
  let html = templateHtml;
  const canonicalUrl = `${SITE_URL}${route.path === '/' ? '/' : route.path}`;

  // 1. Replace Title
  html = html.replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(route.title)}</title>`);

  // 2. Replace Description
  html = html.replace(/<meta name="description" content=".*?" \/>/s, `<meta name="description" content="${escapeHtml(route.description)}" />`);

  // 3. Replace Canonical
  html = html.replace(/<link rel="canonical" href=".*?" \/>/s, `<link rel="canonical" href="${canonicalUrl}" />`);

  // 4. Replace Robots
  html = html.replace(/<meta name="robots" content=".*?" \/>/s, `<meta name="robots" content="${route.robots}" />`);

  // 5. Replace Open Graph Tags
  html = html.replace(/<meta property="og:title" content=".*?" \/>/s, `<meta property="og:title" content="${escapeHtml(route.title)}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/s, `<meta property="og:description" content="${escapeHtml(route.description)}" />`);
  html = html.replace(/<meta property="og:url" content=".*?" \/>/s, `<meta property="og:url" content="${canonicalUrl}" />`);
  html = html.replace(/<meta property="og:image" content=".*?" \/>/s, `<meta property="og:image" content="${SITE_URL}/og-image.jpg" />`);
  html = html.replace(/<meta property="og:image:secure_url" content=".*?" \/>/s, `<meta property="og:image:secure_url" content="${SITE_URL}/og-image.jpg" />`);

  // 6. Replace Twitter Tags
  html = html.replace(/<meta name="twitter:title" content=".*?" \/>/s, `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?" \/>/s, `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`);
  html = html.replace(/<meta name="twitter:image" content=".*?" \/>/s, `<meta name="twitter:image" content="${SITE_URL}/og-image.jpg" />`);

  // 7. Inject Route-Specific JSON-LD
  const jsonLdScript = route.jsonLd 
    ? `\n    <script type="application/ld+json">\n${JSON.stringify(route.jsonLd, null, 2)}\n    </script>`
    : '';

  // Replace default index.html schema block with route-specific schema
  html = html.replace(/<!-- Schema\.org JSON-LD Structured Data:.*?<\/script>/s, `<!-- Route-Specific Schema.org JSON-LD -->${jsonLdScript}`);

  // Also replace any lingering old domains with SITE_URL
  html = html.split('https://p3-construction-and-real-estate.vercel.app').join(SITE_URL);
  html = html.split('https://REPLACE-WITH-DOMAIN.com').join(SITE_URL);

  // 8. Write primary output file
  const fullOutputPath = path.join(distDir, route.outputPath);
  const outputDir = path.dirname(fullOutputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  fs.writeFileSync(fullOutputPath, html, 'utf8');

  // 9. Write alias file if defined (e.g. services.html alongside services/index.html)
  if (route.aliasPath) {
    const fullAliasPath = path.join(distDir, route.aliasPath);
    const aliasDir = path.dirname(fullAliasPath);
    if (!fs.existsSync(aliasDir)) {
      fs.mkdirSync(aliasDir, { recursive: true });
    }
    fs.writeFileSync(fullAliasPath, html, 'utf8');
  }

  resultsTable.push({
    Route: route.path,
    Title: route.title,
    Length: route.title.length,
    Canonical: canonicalUrl,
    File: route.outputPath
  });
});

// 10. Update dist/sitemap.xml and dist/robots.txt with SITE_URL
const sitemapSrc = path.join(rootDir, 'public/sitemap.xml');
if (fs.existsSync(sitemapSrc)) {
  let sitemapContent = fs.readFileSync(sitemapSrc, 'utf8');
  sitemapContent = sitemapContent.split('https://REPLACE-WITH-DOMAIN.com').join(SITE_URL);
  sitemapContent = sitemapContent.split('https://p3-construction-and-real-estate.vercel.app').join(SITE_URL);
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapContent, 'utf8');
}

const robotsSrc = path.join(rootDir, 'public/robots.txt');
if (fs.existsSync(robotsSrc)) {
  let robotsContent = fs.readFileSync(robotsSrc, 'utf8');
  robotsContent = robotsContent.split('https://REPLACE-WITH-DOMAIN.com').join(SITE_URL);
  robotsContent = robotsContent.split('https://p3-construction-and-real-estate.vercel.app').join(SITE_URL);
  fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsContent, 'utf8');
}

console.log('Prerendering completed successfully for all routes:');
console.table(resultsTable);
