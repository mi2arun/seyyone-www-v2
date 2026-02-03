'use client'

import Navigation from '@/components/Navigation'
import ContactInfo from '@/components/ContactInfo'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Stethoscope, CheckCircle, FileCheck, Shield, Award, ArrowRight, BookOpen, AlertCircle, TrendingUp } from 'lucide-react'
import Link from 'next/link'

import { useState } from 'react'
import MedicalContactModal from '@/components/medical/MedicalContactModal'

export default function PeerReviewSummaryPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const features = [
    {
      icon: FileCheck,
      title: 'Clinical Review',
      description: 'Expert clinical evaluation of medical cases for quality assurance and compliance with standards of care.'
    },
    {
      icon: Shield,
      title: 'Compliance Check',
      description: 'Thorough assessment of adherence to medical guidelines, protocols, and regulatory requirements.'
    },
    {
      icon: BookOpen,
      title: 'Detailed Reports',
      description: 'Comprehensive peer review reports documenting findings, recommendations, and improvement opportunities.'
    },
    {
      icon: Award,
      title: 'Expert Analysis',
      description: 'Reviews conducted by board-certified physicians and clinical experts in relevant specialties.'
    },
    {
      icon: TrendingUp,
      title: 'Quality Improvement',
      description: 'Actionable insights to improve clinical outcomes, reduce errors, and enhance patient safety.'
    },
    {
      icon: AlertCircle,
      title: 'Risk Identification',
      description: 'Early identification of potential quality issues, compliance risks, and areas for improvement.'
    }
  ]

  const reviewTypes = [
    {
      title: 'Retrospective Review',
      description: 'Comprehensive analysis of completed patient cases to assess quality of care and identify improvement opportunities.',
      icon: BookOpen
    },
    {
      title: 'Concurrent Review',
      description: 'Real-time evaluation of ongoing patient care to ensure appropriate treatment and resource utilization.',
      icon: TrendingUp
    },
    {
      title: 'Prospective Review',
      description: 'Pre-authorization review of planned procedures and treatments for medical necessity and appropriateness.',
      icon: FileCheck
    },
    {
      title: 'Focused Review',
      description: 'Targeted assessment of specific cases, physicians, or clinical areas identified for deeper evaluation.',
      icon: AlertCircle
    }
  ]

  const benefits = [
    'Improve clinical quality and patient outcomes',
    'Ensure compliance with regulatory standards',
    'Identify and mitigate clinical risks early',
    'Support physician credentialing processes',
    'Enhance patient safety initiatives',
    'Meet accreditation requirements',
    'Reduce medical malpractice exposure',
    'Drive continuous quality improvement'
  ]

  const applications = [
    'Hospital Quality Assurance',
    'Medical Malpractice Cases',
    'Insurance Claim Reviews',
    'Physician Credentialing',
    'Healthcare Accreditation',
    'Clinical Audit Support',
    'Utilization Management',
    'Risk Management Programs',
    'Patient Safety Initiatives',
    'Peer Review Committees',
    'Regulatory Compliance',
    'Clinical Research Quality'
  ]

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="min-h-screen relative overflow-hidden pt-20 bg-gradient-to-b from-teal-50 to-white">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-teal-100 to-white" />
            <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-teal-200 to-emerald-100 opacity-30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-200 to-teal-100 opacity-30 rounded-full blur-3xl" />
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
                  className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm text-teal-700 rounded-full text-sm font-semibold mb-6 shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                >
                  <Stethoscope size={18} className="mr-2" />
                  Quality Assurance & Compliance
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-bold mb-8">
                  <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                    Peer Review
                  </span>
                  <br />
                  <span className="text-gray-900">Summary Services</span>
                </h1>

                <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
                  Expert peer review documentation and analysis for quality assurance and compliance.
                  Our board-certified physicians provide objective clinical evaluations to support quality improvement initiatives.
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
                Comprehensive Peer Review
                <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent"> Services</span>
              </h2>
              <p className="text-xl text-gray-600">
                Expert clinical evaluation and documentation supporting healthcare quality and compliance.
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
                    className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
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

        {/* Review Types */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Types of
                <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent"> Peer Reviews</span>
              </h2>
              <p className="text-xl text-gray-600">
                Flexible peer review services tailored to your organization&apos;s quality assurance needs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {reviewTypes.map((type, index) => {
                const IconComponent = type.icon
                return (
                  <motion.div
                    key={type.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{type.description}</p>
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
                  Benefits for Healthcare
                  <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent"> Organizations</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Enhance quality, reduce risk, and improve patient outcomes with professional peer review services.
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
                      <CheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={20} />
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
                className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 shadow-2xl"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-xl flex items-center justify-center">
                    <Award className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Expertise</h3>
                </div>
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6">
                    <div className="font-semibold text-gray-900 mb-2">Board-Certified Reviewers</div>
                    <div className="text-gray-600">Physicians actively practicing in their specialties</div>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <div className="font-semibold text-gray-900 mb-2">Objective Evaluation</div>
                    <div className="text-gray-600">Unbiased clinical assessment based on evidence</div>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <div className="font-semibold text-gray-900 mb-2">Regulatory Compliance</div>
                    <div className="text-gray-600">Reviews meet CMS, Joint Commission, and state requirements</div>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <div className="font-semibold text-gray-900 mb-2">Confidential Process</div>
                    <div className="text-gray-600">HIPAA-compliant with secure peer review protections</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Wide Range of
                <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent"> Applications</span>
              </h2>
              <p className="text-xl text-gray-600">
                Supporting healthcare quality initiatives across multiple settings and purposes.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {applications.map((application, index) => (
                <motion.div
                  key={application}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="flex items-center space-x-3 p-4 bg-white rounded-xl border border-teal-200 hover:shadow-md transition-all duration-300"
                >
                  <CheckCircle className="text-teal-600 flex-shrink-0" size={24} />
                  <span className="text-gray-700 font-medium">{application}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-teal-600 to-emerald-600">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Enhance Your Quality Assurance Program?
              </h2>
              <p className="text-xl text-teal-100 mb-8">
                Partner with Seyyone for expert peer review services that support clinical excellence and regulatory compliance.
                Request a consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-teal-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center space-x-2"
                >
                  <span>Request Consultation</span>
                  <ArrowRight size={20} />
                </button>
                <Link
                  href="/medical"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-teal-600 transition-colors inline-flex items-center justify-center space-x-2"
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
        initialService="Medical Peer Review"
      />
      <Footer />
    </>
  )
}
