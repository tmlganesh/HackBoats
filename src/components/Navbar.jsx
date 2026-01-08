import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
} from './ui/navigation-menu'

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Product Development', href: '/product' },
    { name: 'CoE', href: '/coe' },
    { name: 'Hackathons', href: '/hackathons' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false)
    }, [location])

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 sm:py-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between backdrop-blur-md bg-white/5 border border-white/10 rounded-full px-4 sm:px-6 py-2.5 sm:py-3">
                    {/* Logo */}
                    <Link to="/" className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        HACKBOATS
                    </Link>

                    {/* Desktop Navigation */}
                    <NavigationMenu className="hidden lg:block">
                        <NavigationMenuList className="flex gap-1">
                            {navItems.map((item) => (
                                <NavigationMenuItem key={item.name}>
                                    <Link to={item.href}>
                                        <NavigationMenuLink as="span">
                                            {item.name}
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* Desktop CTA Button */}
                    <Link
                        to="/#contact"
                        className="hidden lg:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-gray-200 transition-colors duration-300"
                    >
                        Get Started
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div
                    className={`lg:hidden fixed inset-0 top-[60px] sm:top-[72px] bg-gradient-to-b from-black/40 via-black/30 to-black/50 backdrop-blur-2xl transition-all duration-300 safe-area-bottom border-t border-white/5 ${
                        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                >
                    <nav className="flex flex-col items-center justify-center h-full pb-20 px-6">
                        <ul className="flex flex-col items-center gap-5 sm:gap-6">
                            {navItems.map((item, index) => (
                                <li
                                    key={item.name}
                                    className={`transform transition-all duration-300 ${
                                        isOpen
                                            ? 'translate-y-0 opacity-100'
                                            : 'translate-y-4 opacity-0'
                                    }`}
                                    style={{ transitionDelay: isOpen ? `${index * 50}ms` : '0ms' }}
                                >
                                    <Link
                                        to={item.href}
                                        className={`text-xl sm:text-2xl font-medium transition-colors py-2 px-4 rounded-lg active:bg-white/5 ${
                                            location.pathname === item.href
                                                ? 'text-cyan-400'
                                                : 'text-white hover:text-cyan-400'
                                        }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        
                        {/* Mobile CTA Button */}
                        <Link
                            to="/#contact"
                            className={`mt-8 sm:mt-10 inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-black bg-white rounded-full hover:bg-gray-200 active:scale-95 transition-all duration-300 shadow-lg shadow-white/10 ${
                                isOpen
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-4 opacity-0'
                            }`}
                            style={{ transitionDelay: isOpen ? `${navItems.length * 50}ms` : '0ms' }}
                            onClick={() => setIsOpen(false)}
                        >
                            Get Started
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}
