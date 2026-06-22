import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Specialty Insurance — Hard-to-Place & High-Risk Coverage by Industry | Contractors Choice Agency",
    template: "%s | Specialty Insurance Finder",
  },
  description:
    "Find specialty insurance for hard-to-place and high-risk industries — contractors, trucking, spray foam, equipment, and more. A-rated carriers, all 50 states, 15-minute quotes.",
  metadataBase: new URL("https://specialtyinsurancefinder.com"),
  openGraph: {
    siteName: "Specialty Insurance Finder",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-surface text-on-surface selection:bg-secondary-fixed">
        {/* Frosted glass nav — Solaris Luxe */}
        <header className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-xl shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16">
          <a href="/" className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary-container text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
            <span className="font-display text-headline-md tracking-tight text-on-background">
              Specialty<span className="text-on-surface-variant font-normal"> Insurance Finder</span>
            </span>
          </a>
          <nav className="hidden md:flex gap-stack-lg items-center">
            <a href="/" className="font-label-md text-primary hover:opacity-70 transition-opacity">Directory</a>
            <a href="/about" className="font-label-md text-on-surface-variant hover:opacity-70 transition-opacity">About</a>
            <a href="#lead-form" className="btn-gold text-sm px-5 py-2">Get Coverage</a>
          </nav>
          {/* Mobile: just the CTA */}
          <a href="#lead-form" className="md:hidden btn-gold text-xs px-4 py-2">Get Coverage</a>
        </header>

        <main className="pt-16">
          {children}
        </main>

        {/* Solaris Luxe Footer */}
        <footer className="bg-surface-container-highest pt-stack-xl pb-stack-xl px-margin-mobile md:px-margin-desktop mt-20">
          <div className="max-w-[1280px] mx-auto grid sm:grid-cols-4 gap-stack-lg text-sm">
            <div className="sm:col-span-2">
              <div className="flex items-center gap-2 mb-stack-md">
                <span className="material-symbols-outlined text-secondary-container text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
                <span className="font-display font-bold text-on-background tracking-tight">Specialty Insurance Finder</span>
              </div>
              <p className="text-on-surface-variant max-w-sm mb-stack-md">
                Hundreds of specialty insurance niches — a division of Contractors Choice Agency. Licensed all 50 states. NPN #8608479.
              </p>
              <div className="flex gap-3 flex-wrap">
                <span className="text-label-sm uppercase bg-secondary-fixed/30 text-secondary px-2 py-1 rounded">Founded 2005</span>
                <span className="text-label-sm uppercase bg-surface-container text-on-surface-variant px-2 py-1 rounded">All 50 States</span>
                <span className="text-label-sm uppercase bg-secondary-fixed/30 text-secondary px-2 py-1 rounded">A-Rated Carriers</span>
              </div>
            </div>
            <div>
              <p className="font-label-md text-on-background mb-stack-sm">Contact</p>
              <ul className="space-y-1 text-on-surface-variant">
                <li>844-967-5247</li>
                <li>josh@contractorschoiceagency.com</li>
                <li>12220 E Riggs Road, Suite #105<br />Chandler, AZ 85249</li>
              </ul>
            </div>
            <div>
              <p className="font-label-md text-on-background mb-stack-sm">Categories</p>
              <ul className="space-y-1.5">
                <li><a href="/category/contractors-construction" className="text-on-surface-variant hover:text-on-background transition-colors">Contractors &amp; Construction</a></li>
                <li><a href="/category/trucking-auto" className="text-on-surface-variant hover:text-on-background transition-colors">Trucking &amp; Auto</a></li>
                <li><a href="/category/specialty-high-risk" className="text-on-surface-variant hover:text-on-background transition-colors">Specialty &amp; High-Risk</a></li>
                <li><a href="/category/equipment-property" className="text-on-surface-variant hover:text-on-background transition-colors">Equipment &amp; Property</a></li>
                <li><a href="/category/spray-foam-insulation" className="text-on-surface-variant hover:text-on-background transition-colors">Spray Foam &amp; Insulation</a></li>
                <li><a href="/category/professional-business" className="text-on-surface-variant hover:text-on-background transition-colors">Professional &amp; Business</a></li>
              </ul>
            </div>
          </div>
          <div className="max-w-[1280px] mx-auto mt-stack-lg pt-stack-md border-t border-surface-container text-xs text-on-surface-variant">
            <p>© 2026 Contractors Choice Agency, LLC. All rights reserved. Founded 2005.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
