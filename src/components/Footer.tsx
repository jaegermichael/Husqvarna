import { MapPin, Phone } from "lucide-react";
import husqvarnaLogo from "@/assets/husqvarna-logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary py-16">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <img src={husqvarnaLogo} alt="Husqvarna" className="h-12 w-auto" />
              <h3 className="font-heading text-2xl font-bold text-primary-foreground uppercase tracking-wider">
                Husqvarna
              </h3>
            </div>
            <p className="mt-4 text-primary-foreground/70 font-body leading-relaxed">
              Authorized Husqvarna dealer in Zimbabwe. Premium outdoor power
              equipment, genuine parts, and expert service.
            </p>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-primary-foreground uppercase tracking-wide">
              Our Locations
            </h4>
            <div className="mt-4 space-y-3">
              {[
                "Willowvale, Gazaland — Harare",
                "Midlands Show Society — Midlands",
                "Stourbridge, Belmont — Bulawayo",
              ].map((loc) => (
                <div key={loc} className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                  <span className="text-primary-foreground/70 font-body text-sm">
                    {loc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-primary-foreground uppercase tracking-wide">
              Contact
            </h4>
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary" />
                <span className="text-primary-foreground/70 font-body text-sm">
                  Get in touch with your nearest branch
                </span>
              </div>
              <div className="space-y-2 pl-6">
                <a
                  href="tel:+263773989553"
                  className="block text-primary-foreground/70 hover:text-primary-foreground font-body text-sm transition-colors"
                >
                  Gweru 0773 989 553
                </a>
                <a
                  href="tel:+263713342985"
                  className="block text-primary-foreground/70 hover:text-primary-foreground font-body text-sm transition-colors"
                >
                  Bulawayo 0713 342 985
                </a>
                <a
                  href="tel:+263773813628"
                  className="block text-primary-foreground/70 hover:text-primary-foreground font-body text-sm transition-colors"
                >
                  Harare +263 77 381 3628
                </a>
                <a
                  href="tel:+2638644052666"
                  className="block text-primary-foreground/70 hover:text-primary-foreground font-body text-sm transition-colors"
                >
                  Landline +263 8644 052 666
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="font-heading text-lg text-primary-foreground/90 uppercase tracking-wider">
            Performance you can trust.{" "}
            <span className="text-secondary">Service you can depend on.</span>
          </p>
          <p className="mt-4 text-primary-foreground/40 font-body text-sm">
            © {new Date().getFullYear()} Husqvarna. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
