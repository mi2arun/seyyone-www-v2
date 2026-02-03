'use client'

import Navigation from '@/components/Navigation'
import ContactInfo from '@/components/ContactInfo'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Shield, CheckCircle, Clock, FileText, Award, ArrowRight, Search, Target, BarChart3 } from 'lucide-react'
import Link from 'next/link'

import { useState } from 'react'
import MedicalContactModal from '@/components/medical/MedicalContactModal'

export default function APSSummaryPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const features = [
    {
      icon: FileText,
      title: 'Detailed Analysis',
      description: 'Comprehensive review and analysis of Attending Physician Statements for complete medical history assessment.'
    },
    {
      icon: Clock,
      title: 'Quick Turnaround',
      description: 'Fast processing times to meet insurance underwriting deadlines without compromising accuracy.'
    },
    {
      icon: Shield,
      title: 'Insurance Ready',
      description: 'Summaries formatted specifically for insurance underwriting and claims review processes.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Multi-level review process ensuring accurate, compliant summaries that meet industry standards.'
    },
    {
      icon: Search,
      title: 'Key Information Extraction',
      description: 'Identification and highlighting of critical medical information relevant to underwriting decisions.'
    },
    {
      icon: Target,
      title: 'Customized Reports',
      description: 'Tailored summary formats to match specific insurance company requirements and preferences.'
    }
  ]

  const benefits = [
    'Reduce underwriting review time by 60%',
    'Improve accuracy of risk assessment',
    'Accelerate policy approval process',
    'Identify critical health information quickly',
    'Ensure regulatory compliance',
    'Reduce manual review workload',
    'Support informed underwriting decisions',
    'Minimize claim disputes with thorough documentation'
  ]

  const summaryComponents = [
    {
      title: 'Medical History Summary',
      description: 'Chronological overview of patient medical history including diagnoses, treatments, and outcomes.',
      icon: FileText
    },
    {
      title: 'Treatment Timeline',
      description: 'Detailed timeline of medical treatments, procedures, medications, and healthcare provider visits.',
      icon: Clock
    },
    {
      title: 'Risk Factors Analysis',
      description: 'Identification and assessment of health risk factors relevant to insurance underwriting.',
      icon: Target
    },
    {
      title: 'Clinical Findings',
      description: 'Summary of key clinical findings, test results, and physician observations from APS records.',
      icon: Search
    }
  ]

  const useCases = [
    'Life Insurance Underwriting',
    'Disability Insurance Claims',
    'Long-term Care Insurance',
    'Health Insurance Underwriting',
    'Reinsurance Applications',
    'Claims Investigation',
    'Risk Assessment',
    'Policy Review & Renewal'
  ]

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="min-h-screen relative overflow-hidden pt-20 bg-gradient-to-b from-orange-50 to-white">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-orange-100 to-white" />
            <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-orange-200 to-amber-100 opacity-30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-amber-200 to-orange-100 opacity-30 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 min-h-screen flex items-center">
            <div className="container">
              <motion.div
                className="max-w-4xl mx-auto text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm text-orange-700 rounded-full text-sm font-semibold mb-6 shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                >
                  <Shield size={18} className="mr-2" />
                  Insurance Underwriting Support
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-bold mb-8">
                  <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                    APS Summary
                  </span>
                  <br />
                  <span className="text-gray-900">Services</span>
                </h1>

                <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
                  Comprehensive Attending Physician Statement summaries for insurance underwriting and claims review.
                  Our expert analysts extract critical medical information to support informed underwriting decisions.
                </p>


              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Professional APS
                <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent"> Analysis Services</span>
              </h2>
              <p className="text-xl text-gray-600">
                Expert medical record analysis tailored for insurance underwriting and risk assessment.
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
                    className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
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

        {/* Summary Components */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Comprehensive Summary
                <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent"> Components</span>
              </h2>
              <p className="text-xl text-gray-600">
                Every APS summary includes detailed analysis across key medical and risk factors.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {summaryComponents.map((component, index) => {
                const IconComponent = component.icon
                return (
                  <motion.div
                    key={component.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{component.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{component.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  Benefits for
                  <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent"> Underwriters</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Streamline your underwriting process with accurate, comprehensive APS summaries.
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
                      <CheckCircle className="text-orange-600 flex-shrink-0 mt-1" size={20} />
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
                className="bg-white rounded-2xl p-8 shadow-2xl border border-orange-200"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl flex items-center justify-center">
                    <BarChart3 className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Performance Metrics</h3>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-orange-50 rounded-xl">
                    <div className="text-3xl font-bold text-orange-600 mb-2">60%</div>
                    <div className="text-sm text-gray-600">Faster Review Time</div>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-xl">
                    <div className="text-3xl font-bold text-amber-600 mb-2">99%</div>
                    <div className="text-sm text-gray-600">Accuracy Rate</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-xl">
                    <div className="text-3xl font-bold text-orange-600 mb-2">48hrs</div>
                    <div className="text-sm text-gray-600">Avg Turnaround</div>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-xl">
                    <div className="text-3xl font-bold text-amber-600 mb-2">100%</div>
                    <div className="text-sm text-gray-600">HIPAA Compliant</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Insurance
                <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent"> Applications</span>
              </h2>
              <p className="text-xl text-gray-600">
                Supporting various insurance products and underwriting needs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 border border-orange-200"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="text-white" size={24} />
                  </div>
                  <div className="font-semibold text-gray-900">{useCase}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Streamline Your Underwriting Process?
              </h2>
              <p className="text-xl text-orange-100 mb-8">
                Partner with Seyyone for accurate, timely APS summaries that support better underwriting decisions.
                Get a free sample summary today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center space-x-2"
                >
                  <span>Request Sample Summary</span>
                  <ArrowRight size={20} />
                </button>
                <Link
                  href="/medical"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-orange-600 transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <span>View All Services</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <ContactInfo />
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
