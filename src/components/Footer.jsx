export default function Footer() {
    return (
        <footer className="bg-black/80 backdrop-blur-sm text-gray-400 py-12 sm:py-16 md:py-20 px-4 sm:px-6 border-t border-white/10 safe-area-bottom">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
                {/* Brand */}
                <div className="col-span-2 md:col-span-2 lg:col-span-1 space-y-3 sm:space-y-4 md:space-y-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-widest">HACKBOATS</h2>
                    <p className="leading-relaxed text-xs sm:text-sm text-gray-400/90">
                        Building the future with Robotics, AI & Innovation. We deliver industry solutions, deploy Centres of Excellence, and organize national-level hackathons.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base">Quick Links</h3>
                    <ul className="space-y-2.5 sm:space-y-3 md:space-y-4 text-xs sm:text-sm">
                        <li><a href="#" className="hover:text-cyan-400 transition-colors py-1 inline-block">Product Development</a></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors py-1 inline-block">Centres of Excellence</a></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors py-1 inline-block">Hackathons</a></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors py-1 inline-block">About Us</a></li>
                    </ul>
                </div>

                {/* Industries */}
                <div>
                    <h3 className="text-white font-semibold mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base">Industries</h3>
                    <ul className="space-y-2.5 sm:space-y-3 md:space-y-4 text-xs sm:text-sm">
                        <li><a href="#" className="hover:text-cyan-400 transition-colors py-1 inline-block">Pharma & Healthcare</a></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors py-1 inline-block">Film & Entertainment</a></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors py-1 inline-block">Industrial Automation</a></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors py-1 inline-block">Security & Surveillance</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="col-span-2 sm:col-span-1">
                    <h3 className="text-white font-semibold mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base">Contact</h3>
                    <ul className="space-y-2.5 sm:space-y-3 md:space-y-4 text-xs sm:text-sm">
                        <li className="flex items-start gap-2">
                            <span className="text-cyan-400/70 mt-0.5">📍</span>
                            <span>Innovation Hub, Tech Park, India</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-cyan-400/70">✉️</span>
                            <a href="mailto:hello@hackboats.com" className="hover:text-cyan-400 transition-colors break-all">hello@hackboats.com</a>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-cyan-400/70">📞</span>
                            <a href="tel:+919876543210" className="hover:text-cyan-400 transition-colors">+91 98765 43210</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-10 sm:mt-14 md:mt-20 pt-6 sm:pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs">
                <p className="text-gray-500">© 2026 HackBoats. All rights reserved.</p>
                <div className="flex gap-4 sm:gap-6">
                    <a href="#" className="hover:text-white transition-colors py-1">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors py-1">Terms of Service</a>
                </div>
            </div>
        </footer>
    )
}
