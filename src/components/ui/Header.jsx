import { Button } from "./button"
import { useState, useEffect } from "react"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
    return twMerge(clsx(inputs))
}

const navItems = [
    { label: "Home", href: "#home", active: false },
    { label: "Product Development", href: "#product", active: false },
    { label: "CoE", href: "#coe", active: false },
    { label: "Hackathons", href: "#hackathons", active: false },
    { label: "About", href: "#about", active: false },
    { label: "Contact", href: "#contact", active: true },
]

export default function Header() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
            scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-6"
        )}>
            <div className="mx-auto flex max-w-7xl items-center justify-between px-8">
                {/* Logo */}
                <a href="#" className="flex items-center group shrink-0">
                    <span className="text-2xl font-bold tracking-widest text-white transition-opacity group-hover:opacity-80">
                        HACKBOATS
                    </span>
                </a>

                {/* Navigation Links */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className={`text-sm font-medium tracking-wide transition-colors duration-200 ${item.active
                                ? "text-cyan-400"
                                : "text-gray-300 hover:text-white"
                                }`}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* CTA Button */}
                <Button
                    variant="outline"
                    className="hidden sm:inline-flex rounded-full border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 hover:border-cyan-400 transition-all duration-300"
                >
                    Partner With Us
                </Button>
            </div>
        </header>
    )
}
