import { motion } from 'framer-motion'

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6 } },
  exit: { opacity: 0, transition: { duration: 0.4 } }
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
}

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
}

const sectors = [
  
  {
    name: 'Robotics',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=870&auto=format&fit=crop'
  },
  {
    name: 'AI',
    image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?q=80&w=696&auto=format&fit=crop'
  },
  {
    name: 'IoT',
    image: 'https://plus.unsplash.com/premium_photo-1688678097958-0620a452f0e8?q=80&w=508&auto=format&fit=crop'
  },
  {
    name: 'Drones',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2070&auto=format&fit=crop'
  },
  {
    name: 'Animatronics',
    image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=2070&auto=format&fit=crop'
  },
  {
    name: 'Space Science',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2070&auto=format&fit=crop'
  }


]

export default function Media() {
  return (
    <motion.main
      className="relative z-10 min-h-screen"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      

        {/* Heading */}
        <motion.section 
            className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-20"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
        >
          <motion.h1 variants={fadeInUp} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-2 leading-[1.1] text-white/90">
            Media & Press
          </motion.h1>
          <motion.p variants={fadeInUp} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 sm:mb-8 leading-[1.1] text-gray-400">
            Updates, press releases, and news about our innovations and hackathons.
          </motion.p>
        </motion.section>

        {/* Cards */}
        <motion.section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-16 sm:py-20 relative overflow-hidden">

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-6xl relative z-10">
                    {sectors.map((sector, index) => (
                        <motion.div
                            key={sector.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="group relative h-48 sm:h-64 rounded-xl overflow-hidden cursor-pointer"
                        >
                            <img
                                src={sector.image}
                                alt={sector.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                            <h3 className="absolute bottom-4 left-4 text-white font-semibold text-lg sm:text-xl tracking-tight z-10">{sector.name}</h3>
                        </motion.div>
                    ))}
                </div>

          </motion.section>

      
    </motion.main>
  )
}
