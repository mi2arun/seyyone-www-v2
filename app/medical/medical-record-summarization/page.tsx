'use client'

import Navigation from '@/components/Navigation'

import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { FileCheck, CheckCircle, Clock, Shield, Scale, ArrowRight, FileText, BookOpen, AlertCircle } from 'lucide-react'
import Link from 'next/link'

import { useState } from 'react'
import MedicalContactModal from '@/components/medical/MedicalContactModal'

export default function MedicalRecordSummarizationPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const features = [
    {
      icon: FileCheck,
      title: 'Chronological Summaries',
      description: 'Organized, time-sequenced summaries that provide clear patient history timelines for easy reference.'
    },
    {
      icon: Scale,
      title: 'Legal Compliance',
      description: 'Summaries prepared following legal standards, perfect for litigation support and insurance claims.'
    },
    {
      icon: FileText,
      title: 'Custom Formats',
      description: 'Tailored summary formats to meet specific requirements of legal firms, insurance companies, or healthcare providers.'
    },
    {
      icon: Clock,
      title: 'Quick Delivery',
      description: 'Fast turnaround times without compromising accuracy, meeting urgent deadlines for legal proceedings.'
    },
    {
      icon: Shield,
      title: 'HIPAA Compliant',
      description: 'Strict adherence to HIPAA regulations ensuring patient privacy and data security throughout the process.'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assured',
      description: 'Multi-level review process ensuring accurate, comprehensive summaries that meet professional standards.'
    }
  ]

  const useCases = [
    {
      title: 'Legal Case Support',
      description: 'Detailed medical record summaries for personal injury cases, medical malpractice, and workers compensation claims.',
      icon: Scale
    },
    {
      title: 'Insurance Claims',
      description: 'Comprehensive summaries for life insurance, disability claims, and health insurance underwriting.',
      icon: Shield
    },
    {
      title: 'Clinical Review',
      description: 'Concise medical histories for peer review, quality assurance, and case management purposes.',
      icon: FileCheck
    },
    {
      title: 'Research & Analytics',
      description: 'Structured summaries supporting medical research, outcome studies, and healthcare analytics.',
      icon: BookOpen
    }
  ]

  const summaryTypes = [
    'Chronological Medical Summaries',
    'Narrative Medical Summaries',
    'Case-Specific Summaries',
    'Deposition Summaries',
    'Treatment Summary Reports',
    'Injury-Specific Summaries',
    'Life Care Planning Summaries',
    'IME Summary Reports',
    'Medical Bill Summaries',
    'Disability Claims Summaries',
    'Workers Comp Summaries',
    'Personal Injury Summaries'
  ]

  const benefits = [
    'Save 50+ hours per case on record review',
    'Identify critical information quickly',
    'Reduce case preparation costs by 40%',
    'Improve case strategy with clear timelines',
    'Access summaries in preferred format',
    'Meet tight legal deadlines consistently',
    'Ensure nothing important is overlooked',
    'Support settlement negotiations effectively'
  ]

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-purple-50 to-white">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-100 to-white" />
            <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-purple-200 to-indigo-100 opacity-30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-200 to-purple-100 opacity-30 rounded-full blur-3xl" />
          </div>

          <div className="container relative z-10">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm text-purple-700 rounded-full text-sm font-semibold mb-6 shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
              >
                <FileCheck size={18} className="mr-2" />
                Legal & Clinical Support
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Medical Record
                </span>
                <br />
                <span className="text-gray-900">Summarization</span>
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
                Concise, accurate medical record summaries for legal, insurance, and clinical purposes.
                Transform hundreds of pages into clear, actionable summaries that save time and support decision-making.
              </p>


            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="pt-12 pb-20 bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Professional Record
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"> Summarization</span>
              </h2>
              <p className="text-xl text-gray-600">
                Expert medical record analysis and summarization services for legal and clinical professionals.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      <IconComponent className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Serving Multiple
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"> Industries</span>
              </h2>
              <p className="text-xl text-gray-600">
                Tailored medical record summaries for diverse professional needs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {useCases.map((useCase, index) => {
                const IconComponent = useCase.icon
                return (
                  <motion.div
                    key={useCase.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Summary Types */}
        <section className="py-20 bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Comprehensive
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"> Summary Types</span>
              </h2>
              <p className="text-xl text-gray-600">
                We provide a full range of medical record summaries tailored to your specific needs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {summaryTypes.map((type, index) => (
                <motion.div
                  key={type}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="flex items-center space-x-3 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border border-purple-200 hover:shadow-md transition-all duration-300"
                >
                  <span className="text-gray-700 font-medium">{type}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  Benefits That
                  <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"> Matter</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Transform how you handle medical records with our professional summarization services.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="flex items-start space-x-3"
                    >
                      <span className="text-gray-700">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-2xl"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center">
                    <AlertCircle className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Why Choose Us?</h3>
                </div>
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-600 pl-4">
                    <div className="font-semibold text-gray-900 mb-2">Expert Medical Reviewers</div>
                    <div className="text-gray-600">Certified professionals with healthcare and legal expertise</div>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-4">
                    <div className="font-semibold text-gray-900 mb-2">Proven Accuracy</div>
                    <div className="text-gray-600">99%+ accuracy rate with rigorous quality control</div>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-4">
                    <div className="font-semibold text-gray-900 mb-2">Flexible Turnaround</div>
                    <div className="text-gray-600">Rush services available for urgent legal deadlines</div>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-4">
                    <div className="font-semibold text-gray-900 mb-2">Secure Process</div>
                    <div className="text-gray-600">HIPAA-compliant with encrypted data transmission</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Streamline Your Medical Record Review?
              </h2>
              <p className="text-xl  mb-8">
                Join law firms and insurance companies who trust Seyyone for accurate, timely medical record summaries.
                Get a free sample summary for your next case.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center space-x-2"
                >
                  <span>Request Sample Summary</span>
                  <ArrowRight size={20} />
                </button>
                <Link
                  href="/medical"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <span>View All Services</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>


      </main>
      <MedicalContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialService="Medical Record Summarization"
      />
      <Footer />
    </>
  )
}
