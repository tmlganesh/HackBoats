import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    },
    exit: { 
        opacity: 0, 
        y: -20,
        transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
    }
}

const staggerContainer = {
    animate: {
        transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
}

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    }
}

const techPills = ['Robotics', 'AI', 'IoT', 'Drones', 'Animatronics']

const threeWings = [
    {
        title: 'Product Development & Industry Solutions',
        description: 'End-to-end product engineering for Pharma, Film & Entertainment, Industrial Automation, and Security sectors using cutting-edge Robotics, AI, IoT, and Drones.',
        cta: 'Explore Solutions',
        href: '#product',
    },
    {
        title: 'Centres of Excellence (CoE)',
        description: 'Deploying Robotics & AI innovation ecosystems in engineering colleges. Building future-ready graduates through hands-on research and industry collaboration.',
        cta: 'Learn About CoE',
        href: '#coe',
    },
    {
        title: 'Centralized Hackathons',
        description: 'Organizing national-level hackathons to drive innovation and discover talent. Real industry problems, mentorship, and prototype-based evaluation.',
        cta: 'Discover Hackathons',
        href: '#hackathons',
    },
]

const industries = [
    {
        title: 'Pharma & Healthcare',
        description: 'Automation solutions for pharmaceutical manufacturing, medical robotics, and AI-driven diagnostics.',
    },
    {
        title: 'Film & Entertainment',
        description: 'Animatronics, motion control systems, and special effects technology for immersive experiences.',
    },
    {
        title: 'Industrial Automation',
        description: 'Smart manufacturing solutions, robotic process automation, and IoT-enabled factory systems.',
    },
    {
        title: 'Security & Surveillance',
        description: 'AI-powered surveillance, autonomous patrol robots, and drone-based monitoring systems.',
    },
]

const footerLinks = {
    quickLinks: [
        { name: 'Product Development', href: '#product' },
        { name: 'Centres of Excellence', href: '#coe' },
        { name: 'Hackathons', href: '#hackathons' },
        { name: 'About Us', href: '#about' },
    ],
    industries: [
        { name: 'Pharma & Healthcare', href: '#' },
        { name: 'Film & Entertainment', href: '#' },
        { name: 'Industrial Automation', href: '#' },
        { name: 'Security & Surveillance', href: '#' },
    ],
}

function App() {
    return (
        <motion.main 
            className="relative z-10 min-h-screen"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransition}
        >
            {/* Hero Section */}
            <motion.section 
                id="home" 
                className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-20"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
            >
                    <motion.p variants={fadeInUp} className="text-gray-400 text-base sm:text-lg tracking-wide mb-4 sm:mb-6">
                        Deep-Tech Product Innovation Company
                    </motion.p>

                    <motion.h1 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-2 leading-[1.1] text-white/90">
                        We Don't Predict the Future.
                    </motion.h1>

                    <motion.h1 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 sm:mb-8 leading-[1.1] text-gray-400">
                        We Build It with AI & Robotics
                    </motion.h1>

                    <motion.p variants={fadeInUp} className="max-w-2xl text-base sm:text-xl text-gray-400 mb-8 sm:mb-10 leading-relaxed px-2">
                        Product development, industry solutions, academic innovation ecosystems,
                        and national-level hackathons — all under one roof.
                    </motion.p>

                    {/* Tech Pills */}
                    <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2">
                        {techPills.map((tech, index) => (
                            <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                                className="px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-400 border border-gray-800 rounded-full hover:text-white hover:border-gray-600 transition-all duration-500 cursor-pointer"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </motion.div>

                    <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full px-4 sm:px-0">
                        <a
                            href="#wings"
                            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-black bg-white rounded-full hover:bg-gray-200 transition-colors duration-300"
                        >
                            Explore Our Wings
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors duration-300"
                        >
                            Partner With Us
                        </a>
                    </motion.div>
                </motion.section>

                {/* Three Wings Section */}
                <motion.section 
                    id="wings" 
                    className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-16 sm:py-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div 
                        className="text-center mb-10 sm:mb-16 max-w-3xl px-2"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight mb-4 sm:mb-6">Our Three Wings</h2>
                        <p className="text-base sm:text-xl text-gray-400">
                            Three pillars of innovation driving the future of technology in industry and academia.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 w-full max-w-7xl">
                        {threeWings.map((wing, index) => (
                            <motion.div
                                key={wing.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="group p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-700 hover:-translate-y-1"
                            >
                                <span className="inline-block text-sm text-gray-500 mb-4 sm:mb-6 tracking-wider">0{index + 1}</span>
                                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 tracking-tight">
                                    {wing.title}
                                </h3>
                                <p className="text-gray-400 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">{wing.description}</p>
                                <a href={wing.href} className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium group-hover:gap-3 transition-all duration-300">
                                    {wing.cta} <ArrowRight size={16} />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Industries Section */}
                <motion.section 
                    id="industries" 
                    className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-16 sm:py-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div 
                        className="text-center mb-10 sm:mb-16 max-w-3xl px-2"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight mb-4 sm:mb-6">Industries We Serve</h2>
                        <p className="text-base sm:text-xl text-gray-400">
                            Delivering industry-grade solutions across diverse sectors with cutting-edge technology.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-5xl">
                        {industries.map((industry, index) => (
                            <motion.div
                                key={industry.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group p-5 sm:p-8 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-500 cursor-pointer"
                            >
                                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 tracking-tight">{industry.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{industry.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* CTA Section */}
                <motion.section 
                    id="contact" 
                    className="min-h-[70vh] sm:min-h-[80vh] flex flex-col justify-center items-center px-4 sm:px-6 py-16 sm:py-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div 
                        className="text-center max-w-4xl px-2"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-4 sm:mb-6">
                            Ready to Innovate Together?
                        </h2>
                        <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed">
                            Whether you're looking to build cutting-edge products, deploy a Centre of Excellence,
                            or host a transformative hackathon — we're here to make it happen.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-black bg-cyan-500 rounded-full hover:bg-cyan-400 transition-colors duration-300"
                            >
                                Start a Conversation
                            </a>
                            <a
                                href="#about"
                                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors duration-300"
                            >
                                Learn More About Us
                            </a>
                        </div>
                    </motion.div>
                </motion.section>

                {/* Footer */}
                <footer className="relative z-10 w-full border-t border-white/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
                            {/* Brand */}
                            <div className="col-span-2 md:col-span-2 lg:col-span-1">
                                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 tracking-tight">HACKBOATS</h3>
                                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                                    Building the future with Robotics, AI & Innovation. We deliver industry solutions,
                                    deploy Centres of Excellence, and organize national-level hackathons.
                                </p>
                            </div>

                            {/* Quick Links */}
                            <div>
                                <h4 className="text-xs sm:text-sm text-gray-400 font-medium mb-3 sm:mb-4 tracking-wider uppercase">Quick Links</h4>
                                <ul className="space-y-2 sm:space-y-3">
                                    {footerLinks.quickLinks.map((link) => (
                                        <li key={link.name}>
                                            <a href={link.href} className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Industries */}
                            <div>
                                <h4 className="text-xs sm:text-sm text-gray-400 font-medium mb-3 sm:mb-4 tracking-wider uppercase">Industries</h4>
                                <ul className="space-y-2 sm:space-y-3">
                                    {footerLinks.industries.map((link) => (
                                        <li key={link.name}>
                                            <a href={link.href} className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Contact */}
                            <div className="col-span-2 sm:col-span-1">
                                <h4 className="text-xs sm:text-sm text-gray-400 font-medium mb-3 sm:mb-4 tracking-wider uppercase">Contact</h4>
                                <ul className="space-y-2 sm:space-y-3 text-gray-500 text-xs sm:text-sm">
                                    <li>Innovation Hub, Tech Park, India</li>
                                    <li className="break-all">hello@hackboats.com</li>
                                    <li>+91 98765 43210</li>
                                </ul>
                            </div>
                        </div>

                        {/* Bottom Bar */}
                        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
                            <p className="text-gray-600 text-xs sm:text-sm">© 2026 HackBoats. All rights reserved.</p>
                            <div className="flex gap-4 sm:gap-6">
                                <a href="#" className="text-gray-600 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
                                <a href="#" className="text-gray-600 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
                            </div>
                        </div>
                    </div>
                </footer>
        </motion.main>
    )
}

export default App
