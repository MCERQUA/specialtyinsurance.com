export interface SiteEntry {
  domain: string;
  name: string;
  category: string;
  descriptor: string;
  live: boolean;
  url: string;
  quote_url: string | null;
  lead_ready: boolean;
}

export interface CategoryStats {
  total: number;
  live: number;
}

export interface DirectoryData {
  generated: string;
  source: string;
  total: number;
  live: number;
  categories: Record<string, CategoryStats>;
  sites: SiteEntry[];
}

export const CATEGORY_SLUGS: Record<string, string> = {
  "contractors-construction": "Contractors & Construction",
  "trucking-auto": "Trucking & Auto",
  "specialty-high-risk": "Specialty & High-Risk",
  "equipment-property": "Equipment & Property",
  "spray-foam-insulation": "Spray Foam & Insulation",
  "professional-business": "Professional & Business",
  "other": "Other",
};

export const CATEGORY_NAMES: Record<string, string> = Object.fromEntries(
  Object.entries(CATEGORY_SLUGS).map(([slug, name]) => [name, slug])
);

export function categoryToSlug(category: string): string {
  return CATEGORY_NAMES[category] ?? category.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export function slugToCategory(slug: string): string | undefined {
  return CATEGORY_SLUGS[slug];
}

export function formatDomainName(domain: string): string {
  const withoutTld = domain.replace(/\.(com|net|io|co|org)$/i, "");
  if (withoutTld.includes("-")) {
    return withoutTld.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  }
  // Single-word camelCase-ish: just capitalize first
  return withoutTld.charAt(0).toUpperCase() + withoutTld.slice(1);
}
