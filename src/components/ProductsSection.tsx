import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, ArrowRight, Star, Plus, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const products = [
  { name: "2.5kv Husqvarna Generator", price: "Contact for Price", desc: "Reliable power for your home and work.", img: "/images/2.5kv husqvarna  generator.jpeg", category: "Generators" },
  { name: "3.2 kV Husqvarna Generator", price: "Contact for Price", desc: "High performance power delivery.", img: "/images/3.2 kV Husqvarna  generator.jpeg", category: "Generators" },
  { name: "365 Husqvarna Chainsaw", price: "$760", desc: "Heavy duty machine for professional use.", img: "/images/365 Husqvarna chainsaw . heavy duty machine.$760.jpeg", category: "Chainsaws" },
  { name: "372xp Husqvarna Chainsaw", price: "$875", desc: "6.3kg, heavy duty machine for tough jobs.", img: "/images/372xp Husqvarna chainsaw.6.3kg , heavy duty machine.$875.jpeg", category: "Chainsaws" },
  { name: "5.5 kV Husqvarna Generator", price: "Contact for Price", desc: "Versatile and powerful generator.", img: "/images/5.5 kV Husqvarna  generator.jpeg", category: "Generators" },
  { name: "585 Husqvarna Professional", price: "$1340", desc: "The ultimate tool for professional arborists.", img: "/images/585 Husqvarna professional chainsaw 💪🏻.$1340.jpeg", category: "Chainsaws" },
  { name: "8.5kv Husqvarna Generator", price: "Contact for Price", desc: "Maximum power for demanding tasks.", img: "/images/8.5kv Husqvarna  generator.jpeg", category: "Generators" },
  { name: "Husqvarna 331R Brushcutter", price: "$325", desc: "Efficient and easy to use brushcutter.", img: "/images/Husqvarna  331R Brushcutter $325.jpeg", category: "Trimmers" },
  { name: "Husqvarna 541AE Earth Auger", price: "Contact for Price", desc: "Powerful auger for precise drilling.", img: "/images/Husqvarna  541AE earth auger.jpeg", category: "Heavy Equipment" },
  { name: "Husqvarna 541RS Brushcutter", price: "$571", desc: "Reliable and powerful for clearing thick brush.", img: "/images/Husqvarna  541RS  Brushcutter  $571.jpeg", category: "Trimmers" },
  { name: "Husqvarna 553 RS Brushcutter", price: "$733", desc: "High-performance brushcutter for commercial use.", img: "/images/Husqvarna  553 RS Brushcutter $733.jpeg", category: "Trimmers" },
  { name: "Husqvarna 578BTF Leaf Blower", price: "Contact for Price", desc: "Powerful backpack blower for large areas.", img: "/images/Husqvarna  578BTF leaf blower.jpeg", category: "Blowers" },
  { name: "Husqvarna Manual Sprayer", price: "Contact for Price", desc: "Durable and efficient manual sprayer.", img: "/images/Husqvarna  manual  sprayer.jpeg", category: "Sprayers" },
  { name: "Husqvarna Power Cutter", price: "Contact for Price", desc: "Precision cutting for concrete and masonry.", img: "/images/Husqvarna  power cutter.jpeg", category: "Heavy Equipment" },
  { name: "Husqvarna 143r Brushcutter", price: "$500", desc: "Standard brushcutter for general maintenance.", img: "/images/Husqvarna 143r Brushcutter $500.jpeg", category: "Trimmers" },
  { name: "Husqvarna 555Fx Brushcutter", price: "$1544", desc: "Top-tier brushcutter for forestry applications.", img: "/images/Husqvarna 555Fx Brushcutter $1 544.jpeg", category: "Trimmers" },
  { name: "Husqvarna R316TX Rider", price: "Contact for Price", desc: "Exceptional maneuverability for complex gardens.", img: "/images/Husqvarna R316TX rider mower.jpeg", category: "Riders" },
  { name: "LC 151 Petrol Lawnmower", price: "$632", desc: "Efficient 166cc engine with 51cm cutting width.", img: "/images/LC 151 Husqvarna  petrol lawnmower $632.efficient 166cc engine with 51cm cutting width ..jpeg", category: "Walk Mowers" },
  { name: "LC 353V Lawnmower", price: "$830", desc: "Fuel efficient engine with stepless variable speed.", img: "/images/LC 353V  lawnmower powered by a fuel efficient Husqvarna engine with stepless variable speed .$830.jpeg", category: "Walk Mowers" },
  { name: "Pw 360 Pressure Washer", price: "$663", desc: "High pressure washer for deep cleaning.", img: "/images/Pw 360 $663.jpeg", category: "Cleaning" },
  { name: "Rolux Magnum 2200W", price: "Contact for Price", desc: "Powerful electric lawnmower for lawns up to 1400m².", img: "/images/Rolux magnum 2200W is a powerful  electric lawnmower designed for domestic lawns up to 1400 square meters..jpeg", category: "Walk Mowers" },
  { name: "Rolux Magnum 2600W", price: "$525", desc: "Enhanced power for larger domestic gardens.", img: "/images/Rolux magnum 2600w  electric lawnmower $ $525.jpeg", category: "Walk Mowers" },
  { name: "TS148 Ride On Tractor", price: "Contact for Price", desc: "Comfortable and efficient for large estates.", img: "/images/TS148 ride on tractor.jpeg", category: "Tractors" },
  { name: "Ts 114 Tractor Mower", price: "Contact for Price", desc: "Reliable entry-level tractor mower.", img: "/images/Ts 114 tractor  mower.jpeg", category: "Tractors" },
  { name: "Ts354 Ride On Mower", price: "Contact for Price", desc: "High capacity mower for demanding terrain.", img: "/images/Ts354 ride on Mower.jpeg", category: "Tractors" },
  { name: "W100 Husqvarna Water Pump", price: "Contact for Price", desc: "Efficient water transfer for agricultural use.", img: "/images/W100 Husqvarna  water pump.jpeg", category: "Pumps" },
  { name: "W50 Husqvarna Waterpump", price: "Contact for Price", desc: "Portable and reliable water pumping solution.", img: "/images/W50 Husqvarna  waterpump.jpeg", category: "Pumps" },
  { name: "W80 Husqvarna Water Pump", price: "Contact for Price", desc: "Heavy duty water pump for high volume transfer.", img: "/images/W80 Husqvarna  water pump.jpeg", category: "Pumps" },
  { name: "Z248F Zero Turn Mower", price: "Contact for Price", desc: "Exceptional speed and precision for large lawns.", img: "/images/Z248F  zero turn mower.jpeg", category: "Zero Turn" },
  { name: "Z460 Zero Turn Mower", price: "Contact for Price", desc: "Commercial-grade zero turn for professional results.", img: "/images/Z460 zero turn mower.jpeg", category: "Zero Turn" },
  { name: "2 Stroke Oil", price: "Contact for Price", desc: "High-quality 2-stroke engine oil for optimal performance.", img: "/images/2 stroke oil.jpeg", category: "Accessories" },
  { name: "Cutterbar All Sizes", price: "Contact for Price", desc: "Durable cutterbars available in various sizes.", img: "/images/Cutterbar all sizes.jpeg", category: "Accessories" },
  { name: "Mist Blower", price: "Contact for Price", desc: "Professional mist blower for precise application.", img: "/images/Mist blower.jpeg", category: "Sprayers" },
  { name: "Plate Compactor", price: "Contact for Price", desc: "Heavy-duty plate compactor for soil compaction.", img: "/images/Plate compactor.jpeg", category: "Heavy Equipment" },
  { name: "Sawchains All Sizes", price: "Contact for Price", desc: "Quality sawchains available in all sizes.", img: "/images/Sawchains all sizes.jpeg", category: "Accessories" },
  { name: "Spark Plugs", price: "Contact for Price", desc: "Reliable spark plugs for optimal engine performance.", img: "/images/Spark plugs.jpeg", category: "Accessories" },
  { name: "Trimmer Lines", price: "Contact for Price", desc: "Durable trimmer lines for all cutting needs.", img: "/images/Trimmer  lines.jpeg", category: "Accessories" },
  { name: "Trimmer Heads", price: "Contact for Price", desc: "Professional trimmer heads for efficient cutting.", img: "/images/Trimmer heads.jpeg", category: "Accessories" }
];

const ProductsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))].sort();
  
  const filteredProducts = products.filter(product => 
    selectedCategory === "All" || product.category === selectedCategory
  );
  
  const displayedProducts = showAll ? filteredProducts : filteredProducts.slice(0, 8);

  return (
    <section id="products" className="py-24 bg-background relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-4xl md:text-5xl font-bold text-foreground uppercase tracking-tight"
            >
              Premium <span className="text-secondary">Husqvarna</span> Inventory
            </motion.h2>
            <p className="mt-4 text-muted-foreground font-body text-lg leading-relaxed">
              Explore our comprehensive range of high-performance outdoor power equipment.
              From precision cutting to heavy-duty clearing, we have the right tool for every job.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48 border-secondary text-secondary">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button asChild variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white transition-all group">
              <a href="#contact">
                Download Catalog <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              <AnimatePresence mode="popLayout">
                {displayedProducts.map((product, i) => (
              <motion.div
                key={product.name}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: (i % 8) * 0.05 }}
                className="group flex flex-col bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-secondary/30 transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                      < Star className="w-5 h-5 fill-current" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-heading text-lg font-bold text-foreground leading-tight group-hover:text-secondary transition-colors uppercase">
                      {product.name}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground font-body line-clamp-2 mb-6">
                    {product.desc}
                  </p>

                  <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">
                      {product.price}
                    </span>
                    <Button
                      asChild
                      size="sm"
                      variant="ghost"
                      className="p-0 h-auto hover:bg-transparent text-secondary hover:text-primary transition-colors flex items-center gap-1 font-bold uppercase text-xs tracking-wider"
                    >
                      <a href="#contact">
                        Details <ArrowRight className="w-3 h-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
              ))}
              </AnimatePresence>
            </div>

            {filteredProducts.length > 8 && (
              <div className="mt-16 flex justify-center">
                <Button
                  onClick={() => setShowAll(!showAll)}
                  variant="hero"
                  size="lg"
                  className="px-12 py-7 text-lg shadow-xl hover:shadow-2xl transition-all group"
                >
                  {showAll ? (
                    <>
                      Show Less Products
                      <Plus className="ml-2 w-5 h-5 group-hover:rotate-45 transition-transform" />
                    </>
                  ) : (
                    <>
                      View More Products
                      <Plus className="ml-2 w-5 h-5 group-hover:rotate-90 transition-transform" />
                    </>
                  )}
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No products found in this category.</p>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-12 rounded-3xl bg-primary text-primary-foreground relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-heading font-bold uppercase">Need a specific machine?</h3>
              <p className="mt-2 text-primary-foreground/80 max-w-lg">
                Our experts can help you find the perfect Husqvarna equipment for your specific needs.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary" className="px-10 py-6 text-lg font-bold uppercase shadow-xl hover:shadow-2xl transition-all">
              <a href="#contact">Contact an Expert</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
