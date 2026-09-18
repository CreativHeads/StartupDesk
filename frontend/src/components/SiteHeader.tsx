import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, BriefcaseBusiness, Building2, ChevronDown, Globe2, Menu, Phone, X } from "lucide-react";

type MenuLink = { label: string; path: string };
type MenuColumn = { heading: string; links: MenuLink[] };
type MenuGroup = { id: string; label: string; columns: MenuColumn[] };

const serviceCatalogPath = "/services#services-catalog";

const menuGroups: MenuGroup[] = [
  {
    id: "free-zone",
    label: "Free Zone",
    columns: [
      {
        heading: "Dubai",
        links: [
          { label: "Dubai Free Zone overview", path: "/services/dubai-free-zone" },
          { label: "Meydan Free Zone", path: serviceCatalogPath },
          { label: "DMCC Free Zone", path: serviceCatalogPath },
          { label: "Dubai Silicon Oasis", path: serviceCatalogPath },
          { label: "DIFC", path: serviceCatalogPath },
          { label: "Dubai Airport Free Zone", path: serviceCatalogPath },
          { label: "IFZA", path: serviceCatalogPath },
          { label: "JAFZA", path: serviceCatalogPath },
          { label: "Dubai South", path: serviceCatalogPath },
          { label: "DWTC Free Zone", path: serviceCatalogPath },
        ],
      },
      {
        heading: "Abu Dhabi",
        links: [
          { label: "Masdar City Free Zone", path: serviceCatalogPath },
          { label: "KEZAD", path: serviceCatalogPath },
          { label: "Abu Dhabi Global Market", path: serviceCatalogPath },
        ],
      },
      {
        heading: "Sharjah",
        links: [
          { label: "SRTIP", path: serviceCatalogPath },
          { label: "SPC Free Zone", path: "/services/spc-free-zone" },
          { label: "SHAMS Media City", path: "/services/shams-free-zone" },
          { label: "Hamriyah Free Zone", path: serviceCatalogPath },
        ],
      },
      {
        heading: "Other Emirates",
        links: [
          { label: "Ajman Free Zone", path: serviceCatalogPath },
          { label: "Ajman Media City", path: serviceCatalogPath },
          { label: "RAKEZ", path: serviceCatalogPath },
          { label: "Umm Al Quwain FTZ", path: serviceCatalogPath },
          { label: "Creative City Fujairah", path: serviceCatalogPath },
        ],
      },
    ],
  },
  {
    id: "offshore",
    label: "Offshore",
    columns: [{ heading: "Offshore structures", links: [
      { label: "JAFZA Offshore", path: "/services/offshore" },
      { label: "RAK Offshore", path: "/services/offshore" },
      { label: "RAK ICC", path: "/services/offshore" },
      { label: "Ajman Offshore", path: "/services/offshore" },
    ] }],
  },
  {
    id: "mainland",
    label: "Mainland",
    columns: [{ heading: "Mainland company setup", links: [
      { label: "Dubai Mainland", path: "/services/mainland" },
      { label: "Abu Dhabi Mainland", path: "/services/mainland" },
      { label: "Sharjah Mainland", path: "/services/mainland" },
      { label: "Fujairah Mainland", path: "/services/mainland" },
    ] }],
  },
  {
    id: "other-services",
    label: "Other Services",
    columns: [{ heading: "Business support", links: [
      { label: "Accounting & bookkeeping", path: "/contact?topic=accounting" },
      { label: "Corporate banking", path: "/contact?topic=banking" },
      { label: "Corporate tax advisory", path: "/contact?topic=tax" },
    ] }],
  },
  {
    id: "resources",
    label: "Resources",
    columns: [{ heading: "Explore StartupDesk", links: [
      { label: "About us", path: "/about" },
      { label: "Contact", path: "/contact" },
      { label: "Setup FAQs", path: "/services#services-comparison" },
      { label: "Business license guide", path: "/licenses" },
    ] }],
  },
];

function MenuLinkItem({ item, id, onClick }: { item: MenuLink; id: string; onClick?: () => void }) {
  return (
    <Link to={item.path} onClick={onClick} className="mega-menu-link" data-testid={id}>
      <span>{item.label}</span><ArrowRight size={14} />
    </Link>
  );
}

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [desktopSection, setDesktopSection] = useState<string | null>(null);
  const location = useLocation();

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileSection(null);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-[0_8px_35px_rgba(15,23,42,0.04)] backdrop-blur-xl" data-testid="site-header">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center gap-5 px-4 sm:px-6 xl:px-8">
        <Link to="/" onClick={closeMobileMenu} className="group flex shrink-0 items-center gap-3" data-testid="brand-home-link">
          <span className="brand-mark" aria-hidden="true"><span /></span>
          <span className="font-heading text-[1.05rem] font-extrabold tracking-[-0.04em] text-slate-950" data-testid="brand-name">Startup<span className="text-emerald-600">Desk</span></span>
        </Link>

        <nav className="ml-auto hidden h-full items-stretch lg:flex" aria-label="Primary navigation" data-testid="desktop-navigation">
          {menuGroups.map((group) => {
            const isOpen = desktopSection === group.id;
            const isActive = group.id === "resources"
              ? ["/about", "/licenses"].some((path) => location.pathname.startsWith(path))
              : group.id === "other-services"
                ? location.pathname === "/contact" && Boolean(location.search)
                : group.id === "offshore"
                  ? location.pathname.includes("offshore")
                  : group.id === "mainland"
                    ? location.pathname.includes("mainland")
                    : location.pathname.startsWith("/services") && !location.pathname.includes("offshore") && !location.pathname.includes("mainland");
            const isMega = group.id === "free-zone";
            return (
              <div
                key={group.id}
                className="relative flex items-stretch"
                onMouseEnter={() => setDesktopSection(group.id)}
                onMouseLeave={() => setDesktopSection(null)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node)) setDesktopSection(null);
                }}
              >
                <button
                  type="button"
                  className={`desktop-menu-trigger flex items-center gap-1.5 px-3 ${isActive ? "desktop-menu-trigger-active" : ""}`}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  onClick={() => setDesktopSection(group.id)}
                  onKeyDown={(event) => { if (event.key === "Escape") setDesktopSection(null); }}
                  data-testid={`desktop-menu-${group.id}`}
                >
                  {group.label}<ChevronDown size={14} className={isOpen ? "rotate-180" : ""} />
                </button>

                {isOpen && (
                  <div className={`${isMega ? "mega-menu-panel" : "dropdown-menu-panel"}`} data-testid={`desktop-dropdown-${group.id}`}>
                    {isMega ? (
                      <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-x-7">
                        {group.columns.map((column, columnIndex) => (
                          <div key={column.heading} className={columnIndex > 0 ? "mega-menu-column" : ""}>
                            <p className="mega-menu-heading" data-testid={`desktop-${group.id}-column-${columnIndex + 1}`}>{column.heading}</p>
                            <div className="mt-3 grid gap-0.5">
                              {column.links.map((item, itemIndex) => <MenuLinkItem key={`${column.heading}-${item.label}`} item={item} id={`desktop-${group.id}-link-${columnIndex + 1}-${itemIndex + 1}`} onClick={() => setDesktopSection(null)} />)}
                            </div>
                          </div>
                        ))}
                        <Link to="/services" onClick={() => setDesktopSection(null)} className="mega-menu-feature col-span-4 mt-5" data-testid="desktop-free-zone-view-all">
                          <span className="flex items-center gap-3"><span className="mega-menu-feature-icon"><Globe2 size={18} /></span><span><strong>Compare every setup path</strong><small>Explore pricing, ownership, visas, and operating fit in one place.</small></span></span><ArrowRight size={18} />
                        </Link>
                      </div>
                    ) : (
                      <div>
                        <p className="mega-menu-heading">{group.columns[0].heading}</p>
                        <div className="mt-3 grid gap-0.5">
                          {group.columns[0].links.map((item, itemIndex) => <MenuLinkItem key={item.label} item={item} id={`desktop-${group.id}-link-${itemIndex + 1}`} onClick={() => setDesktopSection(null)} />)}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 xl:flex" data-testid="desktop-header-actions">
          <a href="tel:+97145000000" className="header-phone-button" data-testid="header-phone-link"><Phone size={15} />+971 4 500 0000</a>
          <Link to="/contact" className="button-primary px-4 py-2.5 text-sm" data-testid="nav-cta-button">Enquire now <ArrowRight size={15} /></Link>
        </div>

        <button type="button" className="icon-button ml-auto inline-flex lg:hidden" onClick={() => setMobileOpen((value) => !value)} aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen} data-testid="mobile-menu-toggle-button">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="mobile-menu-panel lg:hidden" data-testid="mobile-navigation-panel">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
            <Link to="/" onClick={closeMobileMenu} className="mobile-home-link" data-testid="mobile-nav-home-link"><span className="flex items-center gap-3"><Building2 size={17} className="text-emerald-600" />Home</span><ArrowRight size={16} /></Link>
            {menuGroups.map((group) => {
              const expanded = mobileSection === group.id;
              return (
                <div key={group.id} className="mobile-menu-section">
                  <button type="button" className="mobile-accordion-trigger" onClick={() => setMobileSection(expanded ? null : group.id)} aria-expanded={expanded} data-testid={`mobile-menu-${group.id}`}>
                    <span>{group.label}</span><ChevronDown size={17} className={expanded ? "rotate-180" : ""} />
                  </button>
                  {expanded && (
                    <div className="mobile-accordion-content" data-testid={`mobile-dropdown-${group.id}`}>
                      {group.columns.map((column, columnIndex) => (
                        <div key={column.heading} className="py-2">
                          <p className="mega-menu-heading px-2" data-testid={`mobile-${group.id}-column-${columnIndex + 1}`}>{column.heading}</p>
                          <div className="mt-1 grid gap-0.5">
                            {column.links.map((item, itemIndex) => <MenuLinkItem key={`${column.heading}-${item.label}`} item={item} id={`mobile-${group.id}-link-${columnIndex + 1}-${itemIndex + 1}`} onClick={closeMobileMenu} />)}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <div className="grid grid-cols-2 gap-2 py-4">
              <a href="tel:+97145000000" className="button-outline justify-center" data-testid="mobile-header-phone-link"><Phone size={15} />Call us</a>
              <Link to="/contact" onClick={closeMobileMenu} className="button-primary justify-center" data-testid="mobile-nav-cta-button"><BriefcaseBusiness size={15} />Enquire</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
