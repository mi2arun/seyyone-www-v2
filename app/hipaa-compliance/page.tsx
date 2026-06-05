'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function HIPAACompliancePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqItems = [
    {
      question: 'Is Seyyone 100% HIPAA compliant?',
      answer: 'Yes, Seyyone adheres strictly to all HIPAA regulations. We implement comprehensive physical, administrative, and technical safeguards to ensure the complete privacy and security of Protected Health Information (PHI).'
    },
    {
      question: 'How does Seyyone ensure physical security for patient data?',
      answer: 'Our offshore facilities are access-controlled 24/7 with biometric scanners, CCTV surveillance, and security personnel. Employees are not allowed to bring personal electronics, USBs, or mobile phones onto the production floor.'
    },
    {
      question: 'What technical safeguards does Seyyone use?',
      answer: 'We utilize enterprise-grade firewalls, secure VPNs, and end-to-end encryption for all data transfers. Workstations are restricted to disable external drives, internet browsing, and screen captures, ensuring data cannot leave our secure environment.'
    },
    {
      question: 'Do Seyyone employees undergo HIPAA training?',
      answer: 'Absolutely. Every employee, from medical scribes to IT personnel, undergoes mandatory, rigorous HIPAA training upon hiring, followed by periodic refresher courses and audits to maintain strict compliance standards.'
    },
    {
      question: 'Who is responsible for HIPAA oversight at Seyyone?',
      answer: 'Seyyone has a designated Chief Compliance Officer (CCO) who oversees all HIPAA and data security protocols. The CCO is responsible for conducting regular internal audits, managing risk assessments, and updating security policies to align with federal updates.'
    },
    {
      question: 'Are Business Associate Agreements (BAAs) signed with clients?',
      answer: 'Yes, Seyyone signs comprehensive Business Associate Agreements (BAAs) with all of our clients before commencing any work. This legal contract guarantees that we assume full responsibility for safeguarding Protected Health Information (PHI) under federal law.'
    },
    {
      question: 'How does Seyyone handle potential security incidents or breaches?',
      answer: 'We have an established Incident Response Team and policy that guarantees immediate containment, investigation, and reporting of any potential data anomaly. In compliance with HIPAA guidelines, clients are notified immediately upon discovery of any security event, followed by a detailed forensic report.'
    },
    {
      question: 'Is patient data stored on Seyyone local systems permanently?',
      answer: 'No, Seyyone does not store patient data or PHI permanently on local systems. All medical scribing and back-office operations are conducted directly inside the client\'s secure electronic medical records (EMR) system or via secure cloud-based gateways, with zero local storage retention.'
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
      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50 text-gray-900 overflow-hidden border-b border-gray-100">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl -ml-48 -mt-48"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl -mr-48 -mb-48"></div>
          </div>

          <div className="container relative z-10">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                HIPAA <span className="text-blue-600">Compliance</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-medium">
                At Seyyone, patient confidentiality and data security are at the heart of everything we do.
                We adhere to the highest industry standards to protect sensitive healthcare information.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Overview section */}
        <section className="py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
                Why HIPAA Compliance Matters to Us
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  As a premier Healthcare KPO, Seyyone understands that the security of Personal Health Information (PHI) is critical to our clients&apos; trust. We have built our entire infrastructure and culture around a &quot;Security First&quot; approach.
                </p>
                <p>
                  Our HIPAA compliance program is not just a checkbox; it is a continuously evolving system of safeguards designed to stay ahead of emerging threats and changing regulations. Our team is trained periodically, and our systems are audited regularly to ensure total adherence to the Health Insurance Portability and Accountability Act.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gray-50 border-y border-gray-100">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase tracking-wide">Frequently Asked Questions</h2>
                <p className="text-gray-600">Find answers to common questions about our business and services.</p>
              </div>

              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:border-blue-300 hover:shadow-md"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-8 py-6 flex items-center justify-between text-left"
                    >
                      <span className="text-lg font-bold text-gray-900">{item.question}</span>
                      <motion.div
                        animate={{ rotate: openFaq === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className={`text-blue-600 transition-colors ${openFaq === index ? 'text-blue-700' : ''}`} size={24} />
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
                          <div className="px-8 pb-8 text-gray-600 leading-relaxed border-t border-gray-100 pt-6">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA or Statement */}
        <section className="py-20 text-center container">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 uppercase tracking-wide">Your Trust, Our Highest Responsibility</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Partner with Seyyone today and experience the peace of mind that comes with industry-leading HIPAA compliant Healthcare KPO services.
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
