import { Button } from "./ui/button"

export default function CallToAction() {
    return (
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 text-center safe-area-bottom">
            <div className="max-w-4xl mx-auto space-y-5 sm:space-y-6 md:space-y-8 p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-cyan-900/20 to-black/40 border border-white/10 backdrop-blur-md glass-card">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight gradient-text">
                    Ready to Innovate Together?
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-2">
                    Whether you're looking to build cutting-edge products, deploy a Centre of Excellence, or host a transformative hackathon — we're here to make it happen.
                </p>
                <Button size="lg" className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300 w-full sm:w-auto">
                    Start a Conversation
                </Button>
            </div>
        </section>
    )
}
