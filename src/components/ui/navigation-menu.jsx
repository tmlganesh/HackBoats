import * as React from "react"
import { cn } from "../../lib/utils"

const NavigationMenu = React.forwardRef(({ className, children, ...props }, ref) => (
    <nav
        ref={ref}
        className={cn("relative z-10 flex items-center justify-center", className)}
        {...props}
    >
        {children}
    </nav>
))
NavigationMenu.displayName = "NavigationMenu"

const NavigationMenuList = React.forwardRef(({ className, ...props }, ref) => (
    <ul
        ref={ref}
        className={cn("group flex flex-1 list-none items-center justify-center gap-1", className)}
        {...props}
    />
))
NavigationMenuList.displayName = "NavigationMenuList"

const NavigationMenuItem = React.forwardRef(({ className, ...props }, ref) => (
    <li ref={ref} className={cn("", className)} {...props} />
))
NavigationMenuItem.displayName = "NavigationMenuItem"

const NavigationMenuLink = React.forwardRef(({ className, active, ...props }, ref) => (
    <a
        ref={ref}
        className={cn(
            "group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ease-out",
            "text-white/70 hover:text-white hover:bg-white/5",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50",
            active && "text-cyan-400",
            className
        )}
        {...props}
    />
))
NavigationMenuLink.displayName = "NavigationMenuLink"

export {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
}
