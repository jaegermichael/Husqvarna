import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Premium Husqvarna machines",
  "Genuine spare parts & accessories",
  "Expert repairs & servicing",
  "Reliable after-sales support",
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="container px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground uppercase tracking-tight"
            >
              Why Choose <span className="text-secondary">Husqvarna</span> Hub
            </motion.h2>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-4 bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 hover:bg-primary-foreground/10 transition-colors group"
                >
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-primary-foreground font-body text-lg font-medium leading-tight">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden aspect-square border-4 border-white/10 shadow-3xl bg-white"
          >
            <img
              src="/images/Husqvarna  553 RS Brushcutter $733.jpeg"
              alt="Husqvarna Brushcutter"
              className="w-full h-full object-contain p-8"
            />
            <div className="absolute inset-0 bg-black/5 pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
              <p className="text-white font-heading font-bold text-xl uppercase tracking-wider">Premium Durability</p>
              <p className="text-white/80 text-sm mt-1">Engineered for the most demanding environments in Zimbabwe.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
