'use client'

import Navigation from '@/components/Navigation'
import ContactInfo from '@/components/ContactInfo'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Users, CheckCircle, Search, Award, TrendingUp, ArrowRight, Target, Shield, Briefcase, Star } from 'lucide-react'
import Link from 'next/link'

import { useState } from 'react'
import TechnologyContactModal from '@/components/technology/TechnologyContactModal'

export default function TalentManagementPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const features = [
    {
      icon: Search,
      title: 'IT Recruitment',
      description: 'End-to-end IT recruitment services to find and hire top technical talent for your organization.'
    },
    {
      icon: Users,
      title: 'Team Augmentation',
      description: 'Scale your development team quickly with skilled professionals who integrate seamlessly.'
    },
    {
      icon: Award,
      title: 'Skill Assessment',
      description: 'Comprehensive technical assessments to ensure candidates meet your specific requirements.'
    },
    {
      icon: Briefcase,
      title: 'Resource Management',
      description: 'Efficient allocation and management of IT resources to maximize productivity and project success.'
    },
    {
      icon: Target,
      title: 'Specialized Roles',
      description: 'Access to niche technical expertise including cloud architects, ML engineers, and DevOps specialists.'
    },
    {
      icon: TrendingUp,
      title: 'Flexible Engagement',
      description: 'Choose from contract, contract-to-hire, or permanent placement models based on your needs.'
    }
  ]

  const services = [
    {
      title: 'IT Staff Augmentation',
      description: 'Quickly scale your team with pre-vetted technical professionals who integrate with your existing team.',
      icon: Users,
      items: ['Immediate Availability', 'Pre-Screened Talent', 'Flexible Duration', 'Cultural Fit Assessment']
    },
    {
      title: 'Technical Recruiting',
      description: 'Full-cycle recruitment for permanent IT positions across all technology stacks and seniority levels.',
      icon: Search,
      items: ['Job Description', 'Candidate Sourcing', 'Technical Screening', 'Interview Coordination']
    },
    {
      title: 'Dedicated Teams',
      description: 'Build offshore development teams with dedicated resources aligned to your project goals.',
      icon: Briefcase,
      items: ['Team Setup', 'Infrastructure Support', 'Project Management', 'Quality Oversight']
    },
    {
      title: 'Talent Advisory',
      description: 'Strategic consulting on talent acquisition, retention, and workforce planning.',
      icon: Target,
      items: ['Market Intelligence', 'Compensation Analysis', 'Retention Strategies', 'Workforce Planning']
    }
  ]

  const roles = [
    'Full-Stack Developers',
    'Frontend Developers',
    'Backend Developers',
    'Mobile App Developers',
    'Cloud Architects',
    'DevOps Engineers',
    'Data Scientists',
    'ML Engineers',
    'QA Engineers',
    'UI/UX Designers',
    'Product Managers',
    'Scrum Masters'
  ]

  const benefits = [
    'Reduce hiring time by 50%',
    'Access to pre-vetted technical talent',
    'Scale teams up or down as needed',
    'Lower recruitment and onboarding costs',
    'Focus on core business activities',
    'Minimize hiring risks',
    'Improve project delivery timelines',
    'Retain institutional knowledge'
  ]

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="min-h-screen relative overflow-hidden pt-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-white" />
            <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-indigo-100 opacity-30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-200 to-blue-100 opacity-30 rounded-full blur-3xl" />
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
                  <Users size={18} className="mr-2" />
                  Expert Teams
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-bold mb-8">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Talent Management
                  </span>
                  <br />
                  <span className="text-gray-900">Services</span>
                </h1>

                <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
                  Comprehensive IT talent acquisition and management services to build high-performing teams.
                  From staff augmentation to dedicated teams, we connect you with the right technical talent.
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
                Complete Talent
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Solutions</span>
              </h2>
              <p className="text-xl text-gray-600">
                End-to-end talent services from recruitment to team management.
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
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
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
                Talent
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Services</span>
              </h2>
              <p className="text-xl text-gray-600">
                Flexible talent solutions tailored to your business needs.
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
                      <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
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

        {/* Benefits & Roles Section */}
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
                  Build Your Dream
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Tech Team</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Access top technical talent without the overhead and time investment of traditional hiring.
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
              >
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-2xl">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                      <Star className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Available Roles</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {roles.map((role, index) => (
                      <div key={index} className="flex items-center space-x-2 p-3 bg-white rounded-lg">
                        <CheckCircle className="text-blue-600 flex-shrink-0" size={16} />
                        <span className="text-sm text-gray-700 font-medium">{role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Build Your Technical Team?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Connect with top IT talent or augment your team quickly. Let us help you find the right people for your projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center space-x-2"
                >
                  <span>Discuss Your Needs</span>
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
        initialService="Talent Management"
      />
      <Footer />
    </>
  )
}
