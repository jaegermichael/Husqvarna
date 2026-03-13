import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MagneticWrapper } from "@/components/MagneticWrapper";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/img1.jpeg')`, y: backgroundY }}
      />
      {/* Improved Overlay with Premium Lighting */}
      <div className="absolute inset-0 bg-primary/60 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-transparent to-secondary/20 opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,_rgba(255,103,43,0.15)_0%,_transparent_50%)]" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,_rgba(30,41,59,0.5)_0%,_transparent_50%)]" />

      <div className="container relative z-10 px-4 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            style={{ y: textY }}
            className="lg:col-span-7 text-left"
          >
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground uppercase leading-[0.9] tracking-tight drop-shadow-lg"
            >
              Power your <span className="text-secondary">yard.</span><br />
              Finish <span className="text-secondary">faster.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="mt-8 text-lg md:text-xl text-primary-foreground/90 font-body max-w-xl leading-relaxed drop-shadow-sm"
            >
              Premium Husqvarna outdoor power equipment built for serious homeowners,
              landscapers, and professionals who demand performance. Do it right the first time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="mt-10 flex flex-col sm:flex-row gap-6"
            >
              <MagneticWrapper>
                <Button asChild variant="hero" size="lg" className="px-8 py-7 text-lg shadow-xl hover:shadow-2xl transition-shadow">
                  <a href="#locations">Visit Our Stores</a>
                </Button>
              </MagneticWrapper>
              <MagneticWrapper>
                <Button asChild variant="heroOutline" size="lg" className="px-8 py-7 text-lg shadow-xl hover:shadow-2xl transition-shadow backdrop-blur-sm bg-primary/10">
                  <a href="#products">View Products</a>
                </Button>
              </MagneticWrapper>
            </motion.div>
          </motion.div>

          <div className="lg:col-span-5 hidden lg:flex flex-col gap-4 items-end pr-12">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative h-24 w-40 rounded-xl overflow-hidden border border-white/50 bg-white shadow-lg group translate-x-4"
            >
              <img src="/images/TS148 ride on tractor.jpeg" alt="Husqvarna Tractor" className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-x-0 bottom-0 py-1 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-[8px] text-white text-center font-bold uppercase tracking-widest">Tractor Series</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative h-24 w-40 rounded-xl overflow-hidden border border-white/50 bg-white shadow-lg group -translate-x-8"
            >
              <img src="/images/372xp Husqvarna chainsaw.6.3kg , heavy duty machine.$875.jpeg" alt="Husqvarna Chainsaw" className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-x-0 bottom-0 py-1 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-[8px] text-white text-center font-bold uppercase tracking-widest">Pro Chainsaws</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="relative h-24 w-40 rounded-xl overflow-hidden border border-white/50 bg-white shadow-lg group translate-x-4"
            >
              <img src="/images/LC 353V  lawnmower powered by a fuel efficient Husqvarna engine with stepless variable speed .$830.jpeg" alt="Husqvarna Lawnmower" className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-x-0 bottom-0 py-1 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-[8px] text-white text-center font-bold uppercase tracking-widest">Walk Mowers</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
