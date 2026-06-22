"use client";

import { useState, useMemo, useEffect } from "react";
import type { SiteEntry } from "@/types/directory";
import { categoryToSlug, formatDomainName } from "@/types/directory";

const CATEGORY_TAGS: Record<string, string> = {
  "Contractors & Construction": "bg-secondary-fixed/30 text-secondary",
  "Trucking & Auto":            "bg-tertiary-fixed/30 text-on-tertiary-container",
  "Specialty & High-Risk":      "bg-error-container text-on-error-container",
  "Equipment & Property":       "bg-secondary-fixed/20 text-on-secondary-fixed-variant",
  "Spray Foam & Insulation":    "bg-secondary-fixed/30 text-secondary",
  "Professional & Business":    "bg-surface-container-high text-on-surface-variant",
  "Other":                      "bg-surface-container text-on-surface-variant",
};

function NicheCard({ site }: { site: SiteEntry }) {
  const isLive = site.live && site.quote_url;
  const displayName = formatDomainName(site.domain);
  const tagClass = CATEGORY_TAGS[site.category] ?? CATEGORY_TAGS["Other"];

  return (
    <div className="bg-surface-container-lowest rounded-2xl p-stack-md border border-outline-variant/30 luxe-shadow flex flex-col gap-3 hover:-translate-y-1 transition-all duration-300 group">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="font-label-md text-on-background leading-tight truncate">{displayName}</p>
          <p className="text-label-sm text-on-surface-variant mt-0.5 truncate">{site.domain}</p>
        </div>
        <span className={`text-label-sm px-2 py-0.5 rounded flex-shrink-0 ${tagClass}`}>{site.category}</span>
      </div>
      <p className="text-body-md text-on-surface-variant line-clamp-2 leading-relaxed flex-grow">{site.descriptor}</p>
      <div className="pt-stack-sm border-t border-surface-container flex items-center justify-between">
        {isLive ? (
          <a
            href={site.quote_url!}
            target="_blank"
            rel="noopener noreferrer"
            className="font-label-md text-primary flex items-center gap-1 hover:text-secondary-container transition-colors"
          >
            Get a quote
            <span className="material-symbols-outlined text-sm">open_in_new</span>
          </a>
        ) : (
          <a
            href="#lead-form"
            className="font-label-md text-on-surface-variant flex items-center gap-1 hover:text-primary transition-colors"
          >
            Get a quote
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        )}
        {isLive && (
          <span className="text-label-sm bg-secondary-fixed/30 text-secondary px-2 py-0.5 rounded uppercase">Live</span>
        )}
      </div>
    </div>
  );
}

interface Props {
  sites: SiteEntry[];
  categories: Record<string, { total: number; live: number }>;
}

const ORDERED_CATEGORIES = [
  "Contractors & Construction",
  "Trucking & Auto",
  "Specialty & High-Risk",
  "Equipment & Property",
  "Spray Foam & Insulation",
  "Professional & Business",
  "Other",
];

export function DirectoryBrowser({ sites, categories }: Props) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handler = (e: Event) => setQuery((e as CustomEvent<string>).detail);
    window.addEventListener("hero-search", handler);
    return () => window.removeEventListener("hero-search", handler);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;
    return sites.filter(
      (s) =>
        s.domain.toLowerCase().includes(q) ||
        s.name.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q) ||
        s.descriptor.toLowerCase().includes(q)
    );
  }, [query, sites]);

  const byCat = useMemo(() => {
    const map: Record<string, SiteEntry[]> = {};
    for (const s of sites) {
      if (!map[s.category]) map[s.category] = [];
      map[s.category].push(s);
    }
    return map;
  }, [sites]);

  return (
    <>
      {/* Solaris Luxe search bar */}
      <div className="sticky top-16 z-30 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.04)]">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-3">
          <div className="relative max-w-2xl group">
            <div className="absolute inset-0 bg-secondary-container/10 blur-2xl rounded-full opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center bg-surface-container-lowest rounded-full border border-outline-variant focus-within:border-secondary-container luxe-shadow transition-all duration-300 pr-2">
              <span className="material-symbols-outlined ml-4 text-outline text-xl">search</span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search specialty insurance niches..."
                className="w-full bg-transparent border-none outline-none px-3 py-3 text-body-md text-on-surface placeholder:text-outline-variant"
              />
              {query ? (
                <button
                  onClick={() => setQuery("")}
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-outline hover:text-on-surface hover:bg-surface-container transition-colors"
                >
                  <span className="material-symbols-outlined text-base">close</span>
                </button>
              ) : (
                <span className="flex-shrink-0 bg-primary text-on-primary px-5 py-2 rounded-full font-label-md text-sm">Search</span>
              )}
            </div>
          </div>
          {query && (
            <p className="text-label-sm text-on-surface-variant mt-1.5 ml-1">
              {filtered?.length ?? 0} result{filtered?.length !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
            </p>
          )}
        </div>
      </div>

      {/* Results */}
      {filtered !== null ? (
        <section className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <span className="material-symbols-outlined text-5xl text-outline-variant block mb-4">search_off</span>
              <p className="text-on-surface-variant text-body-md mb-4">No niches match &ldquo;{query}&rdquo;.</p>
              <a href="#lead-form" className="font-label-md text-primary hover:text-secondary-container transition-colors flex items-center gap-1 justify-center">
                Request a quote for your niche <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {filtered.map((s) => <NicheCard key={s.domain} site={s} />)}
            </div>
          )}
        </section>
      ) : (
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg space-y-stack-xl">
          {ORDERED_CATEGORIES.map((cat) => {
            const catSites = byCat[cat] ?? [];
            if (catSites.length === 0) return null;
            const slug = categoryToSlug(cat);
            return (
              <section key={cat} id={slug}>
                <div className="flex items-center justify-between mb-stack-md">
                  <h2 className="text-headline-lg-mobile font-display font-bold text-on-background">{cat}</h2>
                  <a
                    href={`/category/${slug}`}
                    className="font-label-md text-primary hover:text-secondary-container transition-colors flex items-center gap-1"
                  >
                    View all
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
                  {catSites.map((s) => <NicheCard key={s.domain} site={s} />)}
                </div>
              </section>
            );
          })}
        </div>
      )}
    </>
  );
}
