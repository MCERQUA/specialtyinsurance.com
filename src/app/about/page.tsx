import type { Metadata } from "next";
import directoryData from "@/data/directory.json";
import type { DirectoryData } from "@/types/directory";

const data = directoryData as unknown as DirectoryData;

export const metadata: Metadata = {
  title: "About — Specialty Insurance Directory",
  description:
    "Contractors Choice Agency built this specialty insurance directory to connect businesses with the right niche coverage. Founded 2005. Licensed all 50 states. NPN #8608479.",
  alternates: { canonical: "https://specialtyinsurancefinder.com/about" },
};

export default function AboutPage() {
  return (
    <main>
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <a href="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors mb-6">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to directory
          </a>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">About this directory</h1>
          <div className="mt-8 prose prose-slate max-w-none text-sm leading-relaxed space-y-6">
            <p className="text-base text-slate-700">
              <strong>specialtyinsurancefinder.com</strong> is a topical authority hub built by Contractors Choice Agency to help specialty businesses find the right insurance coverage fast.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 not-prose">
              {[
                { label: "Specialty niches", value: data.total.toString() },
                { label: "Live now with quotes", value: data.live.toString() },
                { label: "States licensed", value: "50" },
              ].map((stat) => (
                <div key={stat.label} className="bg-blue-50 border border-blue-100 rounded-xl p-5 text-center">
                  <p className="text-3xl font-black text-blue-600">{stat.value}</p>
                  <p className="text-xs text-slate-600 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <h2 className="text-xl font-bold text-slate-900 mt-8">Who we are</h2>
            <p className="text-slate-600">
              Contractors Choice Agency (CCA) is a specialty insurance agency founded in 2005 by Josh Cotner in Chandler, Arizona. We focus exclusively on specialty and niche contractor insurance — trades and industries that standard agencies overlook or miswrite.
            </p>
            <p className="text-slate-600">
              Over 20 years, we&rsquo;ve built expertise in hundreds of specialty contractor niches: spray foam installers, concrete lifting contractors, environmental contractors, gun ranges, specialty auto classes, and more. This directory exists because we believe every business deserves insurance written by someone who understands their trade.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8">How this directory works</h2>
            <p className="text-slate-600">
              Each card represents a specialty insurance niche we serve or are actively building a program for. Cards marked <strong>Get a quote</strong> link directly to a live site where you can request a quote immediately. Cards marked <strong>Coming soon</strong> represent niches we&rsquo;re preparing programs for — use the form below to get on the early list.
            </p>
            <p className="text-slate-600">
              All programs are backed by A-rated (A.M. Best) carriers. We write admitted and E&amp;S (excess and surplus) lines across all 50 states.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8">Contact</h2>
            <ul className="text-slate-600 space-y-1 not-prose list-none">
              <li><strong>Phone:</strong> <a href="tel:+18449675247" className="text-blue-600 hover:underline">844-967-5247</a></li>
              <li><strong>Email:</strong> <a href="mailto:josh@contractorschoiceagency.com" className="text-blue-600 hover:underline">josh@contractorschoiceagency.com</a></li>
              <li><strong>Address:</strong> 12220 E Riggs Road, Suite #105, Chandler, AZ 85249</li>
              <li><strong>NPN:</strong> #8608479</li>
              <li><strong>Founded:</strong> 2005</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section id="lead-form" className="bg-blue-600 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white">Need specialty coverage?</h2>
            <p className="mt-2 text-blue-100 text-sm">Tell us about your business — we&rsquo;ll find the right market.</p>
          </div>
          <form
            name="lead"
            method="POST"
            action="/api/lead"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="bg-white rounded-2xl p-7 space-y-4"
          >
            <input type="hidden" name="form-name" value="lead" />
            <input name="bot-field" type="hidden" className="hidden" />
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Your name *</label>
                <input name="name" type="text" required placeholder="Jane Smith" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Email *</label>
                <input name="email" type="email" required placeholder="you@company.com" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Describe your business *</label>
              <textarea name="business_type" required rows={3} placeholder="What does your business do and what coverage do you need?" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 resize-none" />
            </div>
            <button type="submit" className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors text-sm">
              Find my coverage
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
