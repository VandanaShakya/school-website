import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, BookOpen } from "lucide-react";
import schoolLogo from "@/assets/school-logo.png";

const facilitiesItems = [
  { label: "Bright Classroom", href: "/facilities#classroom" },
  { label: "Lab and Library", href: "/facilities#lab" },
  { label: "Meeting Hall", href: "/facilities#hall" },
  { label: "Play Ground", href: "/facilities#playground" },
  { label: "Sports Club", href: "/facilities#sports" },
];

const admissionItems = [
  { label: "Enrollment", href: "/admission#enrollment" },
  { label: "High School", href: "/admission#highschool" },
  { label: "Kindergarten", href: "/admission#kindergarten" },
  { label: "Learning", href: "/admission#learning" },
];

interface DropdownProps {
  label: string;
  items: { label: string; href: string }[];
  color: string;
}

function DesktopDropdown({ label, items, color }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={`flex items-center gap-1 font-display font-700 text-[15px] font-bold text-foreground hover:${color} transition-colors duration-200 px-1 py-2`}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {label}
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 w-52 bg-card rounded-2xl shadow-card-lg border border-border z-50 overflow-hidden animate-slide-down">
          {items.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="block px-5 py-3 text-[14px] font-body text-foreground hover:bg-muted hover:text-primary transition-colors duration-150 font-medium"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [location]);

  const navLinkClass = (path: string) =>
    `font-display font-bold text-[15px] transition-colors duration-200 px-1 py-2 ${
      location.pathname === path ? "text-primary" : "text-foreground hover:text-primary"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md shadow-card border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={schoolLogo} alt="BrightMinds School" className="h-12 w-12 rounded-full" />
          <div>
            <span className="block font-display font-900 text-xl leading-tight text-primary">BrightMinds</span>
            <span className="block font-body text-xs text-muted-foreground tracking-wide">Kids School</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          <Link to="/" className={navLinkClass("/")}>Home</Link>
          <Link to="/about" className={navLinkClass("/about")}>About</Link>
          <DesktopDropdown label="Facilities" items={facilitiesItems} color="text-school-blue" />
          <DesktopDropdown label="Admission" items={admissionItems} color="text-school-green" />
          <Link to="/contact" className={navLinkClass("/contact")}>Contact</Link>
        </nav>

        {/* CTA Button */}
        <Link
          to="/admission"
          className="hidden lg:inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-display font-bold text-sm shadow-colored hover:opacity-90 transition-all duration-200 hover:scale-105"
        >
          <BookOpen size={16} />
          Enroll Now
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 rounded-xl text-foreground hover:bg-muted transition-colors"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border shadow-card-lg animate-slide-down">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            <Link to="/" className="px-4 py-3 font-display font-bold text-foreground hover:text-primary hover:bg-muted rounded-xl transition-colors">Home</Link>
            <Link to="/about" className="px-4 py-3 font-display font-bold text-foreground hover:text-primary hover:bg-muted rounded-xl transition-colors">About</Link>

            {/* Facilities dropdown mobile */}
            <div>
              <button
                className="w-full flex items-center justify-between px-4 py-3 font-display font-bold text-foreground hover:text-primary hover:bg-muted rounded-xl transition-colors"
                onClick={() => setMobileExpanded(mobileExpanded === "facilities" ? null : "facilities")}
              >
                Facilities
                <ChevronDown size={16} className={`transition-transform ${mobileExpanded === "facilities" ? "rotate-180" : ""}`} />
              </button>
              {mobileExpanded === "facilities" && (
                <div className="ml-4 mt-1 flex flex-col gap-1 border-l-2 border-primary pl-4">
                  {facilitiesItems.map((item) => (
                    <Link key={item.label} to={item.href} className="py-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors">
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Admission dropdown mobile */}
            <div>
              <button
                className="w-full flex items-center justify-between px-4 py-3 font-display font-bold text-foreground hover:text-primary hover:bg-muted rounded-xl transition-colors"
                onClick={() => setMobileExpanded(mobileExpanded === "admission" ? null : "admission")}
              >
                Admission
                <ChevronDown size={16} className={`transition-transform ${mobileExpanded === "admission" ? "rotate-180" : ""}`} />
              </button>
              {mobileExpanded === "admission" && (
                <div className="ml-4 mt-1 flex flex-col gap-1 border-l-2 border-secondary pl-4">
                  {admissionItems.map((item) => (
                    <Link key={item.label} to={item.href} className="py-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors">
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/contact" className="px-4 py-3 font-display font-bold text-foreground hover:text-primary hover:bg-muted rounded-xl transition-colors">Contact</Link>
            <Link
              to="/admission"
              className="mt-2 mx-4 py-3 text-center rounded-full bg-primary text-primary-foreground font-display font-bold text-sm shadow-colored"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
