'use client'

import Navigation from '@/components/Navigation'

import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Database, CheckCircle, Settings, Shield, Users, ArrowRight, Zap, RefreshCw, BookOpen, Award } from 'lucide-react'
import Link from 'next/link'

import { useState } from 'react'
import MedicalContactModal from '@/components/medical/MedicalContactModal'

export default function EHREMRPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const features = [
    {
      icon: Database,
      title: 'Data Entry',
      description: 'Accurate and efficient data entry services to maintain current patient records and reduce administrative burden.'
    },
    {
      icon: Settings,
      title: 'System Optimization',
      description: 'EHR/EMR system configuration and optimization to maximize efficiency and improve clinical workflows.'
    },
    {
      icon: Users,
      title: 'Training Support',
      description: 'Comprehensive training programs for staff to ensure proficiency with EHR/EMR systems and features.'
    },
    {
      icon: RefreshCw,
      title: 'Migration Assistance',
      description: 'Seamless data migration from legacy systems to modern EHR/EMR platforms with zero data loss.'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Ensure HIPAA compliance and data security throughout all EHR/EMR operations and processes.'
    },
    {
      icon: Zap,
      title: 'Template Customization',
      description: 'Custom templates and workflows tailored to your specialty and practice requirements.'
    }
  ]

  const services = [
    {
      title: 'EHR Data Entry & Management',
      description: 'Complete data entry services including patient demographics, medical history, clinical notes, and billing information.',
      icon: Database,
      items: ['Patient Registration', 'Medical History Updates', 'Lab Results Entry', 'Prescription Management']
    },
    {
      title: 'System Implementation',
      description: 'Full-service EHR/EMR implementation from planning and configuration to go-live support and optimization.',
      icon: Settings,
      items: ['Needs Assessment', 'Vendor Selection', 'System Configuration', 'Go-Live Support']
    },
    {
      title: 'Data Migration',
      description: 'Secure transfer of patient records from paper charts or legacy systems to your new EHR/EMR platform.',
      icon: RefreshCw,
      items: ['Data Extraction', 'Format Conversion', 'Quality Validation', 'Post-Migration Support']
    },
    {
      title: 'Workflow Optimization',
      description: 'Streamline clinical and administrative workflows to improve efficiency and reduce documentation time.',
      icon: Zap,
      items: ['Process Analysis', 'Template Design', 'Automation Setup', 'Performance Monitoring']
    }
  ]

  const benefits = [
    'Reduce data entry workload by 70%',
    'Improve data accuracy and completeness',
    'Accelerate EHR adoption and staff proficiency',
    'Minimize system downtime during migration',
    'Enhance clinical workflow efficiency',
    'Ensure regulatory compliance and security',
    'Reduce administrative costs',
    'Improve patient care coordination'
  ]

  const platforms = [
    'Epic',
    'Cerner',
    'Allscripts',
    'athenahealth',
    'eClinicalWorks',
    'NextGen',
    'Meditech',
    'Practice Fusion',
    'Greenway Health',
    'Kareo',
    'DrChrono',
    'AdvancedMD'
  ]

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-indigo-50 to-white">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-100 to-white" />
            <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-indigo-200 to-purple-100 opacity-30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-200 to-indigo-100 opacity-30 rounded-full blur-3xl" />
          </div>

          <div className="container relative z-10">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm text-indigo-700 rounded-full text-sm font-semibold mb-6 shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
              >
                <Database size={18} className="mr-2" />
                Digital Health Records
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  EHR/EMR
                </span>
                <br />
                <span className="text-gray-900">Management Services</span>
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
                Comprehensive electronic health record management and optimization services.
                From data entry and migration to system optimization and training, we support your digital transformation journey.
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
                Complete EHR/EMR
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Support Services</span>
              </h2>
              <p className="text-xl text-gray-600">
                End-to-end electronic health record services to streamline operations and improve patient care.
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
                    className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
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

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Our EHR/EMR
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Services</span>
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive support for all aspects of electronic health record management.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="text-white" size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                        <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {service.items.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="text-indigo-600 flex-shrink-0" size={16} />
                          <span className="text-sm text-gray-700">{item}</span>
                        </div>
                      ))}
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
                  Transform Your
                  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Practice Operations</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Professional EHR/EMR services that improve efficiency, reduce costs, and enhance patient care.
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
                      <CheckCircle className="text-indigo-600 flex-shrink-0 mt-1" size={20} />
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
                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-2xl"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <Award className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Why Choose Us?</h3>
                </div>
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6">
                    <div className="font-semibold text-gray-900 mb-2">EHR Expertise</div>
                    <div className="text-gray-600">Certified professionals with deep knowledge of major EHR platforms</div>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <div className="font-semibold text-gray-900 mb-2">Proven Methodology</div>
                    <div className="text-gray-600">Structured approach ensuring successful implementations</div>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <div className="font-semibold text-gray-900 mb-2">24/7 Support</div>
                    <div className="text-gray-600">Round-the-clock assistance for critical EHR operations</div>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <div className="font-semibold text-gray-900 mb-2">Data Security</div>
                    <div className="text-gray-600">HIPAA-compliant processes with enterprise-grade security</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Supported Platforms */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Supported
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Platforms</span>
              </h2>
              <p className="text-xl text-gray-600">
                We work with all major EHR/EMR systems and platforms.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
            >
              {platforms.map((platform, index) => (
                <motion.div
                  key={platform}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="px-6 py-3 bg-white rounded-full border border-indigo-200 text-gray-700 font-medium hover:shadow-md transition-all duration-300"
                >
                  {platform}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Optimize Your EHR/EMR System?
              </h2>
              <p className="text-xl   mb-8">
                Partner with Seyyone for expert EHR/EMR management services that improve efficiency and enhance patient care.
                Get a free system assessment today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center space-x-2"
                >
                  <span>Request Free Assessment</span>
                  <ArrowRight size={20} />
                </button>
                <Link
                  href="/medical"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-colors inline-flex items-center justify-center space-x-2"
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
        initialService="EHR/EMR Support"
      />
      <Footer />
    </>
  )
}
