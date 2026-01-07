import { Button } from "./ui/button"

export default function Hero() {
    const tags = ["Robotics", "AI", "IoT", "Drones", "Animatronics"]

    return (
        <section className="relative pt-40 pb-20 px-6 min-h-screen flex flex-col items-center justify-center text-center">
            <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
                    Deep-Tech Product <br />
                    <span className="text-cyan-400">Innovation Company</span>
                </h1>

                <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
                    Building the Future with Robotics, AI & Innovation
                </h2>

                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                    Product development, industry solutions, academic innovation ecosystems, and national-level hackathons — all under one roof.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                    <Button size="lg" className="bg-cyan-500 hover:bg-cyan-400 text-black px-8">
                        Explore Our Wings
                    </Button>
                    <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                        Partner With Us
                    </Button>
                </div>

                <div className="flex flex-wrap justify-center gap-3 pt-8 opacity-80">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-cyan-300 backdrop-blur-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}
