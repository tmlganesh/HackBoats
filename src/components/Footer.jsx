export default function Footer() {
    return (
        <footer className="bg-black text-gray-400 py-20 px-6 border-t border-white/10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* Brand */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-white tracking-widest">HACKBOATS</h2>
                    <p className="leading-relaxed text-sm">
                        Building the future with Robotics, AI & Innovation. We deliver industry solutions, deploy Centres of Excellence, and organize national-level hackathons.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold mb-6">Quick Links</h3>
                    <ul className="space-y-4 text-sm">
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">Product Development</a></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">Centres of Excellence</a></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">Hackathons</a></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">About Us</a></li>
                    </ul>
                </div>

                {/* Industries */}
                <div>
                    <h3 className="text-white font-semibold mb-6">Industries</h3>
                    <ul className="space-y-4 text-sm">
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">Pharma & Healthcare</a></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">Film & Entertainment</a></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">Industrial Automation</a></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">Security & Surveillance</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-white font-semibold mb-6">Contact</h3>
                    <ul className="space-y-4 text-sm">
                        <li>Innovation Hub, Tech Park, India</li>
                        <li><a href="mailto:hello@hackboats.com" className="hover:text-cyan-400 transition-colors">hello@hackboats.com</a></li>
                        <li>+91 98765 43210</li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                <p>© 2026 HackBoats. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    )
}
