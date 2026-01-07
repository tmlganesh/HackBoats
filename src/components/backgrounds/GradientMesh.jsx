import { motion } from "framer-motion";

export default function GradientMesh({ speed = 0.5 }) {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-black">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/20 via-black to-purple-900/20" />

            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    rotate: [0, 10, -10, 0],
                }}
                transition={{
                    duration: 10 / speed,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.15),transparent_50%)] blur-3xl"
            />

            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.4, 0.2],
                    x: [0, 100, -100, 0],
                }}
                transition={{
                    duration: 15 / speed,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-0 right-0 w-[100%] h-[100%] bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.15),transparent_60%)] blur-3xl"
            />

            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
        </div>
    )
}
