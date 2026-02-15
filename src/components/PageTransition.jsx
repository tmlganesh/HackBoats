import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const pageVariants = {
    initial: {
        opacity: 0,
        y: 20,
        scale: 0.98,
    },
    animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
            staggerChildren: 0.1,
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        scale: 0.98,
        transition: {
            duration: 0.3,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
}

const overlayVariants = {
    initial: {
        scaleY: 1,
    },
    animate: {
        scaleY: 0,
        transition: {
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
        },
    },
    exit: {
        scaleY: 1,
        transition: {
            duration: 0.5,
            ease: [0.76, 0, 0.24, 1],
        },
    },
}

export default function PageTransition({ children }) {
    const location = useLocation()

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={location.pathname}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
            >
                {/* Overlay animation */}
                <motion.div
                    className="fixed inset-0 z-[100] bg-black origin-top pointer-events-none"
                    initial={{ scaleY: 1 }}
                    animate={{ scaleY: 0 }}
                    exit={{ scaleY: 1 }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                />
                
                {/* Second overlay for layered effect */}
                <motion.div
                    className="fixed inset-0 z-[99] bg-gradient-to-b from-cyan-900/20 to-purple-900/20 origin-bottom pointer-events-none"
                    initial={{ scaleY: 1 }}
                    animate={{ scaleY: 0 }}
                    exit={{ scaleY: 1 }}
                    transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
                />

                {children}
            </motion.div>
        </AnimatePresence>
    )
}

// Animated wrapper for content sections
export function AnimatedSection({ children, className = "", delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
                duration: 0.8, 
                delay,
                ease: [0.25, 0.1, 0.25, 1] 
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

// Staggered children animation
export function StaggerContainer({ children, className = "" }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.2,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
}
