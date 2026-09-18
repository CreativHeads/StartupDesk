import { useState } from "react";
import { ArrowRight, ArrowUpRight, Banknote, BadgeCheck, Building2, Check, Clock3, FileCheck2, Globe2, Landmark, ShieldCheck, Sparkles, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { services, licenses } from "@/lib/siteData";

const packages = {
  "Free Zone": { price: "AED 4,999", title: "A lean, compliant launch into the UAE's global business hubs.", note: "Best for international founders and digital-first teams." },
  Mainland: { price: "AED 14,500", title: "A local-market company built to trade, hire, and grow without limits.", note: "Best for businesses serving UAE customers and public contracts." },
  Offshore: { price: "AED 6,999", title: "A discreet structure for international holdings and cross-border planning.", note: "Best for carefully planned asset and group structures." },
};

export default function Home() {
  const [packageType, setPackageType] = useState<keyof typeof packages>("Free Zone");
  const selected = packages[packageType];

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-950" data-testid="home-page">
      <SiteHeader />
      <main>
        <section className="hero-shell" data-testid="hero-section">
          <div className="hero-image" aria-hidden="true" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-end gap-12 px-4 pb-20 pt-36 sm:px-6 lg:grid-cols-[1.12fr_0.88fr] lg:px-8 lg:pb-24">
            <div className="max-w-3xl text-white">
              <div className="eyebrow eyebrow-light" data-testid="hero-eyebrow"><span className="eyebrow-dot" />UAE business setup / startupdesk.ae</div>
              <h1 className="mt-7 max-w-3xl font-heading text-5xl font-extrabold leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-7xl" data-testid="hero-heading">Launch with clarity.<br /><span className="text-emerald-300">Scale with authority.</span></h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-200" data-testid="hero-description">StartupDesk gives founders a simpler route to company formation, banking support, and strategic growth across Dubai and the UAE.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link to="/contact" className="button-accent" data-testid="hero-primary-cta">Get your setup plan <ArrowUpRight size={17} /></Link>
                <Link to="/services" className="button-ghost-light" data-testid="hero-secondary-cta">Explore jurisdictions <ArrowRight size={17} /></Link>
              </div>
              <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-300" data-testid="hero-proof-row"><span className="flex items-center gap-2"><ShieldCheck size={15} className="text-emerald-300" />No hidden fees</span><span className="flex items-center gap-2"><Clock3 size={15} className="text-emerald-300" />3–5 day average</span><span className="flex items-center gap-2"><Globe2 size={15} className="text-emerald-300" />Remote-ready</span></div>
            </div>
            <div className="relative lg:justify-self-end">
              <div className="hero-panel" data-testid="hero-package-panel">
                <div className="flex items-start justify-between gap-4"><div><p className="eyebrow eyebrow-light" data-testid="hero-panel-label">Start from</p><p className="mt-3 font-heading text-4xl font-extrabold tracking-[-0.06em]" data-testid="hero-price">{selected.price}</p></div><span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs font-bold text-emerald-200" data-testid="hero-panel-badge">2025 packages</span></div>
                <p className="mt-8 text-lg font-semibold leading-7 text-white" data-testid="hero-package-title">{selected.title}</p>
                <p className="mt-3 text-sm leading-6 text-slate-400" data-testid="hero-package-note">{selected.note}</p>
                <div className="mt-7 grid grid-cols-3 gap-2" data-testid="package-selector-tabs">
                  {(Object.keys(packages) as (keyof typeof packages)[]).map((type) => <button key={type} type="button" onClick={() => setPackageType(type)} className={`package-tab ${packageType === type ? "package-tab-active" : ""}`} data-testid={`package-tab-${type.toLowerCase().replace(" ", "-")}`}>{type}</button>)}
                </div>
                <Link to="/cost-calculator" className="mt-6 flex items-center justify-between border-t border-white/10 pt-5 text-sm font-bold text-emerald-300" data-testid="hero-calculator-link">Build a tailored estimate <ArrowUpRight size={16} /></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white" data-testid="trust-bar">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 py-7 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
            {[{ value: "1,200+", label: "Companies formed", icon: Building2 }, { value: "99.4%", label: "Bank approval rate", icon: Landmark }, { value: "3–5 days", label: "Average turnaround", icon: Clock3 }, { value: "100%", label: "Compliance focused", icon: BadgeCheck }].map(({ value, label, icon: Icon }) => <div key={label} className="flex items-center gap-4" data-testid={`trust-stat-${label.toLowerCase().replaceAll(" ", "-")}`}><Icon size={22} className="text-emerald-600" /><div><p className="font-heading text-xl font-extrabold tracking-tight text-slate-950">{value}</p><p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{label}</p></div></div>)}
          </div>
        </section>

        <section className="section-pad" data-testid="value-pillars-section">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="section-heading-row"><div><p className="eyebrow" data-testid="value-pillars-eyebrow">Why StartupDesk</p><h2 className="section-title" data-testid="value-pillars-heading">A better launch,<br /><span className="text-emerald-600">by design.</span></h2></div><p className="max-w-md text-base leading-7 text-slate-600" data-testid="value-pillars-description">You get practical UAE expertise without the opaque pricing, handoffs, or slow back-and-forth that make business setup feel harder than it should.</p></div>
            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[{ icon: Banknote, title: "Transparent pricing", desc: "Clear packages and a quote that makes sense before you commit." }, { icon: ShieldCheck, title: "Banking support", desc: "A prepared compliance dossier and warm introductions for the next step." }, { icon: FileCheck2, title: "End-to-end setup", desc: "Licensing, visas, offices, and governance aligned around one plan." }, { icon: UsersRound, title: "Founder-first advice", desc: "A senior point of contact who understands your ambition and timeline." }].map(({ icon: Icon, title, desc }, index) => <article className={`pillar-card ${index === 0 ? "pillar-card-featured" : ""}`} key={title} data-testid={`value-pillar-${index + 1}`}><span className="icon-square"><Icon size={21} /></span><h3 className="mt-8 font-heading text-xl font-bold tracking-tight" data-testid={`value-pillar-title-${index + 1}`}>{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600" data-testid={`value-pillar-description-${index + 1}`}>{desc}</p><span className="mt-8 block font-mono text-xs font-bold text-emerald-600">0{index + 1}</span></article>)}</div>
          </div>
        </section>

        <section className="section-pad bg-[#0b0f19] text-white" data-testid="jurisdictions-section">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="section-heading-row"><div><p className="eyebrow eyebrow-dark" data-testid="jurisdictions-eyebrow">Find your fit</p><h2 className="section-title text-white" data-testid="jurisdictions-heading">Popular UAE<br /><span className="text-emerald-300">jurisdictions.</span></h2></div><Link to="/services" className="button-ghost-light self-end" data-testid="jurisdictions-view-all">View all options <ArrowRight size={17} /></Link></div>
            <div className="mt-14 grid gap-4 lg:grid-cols-12">
              {services.map((service, index) => <Link to={`/services/${service.slug}`} key={service.slug} className={`dark-service-card ${index === 0 ? "lg:col-span-7 lg:row-span-2" : "lg:col-span-5"}`} data-testid={`home-service-card-${service.slug}`}><div className="service-card-image" style={{ backgroundImage: `url(${service.image})` }} /><div className="relative flex h-full min-h-[240px] flex-col justify-end p-6 sm:p-8"><div className="flex items-center justify-between gap-4"><span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-emerald-200">{service.badge}</span><ArrowUpRight size={19} className="text-emerald-300" /></div><h3 className="mt-5 max-w-md font-heading text-2xl font-bold tracking-tight text-white" data-testid={`home-service-title-${service.slug}`}>{service.shortTitle}</h3><div className="mt-4 flex items-end justify-between gap-4"><p className="text-sm text-slate-300">{service.description}</p><span className="shrink-0 font-mono text-sm font-bold text-white">{service.price}</span></div></div></Link>)}
            </div>
          </div>
        </section>

        <section className="section-pad" data-testid="process-section"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="max-w-xl"><p className="eyebrow" data-testid="process-eyebrow">A clear path forward</p><h2 className="section-title" data-testid="process-heading">From first call<br />to <span className="text-emerald-600">fully live.</span></h2></div><div className="mt-14 grid gap-4 md:grid-cols-3">{[{ number: "01", title: "Strategic consultation", desc: "We understand your activity, ownership, timeline, and growth plan." }, { number: "02", title: "Document filing", desc: "Your application is prepared, checked, and submitted to the right authority." }, { number: "03", title: "License & launch", desc: "Receive the documents, banking handover, and practical next steps to operate." }].map((step) => <div key={step.number} className="process-card" data-testid={`process-step-${step.number}`}><span className="font-mono text-sm font-bold text-emerald-600">{step.number}</span><h3 className="mt-10 font-heading text-2xl font-bold tracking-tight" data-testid={`process-step-title-${step.number}`}>{step.title}</h3><p className="mt-4 text-sm leading-6 text-slate-600" data-testid={`process-step-description-${step.number}`}>{step.desc}</p><ArrowUpRight size={18} className="mt-10 text-slate-400" /></div>)}</div></div></section>

        <section className="section-pad border-y border-slate-200 bg-white" data-testid="licenses-preview-section"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="section-heading-row"><div><p className="eyebrow" data-testid="licenses-preview-eyebrow">Choose your activity</p><h2 className="section-title" data-testid="licenses-preview-heading">The right license<br /><span className="text-emerald-600">changes everything.</span></h2></div><Link to="/licenses" className="button-outline self-end" data-testid="licenses-view-all">Explore licenses <ArrowRight size={17} /></Link></div><div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{licenses.slice(0, 6).map((license, index) => <Link to="/licenses" className="license-card" key={license.title} data-testid={`license-preview-card-${index + 1}`}><span className="license-icon" data-testid={`license-preview-icon-${index + 1}`}>{license.icon}</span><h3 className="mt-7 font-heading text-lg font-bold tracking-tight" data-testid={`license-preview-title-${index + 1}`}>{license.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600" data-testid={`license-preview-description-${index + 1}`}>{license.description}</p><ArrowUpRight size={17} className="mt-7 text-emerald-600" /></Link>)}</div></div></section>

        <section className="section-pad" data-testid="home-final-cta"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="cta-banner"><div className="relative max-w-2xl"><p className="eyebrow eyebrow-light" data-testid="home-cta-eyebrow"><span className="eyebrow-dot" />Your next chapter starts here</p><h2 className="mt-6 font-heading text-4xl font-extrabold leading-tight tracking-[-0.05em] text-white sm:text-5xl" data-testid="home-cta-heading">Ready to build your UAE presence with confidence?</h2><p className="mt-5 text-base leading-7 text-slate-300" data-testid="home-cta-description">Tell us where you want to go. We’ll show you the clearest way to get there.</p><Link to="/contact" className="button-accent mt-8" data-testid="home-cta-button">Speak with an advisor <ArrowUpRight size={17} /></Link></div><Sparkles className="absolute -right-4 -top-5 text-emerald-300/30 sm:right-12 sm:top-12" size={150} /></div></div></section>
      </main>
      <SiteFooter />
    </div>
  );
}
