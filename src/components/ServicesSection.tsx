import { motion } from "framer-motion";
import { Wrench, Settings, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Wrench,
    title: "Professional Repairs",
    description: "Factory-trained technicians using genuine Husqvarna parts.",
  },
  {
    icon: Settings,
    title: "Routine Servicing",
    description: "Keep your machines running at peak performance, season after season.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Minimized downtime so you get back to work faster.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="container px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-4xl md:text-5xl font-bold text-foreground uppercase tracking-tight text-center"
        >
          Service & <span className="text-secondary">Repairs</span>
        </motion.h2>
        <p className="mt-4 text-center text-muted-foreground font-body text-lg max-w-xl mx-auto">
          Skilled technicians. Genuine parts. Machines running like new.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { ...services[0], img: "/images/Husqvarna  power cutter.jpeg" },
            { ...services[1], img: "/images/Husqvarna 143r Brushcutter $500.jpeg" },
            { ...services[2], img: "/images/Pw 360 $663.jpeg" }
          ].map(({ icon: Icon, title, description, img }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col rounded-2xl border border-border bg-background overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center shadow-lg">
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-heading text-xl font-bold text-foreground uppercase tracking-wide group-hover:text-secondary transition-colors">
                  {title}
                </h3>
                <p className="mt-3 text-muted-foreground font-body leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="hero" size="lg">
            <a href="#contact">Book a Service</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
