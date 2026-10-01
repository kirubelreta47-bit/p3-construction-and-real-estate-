/**
 * Centralized Site Configuration
 * Production domain constant used across canonicals, metadata, OG/Twitter tags, schemas, and sitemaps.
 */
export const SITE_URL: string = (
  (typeof process !== 'undefined' && process.env && (process.env.SITE_URL || process.env.VITE_SITE_URL)) ||
  (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_SITE_URL) ||
  'https://REPLACE-WITH-DOMAIN.com'
).replace(/\/+$/, '');
