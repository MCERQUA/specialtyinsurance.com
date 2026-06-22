"use client";

import { useState } from "react";

export function HeroSearch() {
  const [val, setVal] = useState("");

  const emit = (v: string) => {
    window.dispatchEvent(new CustomEvent("hero-search", { detail: v }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setVal(v);
    emit(v);
    if (v.trim()) {
      document.getElementById("directory")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    document.getElementById("directory")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const clear = () => {
    setVal("");
    emit("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto mt-8">
      <div className="relative group">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-secondary-container/20 blur-2xl rounded-full opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="relative flex items-center bg-white/10 border border-white/30 focus-within:border-secondary-container focus-within:bg-white/15 rounded-full transition-all duration-300 backdrop-blur-sm shadow-xl">
          <span className="material-symbols-outlined ml-5 text-on-primary-container text-xl flex-shrink-0">search</span>
          <input
            type="search"
            value={val}
            onChange={handleChange}
            placeholder="Search specialty insurance categories..."
            className="w-full bg-transparent border-none outline-none px-4 py-4 text-body-md text-on-primary placeholder:text-on-primary-container/60 font-body"
          />
          {val ? (
            <button
              type="button"
              onClick={clear}
              className="flex-shrink-0 w-9 h-9 mr-1 rounded-full flex items-center justify-center text-on-primary-container hover:bg-white/10 transition-colors"
              aria-label="Clear search"
            >
              <span className="material-symbols-outlined text-base">close</span>
            </button>
          ) : null}
          <button
            type="submit"
            className="flex-shrink-0 bg-secondary-container text-on-secondary-fixed font-label-md px-6 py-3 mr-1.5 rounded-full hover:brightness-110 transition-all text-sm"
          >
            Search
          </button>
        </div>
      </div>
      <p className="text-center text-label-sm text-on-primary-container/60 mt-3">
        282 specialty niches · All 50 states · 15-minute quotes
      </p>
    </form>
  );
}
