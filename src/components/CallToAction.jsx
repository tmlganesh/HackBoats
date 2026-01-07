import { Button } from "./ui/button"

export default function CallToAction() {
    return (
        <section className="py-32 px-6 text-center">
            <div className="max-w-4xl mx-auto space-y-8 p-12 rounded-3xl bg-gradient-to-b from-cyan-900/20 to-black/40 border border-white/10 backdrop-blur-md">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                    Ready to Innovate Together?
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    Whether you're looking to build cutting-edge products, deploy a Centre of Excellence, or host a transformative hackathon — we're here to make it happen.
                </p>
                <Button size="lg" className="h-14 px-8 text-lg bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                    Start a Conversation
                </Button>
            </div>
        </section>
    )
}
