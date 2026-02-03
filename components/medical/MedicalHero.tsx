'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Stethoscope, Shield, Award, Users, Clock, CheckCircle } from 'lucide-react'

const MedicalHero = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const highlights = [
    { icon: Shield, text: 'HIPAA Compliant', color: 'text-green-600' },
    { icon: Award, text: '25+ Years Experience', color: 'text-blue-600' },
    { icon: Users, text: '50+ Healthcare Clients', color: 'text-purple-600' },
    { icon: Clock, text: '24/7 Support', color: 'text-orange-600' }
  ]

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-32 h-32 border-2 border-blue-200 rounded-full opacity-20"
        />
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-16 w-24 h-24 bg-cyan-100 rounded-full opacity-30"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/4 w-16 h-16 bg-blue-200 rounded-lg opacity-20"
        />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-6 py-3 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold"
            >
              <Stethoscope size={18} className="mr-2" />
              Healthcare & Medical Services
            </motion.div>

            {/* Main Title */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold leading-tight"
              >
                <span className="text-gray-900">Professional</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Medical Transcription
                </span>
                <br />
                <span className="text-gray-700">& Healthcare KPO</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-gray-600 leading-relaxed max-w-2xl"
              >
                HIPAA-compliant healthcare back office services with 25+ years of experience.
                Trusted by healthcare providers worldwide for medical transcription, billing,
                coding, and comprehensive EHR support.
              </motion.p>
            </div>

            {/* Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon
                return (
                  <motion.div
                    key={highlight.text}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                    className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100"
                  >
                    <IconComponent size={24} className={highlight.color} />
                    <span className="font-medium text-gray-800 text-sm">
                      {highlight.text}
                    </span>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={onOpenModal}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Healthcare Services
              </button>

            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                      <Stethoscope className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Medical Records</h3>
                      <p className="text-sm text-gray-600">HIPAA Compliant</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold"
                  >
                    Secure
                  </motion.div>
                </div>

                {/* Progress Bars */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Accuracy Rate</span>
                      <span>99.8%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "99.8%" }}
                        transition={{ delay: 1.5, duration: 2 }}
                        className="h-2 bg-gradient-to-r from-green-500 to-green-400 rounded-full"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Processing Speed</span>
                      <span>95%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "95%" }}
                        transition={{ delay: 2, duration: 2 }}
                        className="h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Services List */}
                <div className="space-y-3">
                  {[
                    'Medical Transcription',
                    'Medical Billing & Coding',
                    'EHR/EMR Support',
                    'Medical Record Summarization'
                  ].map((service, index) => (
                    <motion.div
                      key={service}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2.5 + index * 0.1, duration: 0.6 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle size={16} className="text-green-500" />
                      <span className="text-sm text-gray-700">{service}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Stats - Hidden (uncomment lines 220-236 to enable) */}
            {/* <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-blue-600 text-white p-4 rounded-2xl shadow-xl"
            >
              <div className="text-2xl font-bold">25+</div>
              <div className="text-xs opacity-90">Years</div>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-4 -left-4 bg-white border-2 border-blue-200 p-4 rounded-2xl shadow-xl"
            >
              <div className="text-2xl font-bold text-blue-600">50+</div>
              <div className="text-xs text-gray-600">Clients</div>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MedicalHero