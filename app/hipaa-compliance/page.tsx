'use client'

import Navigation from '@/components/Navigation'
import ContactInfo from '@/components/ContactInfo'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Shield, Lock, FileCheck, Eye, Server, AlertCircle, CheckCircle, Users, Database, Key } from 'lucide-react'

export default function HIPAACompliancePage() {
  const complianceFeatures = [
    {
      icon: Shield,
      title: 'HIPAA Compliant Infrastructure',
      description: 'Our entire infrastructure is designed and maintained to meet HIPAA compliance standards, ensuring Protected Health Information (PHI) security.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'All data transmission and storage use industry-standard encryption protocols (AES-256) to protect sensitive healthcare information.',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: FileCheck,
      title: 'Regular Audits & Assessments',
      description: 'We conduct regular third-party audits and risk assessments to ensure continuous compliance with HIPAA regulations.',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Eye,
      title: 'Access Controls',
      description: 'Role-based access controls and multi-factor authentication ensure only authorized personnel can access PHI.',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: Server,
      title: 'Secure Data Centers',
      description: 'Our data centers feature physical security, redundant systems, and 24/7 monitoring to protect healthcare data.',
      gradient: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Users,
      title: 'Employee Training',
      description: 'All employees undergo mandatory HIPAA training and sign Business Associate Agreements (BAA) before handling PHI.',
      gradient: 'from-red-500 to-red-600'
    }
  ]

  const securityMeasures = [
    {
      icon: Database,
      title: 'Data Backup & Recovery',
      description: 'Automated daily backups with encrypted storage and tested disaster recovery procedures.'
    },
    {
      icon: Key,
      title: 'Authentication & Authorization',
      description: 'Multi-factor authentication, strong password policies, and session management.'
    },
    {
      icon: AlertCircle,
      title: 'Incident Response',
      description: '24/7 security monitoring with documented incident response and breach notification procedures.'
    },
    {
      icon: FileCheck,
      title: 'Documentation & Policies',
      description: 'Comprehensive HIPAA policies, procedures, and documentation readily available for audit.'
    }
  ]

  const complianceStandards = [
    'HIPAA Privacy Rule Compliance',
    'HIPAA Security Rule Compliance',
    'HIPAA Breach Notification Rule',
    'Business Associate Agreement (BAA) Execution',
    'PHI Handling & Storage Protocols',
    'Secure Communication Channels',
    'Regular Risk Assessments',
    'Audit Trail & Logging'
  ]

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center relative overflow-hidden pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute top-20 right-20 w-64 h-64 border-2 border-blue-200 rounded-full opacity-20"
            />
            <motion.div
              animate={{ y: [-20, 20, -20] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-32 left-16 w-48 h-48 bg-green-100 rounded-full opacity-30"
            />
          </div>

          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-blue-100 text-green-700 rounded-full text-sm font-semibold mb-6"
              >
                <Shield size={18} className="mr-2" />
                HIPAA Compliance
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold mb-8"
              >
                <span className="text-gray-900">Your Healthcare Data is</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Safe & Secure
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-gray-600 leading-relaxed mb-12 max-w-4xl mx-auto"
              >
                At Seyyone, we understand the critical importance of protecting Protected Health Information (PHI).
                Our comprehensive HIPAA compliance program ensures the highest standards of data security and privacy
                for all healthcare operations.
              </motion.p>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-wrap justify-center gap-6 mb-12"
              >
                {[
                  { icon: Shield, text: 'HIPAA Compliant' },
                  { icon: Lock, text: 'AES-256 Encrypted' },
                  { icon: CheckCircle, text: 'Regular Audits' },
                  { icon: FileCheck, text: 'BAA Available' }
                ].map((badge, index) => {
                  const IconComponent = badge.icon
                  return (
                    <motion.div
                      key={badge.text}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                      className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg border border-gray-200"
                    >
                      <IconComponent className="text-green-600" size={20} />
                      <span className="font-semibold text-gray-700">{badge.text}</span>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Compliance Features */}
        <section className="py-20 bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive HIPAA Compliance
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our multi-layered approach to HIPAA compliance ensures your healthcare data is protected at every level.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {complianceFeatures.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
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

        {/* Security Measures */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Advanced Security Measures
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We implement industry-leading security practices to protect your sensitive healthcare information.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {securityMeasures.map((measure, index) => {
                const IconComponent = measure.icon
                return (
                  <motion.div
                    key={measure.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{measure.title}</h3>
                        <p className="text-gray-600">{measure.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Compliance Standards
                </h2>
                <p className="text-xl text-gray-600">
                  We adhere to all HIPAA regulations and maintain rigorous compliance standards.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  {complianceStandards.map((standard, index) => (
                    <motion.div
                      key={standard}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
                      className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm"
                    >
                      <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                      <span className="text-gray-700 font-medium">{standard}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Work with a HIPAA-Compliant Partner?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Let&apos;s discuss how our HIPAA-compliant infrastructure can support your healthcare operations
                while ensuring the highest standards of data security and privacy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center space-x-2"
                >
                  <span>Contact Our Compliance Team</span>
                </a>
                <a
                  href="/medical"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <span>View Healthcare Services</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <ContactInfo />
      </main>
      <Footer />
    </>
  )
}
