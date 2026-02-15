export default function ClientScroll() {
    const clients = [
        { name: "CyberDynamics", logo: "https://images.unsplash.com/photo-1563770095-39d468f9a51d?w=100&h=100&fit=crop" },
        { name: "FutureTech", logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop" },
        { name: "RoboSystems", logo: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=100&h=100&fit=crop" },
        { name: "NeuralNet", logo: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=100&h=100&fit=crop" },
        { name: "SpaceXplore", logo: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=100&h=100&fit=crop" },
        { name: "AeroVant", logo: "https://images.unsplash.com/photo-1559136555-9303dff16302?w=100&h=100&fit=crop" },
        { name: "DeepMindz", logo: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=100&h=100&fit=crop" },
        { name: "QuantumLeap", logo: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=100&h=100&fit=crop" },
    ];

    return (
        <section className="py-10 border-y border-white/5 bg-black/20 backdrop-blur-sm overflow-hidden mb-20 relative z-10 w-full">
            <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Our Clients</h3>
            </div>

            <div className="relative w-full flex overflow-hidden mask-linear-fade group">
                <div className="flex animate-marquee whitespace-nowrap gap-24 min-w-full items-center group-hover:[animation-play-state:paused] hover:[animation-play-state:paused]">
                    {/* First set */}
                    {clients.map((client, index) => (
                        <div key={`c1-${index}`} className="shrink-0 cursor-default px-4">
                            <span className="text-lg sm:text-xl font-medium text-gray-500 uppercase tracking-widest">{client.name}</span>
                        </div>
                    ))}

                    {/* Second set (Duplicate for infinite loop) */}
                    {clients.map((client, index) => (
                        <div key={`c2-${index}`} className="shrink-0 cursor-default px-4">
                            <span className="text-lg sm:text-xl font-medium text-gray-500 uppercase tracking-widest">{client.name}</span>
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
