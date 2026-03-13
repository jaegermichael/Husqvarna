import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
    {
        name: "John Doe",
        role: "Professional Landscaper",
        text: "The new Husqvarna heavy-duty trimmers we bought here changed the way my crew operates. Raw power and unmatched durability.",
        rating: 5,
    },
    {
        name: "Sarah Williams",
        role: "Estate Manager",
        text: "Husqvarna's Zero-Turn mowers from this dealership have been exceptional. Outstanding after-sales support and servicing as well.",
        rating: 5,
    },
    {
        name: "Michael Ndlovu",
        role: "Homeowner",
        text: "I purchased a chainsaw last month and the staff guided me through the entire setup process. Excellent equipment.",
        rating: 5,
    },
    {
        name: "Jessica P.",
        role: "Commercial Client",
        text: "Reliable equipment is the backbone of our business. We trust Husqvarna entirely. Great people, great machines.",
        rating: 5,
    },
];

const TestimonialsSection = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section className="py-24 bg-card overflow-hidden">
            <div className="container px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground uppercase tracking-tight">
                        What Our <span className="text-secondary">Clients Say</span>
                    </h2>
                    <p className="mt-4 text-muted-foreground font-body text-lg">
                        Don't just take our word for it. Hear from the professionals and homeowners who rely on our equipment daily.
                    </p>
                </motion.div>

                <div className="relative max-w-5xl mx-auto">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex -ml-4">
                            {testimonials.map((testimonial, i) => (
                                <div key={i} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-4">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        className="bg-background border border-border/50 rounded-2xl p-8 h-full shadow-sm"
                                    >
                                        <div className="flex gap-1 text-secondary mb-4">
                                            {[...Array(testimonial.rating)].map((_, j) => (
                                                <Star key={j} className="w-5 h-5 fill-current" />
                                            ))}
                                        </div>
                                        <p className="text-foreground/80 font-body text-lg italic mb-6">
                                            "{testimonial.text}"
                                        </p>
                                        <div>
                                            <h4 className="font-heading text-xl font-bold uppercase tracking-wide text-foreground">
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-muted-foreground font-body text-sm mt-1">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={scrollPrev}
                        className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 w-12 h-12 bg-background border border-border/50 rounded-full flex items-center justify-center text-foreground hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all shadow-md z-10"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={scrollNext}
                        className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 w-12 h-12 bg-background border border-border/50 rounded-full flex items-center justify-center text-foreground hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all shadow-md z-10"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
