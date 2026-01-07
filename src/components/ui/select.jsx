import * as React from "react"
import { cn } from "../../lib/utils"
import { ChevronDown } from "lucide-react"

const Select = React.forwardRef(({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("relative", className)} {...props}>
        {children}
    </div>
))
Select.displayName = "Select"

const SelectTrigger = React.forwardRef(({ className, children, placeholder, value, onClick, open, ...props }, ref) => (
    <button
        ref={ref}
        type="button"
        onClick={onClick}
        className={cn(
            "flex h-12 w-full items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm",
            "text-white placeholder:text-gray-500",
            "focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent",
            "hover:bg-white/10 transition-colors duration-200",
            "disabled:cursor-not-allowed disabled:opacity-50",
            className
        )}
        {...props}
    >
        <span className={cn(!value && "text-gray-500")}>
            {value || placeholder}
        </span>
        <ChevronDown className={cn("h-4 w-4 text-gray-400 transition-transform duration-200", open && "rotate-180")} />
    </button>
))
SelectTrigger.displayName = "SelectTrigger"

const SelectContent = React.forwardRef(({ className, children, open, ...props }, ref) => {
    if (!open) return null
    
    return (
        <div
            ref={ref}
            className={cn(
                "absolute z-50 mt-2 w-full overflow-hidden rounded-xl border border-white/10 bg-black/95 backdrop-blur-xl shadow-xl",
                "animate-in fade-in-0 zoom-in-95",
                className
            )}
            {...props}
        >
            <div className="p-1">
                {children}
            </div>
        </div>
    )
})
SelectContent.displayName = "SelectContent"

const SelectItem = React.forwardRef(({ className, children, value, selected, onSelect, ...props }, ref) => (
    <button
        ref={ref}
        type="button"
        onClick={() => onSelect(value)}
        className={cn(
            "relative flex w-full cursor-pointer select-none items-center rounded-lg px-4 py-3 text-sm text-white/80",
            "hover:bg-white/10 hover:text-white",
            "focus:outline-none focus:bg-white/10",
            "transition-colors duration-150",
            selected && "bg-white/5 text-white",
            className
        )}
        {...props}
    >
        {children}
    </button>
))
SelectItem.displayName = "SelectItem"

export { Select, SelectTrigger, SelectContent, SelectItem }
