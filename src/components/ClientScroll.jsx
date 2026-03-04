export default function ClientScroll() {
    // Generate array of logo paths for all 31 client logos
    const clientLogos = Array.from({ length: 31 }, (_, i) => ({
        id: i + 1,
        logo: `/Our clients logos/${i + 1}.png`
    }));

    return (
        <section className="py-10 border-y border-white/5 bg-black/20 backdrop-blur-sm overflow-hidden mb-20 relative z-10 w-full">
            <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Our Clients</h3>
            </div>

            <div className="relative w-full flex overflow-hidden mask-linear-fade group">
                <div className="flex animate-marquee whitespace-nowrap gap-12 min-w-full items-center group-hover:[animation-play-state:paused] hover:[animation-play-state:paused]">
                    {/* First set */}
                    {clientLogos.map((client) => (
                        <div key={`c1-${client.id}`} className="shrink-0 cursor-default px-4 flex items-center justify-center">
                            <img 
                                src={client.logo} 
                                alt={`Client ${client.id}`} 
                                className="h-12 sm:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                            />
                        </div>
                    ))}

                    {/* Second set (Duplicate for infinite loop) */}
                    {clientLogos.map((client) => (
                        <div key={`c2-${client.id}`} className="shrink-0 cursor-default px-4 flex items-center justify-center">
                            <img 
                                src={client.logo} 
                                alt={`Client ${client.id}`} 
                                className="h-12 sm:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .mask-linear-fade {
            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
        </section>
    );
}
