import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const locations = [
  {
    city: "Harare",
    address: "Stand No. 8708, Willowvale, Gazaland",
  },
  {
    city: "Midlands",
    address: "Midlands Show Society, Harare–Mvuma Road",
  },
  {
    city: "Bulawayo",
    address: "Stand No. 15 Stourbridge, Belmont",
  },
];

const LocationsSection = () => {
  return (
    <section id="locations" className="py-24 bg-background">
      <div className="container px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-4xl md:text-5xl font-bold text-foreground uppercase tracking-tight text-center"
        >
          Find a <span className="text-secondary">Branch</span>
        </motion.h2>
        <p className="mt-4 text-center text-muted-foreground font-body text-lg">
          Visit us at any of our locations across Zimbabwe.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="mt-5 font-heading text-2xl font-bold text-foreground uppercase tracking-wide">
                {loc.city}
              </h3>
              <p className="mt-2 text-muted-foreground font-body">
                {loc.address}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
