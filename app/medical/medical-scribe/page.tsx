'use client'

import Navigation from '@/components/Navigation'

import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { UserCheck, CheckCircle, Clock, Shield, Zap, ArrowRight, Heart, Monitor, Users, Award } from 'lucide-react'
import Link from 'next/link'

import { useState } from 'react'
import MedicalContactModal from '@/components/medical/MedicalContactModal'

export default function MedicalScribePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const features = [
    {
      icon: Zap,
      title: 'Real-time Support',
      description: 'Live documentation during patient encounters, allowing physicians to focus entirely on patient care.'
    },
    {
      icon: Monitor,
      title: 'EHR Integration',
      description: 'Seamless integration with all major EHR/EMR systems for efficient, real-time documentation.'
    },
    {
      icon: Users,
      title: 'Specialty-Specific',
      description: 'Trained medical scribes with expertise in your specific medical specialty and terminology.'
    },
    {
      icon: Shield,
      title: 'HIPAA Trained',
      description: 'All scribes undergo comprehensive HIPAA training and security protocols to protect patient data.'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Virtual and on-site scribes available on your schedule, including evenings and weekends.'
    },
    {
      icon: Award,
      title: 'Quality Documentation',
      description: 'Accurate, complete medical documentation that meets regulatory requirements and billing standards.'
    }
  ]

  const benefits = [
    'Increase patient face-to-face time by 50%',
    'See 2-3 more patients per day',
    'Reduce physician burnout and stress',
    'Improve documentation quality and completeness',
    'Decrease time spent on paperwork after hours',
    'Enhance patient satisfaction scores',
    'Ensure coding accuracy for proper reimbursement',
    'Reduce EHR data entry errors'
  ]

  const serviceModels = [
    {
      title: 'Virtual Medical Scribes',
      description: 'Remote scribes who document in real-time via secure video and audio connection, perfect for telehealth and clinic settings.',
      icon: Monitor,
      features: ['Cost-effective', 'Flexible hours', 'No space requirements', 'Telehealth compatible']
    },
    {
      title: 'On-Site Medical Scribes',
      description: 'In-person scribes who accompany physicians during patient encounters for direct, real-time documentation.',
      icon: Users,
      features: ['Direct interaction', 'Immediate clarification', 'Full integration', 'Emergency dept ready']
    }
  ]

  const specialties = [
    'Primary Care',
    'Emergency Medicine',
    'Cardiology',
    'Orthopedics',
    'Neurology',
    'Oncology',
    'Dermatology',
    'Gastroenterology',
    'Urgent Care',
    'Pediatrics',
    'Surgery',
    'Internal Medicine'
  ]

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-cyan-50 to-white">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-100 to-white" />
            <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-cyan-200 to-blue-100 opacity-30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-200 to-cyan-100 opacity-30 rounded-full blur-3xl" />
          </div>

          <div className="container relative z-10">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm text-cyan-700 rounded-full text-sm font-semibold mb-6 shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
              >
                <UserCheck size={18} className="mr-2" />
                Patient-Centered Care
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Medical Scribe
                </span>
                <br />
                <span className="text-gray-900">Services</span>
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
                Real-time documentation support allowing physicians to focus on patient care.
                Our trained medical scribes handle EHR documentation while you focus on what matters most - your patients.
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
                Professional Medical
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"> Scribe Services</span>
              </h2>
              <p className="text-xl text-gray-600">
                Expert documentation support that enhances physician productivity and patient care quality.
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
                    className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
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

        {/* Service Models */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Flexible Service
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"> Models</span>
              </h2>
              <p className="text-xl text-gray-600">
                Choose the scribe model that works best for your practice and workflow.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {serviceModels.map((model, index) => {
                const IconComponent = model.icon
                return (
                  <motion.div
                    key={model.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="text-white" size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{model.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{model.description}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {model.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="text-cyan-600 flex-shrink-0" size={16} />
                          <span className="text-sm text-gray-700">{feature}</span>
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
                  <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"> Practice</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Medical scribes help physicians reclaim valuable time and reduce administrative burden.
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
                      <CheckCircle className="text-cyan-600 flex-shrink-0 mt-1" size={20} />
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
                className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 shadow-2xl"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center">
                    <Heart className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Impact on Care</h3>
                </div>
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6">
                    <div className="text-4xl font-bold text-cyan-600 mb-2">50%</div>
                    <div className="font-semibold text-gray-900 mb-1">More Patient Time</div>
                    <div className="text-sm text-gray-600">Increase in face-to-face interaction</div>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <div className="text-4xl font-bold text-blue-600 mb-2">70%</div>
                    <div className="font-semibold text-gray-900 mb-1">Less Admin Work</div>
                    <div className="text-sm text-gray-600">Reduction in after-hours charting</div>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <div className="text-4xl font-bold text-cyan-600 mb-2">95%</div>
                    <div className="font-semibold text-gray-900 mb-1">Physician Satisfaction</div>
                    <div className="text-sm text-gray-600">Would recommend scribe services</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Specialties Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Supporting All
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"> Specialties</span>
              </h2>
              <p className="text-xl text-gray-600">
                Trained medical scribes for your specific medical specialty.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
            >
              {specialties.map((specialty, index) => (
                <motion.div
                  key={specialty}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="px-6 py-3 bg-white rounded-full border border-cyan-200 text-gray-700 font-medium hover:shadow-md transition-all duration-300"
                >
                  {specialty}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Focus on Patient Care?
              </h2>
              <p className="text-xl   mb-8">
                Join physicians who have reclaimed their time and reduced burnout with professional medical scribe services.
                Start with a free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-cyan-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center space-x-2"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight size={20} />
                </button>
                <Link
                  href="/medical"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center justify-center space-x-2"
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
        initialService="Remote Medical Scribe"
      />
      <Footer />
    </>
  )
}
