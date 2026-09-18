import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="bg-[#0b0f19] text-white" data-testid="site-footer">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr_0.7fr_0.8fr] lg:px-8">
        <div>
          <Link to="/" className="flex items-center gap-3" data-testid="footer-brand-link">
            <span className="brand-mark brand-mark-dark" aria-hidden="true"><span /></span>
            <span className="font-heading text-xl font-extrabold tracking-[-0.04em]" data-testid="footer-brand-name">Startup<span className="text-emerald-400">Desk</span></span>
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400" data-testid="footer-description">A sharper way to establish, structure, and grow your UAE business presence. Clear advice, transparent packages, and one accountable team.</p>
          <div className="mt-7 flex items-center gap-3 text-sm text-slate-400" data-testid="footer-domain"><span className="h-2 w-2 rounded-full bg-emerald-400" />startupdesk.ae</div>
        </div>
        <div>
          <p className="eyebrow eyebrow-dark" data-testid="footer-explore-label">Explore</p>
          <div className="mt-5 grid gap-3 text-sm text-slate-300">
            <Link to="/services" className="footer-link" data-testid="footer-link-services">Jurisdictions</Link>
            <Link to="/licenses" className="footer-link" data-testid="footer-link-licenses">Business licenses</Link>
            <Link to="/cost-calculator" className="footer-link" data-testid="footer-link-calculator">Cost calculator</Link>
            <Link to="/about" className="footer-link" data-testid="footer-link-about">About StartupDesk</Link>
            <Link to="/contact" className="footer-link" data-testid="footer-link-contact">Speak with an advisor</Link>
          </div>
        </div>
        <div>
          <p className="eyebrow eyebrow-dark" data-testid="footer-contact-label">Contact</p>
          <div className="mt-5 grid gap-4 text-sm text-slate-300">
            <span className="flex items-center gap-3" data-testid="footer-location"><MapPin size={16} className="text-emerald-400" />Dubai, United Arab Emirates</span>
            <a href="mailto:hello@startupdesk.ae" className="footer-link flex items-center gap-3" data-testid="footer-email-link"><Mail size={16} className="text-emerald-400" />hello@startupdesk.ae</a>
            <a href="tel:+97145000000" className="footer-link flex items-center gap-3" data-testid="footer-phone-link"><Phone size={16} className="text-emerald-400" />+971 4 500 0000</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <span data-testid="footer-copyright">© 2025 StartupDesk. Built for ambitious businesses in the UAE.</span>
          <span className="flex items-center gap-2" data-testid="footer-note">Independent advisory platform <ArrowUpRight size={13} /></span>
        </div>
      </div>
    </footer>
  );
}
