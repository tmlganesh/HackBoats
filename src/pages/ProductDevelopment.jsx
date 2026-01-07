import { ArrowRight, Bot, Brain, Wifi, Plane, Cog } from 'lucide-react'
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

const technologies = [
    {
        icon: Bot,
        title: 'Robotics',
        description: 'Autonomous systems, robotic arms, mobile robots, and human-robot interaction',
    },
    {
        icon: Brain,
        title: 'Artificial Intelligence',
        description: 'Machine learning, computer vision, NLP, and intelligent decision systems',
    },
    {
        icon: Wifi,
        title: 'Internet of Things',
        description: 'Connected devices, sensor networks, and smart infrastructure',
    },
    {
        icon: Plane,
        title: 'Drones',
        description: 'Autonomous aerial systems, surveillance drones, and delivery solutions',
    },
    {
        icon: Cog,
        title: 'Animatronics',
        description: 'Lifelike mechanical characters, motion control, and special effects',
    },
]

const lifecycle = [
    {
        step: '01',
        title: 'Ideation',
        description: 'Problem discovery, market research, and concept development',
    },
    {
        step: '02',
        title: 'Design',
        description: 'Engineering design, 3D modeling, and system architecture',
    },
    {
        step: '03',
        title: 'Prototype',
        description: 'Rapid prototyping, testing, and iterative refinement',
    },
    {
        step: '04',
        title: 'Deployment',
        description: 'Manufacturing, integration, and production support',
    },
]

const useCases = [
    {
        title: 'Pharma & Healthcare',
        items: [
            'Automated pill dispensing systems',
            'Robotic surgical assistants',
            'AI diagnostic tools',
            'Lab automation solutions',
        ],
    },
    {
        title: 'Film & Entertainment',
        items: [
            'Animatronic characters',
            'Motion control camera rigs',
            'VFX integration systems',
            'Theme park attractions',
        ],
    },
    {
        title: 'Industrial Automation',
        items: [
            'Smart factory systems',
            'Robotic assembly lines',
            'Predictive maintenance',
            'Quality inspection AI',
        ],
    },
    {
        title: 'Security & Surveillance',
        items: [
            'Autonomous patrol robots',
            'AI surveillance systems',
            'Drone monitoring',
            'Intrusion detection',
        ],
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

export default function ProductDevelopment() {
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
                    className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32 pb-20"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                >
                    <motion.p variants={fadeInUp} className="text-gray-400 text-lg tracking-wide mb-6">
                        Product Engineering Excellence
                    </motion.p>

                    <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-2 leading-[1.1] text-white/90">
                        Product Development & Industry Solutions
                    </motion.h1>

                    <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-8 leading-[1.1] text-gray-400">
                        From Concept to Deployment
                    </motion.h1>

                    <motion.p variants={fadeInUp} className="max-w-2xl text-xl text-gray-400 mb-10 leading-relaxed">
                        From concept to deployment, we engineer cutting-edge products using Robotics, AI, IoT, 
                        Drones, and Animatronics for real-world industry applications.
                    </motion.p>

                    <motion.a
                        variants={fadeInUp}
                        href="#contact"
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-black bg-white rounded-full hover:bg-gray-200 transition-colors duration-300"
                    >
                        Build with HackBoats
                    </motion.a>
                </motion.section>

                {/* Technologies Section */}
                <motion.section 
                    className="min-h-screen flex flex-col justify-center items-center px-6 py-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div 
                        className="text-center mb-16 max-w-3xl"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Our Technologies</h2>
                        <p className="text-xl text-gray-400">
                            Deep expertise across the full spectrum of emerging technologies.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={tech.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1"
                            >
                                <tech.icon className="w-10 h-10 text-gray-400 mb-6 group-hover:text-white transition-colors duration-300" />
                                <h3 className="text-xl font-semibold mb-3 tracking-tight">{tech.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{tech.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Product Lifecycle Section */}
                <motion.section 
                    className="min-h-screen flex flex-col justify-center items-center px-6 py-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div 
                        className="text-center mb-16 max-w-3xl"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Product Lifecycle</h2>
                        <p className="text-xl text-gray-400">
                            Our proven process takes your ideas from concept to market-ready products.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
                        {lifecycle.map((phase, index) => (
                            <motion.div
                                key={phase.step}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500"
                            >
                                <span className="text-4xl font-bold text-gray-600 mb-4 block">{phase.step}</span>
                                <h3 className="text-xl font-semibold mb-3 tracking-tight">{phase.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{phase.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Industry Use Cases Section */}
                <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20">
                    <div className="text-center mb-16 max-w-3xl">
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Industry Use Cases</h2>
                        <p className="text-xl text-gray-400">
                            Real-world applications across diverse sectors.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
                        {useCases.map((useCase) => (
                            <div
                                key={useCase.title}
                                className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500"
                            >
                                <h3 className="text-xl font-semibold mb-4 tracking-tight">{useCase.title}</h3>
                                <ul className="space-y-2">
                                    {useCase.items.map((item) => (
                                        <li key={item} className="text-gray-400 text-sm flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="min-h-[60vh] flex flex-col justify-center items-center px-6 py-20">
                    <div className="text-center max-w-4xl">
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                            Ready to Build Your Product?
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                            Let's turn your vision into reality with cutting-edge technology and expert engineering.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-black bg-white rounded-full hover:bg-gray-200 transition-colors duration-300"
                        >
                            Start a Project
                        </a>
                    </div>
                </section>

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
