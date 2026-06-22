import type { Metadata } from "next";
import { DirectoryBrowser } from "@/components/DirectoryBrowser";
import { CarrierLogoStrip } from "@/components/CarrierLogoStrip";
import { HeroSearch } from "@/components/HeroSearch";
import directoryData from "@/data/directory.json";
import type { DirectoryData } from "@/types/directory";
import { categoryToSlug } from "@/types/directory";

export const metadata: Metadata = {
  title: "Specialty Insurance — Hard-to-Place & High-Risk Coverage by Industry | Contractors Choice Agency",
  description:
    "Find specialty insurance for hard-to-place and high-risk industries — contractors, trucking, spray foam, equipment, and more. A-rated carriers, all 50 states, 15-minute quotes.",
  alternates: { canonical: "https://specialtyinsurancefinder.com" },
};

const data = directoryData as unknown as DirectoryData;

const CATEGORY_SLUGS_MAP: Record<string, string> = {
  "Contractors & Construction": "contractors-construction",
  "Trucking & Auto":            "trucking-auto",
  "Specialty & High-Risk":      "specialty-high-risk",
  "Equipment & Property":       "equipment-property",
  "Spray Foam & Insulation":    "spray-foam-insulation",
  "Professional & Business":    "professional-business",
  "Other":                      "other",
};

const CATEGORY_IMAGES: Record<string, string> = {
  "Contractors & Construction": "/images/categories/contractors.webp",
  "Trucking & Auto":            "/images/categories/trucking.webp",
  "Spray Foam & Insulation":    "/images/categories/sprayfoam.webp",
  "Specialty & High-Risk":      "/images/categories/highrisk.webp",
  "Equipment & Property":       "/images/categories/equipment.webp",
  "Professional & Business":    "/images/categories/professional.webp",
  "Other":                      "/images/categories/contractors.webp",
};

const CATEGORY_H1S: Record<string, string> = {
  "Contractors & Construction": "Contractor Insurance",
  "Trucking & Auto":            "Commercial Truck Insurance",
  "Spray Foam & Insulation":    "Spray Foam Insurance",
  "Specialty & High-Risk":      "High-Risk Business Insurance",
  "Equipment & Property":       "Contractor Equipment Insurance",
  "Professional & Business":    "Surety Bonds",
  "Other":                      "Specialty Insurance",
};

const TOP_CATEGORIES = [
  "Contractors & Construction",
  "Trucking & Auto",
  "Spray Foam & Insulation",
];

export default function HomePage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative min-h-[680px] md:min-h-[751px] flex flex-col items-center justify-center px-margin-mobile md:px-margin-desktop overflow-hidden">
        {/* Real hero image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero.webp"
          alt="Contractor at a job site"
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />
        {/* Navy overlay */}
        <div className="absolute inset-0 bg-primary-container/80" />
        {/* Solar glow decorations */}
        <div className="solar-glow -top-20 -left-20" />
        <div className="solar-glow bottom-0 -right-20" />

        <div className="relative z-10 max-w-4xl w-full text-center">
          <span className="inline-block font-label-sm text-secondary-container bg-secondary-fixed/20 px-3 py-1 rounded-full mb-stack-md uppercase tracking-widest">
            Contractors Choice Agency · NPN #8608479
          </span>
          <h1 className="text-display-lg-mobile md:text-display-lg font-display font-extrabold text-on-primary leading-tight mb-stack-lg">
            Specialty Insurance,{" "}
            <span className="text-secondary-container">by Industry</span>
          </h1>
          <p className="text-body-lg text-on-primary-container max-w-2xl mx-auto mb-stack-xl">
            From spray foam contractors to gun ranges, trucking fleets to equipment dealers — find specialist
            coverage for your industry. A-rated carriers. All 50 states. 15-minute quotes.
          </p>

          {/* Hero search bar */}
          <HeroSearch />

          {/* Category quick-nav pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {Object.entries(data.categories).map(([cat]) => (
              <a
                key={cat}
                href={`/category/${CATEGORY_SLUGS_MAP[cat] ?? categoryToSlug(cat)}`}
                className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/25 rounded-full text-label-sm text-on-primary hover:bg-white/20 hover:border-white/40 transition-all backdrop-blur-sm"
              >
                {cat}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── E&S INTRO ── */}
      <section className="bg-surface py-stack-xl">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="max-w-3xl mx-auto bg-surface-container-low border border-outline-variant/40 rounded-3xl px-8 py-7 md:px-10 md:py-8 relative overflow-hidden">
            {/* Gold accent rule */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary-container rounded-l-3xl" />
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-secondary-container text-2xl mt-0.5 flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
              <div>
                <h2 className="font-display font-bold text-on-background text-headline-md mb-3">
                  What is specialty insurance?
                </h2>
                <p className="text-on-surface-variant text-body-md leading-relaxed">
                  <strong className="text-on-background font-semibold">Specialty insurance</strong> — also called
                  excess and surplus (E&amp;S) insurance or niche business insurance — covers industries and risk
                  profiles that standard admitted carriers decline or rate prohibitively. If your business involves
                  physical work, unique equipment, hard-to-place liabilities, or a specialized trade, you likely need
                  a specialty market. Contractors Choice Agency places coverage across hundreds of niche industries
                  through a network of A-rated standard and non-admitted carriers, with quoting in 15 minutes or less.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CARRIER TRUST STRIP ── */}
      <CarrierLogoStrip />

      {/* ── CATEGORY BENTO GRID (top 3) ── */}
      <section className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-stack-xl">
        <div className="flex justify-between items-end mb-stack-lg">
          <div>
            <h2 className="text-headline-lg-mobile md:text-headline-lg font-display font-bold text-on-background">
              Specialized Coverage Areas
            </h2>
            <p className="text-on-surface-variant mt-2 max-w-md text-body-md">
              Curated insurance for industries that demand more than a standard policy.
            </p>
          </div>
          <a
            href="#directory"
            className="hidden md:flex items-center gap-2 font-label-md text-primary hover:gap-3 transition-all"
          >
            Browse all categories
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {TOP_CATEGORIES.map((cat, i) => {
            const slug = CATEGORY_SLUGS_MAP[cat] ?? categoryToSlug(cat);
            const img = CATEGORY_IMAGES[cat];
            const h1 = CATEGORY_H1S[cat];
            return (
              <a
                key={cat}
                href={`/category/${slug}`}
                className={`category-card relative h-[420px] rounded-3xl overflow-hidden group luxe-shadow block ${i === 1 ? "md:mt-12" : ""}`}
              >
                {/* Real photo */}
                <div
                  className="category-image absolute inset-0 bg-cover bg-center transition-transform duration-700"
                  style={{ backgroundImage: `url('${img}')` }}
                />
                {/* Navy gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/40 to-transparent" />
                {/* Content */}
                <div className="absolute bottom-0 left-0 p-stack-lg w-full">
                  <span className="font-label-sm text-secondary-fixed mb-2 block uppercase tracking-wider">
                    {cat}
                  </span>
                  <h3 className="text-headline-md font-display font-bold text-on-primary mb-2">{h1}</h3>
                  <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-on-primary-container font-label-sm">Get a quote →</span>
                    <span className="material-symbols-outlined text-on-primary">arrow_forward</span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* ── FULL DIRECTORY BROWSER ── */}
      <div id="directory">
        <DirectoryBrowser sites={data.sites} categories={data.categories} />
      </div>

      {/* ── TRUST CTA ── */}
      <section className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-stack-xl">
        <div className="relative rounded-[40px] bg-primary-container px-stack-xl py-stack-xl overflow-hidden flex flex-col md:flex-row items-center gap-stack-xl">
          <div className="solar-glow -top-40 -right-40 !w-[600px] !h-[600px]" style={{ background: "radial-gradient(circle, rgba(254,166,25,0.10) 0%, transparent 70%)" }} />
          <div className="relative z-10 md:w-3/5 text-center md:text-left">
            <h2 className="text-display-lg-mobile font-display font-extrabold text-on-primary mb-stack-md">
              Don&rsquo;t settle for &ldquo;Standard&rdquo;
            </h2>
            <p className="text-on-primary-container text-body-lg mb-stack-lg">
              Our specialists navigate the complex world of non-traditional risk. Describe your business
              below and we&rsquo;ll find the right coverage — fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#lead-form" className="btn-gold">Get a Quote</a>
              <a href="#directory" className="inline-flex items-center gap-2 px-6 py-3 border border-outline text-on-primary rounded-full font-label-md hover:bg-white/5 transition-all">
                Browse Directory
              </a>
            </div>
          </div>
          <div className="relative z-10 md:w-2/5 flex justify-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <div className="absolute inset-0 bg-secondary-container/20 rounded-full animate-pulse" />
              <div className="absolute inset-4 bg-secondary-container/30 rounded-full" style={{ animation: "ping 3s cubic-bezier(0,0,0.2,1) infinite" }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-[80px] md:text-[120px] text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEAD FORM ── */}
      <section id="lead-form" className="bg-primary-container py-14">
        <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-stack-lg">
            <h2 className="text-headline-lg-mobile md:text-headline-lg font-display font-bold text-on-primary mb-3">
              Don&rsquo;t see your niche?
            </h2>
            <p className="text-on-primary-container text-body-md">
              Describe your business and we&rsquo;ll find the right coverage. We insure hundreds of specialty
              industries across all 50 states.
            </p>
          </div>
          <form
            name="lead"
            method="POST"
            action="/api/lead"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="bg-surface-container-lowest rounded-3xl p-7 md:p-9 space-y-4 luxe-shadow"
          >
            <input type="hidden" name="form-name" value="lead" />
            <input name="bot-field" type="hidden" className="hidden" />
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-label-sm text-on-surface-variant mb-1.5 uppercase tracking-wider">Your name *</label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Jane Smith"
                  className="w-full px-4 py-3 border border-outline-variant rounded-xl text-body-md focus:outline-none focus:border-secondary-container focus:ring-2 focus:ring-secondary-container/20 bg-surface"
                />
              </div>
              <div>
                <label className="block font-label-sm text-on-surface-variant mb-1.5 uppercase tracking-wider">Email *</label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 border border-outline-variant rounded-xl text-body-md focus:outline-none focus:border-secondary-container focus:ring-2 focus:ring-secondary-container/20 bg-surface"
                />
              </div>
            </div>
            <div>
              <label className="block font-label-sm text-on-surface-variant mb-1.5 uppercase tracking-wider">
                Describe your business and coverage needs *
              </label>
              <textarea
                name="business_type"
                required
                rows={4}
                placeholder="We install spray foam insulation in Texas and need GL + contractor pollution liability. About $800k revenue, 6 employees..."
                className="w-full px-4 py-3 border border-outline-variant rounded-xl text-body-md focus:outline-none focus:border-secondary-container focus:ring-2 focus:ring-secondary-container/20 bg-surface resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 bg-secondary-container text-on-secondary-fixed font-label-md rounded-full hover:brightness-110 transition-all shadow-lg"
            >
              Find my coverage
            </button>
            <p className="text-center text-label-sm text-on-surface-variant">
              No spam. We&rsquo;ll only contact you about your insurance needs.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
