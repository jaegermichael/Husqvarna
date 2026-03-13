import { useEffect, useState } from "react";
import husqvarnaLogo from "@/assets/husqvarna-logo.png";
// Depending on actual partners, we can use the same logo repeatedly for now as a placeholder.

const LogoMarquee = () => {
    return (
        <section className="py-12 border-y border-border bg-card/50 overflow-hidden relative flex items-center">
            <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div className="flex w-full shrink-0 group">
                <div className="flex shrink-0 animate-marquee min-w-full group-hover:[animation-play-state:paused]">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="flex-shrink-0 mx-10 md:mx-16 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                            <img src={husqvarnaLogo} alt="Partner Logo" className="h-10 md:h-12 w-auto pointer-events-none grayscale hover:grayscale-0 transition-all duration-300" />
                            <span className="ml-4 font-heading font-medium text-lg uppercase tracking-widest text-foreground/50">Trusted Partner</span>
                        </div>
                    ))}
                </div>
                <div className="flex shrink-0 animate-marquee min-w-full group-hover:[animation-play-state:paused]" aria-hidden="true">
                    {[...Array(10)].map((_, i) => (
                        <div key={`dup-${i}`} className="flex-shrink-0 mx-10 md:mx-16 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                            <img src={husqvarnaLogo} alt="Partner Logo" className="h-10 md:h-12 w-auto pointer-events-none grayscale hover:grayscale-0 transition-all duration-300" />
                            <span className="ml-4 font-heading font-medium text-lg uppercase tracking-widest text-foreground/50">Trusted Partner</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogoMarquee;
