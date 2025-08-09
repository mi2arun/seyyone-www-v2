'use client'

import { motion } from 'framer-motion'
import { 
  FileText, 
  CreditCard, 
  Code, 
  UserCheck, 
  Database, 
  FileCheck,
  Stethoscope,
  Shield,
  ArrowRight,
  Clock
} from 'lucide-react'

const MedicalServices = () => {
  const services = [
    {
      icon: FileText,
      title: 'Medical Transcription',
      description: 'Accurate voice-to-text conversion of medical dictations with 99.8% accuracy rate and quick turnaround times.',
      features: ['Voice Recognition Technology', '24/7 Availability', 'Multi-specialty Support', 'Quality Assurance'],
      highlight: 'Most Popular'
    },
    {
      icon: CreditCard,
      title: 'Medical Billing',
      description: 'Comprehensive revenue cycle management to maximize reimbursements and reduce claim denials.',
      features: ['Claims Processing', 'Denial Management', 'Payment Posting', 'A/R Follow-up'],
      highlight: 'Revenue Focused'
    },
    {
      icon: Code,
      title: 'Medical Coding',
      description: 'Expert ICD-10, CPT, and HCPCS coding services ensuring compliance and optimal reimbursement.',
      features: ['ICD-10 Coding', 'CPT Coding', 'Audit Support', 'Compliance Review'],
      highlight: 'Certified Coders'
    },
    {
      icon: UserCheck,
      title: 'Remote Medical Scribe',
      description: 'Real-time documentation support allowing physicians to focus on patient care.',
      features: ['Real-time Support', 'EHR Integration', 'Specialty-specific', 'HIPAA Trained'],
      highlight: 'Real-time'
    },
    {
      icon: Database,
      title: 'EHR/EMR Support',
      description: 'Comprehensive electronic health record management and optimization services.',
      features: ['Data Entry', 'System Optimization', 'Training Support', 'Migration Assistance'],
      highlight: 'Tech Support'
    },
    {
      icon: FileCheck,
      title: 'Medical Record Summarization',
      description: 'Concise, accurate medical record summaries for legal, insurance, and clinical purposes.',
      features: ['Chronological Summaries', 'Legal Compliance', 'Custom Formats', 'Quick Delivery'],
      highlight: 'Legal Ready'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            <Stethoscope size={16} className="mr-2" />
            Healthcare KPO Services
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Healthcare</span>
            <br />Back Office Solutions
          </h2>
          <p className="text-xl text-gray-600">
            HIPAA-compliant medical services designed to streamline your healthcare operations 
            and improve patient care efficiency.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group relative"
              >
                <div className="h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200">
                  {/* Highlight Badge */}
                  <div className="absolute -top-3 left-6">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {service.highlight}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl mb-6 group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
                    <IconComponent 
                      size={28} 
                      className="text-blue-600 group-hover:text-white transition-colors duration-300" 
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Shield size={14} className="text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="group/btn inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    Learn More
                    <ArrowRight 
                      size={16} 
                      className="ml-2 transition-transform group-hover/btn:translate-x-1" 
                    />
                  </button>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white shadow-2xl">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Clock className="text-blue-200" size={24} />
              <Shield className="text-green-300" size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Ready to Streamline Your Healthcare Operations?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join 50+ healthcare providers who trust Seyyone with their critical 
              back office operations. HIPAA-compliant, secure, and reliable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MedicalServices