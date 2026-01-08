import { Button } from "./ui/button"

export default function Hero() {
    const tags = ["Robotics", "AI", "IoT", "Drones", "Animatronics"]

    return (
        <section className="relative pt-28 sm:pt-32 md:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 min-h-[90vh] sm:min-h-screen flex flex-col items-center justify-center text-center safe-area-top">
            <div className="max-w-4xl mx-auto space-y-5 sm:space-y-6 md:space-y-8 animate-fade-in-up">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.15] sm:leading-tight gradient-text">
                    Deep-Tech Product <br className="hidden sm:block" />
                    <span className="sm:hidden"> </span>
                    <span className="text-cyan-400 block sm:inline mt-1 sm:mt-0">Innovation Company</span>
                </h1>

                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-light px-2">
                    Building the Future with Robotics, AI & Innovation
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-2 leading-relaxed">
                    Product development, industry solutions, academic innovation ecosystems, and national-level hackathons — all under one roof.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-3 sm:pt-4 w-full px-4 sm:px-0">
                    <Button size="lg" className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 sm:px-8 w-full sm:w-auto text-sm sm:text-base font-semibold glow-cyan">
                        Explore Our Wings
                    </Button>
                    <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 w-full sm:w-auto text-sm sm:text-base">
                        Partner With Us
                    </Button>
                </div>

                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-6 sm:pt-8 opacity-80 px-2">
                    {tags.map((tag, index) => (
                        <span
                            key={tag}
                            className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 bg-white/5 text-xs sm:text-sm text-cyan-300 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            
            {/* Subtle scroll indicator for mobile */}
            <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50 sm:hidden">
                <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    )
}
