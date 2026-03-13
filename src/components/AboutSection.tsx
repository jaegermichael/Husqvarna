import { motion } from "framer-motion";
import { Shield, Wrench, Award } from "lucide-react";

const features = [
  { icon: Shield, label: "Genuine Equipment" },
  { icon: Wrench, label: "Expert Servicing" },
  { icon: Award, label: "Built to Last" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl border border-border bg-white group"
          >
            <img
              src="/images/Z460 zero turn mower.jpeg"
              alt="Husqvarna Premium Equipment"
              className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/5 pointer-events-none" />
            <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl m-4 pointer-events-none" />
          </motion.div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-heading text-4xl md:text-5xl font-bold text-foreground uppercase tracking-tight"
            >
              Zimbabwe's Trusted{" "}
              <span className="text-secondary">Husqvarna</span> Dealer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-6 text-lg text-muted-foreground font-body leading-relaxed"
            >
              Husqvarna supplies genuine Husqvarna outdoor power
              equipment, original spare parts, and expert servicing across
              Zimbabwe. We stand behind every machine we sell — because
              durability, performance, and long-term reliability aren't optional.
              They're the standard.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {features.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <span className="font-heading text-lg font-semibold text-foreground uppercase tracking-wide">
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
