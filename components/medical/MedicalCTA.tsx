'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface MedicalCTAProps {
    onOpenModal: () => void
}

const MedicalCTA = ({ onOpenModal }: MedicalCTAProps) => {
    return (
        <section className="py-20 bg-white">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white shadow-2xl text-center max-w-5xl mx-auto"
                >
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        Join 50+ Healthcare Providers Who Trust Seyyone
                    </h3>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Schedule a no-obligation consultation to discuss your unique needs and how Seyyone can help streamline your operations and technology solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={onOpenModal}
                            className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg inline-flex items-center justify-center group"
                        >
                            <span>Schedule Free Consultation</span>
                            <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                        </button>
                        <Link
                            href="/medical"
                            className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                        >
                            <span>Download Case Studies</span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default MedicalCTA
