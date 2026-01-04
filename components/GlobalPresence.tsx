'use client'

import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'

const GlobalPresence = () => {
  const regions = [
    { flag: '🇺🇸', country: 'USA' },
    { flag: '🇬🇧', country: 'UK' },
    { flag: '🇨🇦', country: 'Canada' },
    { flag: '🇦🇺', country: 'Australia' },
    { flag: '🇮🇪', country: 'Ireland' },
    { flag: '🇩🇪', country: 'Germany' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white max-w-4xl mx-auto"
    >
      <div className="flex items-center justify-center space-x-2 mb-6">
        <Globe className="text-white" size={24} />
        <h3 className="text-xl font-bold">Global Presence</h3>
      </div>

      <p className="text-primary-100 mb-6 text-center">
        We serve clients across 6 countries with comprehensive
        Healthcare KPO and Software Development solutions.
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        {regions.map((region, index) => (
          <motion.div
            key={region.country}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="flex items-center justify-center space-x-2 p-3 bg-white/10 rounded-lg w-32"
          >
            <span className="text-xl">{region.flag}</span>
            <div className="font-semibold text-sm">{region.country}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default GlobalPresence
