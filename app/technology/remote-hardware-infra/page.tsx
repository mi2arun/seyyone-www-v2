'use client'

import Navigation from '@/components/Navigation'

import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Database, CheckCircle, Server, Shield, Clock, ArrowRight, Monitor, Settings, AlertCircle, Award } from 'lucide-react'
import Link from 'next/link'

import { useState } from 'react'
import TechnologyContactModal from '@/components/technology/TechnologyContactModal'

export default function RemoteHardwareInfraPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const features = [
    {
      icon: Monitor,
      title: 'Remote Monitoring',
      description: 'Proactive 24/7 monitoring of hardware infrastructure with real-time alerts and notifications.'
    },
    {
      icon: Server,
      title: 'Infrastructure Setup',
      description: 'Complete hardware infrastructure planning, procurement, and deployment services.'
    },
    {
      icon: Settings,
      title: 'Hardware Support',
      description: 'Expert technical support for servers, storage, networking, and endpoint devices.'
    },
    {
      icon: Clock,
      title: '24/7 Maintenance',
      description: 'Round-the-clock maintenance, updates, and issue resolution to minimize downtime.'
    },
    {
      icon: Shield,
      title: 'Security Management',
      description: 'Hardware-level security configuration, firmware updates, and vulnerability management.'
    },
    {
      icon: AlertCircle,
      title: 'Disaster Recovery',
      description: 'Backup systems, redundancy planning, and disaster recovery solutions for business continuity.'
    }
  ]

  const services = [
    {
      title: 'Infrastructure Monitoring',
      description: 'Comprehensive monitoring of servers, networks, and storage systems with automated alerts.',
      icon: Monitor,
      items: ['Performance Monitoring', 'Health Checks', 'Capacity Planning', 'Alert Management']
    },
    {
      title: 'Hardware Management',
      description: 'End-to-end hardware lifecycle management from procurement to decommissioning.',
      icon: Server,
      items: ['Hardware Procurement', 'Installation & Setup', 'Configuration', 'Asset Tracking']
    },
    {
      title: 'Maintenance & Support',
      description: '24/7 technical support and maintenance services for all hardware infrastructure.',
      icon: Settings,
      items: ['Preventive Maintenance', 'Break-fix Support', 'Firmware Updates', 'Performance Tuning']
    },
    {
      title: 'Infrastructure Security',
      description: 'Security hardening, compliance, and protection of hardware infrastructure.',
      icon: Shield,
      items: ['Security Configuration', 'Patch Management', 'Access Control', 'Compliance Audits']
    }
  ]

  const capabilities = [
    'Server & Storage Management',
    'Network Equipment Support',
    'Endpoint Device Management',
    'Data Center Operations',
    'Virtualization Infrastructure',
    'Backup & Recovery Systems',
    'Power & Cooling Management',
    'Cable Management',
    'Hardware Upgrades',
    'Performance Optimization',
    'Capacity Planning',
    'Vendor Management'
  ]

  const benefits = [
    'Reduce infrastructure downtime by 80%',
    'Lower operational costs through automation',
    'Ensure 99.9%+ system availability',
    'Proactive issue detection and resolution',
    'Scale infrastructure without on-site staff',
    'Improve hardware performance and lifespan',
    'Maintain compliance and security standards',
    'Access to expert hardware engineers'
  ]

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-to-b from-teal-50 to-white">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-teal-100 to-white" />
            <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-teal-200 to-green-100 opacity-30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green-200 to-teal-100 opacity-30 rounded-full blur-3xl" />
          </div>

          <div className="container relative z-10">
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
                <Database size={18} className="mr-2" />
                Always On
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
                  Remote Hardware
                </span>
                <br />
                <span className="text-gray-900">Infrastructure</span>
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed mb-0 max-w-3xl mx-auto">
                Remote infrastructure management and hardware support for seamless IT operations.
                24/7 monitoring, maintenance, and support to keep your infrastructure running optimally.
              </p>


            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="pt-8 pb-20 bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Complete Infrastructure
                <span className="bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent"> Management</span>
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive hardware infrastructure services delivered remotely with expert precision.
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
                    className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
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

        {/* Services */}
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
                Infrastructure
                <span className="bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent"> Services</span>
              </h2>
              <p className="text-xl text-gray-600">
                End-to-end hardware infrastructure management and support services.
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
                      <div className="w-14 h-14 bg-gradient-to-r from-teal-600 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
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

        {/* Capabilities & Benefits */}
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
                  Infrastructure
                  <span className="bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent"> Capabilities</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Complete hardware infrastructure coverage across all systems and devices.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {capabilities.map((capability, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                      className="flex items-start space-x-2"
                    >
                      <span className="text-gray-700 text-sm">{capability}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl p-8 shadow-2xl">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-green-600 rounded-xl flex items-center justify-center">
                      <Award className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Key Benefits</h3>
                  </div>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg">
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-teal-600 to-green-600">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready for Always-On Infrastructure?
              </h2>
              <p className="text-xl   mb-8">
                Let us manage your hardware infrastructure remotely with 24/7 monitoring and expert support.
                Get a free infrastructure assessment today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-teal-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center space-x-2"
                >
                  <span>Request Assessment</span>
                  <ArrowRight size={20} />
                </button>
                <Link
                  href="/technology"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-teal-600 transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <span>View All Services</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>


      </main>
      <TechnologyContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialService="Remote Hardware Infrastructure"
      />
      <Footer />
    </>
  )
}
