import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Jurisdictions", path: "/services" },
  { label: "Licenses", path: "/licenses" },
  { label: "About", path: "/about" },
  { label: "Pricing", path: "/cost-calculator" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl" data-testid="site-header">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" onClick={closeMenu} className="group flex items-center gap-3" data-testid="brand-home-link">
          <span className="brand-mark" aria-hidden="true"><span /></span>
          <span className="font-heading text-[1.05rem] font-extrabold tracking-[-0.04em] text-slate-950" data-testid="brand-name">Startup<span className="text-emerald-600">Desk</span></span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation" data-testid="desktop-navigation">
          {navItems.map((item) => {
            const active = item.path === "/" ? location.pathname === "/" : location.pathname.startsWith(item.path);
            return <Link key={item.path} to={item.path} className={`nav-link ${active ? "nav-link-active" : ""}`} data-testid={`nav-link-${item.label.toLowerCase()}`}>{item.label}</Link>;
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <span className="hidden text-xs font-semibold text-slate-500 xl:inline" data-testid="domain-label">startupdesk.ae</span>
          <Link to="/contact" className="button-primary px-4 py-2.5 text-sm" data-testid="nav-cta-button">Get a strategy call <ArrowUpRight size={15} /></Link>
        </div>

        <button type="button" className="icon-button inline-flex lg:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"} data-testid="mobile-menu-toggle-button">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-5 shadow-lg lg:hidden" data-testid="mobile-navigation-panel">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1" aria-label="Mobile navigation">
            {navItems.map((item) => <Link key={item.path} to={item.path} onClick={closeMenu} className="mobile-nav-link" data-testid={`mobile-nav-link-${item.label.toLowerCase()}`}>{item.label}<ArrowUpRight size={16} /></Link>)}
            <Link to="/contact" onClick={closeMenu} className="button-primary mt-4 justify-center" data-testid="mobile-nav-cta-button">Get a strategy call <ArrowUpRight size={16} /></Link>
          </nav>
        </div>
      )}
    </header>
  );
}
