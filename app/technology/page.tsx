'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Navigation from '@/components/Navigation'
import TechnologyHero from '@/components/technology/TechnologyHero'
import TechnologyServices from '@/components/technology/TechnologyServices'
import TechnologyInsights from '@/components/technology/TechnologyInsights'
import TechnologyCTA from '@/components/technology/TechnologyCTA'
import TechnologyContactModal from '@/components/technology/TechnologyContactModal'
import Footer from '@/components/Footer'

export default function TechnologyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqItems = [
    {
      question: "What healthcare technology services does Seyyone offer?",
      answer: "Seyyone provides custom web and application development, seamless EMR/EHR integrations, healthcare data management, and specialized IT support tailored for modern medical practices."
    },
    {
      question: "How do you ensure the security of your healthcare applications?",
      answer: "Security is embedded in our SDLC. We build applications with end-to-end encryption, robust access controls, and regular vulnerability assessments to ensure 100% HIPAA compliance and data protection."
    },
    {
      question: "Can you integrate new software with our existing legacy systems?",
      answer: "Yes, our engineering team specializes in API development and legacy system integration. We ensure your new applications communicate securely and efficiently with your existing EMR/EHR infrastructure."
    },
    {
      question: "What software methodologies do you use for development?",
      answer: "We utilize Agile and Scrum methodologies, ensuring continuous integration, regular sprint reviews, and close collaboration with your project managers to deliver high-quality code on time."
    },
    {
      question: "Do you offer mobile healthcare application development?",
      answer: "Yes. We build native iOS and Android apps, as well as cross-platform mobile solutions using Flutter and React Native, tailored for telemedicine, patient portals, and health tracking."
    },
    {
      question: "How do you handle post-launch software maintenance and support?",
      answer: "We provide comprehensive post-launch support and SLAs, covering regular security patches, operating system updates, database optimization, and software feature expansions."
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <Navigation />
      <main>
        <TechnologyHero onOpenModal={() => setIsModalOpen(true)} />
        <TechnologyServices onOpenModal={() => setIsModalOpen(true)} />
        <TechnologyInsights />
        
        {/* FAQ Section */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  Frequently Asked <span className="text-indigo-600">Questions</span>
                </h2>
              </div>
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:border-indigo-300 hover:shadow-md">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-8 py-6 flex items-center justify-between text-left"
                    >
                      <span className="text-lg font-bold text-gray-900">{item.question}</span>
                      <motion.div animate={{ rotate: openFaq === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                        <ChevronDown className={`text-indigo-600 transition-colors ${openFaq === index ? 'text-indigo-700' : ''}`} size={24} />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
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

        <TechnologyCTA onOpenModal={() => setIsModalOpen(true)} />
      </main>
      <TechnologyContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <Footer />
    </>
  )
}