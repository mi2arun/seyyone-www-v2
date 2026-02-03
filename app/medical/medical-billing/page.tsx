'use client'

import Navigation from '@/components/Navigation'
import ContactInfo from '@/components/ContactInfo'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { CreditCard, CheckCircle, DollarSign, Shield, TrendingUp, ArrowRight, Zap, FileText, Clock, BarChart3 } from 'lucide-react'
import Link from 'next/link'

import { useState } from 'react'
import MedicalContactModal from '@/components/medical/MedicalContactModal'

export default function MedicalBillingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const features = [
    {
      icon: DollarSign,
      title: 'Revenue Maximization',
      description: 'Optimize your revenue cycle with expert billing practices that maximize reimbursements and reduce losses.'
    },
    {
      icon: TrendingUp,
      title: 'Denial Management',
      description: 'Proactive denial prevention and efficient resolution processes to minimize revenue loss and improve cash flow.'
    },
    {
      icon: Clock,
      title: 'Fast Claims Processing',
      description: 'Expedited claims submission with thorough accuracy checks to ensure quick payment turnaround.'
    },
    {
      icon: Shield,
      title: 'Compliance Assurance',
      description: 'Stay compliant with ever-changing healthcare regulations, coding standards, and payer requirements.'
    },
    {
      icon: FileText,
      title: 'Payment Posting',
      description: 'Accurate and timely payment posting with detailed reporting and reconciliation services.'
    },
    {
      icon: BarChart3,
      title: 'A/R Follow-up',
      description: 'Systematic accounts receivable follow-up to reduce outstanding balances and improve collection rates.'
    }
  ]

  const services = [
    'Medical Coding (ICD-10, CPT, HCPCS)',
    'Charge Entry & Posting',
    'Claims Submission & Tracking',
    'Payment Posting & Reconciliation',
    'Denial Management & Appeals',
    'A/R Follow-up & Collections',
    'Patient Billing & Statements',
    'Credentialing Services',
    'Prior Authorization Support',
    'EOB & ERA Processing',
    'Monthly Financial Reporting',
    'Audit & Compliance Support'
  ]

  const benefits = [
    {
      metric: '30%',
      label: 'Increase in Collections',
      description: 'Average improvement in revenue collection'
    },
    {
      metric: '50%',
      label: 'Reduction in Denials',
      description: 'Decrease in claim denial rates'
    },
    {
      metric: '24hrs',
      label: 'Claim Submission',
      description: 'Average time to submit clean claims'
    },
    {
      metric: '95%',
      label: 'First Pass Rate',
      description: 'Claims accepted on first submission'
    }
  ]

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="min-h-screen relative overflow-hidden pt-20 bg-gradient-to-b from-green-50 to-white">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-green-100 to-white" />
            <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-green-200 to-emerald-100 opacity-30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-200 to-green-100 opacity-30 rounded-full blur-3xl" />
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
                  className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm text-green-700 rounded-full text-sm font-semibold mb-6 shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                >
                  <CreditCard size={18} className="mr-2" />
                  Revenue Cycle Management
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-bold mb-8">
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Medical Billing
                  </span>
                  <br />
                  <span className="text-gray-900">Services</span>
                </h1>

                <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
                  Comprehensive revenue cycle management to maximize reimbursements and reduce claim denials.
                  Our expert billing specialists ensure faster payments and improved cash flow for your practice.
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
                Complete Revenue Cycle
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Management</span>
              </h2>
              <p className="text-xl text-gray-600">
                End-to-end medical billing services designed to optimize your revenue and streamline operations.
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
                    className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
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

        {/* Performance Metrics */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Proven
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Results</span>
              </h2>
              <p className="text-xl text-gray-600">
                Our medical billing services deliver measurable improvements to your bottom line.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-2xl transition-all duration-300"
                >
                  <div className="text-5xl font-bold text-green-600 mb-4">{benefit.metric}</div>
                  <div className="text-xl font-semibold text-gray-900 mb-2">{benefit.label}</div>
                  <div className="text-gray-600">{benefit.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services List */}
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
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Billing Services</span>
              </h2>
              <p className="text-xl text-gray-600">
                Full-spectrum medical billing and coding services to support your revenue cycle.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="flex items-center space-x-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 hover:shadow-md transition-all duration-300"
                >
                  <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
                  <span className="text-gray-700 font-medium">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Optimize Your Revenue Cycle?
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Partner with Seyyone to reduce denials, accelerate payments, and maximize your practice revenue.
                Get a free revenue cycle assessment today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center space-x-2"
                >
                  <span>Request Free Assessment</span>
                  <ArrowRight size={20} />
                </button>
                <Link
                  href="/medical"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center justify-center space-x-2"
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
        initialService="Medical Billing"
      />
      <Footer />
    </>
  )
}
