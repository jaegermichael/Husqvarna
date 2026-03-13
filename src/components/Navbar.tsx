import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import husqvarnaLogo from "@/assets/husqvarna-logo.png";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Locations", href: "#locations" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-3">
          <img src={husqvarnaLogo} alt="Husqvarna" className="h-10 w-auto" />
          <span className="font-heading text-lg font-bold tracking-wider text-primary-foreground uppercase hidden sm:inline">Husqvarna</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-primary-foreground/80 hover:text-primary-foreground font-body text-sm font-medium tracking-wide uppercase transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button asChild variant="hero" size="sm">
            <a href="#contact">Contact Us</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-primary-foreground/80 hover:text-primary-foreground font-body text-sm uppercase tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <Button asChild variant="hero" size="sm" className="w-full">
              <a href="#contact" onClick={() => setOpen(false)}>
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
