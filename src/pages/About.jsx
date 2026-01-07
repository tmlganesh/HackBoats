import { motion } from 'framer-motion'
import { Lightbulb, Users, Award, Zap, Factory, GraduationCap, Rocket } from 'lucide-react'

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

const coreValues = [
    {
        icon: Lightbulb,
        title: 'Innovation First',
        description: 'We push the boundaries of what\'s possible, constantly exploring new technologies and approaches.',
    },
    {
        icon: Users,
        title: 'Collaboration',
        description: 'We believe in the power of partnerships between industry, academia, and innovators.',
    },
    {
        icon: Award,
        title: 'Excellence',
        description: 'We deliver industry-grade solutions with uncompromising quality and reliability.',
    },
    {
        icon: Zap,
        title: 'Impact at Scale',
        description: 'We aim to create solutions that transform industries and empower communities.',
    },
]

const ecosystem = [
    {
        icon: Factory,
        title: 'Industry',
        description: 'Real-world problems, resources, and market opportunities',
    },
    {
        icon: GraduationCap,
        title: 'Academia',
        description: 'Research, talent, and fresh perspectives',
    },
    {
        icon: Rocket,
        title: 'Innovation',
        description: 'Cutting-edge solutions that create real impact',
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

export default function About() {
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
                    className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32 pb-20"
                >
                    <motion.p variants={fadeInUp} transition={{ duration: 0.6 }} className="text-gray-400 text-lg tracking-wide mb-6">
                        About HackBoats
                    </motion.p>

                    <motion.h1 variants={fadeInUp} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-2 leading-[1.1] text-white/90">
                        Building the Future with Purpose
                    </motion.h1>

                    <motion.h1 variants={fadeInUp} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-8 leading-[1.1] text-gray-400">
                        Innovation Meets Impact
                    </motion.h1>

                    <motion.p variants={fadeInUp} transition={{ duration: 0.6 }} className="max-w-2xl text-xl text-gray-400 mb-10 leading-relaxed">
                        We're a deep-tech product company bridging the gap between innovation and impact, 
                        working at the intersection of industry, academia, and emerging technologies.
                    </motion.p>
                </motion.section>

                {/* Vision & Mission Section */}
                <motion.section 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col justify-center items-center px-6 py-20"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="p-10 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10"
                        >
                            <h3 className="text-sm text-gray-400 tracking-wider uppercase mb-4">Our Vision</h3>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                To be the leading force in building future-ready technologies and innovators, 
                                creating products and ecosystems that transform industries and empower the 
                                next generation of technologists.
                            </p>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="p-10 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10"
                        >
                            <h3 className="text-sm text-gray-400 tracking-wider uppercase mb-4">Our Mission</h3>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                To drive product innovation across Robotics, AI, IoT, Drones, and Animatronics, 
                                while building innovation ecosystems that bridge industry and academia, creating 
                                impact at scale through hackathons and Centres of Excellence.
                            </p>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Our Story Section */}
                <motion.section 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                    className="min-h-screen flex flex-col justify-center items-center px-6 py-20"
                >
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16 max-w-3xl"
                    >
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Our Story</h2>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-3xl space-y-6"
                    >
                        <p className="text-xl text-gray-400 leading-relaxed">
                            HackBoats was born from a simple observation: the gap between what's taught in 
                            classrooms and what's needed in industry was growing wider. We set out to change that.
                        </p>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            Starting as a group of passionate engineers and entrepreneurs, we began building 
                            products that solve real industry problems. Along the way, we realized that to truly 
                            transform the technology landscape, we needed to do more than just build products — 
                            we needed to build an ecosystem.
                        </p>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            Today, HackBoats operates at the intersection of product development, academic innovation, 
                            and talent discovery. Through our three wings — <span className="text-white">Product Development & Industry Solutions</span>, 
                            <span className="text-white"> Centres of Excellence</span>, and <span className="text-white">Centralized Hackathons</span> — 
                            we're creating a holistic innovation ecosystem that's making a real impact.
                        </p>
                    </motion.div>
                </motion.section>

                {/* Core Values Section */}
                <motion.section 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                    className="min-h-screen flex flex-col justify-center items-center px-6 py-20"
                >
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16 max-w-3xl"
                    >
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Our Core Values</h2>
                        <p className="text-xl text-gray-400">
                            The principles that guide everything we do.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
                        {coreValues.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1"
                            >
                                <value.icon className="w-10 h-10 text-gray-400 mb-6 group-hover:text-white transition-colors duration-300" />
                                <h3 className="text-xl font-semibold mb-3 tracking-tight">{value.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Ecosystem Section */}
                <motion.section 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col justify-center items-center px-6 py-20"
                >
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16 max-w-3xl"
                    >
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                            Bridging Industry, Academia & Innovation
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
                        {ecosystem.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 text-center"
                            >
                                <item.icon className="w-12 h-12 text-gray-400 mb-6 mx-auto group-hover:text-white transition-colors duration-300" />
                                <h3 className="text-xl font-semibold mb-3 tracking-tight">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
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
                    className="min-h-[60vh] flex flex-col justify-center items-center px-6 py-20"
                >
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-center max-w-4xl"
                    >
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                            Join Us in Shaping the Future
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                            Whether you're an industry leader, academic institution, or aspiring innovator — 
                            there's a place for you in our ecosystem.
                        </p>
                        <motion.a
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-black bg-white rounded-full hover:bg-gray-200 transition-colors duration-300"
                        >
                            Get in Touch
                        </motion.a>
                    </motion.div>
                </motion.section>

                {/* Footer */}
                <footer className="relative z-10 w-full border-t border-white/10">
                    <div className="max-w-7xl mx-auto px-6 py-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            {/* Brand */}
                            <div className="lg:col-span-1">
                                <h3 className="text-xl font-semibold mb-4 tracking-tight">HACKBOATS</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Building the future with Robotics, AI & Innovation. We deliver industry solutions,
                                    deploy Centres of Excellence, and organize national-level hackathons.
                                </p>
                            </div>

                            {/* Quick Links */}
                            <div>
                                <h4 className="text-sm text-gray-400 font-medium mb-4 tracking-wider uppercase">Quick Links</h4>
                                <ul className="space-y-3">
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
                                <h4 className="text-sm text-gray-400 font-medium mb-4 tracking-wider uppercase">Industries</h4>
                                <ul className="space-y-3">
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
                            <div>
                                <h4 className="text-sm text-gray-400 font-medium mb-4 tracking-wider uppercase">Contact</h4>
                                <ul className="space-y-3 text-gray-500 text-sm">
                                    <li>Innovation Hub, Tech Park, India</li>
                                    <li>hello@hackboats.com</li>
                                    <li>+91 98765 43210</li>
                                </ul>
                            </div>
                        </div>

                        {/* Bottom Bar */}
                        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-gray-600 text-sm">© 2026 HackBoats. All rights reserved.</p>
                            <div className="flex gap-6">
                                <a href="#" className="text-gray-600 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
                                <a href="#" className="text-gray-600 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
                            </div>
                        </div>
                    </div>
                </footer>
        </motion.main>
    )
}
