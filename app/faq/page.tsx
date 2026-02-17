'use client'

import React, { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function FAQPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    const faqItems = [
        {
            question: 'How long has Seyyone been in business?',
            answer: 'Offers a unified platform that fosters innovation while providing end-to-end data management. See how we help your team solve today’s biggest challenges.'
        },
        {
            question: 'What types of services does Seyyone offer?',
            answer: 'Offers a unified platform that fosters innovation while providing end-to-end data management. See how we help your team solve today’s biggest challenges.'
        }
    ]

    return (
        <>
            <Navigation />
            <main className="bg-white min-h-screen">
                {/* Hero Section */}
                <section className="relative pt-40 pb-24 bg-gradient-to-br from-teal-50 via-blue-50 to-emerald-50 overflow-hidden border-b border-gray-100">
                    <div className="absolute inset-0 opacity-40">
                        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-200 rounded-full blur-3xl -ml-48 -mt-48"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl -mr-48 -mb-48"></div>
                    </div>

                    <div className="container relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl mx-auto"
                        >
                            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900 leading-tight">
                                Frequently Asked <br />
                                <span className="text-teal-600">Questions</span>
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-medium">
                                Everything you need to know about Seyyone&rsquo;s services, expertise, and how we help businesses grow.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* FAQ Accordion Section */}
                <section className="py-24">
                    <div className="container">
                        <div className="max-w-3xl mx-auto">
                            <div className="space-y-6">
                                {faqItems.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.6 }}
                                        className="bg-white rounded-[2rem] border border-gray-200 overflow-hidden transition-all duration-300 hover:border-teal-300 hover:shadow-xl group"
                                    >
                                        <button
                                            onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                            className="w-full px-10 py-8 flex items-center justify-between text-left"
                                        >
                                            <span className="text-xl font-bold text-gray-900 group-hover:text-teal-700 transition-colors pr-8">
                                                {item.question}
                                            </span>
                                            <motion.div
                                                animate={{ rotate: openFaq === index ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                                className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${openFaq === index ? 'bg-teal-600 text-white' : 'bg-teal-50 text-teal-600 group-hover:bg-teal-100'
                                                    }`}
                                            >
                                                <ChevronDown size={24} strokeWidth={2.5} />
                                            </motion.div>
                                        </button>
                                        <AnimatePresence>
                                            {openFaq === index && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                >
                                                    <div className="px-10 pb-10 text-lg text-gray-600 leading-relaxed border-t border-gray-50 pt-8">
                                                        <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-teal-600">
                                                            {item.answer}
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
