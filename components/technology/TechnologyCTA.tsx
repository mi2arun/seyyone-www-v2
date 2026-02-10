'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface TechnologyCTAProps {
    onOpenModal: () => void
}

const TechnologyCTA = ({ onOpenModal }: TechnologyCTAProps) => {
    return (
        <section className="py-20 bg-white">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-2xl text-center max-w-5xl mx-auto"
                >
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        Join 100+ Technology Companies Who Trust Seyyone
                    </h3>
                    <p className="text-purple-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Schedule a no-obligation consultation to discuss your software development needs and how Seyyone can accelerate your digital innovation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={onOpenModal}
                            className="bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-purple-50 transition-colors shadow-lg inline-flex items-center justify-center group"
                        >
                            <span>Schedule Technical Consultation</span>
                            <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                        </button>
                        <Link
                            href="/technology"
                            className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center justify-center"
                        >
                            <span>Download Success Stories</span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default TechnologyCTA
