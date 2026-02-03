'use client'

import Navigation from '@/components/Navigation'
import ContactInfo from '@/components/ContactInfo'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Smartphone, CheckCircle, Zap, Shield, Users, ArrowRight, Code, Globe, Award, Layers } from 'lucide-react'
import Link from 'next/link'

import { useState } from 'react'
import TechnologyContactModal from '@/components/technology/TechnologyContactModal'

export default function MobileSolutionsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const features = [
    {
      icon: Smartphone,
      title: 'iOS & Android',
      description: 'Native mobile applications for both iOS and Android platforms with optimal performance.'
    },
    {
      icon: Code,
      title: 'React Native',
      description: 'Cross-platform apps using React Native for faster development and shared codebase.'
    },
    {
      icon: Layers,
      title: 'Flutter Development',
      description: 'Beautiful, natively compiled mobile apps from a single codebase using Flutter.'
    },
    {
      icon: Globe,
      title: 'Progressive Web Apps',
      description: 'Modern web applications that work offline and provide app-like experiences.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimized for speed, battery efficiency, and smooth user experiences.'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Robust security measures including encryption, secure storage, and API protection.'
    }
  ]

  const services = [
    {
      title: 'Native App Development',
      description: 'Platform-specific applications built with Swift/Objective-C for iOS and Kotlin/Java for Android.',
      icon: Smartphone,
      items: ['iOS Development', 'Android Development', 'Wearable Apps', 'Tablet Optimization']
    },
    {
      title: 'Cross-Platform Development',
      description: 'Build once, deploy everywhere with React Native or Flutter for cost-effective solutions.',
      icon: Code,
      items: ['React Native', 'Flutter', 'Code Sharing', 'Rapid Development']
    },
    {
      title: 'App Modernization',
      description: 'Update legacy mobile apps with modern features, design, and performance improvements.',
      icon: Zap,
      items: ['UI/UX Redesign', 'Performance Boost', 'Feature Updates', 'Platform Migration']
    },
    {
      title: 'App Maintenance & Support',
      description: 'Ongoing support, updates, and optimization to keep your app running smoothly.',
      icon: Users,
      items: ['Bug Fixes', 'OS Updates', 'Feature Enhancements', '24/7 Support']
    }
  ]

  const capabilities = [
    'Real-time Features & Push Notifications',
    'Offline Functionality',
    'Geolocation & Mapping',
    'Camera & Media Integration',
    'Payment Gateway Integration',
    'Social Media Integration',
    'Biometric Authentication',
    'Cloud Backend Integration',
    'Analytics & Crash Reporting',
    'In-App Purchases',
    'AR/VR Capabilities',
    'Bluetooth & IoT Connectivity'
  ]

  const benefits = [
    'Reach millions on iOS and Android',
    'Reduce development costs with cross-platform',
    'Launch apps faster with proven frameworks',
    'Provide excellent user experiences',
    'Ensure security and data protection',
    'Scale easily as user base grows',
    'Maintain competitive advantage',
    'Increase customer engagement'
  ]

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="min-h-screen relative overflow-hidden pt-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-white" />
            <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-cyan-100 opacity-30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-200 to-blue-100 opacity-30 rounded-full blur-3xl" />
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
                  className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm text-blue-700 rounded-full text-sm font-semibold mb-6 shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                >
                  <Smartphone size={18} className="mr-2" />
                  Cross-Platform
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-bold mb-8">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Mobile Solutions
                  </span>
                  <br />
                  <span className="text-gray-900">& Development</span>
                </h1>

                <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
                  Cross-platform mobile applications with native performance and exceptional user experiences.
                  From iOS and Android to Progressive Web Apps, we build mobile solutions that users love.
                </p>


              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
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
                Mobile App
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Development</span>
              </h2>
              <p className="text-xl text-gray-600">
                Expert mobile development services for iOS, Android, and cross-platform solutions.
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
                    className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
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
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Mobile
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Services</span>
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive mobile development services from concept to deployment.
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
                      <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
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
                          <CheckCircle className="text-blue-600 flex-shrink-0" size={16} />
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
                  Mobile App
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Capabilities</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Feature-rich mobile applications with modern capabilities.
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
                      <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={18} />
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
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-2xl">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                      <Award className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Key Benefits</h3>
                  </div>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg">
                        <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
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
        <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Build Your Mobile App?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Let&apos;s create a mobile experience that delights your users. Get a free mobile app consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center space-x-2"
                >
                  <span>Request Consultation</span>
                  <ArrowRight size={20} />
                </button>
                <Link
                  href="/technology"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <span>View All Services</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <ContactInfo />
      </main>
      <TechnologyContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialService="Mobile Solutions"
      />
      <Footer />
    </>
  )
}
