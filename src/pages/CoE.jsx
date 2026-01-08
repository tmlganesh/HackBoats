import { GraduationCap, Lightbulb, Briefcase, Rocket, Building2, Handshake } from 'lucide-react'
import { motion } from 'framer-motion'

const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.6 } },
    exit: { opacity: 0, transition: { duration: 0.4 } }
}

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
}

const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
}

const coeFeatures = [
    'State-of-the-art Robotics & AI Lab',
    'Industry-aligned curriculum modules',
    'Expert faculty development programs',
    'Hands-on project-based learning',
    'Industry mentorship & internships',
    'Annual hackathons & competitions',
    'Research publication support',
    'Startup incubation support',
]

const benefits = [
    {
        icon: Lightbulb,
        title: 'Innovation Culture',
        description: 'Foster a culture of innovation and creativity with dedicated labs and mentorship programs.',
    },
    {
        icon: GraduationCap,
        title: 'Research Opportunities',
        description: 'Enable faculty and students to pursue cutting-edge research in Robotics and AI.',
    },
    {
        icon: Briefcase,
        title: 'Enhanced Employability',
        description: 'Produce industry-ready graduates with hands-on experience in emerging technologies.',
    },
    {
        icon: Rocket,
        title: 'Startup Incubation',
        description: 'Nurture student startups with mentorship, resources, and industry connections.',
    },
]

const collaborationModel = {
    academic: {
        title: 'Academic Institution',
        icon: Building2,
        items: [
            'Infrastructure support',
            'Faculty coordination',
            'Student engagement',
            'Research focus areas',
        ],
    },
    hackboats: {
        title: 'HackBoats',
        icon: Handshake,
        items: [
            'Lab setup & equipment',
            'Curriculum development',
            'Industry connections',
            'Mentorship programs',
        ],
    },
}

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

export default function CoE() {
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
                    className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-20"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                >
                    <motion.p variants={fadeInUp} className="text-gray-400 text-base sm:text-lg tracking-wide mb-4 sm:mb-6">
                        Academic Innovation
                    </motion.p>

                    <motion.h1 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-2 leading-[1.1] text-white/90">
                        Centres of Excellence in Robotics & AI
                    </motion.h1>

                    <motion.h1 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 sm:mb-8 leading-[1.1] text-gray-400">
                        Bridging Academia & Industry
                    </motion.h1>

                    <motion.p variants={fadeInUp} className="max-w-2xl text-base sm:text-xl text-gray-400 mb-8 sm:mb-10 leading-relaxed px-2">
                        Deploying innovation ecosystems in engineering colleges to bridge the gap between 
                        academia and industry, creating future-ready technologists.
                    </motion.p>

                    <motion.a
                        variants={fadeInUp}
                        href="#contact"
                        className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-black bg-white rounded-full hover:bg-gray-200 transition-colors duration-300"
                    >
                        Deploy a CoE in Your College
                    </motion.a>
                </motion.section>

                {/* What is CoE Section */}
                <motion.section 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                    className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-16 sm:py-20"
                >
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-10 sm:mb-16 max-w-3xl px-2"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4 sm:mb-6">What is a Centre of Excellence?</h2>
                        <p className="text-base sm:text-xl text-gray-400 leading-relaxed">
                            A Centre of Excellence (CoE) is a dedicated innovation lab established within engineering colleges, 
                            focused on Robotics and Artificial Intelligence. It serves as a hub for hands-on learning, research, 
                            and industry collaboration, transforming how students learn and prepare for technology careers.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full max-w-6xl">
                        {coeFeatures.map((feature, index) => (
                            <motion.div
                                key={feature}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500"
                            >
                                <p className="text-gray-300 text-xs sm:text-sm">{feature}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Benefits Section */}
                <motion.section 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                    className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-16 sm:py-20"
                >
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-10 sm:mb-16 max-w-3xl px-2"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4 sm:mb-6">Benefits for Your Institution</h2>
                        <p className="text-base sm:text-xl text-gray-400">
                            Transform your college into an innovation powerhouse.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-5xl">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group p-5 sm:p-8 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1"
                            >
                                <benefit.icon className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400 mb-4 sm:mb-6 group-hover:text-white transition-colors duration-300" />
                                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 tracking-tight">{benefit.title}</h3>
                                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Collaboration Model Section */}
                <motion.section 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                    className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-16 sm:py-20"
                >
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-10 sm:mb-16 max-w-3xl px-2"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4 sm:mb-6">Industry-Academia Collaboration Model</h2>
                        <p className="text-base sm:text-xl text-gray-400">
                            A partnership that brings the best of both worlds together.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 w-full max-w-4xl">
                        {Object.values(collaborationModel).map((model, index) => (
                            <motion.div
                                key={model.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="group p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500"
                            >
                                <model.icon className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400 mb-4 sm:mb-6 group-hover:text-white transition-colors duration-300" />
                                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 tracking-tight">{model.title}</h3>
                                <ul className="space-y-2 sm:space-y-3">
                                    {model.items.map((item) => (
                                        <li key={item} className="text-gray-400 text-sm sm:text-base flex items-center gap-2 sm:gap-3">
                                            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-500 rounded-full shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* CTA Section */}
                <motion.section 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="min-h-[50vh] sm:min-h-[60vh] flex flex-col justify-center items-center px-4 sm:px-6 py-16 sm:py-20"
                >
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-center max-w-4xl px-2"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4 sm:mb-6">
                            Transform Your Institution with a Centre of Excellence
                        </h2>
                        <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed">
                            Join the growing network of colleges building the next generation of innovators.
                        </p>
                        <motion.a
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            href="#contact"
                            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-black bg-white rounded-full hover:bg-gray-200 transition-colors duration-300"
                        >
                            Partner With Us
                        </motion.a>
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
