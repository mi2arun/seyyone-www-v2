'use client'

import Navigation from '@/components/Navigation'
import ContactInfo from '@/components/ContactInfo'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { FileText, CheckCircle, Clock, Shield, Users, ArrowRight, Zap, Award, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function MedicalTranscriptionPage() {
  const features = [
    {
      icon: CheckCircle,
      title: '99.8% Accuracy Rate',
      description: 'Industry-leading accuracy through advanced voice recognition technology and expert medical transcriptionists.'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock transcription services ensuring quick turnaround times for urgent medical documentation.'
    },
    {
      icon: Shield,
      title: 'HIPAA Compliant',
      description: 'Fully compliant with HIPAA regulations, ensuring the security and privacy of patient health information.'
    },
    {
      icon: Users,
      title: 'Multi-Specialty Support',
      description: 'Experienced transcriptionists trained in various medical specialties including cardiology, radiology, and more.'
    },
    {
      icon: Zap,
      title: 'Quick Turnaround',
      description: 'Fast delivery times with options for stat, same-day, and 24-hour turnaround based on your needs.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Multi-level quality checks ensuring error-free documentation that meets industry standards.'
    }
  ]

  const benefits = [
    'Reduce documentation time by up to 70%',
    'Improve physician productivity and patient care time',
    'Eliminate backlog with scalable transcription services',
    'Ensure accurate medical records for better patient outcomes',
    'Reduce operational costs compared to in-house transcription',
    'Access to certified medical transcriptionists',
    'Seamless integration with existing EHR/EMR systems',
    'Regular quality audits and performance reporting'
  ]

  const specialties = [
    'Cardiology',
    'Radiology',
    'Orthopedics',
    'Gastroenterology',
    'Neurology',
    'Oncology',
    'Pediatrics',
    'Surgery',
    'Emergency Medicine',
    'Pathology',
    'Internal Medicine',
    'Family Practice'
  ]

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
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
                  <FileText size={18} className="mr-2" />
                  Healthcare KPO Services
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-bold mb-8">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Medical Transcription
                  </span>
                  <br />
                  <span className="text-gray-900">Services</span>
                </h1>

                <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
                  Accurate voice-to-text conversion of medical dictations with 99.8% accuracy rate and quick turnaround times.
                  Our expert transcriptionists ensure your clinical documentation is precise, compliant, and delivered on time.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center space-x-2"
                  >
                    <span>Get Started</span>
                    <ArrowRight size={20} />
                  </Link>
                  <Link
                    href="#features"
                    className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center space-x-2"
                  >
                    <span>Learn More</span>
                  </Link>
                </div>
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
                Why Choose Our
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Transcription Services</span>
              </h2>
              <p className="text-xl text-gray-600">
                Industry-leading medical transcription services designed to enhance your practice efficiency and accuracy.
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

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  Benefits That Drive
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Results</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Transform your clinical documentation workflow with our comprehensive medical transcription services.
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
                      <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
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
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                    <TrendingUp className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Key Metrics</h3>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <div className="text-3xl font-bold text-blue-600 mb-2">99.8%</div>
                    <div className="text-sm text-gray-600">Accuracy Rate</div>
                  </div>
                  <div className="text-center p-4 bg-cyan-50 rounded-xl">
                    <div className="text-3xl font-bold text-cyan-600 mb-2">24/7</div>
                    <div className="text-sm text-gray-600">Availability</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <div className="text-3xl font-bold text-blue-600 mb-2">&lt;24hrs</div>
                    <div className="text-sm text-gray-600">Turnaround</div>
                  </div>
                  <div className="text-center p-4 bg-cyan-50 rounded-xl">
                    <div className="text-3xl font-bold text-cyan-600 mb-2">50+</div>
                    <div className="text-sm text-gray-600">Specialties</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Specialties Section */}
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
                Medical
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Specialties</span>
              </h2>
              <p className="text-xl text-gray-600">
                Expert transcription services across all major medical specialties.
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
                  className="px-6 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full border border-blue-200 text-gray-700 font-medium hover:shadow-md transition-all duration-300"
                >
                  {specialty}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
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
                Ready to Streamline Your Medical Documentation?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join 50+ healthcare providers who trust Seyyone with their critical medical transcription needs.
                HIPAA-compliant, accurate, and reliable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center space-x-2"
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="/medical"
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
      <Footer />
    </>
  )
}
