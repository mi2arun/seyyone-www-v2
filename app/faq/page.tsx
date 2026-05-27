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
            question: 'What medical back-office services does Seyyone provide?',
            answer: 'Seyyone offers a comprehensive suite of healthcare KPO services, including Medical Scribing, Medical Transcription, EHR/EMR Management, Medical Coding, and Revenue Cycle Management (Billing). We provide highly trained virtual assistants to reduce physician burnout and streamline clinical workflows.'
        },
        {
            question: 'How do virtual medical scribes improve practice efficiency?',
            answer: 'Our virtual medical scribes listen to patient encounters in near real-time and navigate your EMR/EHR to document the visit directly. This allows physicians to focus 100% on patient care rather than data entry, typically increasing patient throughput and reducing documentation time by hours each day.'
        },
        {
            question: 'Is Seyyone fully HIPAA compliant?',
            answer: 'Yes, Seyyone is 100% HIPAA compliant. We employ strict physical, administrative, and technical safeguards. All data is encrypted both in transit and at rest, and our virtual scribes operate from secure, access-controlled offshore facilities to guarantee patient data privacy.'
        },
        {
            question: 'Does Seyyone integrate with existing EHR and EMR systems?',
            answer: 'Absolutely. Our team is proficient in navigating all major EHR and EMR platforms. We seamlessly integrate into your existing clinical workflow without requiring you to change your software infrastructure.'
        },
        {
            question: 'What technology and IT services does Seyyone offer?',
            answer: 'Beyond healthcare KPO, Seyyone provides robust technology solutions, including custom web application development, healthcare software integration, data management, and IT support services tailored to the specific needs of modern medical practices.'
        },
        {
            question: 'How can outsourcing to Seyyone improve Revenue Cycle Management (RCM)?',
            answer: 'By outsourcing your billing and coding to Seyyone, you gain access to certified medical coders who ensure accurate coding and rapid claims submission. This drastically reduces claim denials, accelerates cash flow, and maximizes the revenue of your medical practice.'
        }
    ]

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
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
