import { Link } from 'react-router-dom'

export default function Footer() {
    const footerLinks = {
    quickLinks: [
        { name: 'Product Development', href: '/product' },
        { name: 'Centres of Excellence', href: '/coe' },
        { name: 'Hackathons', href: '/hackathons' },
        { name: 'About Us', href: '/about' },
    ],
    industries: [
        { name: 'Pharma & Healthcare', href: '#' },
        { name: 'Film & Entertainment', href: '#' },
        { name: 'Industrial Automation', href: '#' },
        { name: 'Security & Surveillance', href: '#' },
    ],
}

    return (
        <footer className="relative z-10 bg-[#0B1F3A] text-gray-400 py-6 sm:py-8 md:py-10 px-4 sm:px-6 border-t border-white/10">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 md:gap-8">
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
                        {footerLinks.quickLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.href}
                                    className="hover:text-cyan-400 transition-colors py-1 inline-block"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                </div>

                {/* Industries */}
                <div>
                    <h3 className="text-white font-semibold mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base">Industries</h3>
                    <ul className="space-y-2.5 sm:space-y-3 md:space-y-4 text-xs sm:text-sm">
                        {footerLinks.industries.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="hover:text-cyan-400 transition-colors py-1 inline-block"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
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

            <div className="max-w-7xl mx-auto mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-5 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs">
                <p className="text-gray-500">© 2026 HackBoats. All rights reserved.</p>
                <div className="flex gap-4 sm:gap-6">
                    <a href="#" className="hover:text-white transition-colors py-1">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors py-1">Terms of Service</a>
                </div>
            </div>
        </footer>
    )
}
