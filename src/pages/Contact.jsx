import { useState } from 'react'
import { motion } from 'framer-motion'
import { Select, SelectTrigger, SelectContent, SelectItem } from '../components/ui/select'
import { MapPin, Mail, Phone, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

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

const purposeOptions = [
    { value: 'product', label: 'Product Development' },
    { value: 'industry', label: 'Industry Collaboration' },
    { value: 'coe', label: 'CoE Partnership' },
    { value: 'hackathon', label: 'Hackathon Collaboration' },
]

const quickLinks = [
    { name: 'Product Development', href: '/product' },
    { name: 'Centres of Excellence', href: '/coe' },
    { name: 'Hackathons', href: '/hackathons' },
    { name: 'About Us', href: '/about' },
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

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        purpose: '',
        message: '',
    })
    const [selectOpen, setSelectOpen] = useState(false)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handlePurposeSelect = (value) => {
        const selected = purposeOptions.find(opt => opt.value === value)
        setFormData(prev => ({ ...prev, purpose: selected?.label || '' }))
        setSelectOpen(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        // Handle form submission
    }

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
                    className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 pt-32 pb-10"
                >
                    <motion.p variants={fadeInUp} transition={{ duration: 0.6 }} className="text-gray-400 text-lg tracking-wide mb-6">
                        Get in Touch
                    </motion.p>

                    <motion.h1 variants={fadeInUp} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-2 leading-[1.1] text-white/90">
                        Let's Build Together
                    </motion.h1>

                    <motion.h1 variants={fadeInUp} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-8 leading-[1.1] text-gray-400">
                        Start the Conversation
                    </motion.h1>

                    <motion.p variants={fadeInUp} transition={{ duration: 0.6 }} className="max-w-2xl text-xl text-gray-400 leading-relaxed">
                        Have a project in mind? Want to partner with us? We'd love to hear from you.
                    </motion.p>
                </motion.section>

                {/* Contact Form & Info Section */}
                <motion.section 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col justify-center items-center px-6 py-20"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl">
                        {/* Contact Form */}
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="p-10 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10"
                        >
                            <h2 className="text-2xl font-semibold mb-8 tracking-tight">Send us a Message</h2>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Full Name */}
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">
                                        Full Name <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="John Doe"
                                        required
                                        className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent hover:bg-white/10 transition-colors duration-200"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">
                                        Email Address <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="john@example.com"
                                        required
                                        className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent hover:bg-white/10 transition-colors duration-200"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="+91 98765 43210"
                                        className="w-full h-12 px-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent hover:bg-white/10 transition-colors duration-200"
                                    />
                                </div>

                                {/* Purpose - Dropdown */}
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">
                                        Purpose <span className="text-red-400">*</span>
                                    </label>
                                    <Select>
                                        <SelectTrigger
                                            placeholder="Select purpose"
                                            value={formData.purpose}
                                            onClick={() => setSelectOpen(!selectOpen)}
                                            open={selectOpen}
                                        />
                                        <SelectContent open={selectOpen}>
                                            {purposeOptions.map((option) => (
                                                <SelectItem
                                                    key={option.value}
                                                    value={option.value}
                                                    selected={formData.purpose === option.label}
                                                    onSelect={handlePurposeSelect}
                                                >
                                                    {option.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">
                                        Your Message <span className="text-red-400">*</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Tell us about your project or how we can help..."
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent hover:bg-white/10 transition-colors duration-200 resize-none"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full h-12 px-8 text-lg font-medium text-black bg-white rounded-xl hover:bg-gray-200 transition-colors duration-300"
                                >
                                    Send Message
                                </button>
                            </form>
                        </motion.div>

                        {/* Contact Information */}
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-2xl font-semibold mb-4 tracking-tight">Contact Information</h2>
                                <p className="text-gray-400 leading-relaxed">
                                    Reach out to us through any of these channels. We typically respond within 24-48 hours.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {/* Location */}
                                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                                    <MapPin className="w-6 h-6 text-gray-400 mt-1 shrink-0" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Our Location</h3>
                                        <p className="text-gray-400 text-sm">Innovation Hub, Tech Park<br />Hyderabad, India</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                                    <Mail className="w-6 h-6 text-gray-400 mt-1 shrink-0" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Email Us</h3>
                                        <a href="mailto:hello@hackboats.com" className="text-gray-400 text-sm hover:text-white transition-colors">
                                            hello@hackboats.com
                                        </a>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                                    <Phone className="w-6 h-6 text-gray-400 mt-1 shrink-0" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Call Us</h3>
                                        <a href="tel:+919876543210" className="text-gray-400 text-sm hover:text-white transition-colors">
                                            +91 98765 43210
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                                <h3 className="font-semibold mb-4">Quick Links</h3>
                                <ul className="space-y-3">
                                    {quickLinks.map((link) => (
                                        <li key={link.name}>
                                            <Link 
                                                to={link.href} 
                                                className="inline-flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors"
                                            >
                                                <ArrowRight size={14} /> {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
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
