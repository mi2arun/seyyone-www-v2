'use client'

import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import Link from 'next/link'
import GlobalPresence from './GlobalPresence'

const ContactInfo = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Link href="/contact">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4 hover:bg-primary-200 transition-colors cursor-pointer">
              <Mail size={16} className="mr-2" />
              Get In Touch
            </div>
          </Link>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform Your
            <span className="gradient-text"> Healthcare Operations?</span>
          </h2>
          <p className="text-xl text-gray-600">
            Contact our healthcare BPO experts today to discuss your requirements
            and discover how we can help streamline your operations.
          </p>
        </motion.div>

        {/* Global Presence Component */}
        <GlobalPresence />
      </div>
    </section>
  )
}

export default ContactInfo
