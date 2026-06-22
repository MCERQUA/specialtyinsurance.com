"use client";

const CARRIERS = [
  { name: "RLI",            file: "rli" },
  { name: "Nationwide",     file: "nationwide" },
  { name: "Markel",         file: "markel" },
  { name: "Lloyd's",        file: "lloyds" },
  { name: "Berkshire GUARD",file: "bhguard" },
  { name: "BTIS",           file: "btis" },
  { name: "EMC",            file: "emc" },
  { name: "Employers",      file: "employers" },
  { name: "The Hartford",   file: "hartford" },
  { name: "Travelers",      file: "travelers" },
  { name: "Liberty Mutual", file: "libertymutual" },
  { name: "Chubb",          file: "chubb" },
  { name: "CNA",            file: "cna" },
  { name: "Zurich",         file: "zurich" },
  { name: "Cincinnati",     file: "cincinnati" },
  { name: "AmTrust",        file: "amtrust" },
];

export function CarrierLogoStrip() {
  return (
    <section className="bg-surface-container-low border-y border-outline-variant/30 py-stack-xl">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex items-center gap-4 mb-stack-lg">
          <div className="flex-1 h-px bg-secondary-fixed/40" />
          <p className="font-label-sm text-on-surface-variant uppercase tracking-widest text-center whitespace-nowrap">
            We place with A-rated specialty &amp; standard carriers
          </p>
          <div className="flex-1 h-px bg-secondary-fixed/40" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
          {CARRIERS.map((c) => (
            <div
              key={c.file}
              className="flex items-center justify-center px-2 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-300"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/carriers/${c.file}.png`}
                alt={c.name}
                loading="lazy"
                className="h-8 md:h-9 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
