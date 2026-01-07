import { Link } from 'react-router-dom'
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
    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between backdrop-blur-md bg-white/5 border border-white/10 rounded-full px-6 py-3">
                    {/* Logo */}
                    <Link to="/" className="text-xl font-bold text-white tracking-tight">
                        HACKBOATS
                    </Link>

                    {/* Navigation */}
                    <NavigationMenu>
                        <NavigationMenuList className="hidden md:flex gap-1">
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

                    {/* CTA Button */}
                    <Link
                        to="/#contact"
                        className="hidden sm:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-gray-200 transition-colors duration-300"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    )
}
