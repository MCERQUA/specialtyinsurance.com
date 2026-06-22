import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DirectoryBrowser } from "@/components/DirectoryBrowser";
import directoryData from "@/data/directory.json";
import type { DirectoryData } from "@/types/directory";
import { slugToCategory, categoryToSlug } from "@/types/directory";

const data = directoryData as unknown as DirectoryData;

const CATEGORY_IMAGES: Record<string, string> = {
  "Contractors & Construction": "/images/categories/contractors.webp",
  "Trucking & Auto":            "/images/categories/trucking.webp",
  "Spray Foam & Insulation":    "/images/categories/sprayfoam.webp",
  "Specialty & High-Risk":      "/images/categories/highrisk.webp",
  "Equipment & Property":       "/images/categories/equipment.webp",
  "Professional & Business":    "/images/categories/professional.webp",
  "Other":                      "/images/categories/contractors.webp",
};

const CATEGORY_SEO: Record<string, {
  title: string;
  h1: string;
  h2?: string;
  description: string;
  intro: string;
}> = {
  "Contractors & Construction": {
    title: "Contractor Insurance — Specialty Coverage for Contractors & Builders | Contractors Choice Agency",
    h1: "Contractor Insurance",
    h2: "Construction Insurance for Every Trade",
    description: "Specialty contractor insurance for every trade — GL, workers comp, commercial auto, contractors professional liability, and more. A-rated markets, all 50 states.",
    intro: "GL, workers comp, commercial auto, and contractors professional liability for builders at all scales. BOP-eligible or project-specific — we find the right market for your trade.",
  },
  "Trucking & Auto": {
    title: "Commercial Truck Insurance — Trucking & Fleet Coverage | Contractors Choice Agency",
    h1: "Commercial Truck Insurance",
    h2: "Trucking Insurance for Owner-Operators & Fleets",
    description: "Commercial truck insurance for owner-operators and fleets — primary liability, cargo, non-trucking liability, physical damage. All 50 states, fast quotes.",
    intro: "Commercial auto, non-trucking liability, cargo, and physical damage for fleets of all sizes. Owner-operators to large carriers, all commodities, all 50 states.",
  },
  "Spray Foam & Insulation": {
    title: "Spray Foam Insurance — Coverage for Spray Foam & Insulation Contractors | Contractors Choice Agency",
    h1: "Spray Foam Insurance",
    h2: "Insulation Contractor Coverage That Actually Works",
    description: "Specialty spray foam insurance — GL with spray foam endorsement, contractor pollution liability, equipment coverage for rigs. One of the hardest niches to insure; we specialize here.",
    intro: "One of the hardest contractor niches to insure — we specialize here. GL with spray foam endorsement, equipment coverage for rigs, and pollution liability for spray foam and insulation contractors.",
  },
  "Specialty & High-Risk": {
    title: "High-Risk Business Insurance — Gun Ranges, Cannabis, Hot Shot & More | Contractors Choice Agency",
    h1: "High-Risk Business Insurance",
    h2: "E&S Coverage for Businesses Standard Carriers Won't Touch",
    description: "High-risk business insurance through E&S markets — gun ranges, cannabis operations, hot shot trucking, amusement, and more. If standard carriers said no, we find who says yes.",
    intro: "Excess & surplus (E&S) markets for businesses standard carriers won't insure — gun ranges, cannabis businesses, hot shot trucking, amusement parks, adult entertainment, and more.",
  },
  "Equipment & Property": {
    title: "Contractor Equipment Insurance — Tool & Equipment Coverage | Contractors Choice Agency",
    h1: "Contractor Equipment Insurance",
    h2: "Tool Insurance & Equipment Floaters for Every Trade",
    description: "Inland marine, tools & equipment blankets, equipment floaters, and commercial property for contractors and equipment dealers. Protect what your business depends on.",
    intro: "Inland marine, tools & equipment blankets, equipment floaters, and commercial property for contractors and equipment dealers. Protect the tools and equipment your business depends on.",
  },
  "Professional & Business": {
    title: "Surety Bonds & Professional Liability Insurance | Contractors Choice Agency",
    h1: "Surety Bonds",
    h2: "Professional Liability Insurance for Licensed Contractors",
    description: "Surety bonds, contractors professional liability (E&O), and design-build coverage. Licensed contractors and business professionals — all 50 states, fast approval.",
    intro: "Surety bonds, contractors professional liability (E&O), design-build coverage, and professional lines for licensed contractors and business professionals across all 50 states.",
  },
  "Other": {
    title: "Specialty Insurance — Additional Niche Industries | Contractors Choice Agency",
    h1: "Specialty Insurance",
    h2: "Hard-to-Place Coverage for Unique Industries",
    description: "Specialty insurance for industries that don't fit standard categories. Whatever your niche, Contractors Choice Agency finds the right coverage.",
    intro: "Whatever your industry — if it's hard to place, we place it. Contractors Choice Agency works with A-rated standard and surplus line carriers across hundreds of specialty niches.",
  },
};

export function generateStaticParams() {
  return Object.keys(data.categories).map((cat) => ({
    slug: categoryToSlug(cat),
  }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = slugToCategory(slug);
  if (!category) return {};
  const seo = CATEGORY_SEO[category] ?? CATEGORY_SEO["Other"];
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: `https://specialtyinsurancefinder.com/category/${slug}` },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = slugToCategory(slug);
  if (!category) notFound();

  const catSites = data.sites.filter((s) => s.category === category);
  const stats = data.categories[category];
  const seo = CATEGORY_SEO[category] ?? CATEGORY_SEO["Other"];
  const img = CATEGORY_IMAGES[category] ?? CATEGORY_IMAGES["Other"];

  const catStats: Record<string, { total: number; live: number }> = {
    [category]: stats ?? { total: catSites.length, live: catSites.filter((s) => s.live && s.quote_url).length },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://specialtyinsurancefinder.com" },
      { "@type": "ListItem", position: 2, name: seo.h1, item: `https://specialtyinsurancefinder.com/category/${slug}` },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Solaris Luxe category hero */}
      <section className="relative h-[320px] md:h-[380px] flex flex-col justify-end overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img}
          alt={seo.h1}
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/70 to-primary-container/20" />
        <div className="solar-glow bottom-0 right-0" />
        <div className="relative z-10 max-w-[1280px] mx-auto w-full px-margin-mobile md:px-margin-desktop pb-stack-lg">
          <a href="/" className="inline-flex items-center gap-1 font-label-sm text-on-primary-container hover:text-secondary-fixed transition-colors mb-4">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            All niches
          </a>
          <span className="font-label-sm text-secondary-fixed block mb-2 uppercase tracking-wider">{category}</span>
          <h1 className="text-headline-lg-mobile md:text-headline-lg font-display font-bold text-on-primary">{seo.h1}</h1>
          {seo.h2 && (
            <h2 className="text-body-lg text-on-primary-container mt-1">{seo.h2}</h2>
          )}
        </div>
      </section>

      {/* Intro + trust */}
      <section className="bg-surface-container-low border-b border-outline-variant/30">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
          <p className="text-on-surface-variant text-body-md leading-relaxed max-w-2xl">{seo.intro}</p>
          <p className="mt-2 font-label-sm text-secondary-container uppercase tracking-wider">
            Contractors Choice Agency · NPN #8608479 · Licensed all 50 states
          </p>
        </div>
      </section>

      <DirectoryBrowser sites={catSites} categories={catStats} />

      {/* Lead form */}
      <section id="lead-form" className="bg-primary-container py-14 mt-4">
        <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-stack-lg">
            <h2 className="text-headline-lg-mobile font-display font-bold text-on-primary mb-3">
              Need {seo.h1.toLowerCase()} for your business?
            </h2>
            <p className="text-on-primary-container text-body-md">15-minute quotes. A-rated markets. All 50 states.</p>
          </div>
          <form
            name="lead"
            method="POST"
            action="/api/lead"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="bg-surface-container-lowest rounded-3xl p-7 space-y-4 luxe-shadow"
          >
            <input type="hidden" name="form-name" value="lead" />
            <input type="hidden" name="category" value={category} />
            <input name="bot-field" type="hidden" className="hidden" />
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-label-sm text-on-surface-variant mb-1.5 uppercase tracking-wider">Your name *</label>
                <input name="name" type="text" required placeholder="Jane Smith" className="w-full px-4 py-3 border border-outline-variant rounded-xl text-body-md focus:outline-none focus:border-secondary-container focus:ring-2 focus:ring-secondary-container/20 bg-surface" />
              </div>
              <div>
                <label className="block font-label-sm text-on-surface-variant mb-1.5 uppercase tracking-wider">Email *</label>
                <input name="email" type="email" required placeholder="you@company.com" className="w-full px-4 py-3 border border-outline-variant rounded-xl text-body-md focus:outline-none focus:border-secondary-container focus:ring-2 focus:ring-secondary-container/20 bg-surface" />
              </div>
            </div>
            <div>
              <label className="block font-label-sm text-on-surface-variant mb-1.5 uppercase tracking-wider">Describe your business and coverage needs *</label>
              <textarea
                name="business_type"
                required
                rows={3}
                placeholder={`Tell us about your business and what ${seo.h1.toLowerCase()} coverage you need...`}
                className="w-full px-4 py-3 border border-outline-variant rounded-xl text-body-md focus:outline-none focus:border-secondary-container focus:ring-2 focus:ring-secondary-container/20 bg-surface resize-none"
              />
            </div>
            <button type="submit" className="w-full py-3.5 bg-secondary-container text-on-secondary-fixed font-label-md rounded-full hover:brightness-110 transition-all shadow-lg">
              Find my coverage
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
