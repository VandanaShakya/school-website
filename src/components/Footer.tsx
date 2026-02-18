import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import schoolLogo from "@/assets/school-logo.png";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Facilities", href: "/facilities" },
  { label: "Admission", href: "/admission" },
  { label: "Contact", href: "/contact" },
];

const facilityLinks = [
  { label: "Bright Classroom", href: "/facilities#classroom" },
  { label: "Lab and Library", href: "/facilities#lab" },
  { label: "Meeting Hall", href: "/facilities#hall" },
  { label: "Play Ground", href: "/facilities#playground" },
  { label: "Sports Club", href: "/facilities#sports" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
  { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
  { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-pink-500" },
  { icon: Youtube, href: "#", label: "YouTube", color: "hover:bg-red-600" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Wave top */}
      <div className="h-16 bg-background" style={{
        clipPath: "ellipse(55% 100% at 50% 0%)",
        background: "hsl(var(--background))",
      }} />

      <div className="bg-foreground -mt-1">
        <div className="container mx-auto px-4 pt-12 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* About column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img src={schoolLogo} alt="BrightMinds School" className="h-12 w-12 rounded-full border-2 border-primary" />
                <div>
                  <span className="block font-display font-extrabold text-lg text-primary leading-tight">BrightMinds</span>
                  <span className="block font-body text-xs text-background/60 tracking-wide">Kids School</span>
                </div>
              </div>
              <p className="font-body text-sm text-background/70 leading-relaxed mb-5">
                Nurturing young minds with excellence, creativity, and joy. We believe every child is a star waiting to shine.
              </p>
              <div className="flex gap-2">
                {socialLinks.map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className={`w-9 h-9 flex items-center justify-center rounded-full bg-background/10 text-background/80 transition-all duration-200 ${color} hover:text-white hover:scale-110`}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-display font-extrabold text-lg text-primary mb-5">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="font-body text-sm text-background/70 hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Facilities */}
            <div>
              <h3 className="font-display font-extrabold text-lg text-secondary mb-5">Our Facilities</h3>
              <ul className="space-y-3">
                {facilityLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="font-body text-sm text-background/70 hover:text-secondary transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary/60 group-hover:bg-secondary transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-display font-extrabold text-lg text-school-green mb-5">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-school-green mt-0.5 shrink-0" />
                  <span className="font-body text-sm text-background/70">123 Education Lane, Learning City, State 45678</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-school-green shrink-0" />
                  <a href="tel:+15551234567" className="font-body text-sm text-background/70 hover:text-school-green transition-colors">+1 (555) 123-4567</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-school-green shrink-0" />
                  <a href="mailto:info@brightminds.edu" className="font-body text-sm text-background/70 hover:text-school-green transition-colors">info@brightminds.edu</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider & Copyright */}
          <div className="mt-12 pt-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-background/50 text-center">
              © {new Date().getFullYear()} BrightMinds Kids School. All rights reserved.
            </p>
            <p className="font-body text-sm text-background/40 text-center">
              Designed with ❤️ for young learners
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
