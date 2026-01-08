import { motion } from 'framer-motion'
import { Factory, Users, Award, Briefcase, GraduationCap, Rocket, Building2, ArrowRight } from 'lucide-react'

const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
    exit: { opacity: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } }
}

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 }
}

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
}

const hackMelaStats = [
    { value: '5000+', label: 'Participants Nationwide' },
    { value: '50+', label: 'Industry Partners' },
    { value: '100+', label: 'College Chapters' },
    { value: '₹10L+', label: 'in Prizes' },
]

const differentiators = [
    {
        icon: Factory,
        title: 'Industry Problem Statements',
        description: 'Real challenges from leading companies that need innovative solutions.',
    },
    {
        icon: Users,
        title: 'Expert Mentorship',
        description: 'Guidance from industry professionals and technical experts throughout the event.',
    },
    {
        icon: Award,
        title: 'Prototype-Based Evaluation',
        description: 'Focus on working prototypes that demonstrate practical implementation.',
    },
    {
        icon: Briefcase,
        title: 'Career Opportunities',
        description: 'Connect with potential employers and investors during the event.',
    },
]

const participants = [
    {
        icon: GraduationCap,
        title: 'Students',
        description: 'Showcase your skills, learn from experts, and kickstart your career in tech.',
    },
    {
        icon: Rocket,
        title: 'Startups',
        description: 'Find talent, validate ideas, and connect with potential investors and partners.',
    },
    {
        icon: Building2,
        title: 'Institutions',
        description: 'Elevate your reputation, engage students, and foster innovation culture.',
    },
    {
        icon: Factory,
        title: 'Industries',
        description: 'Source innovative solutions, discover talent, and drive open innovation.',
    },
]

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

export default function Hackathons() {
    return (
        <motion.main 
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative z-10 min-h-screen"
        >
            {/* Hero Section */}
            <motion.section 
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-20"
                >
                    <motion.p variants={fadeInUp} transition={{ duration: 0.6 }} className="text-gray-400 text-base sm:text-lg tracking-wide mb-4 sm:mb-6">
                        National-Level Hackathons
                    </motion.p>

                    <motion.h1 variants={fadeInUp} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-2 leading-[1.1] text-white/90">
                        Centralized Hackathons
                    </motion.h1>

                    <motion.h1 variants={fadeInUp} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 sm:mb-8 leading-[1.1] text-gray-400">
                        Where Innovation Meets Opportunity
                    </motion.h1>

                    <motion.p variants={fadeInUp} transition={{ duration: 0.6 }} className="max-w-2xl text-base sm:text-xl text-gray-400 mb-8 sm:mb-10 leading-relaxed px-2">
                        Driving innovation and discovering talent through national-level hackathons with real industry 
                        challenges, expert mentorship, and prototype-based evaluation.
                    </motion.p>

                    <motion.div variants={fadeInUp} transition={{ duration: 0.6 }} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full px-4 sm:px-0">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-black bg-white rounded-full hover:bg-gray-200 transition-colors duration-300"
                        >
                            Host a Hackathon
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors duration-300"
                        >
                            Join as Participant
                        </a>
                    </motion.div>
                </motion.section>

                {/* HackMelaa Section */}
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
                        className="text-center mb-6 sm:mb-8"
                    >
                        <p className="text-gray-400 text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4">Flagship Event</p>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                            HackMelaa
                        </h2>
                        <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-2">
                            Our flagship national hackathon bringing together thousands of innovators, industry leaders, 
                            and institutions to solve real-world challenges and shape the future of technology.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 w-full max-w-4xl my-8 sm:my-12">
                        {hackMelaStats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center"
                            >
                                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.value}</p>
                                <p className="text-gray-400 text-xs sm:text-sm">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.a
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        href="#hackmelaa"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium transition-colors duration-300"
                    >
                        Learn More About HackMelaa <ArrowRight size={16} />
                    </motion.a>
                </motion.section>

                {/* What Makes Us Different Section */}
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
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4 sm:mb-6">What Makes Our Hackathons Different</h2>
                        <p className="text-base sm:text-xl text-gray-400">
                            A unique format designed to create real impact.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-5xl">
                        {differentiators.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group p-5 sm:p-8 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1"
                            >
                                <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400 mb-4 sm:mb-6 group-hover:text-white transition-colors duration-300" />
                                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 tracking-tight">{item.title}</h3>
                                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Who Should Participate Section */}
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
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4 sm:mb-6">Who Should Participate?</h2>
                        <p className="text-base sm:text-xl text-gray-400">
                            Our hackathons create value for everyone in the innovation ecosystem.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 w-full max-w-6xl">
                        {participants.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group p-4 sm:p-8 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 text-center"
                            >
                                <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400 mb-3 sm:mb-6 mx-auto group-hover:text-white transition-colors duration-300" />
                                <h3 className="text-base sm:text-xl font-semibold mb-2 sm:mb-3 tracking-tight">{item.title}</h3>
                                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{item.description}</p>
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
                            Ready to Innovate?
                        </h2>
                        <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed">
                            Whether you want to host, sponsor, or participate — we'd love to hear from you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-black bg-white rounded-full hover:bg-gray-200 transition-colors duration-300"
                            >
                                Host a Hackathon
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors duration-300"
                            >
                                Join a Hackathon
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
