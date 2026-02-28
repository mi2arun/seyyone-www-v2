'use client'

import Navigation from '@/components/Navigation'

import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Code, CheckCircle, Layers, Shield, Zap, ArrowRight, Database, Globe, Award, TrendingUp } from 'lucide-react'
import Link from 'next/link'

import { useState } from 'react'
import TechnologyContactModal from '@/components/technology/TechnologyContactModal'

export default function SoftwareServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const features = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'End-to-end application development using modern frameworks like React, Node.js, and .NET.'
    },
    {
      icon: Layers,
      title: 'API Integration',
      description: 'Seamless integration with third-party services, RESTful APIs, and enterprise systems.'
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Optimized database architecture and design for performance, scalability, and reliability.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Code optimization, caching strategies, and performance tuning for faster applications.'
    },
    {
      icon: Shield,
      title: 'Security Implementation',
      description: 'Comprehensive security measures including authentication, authorization, and data encryption.'
    },
    {
      icon: Globe,
      title: 'Scalable Architecture',
      description: 'Design and implementation of architectures that grow with your business needs.'
    }
  ]

  const services = [
    {
      title: 'Custom Software Development',
      description: 'Bespoke software solutions tailored to your specific business requirements and workflows.',
      icon: Code,
      items: ['Requirements Analysis', 'Custom Development', 'Quality Assurance', 'Deployment & Support']
    },
    {
      title: 'Web Application Development',
      description: 'Modern, responsive web applications built with the latest technologies and frameworks.',
      icon: Globe,
      items: ['React/Angular/Vue', 'Progressive Web Apps', 'Responsive Design', 'SEO Optimization']
    },
    {
      title: 'Enterprise Solutions',
      description: 'Robust enterprise applications for complex business processes and large-scale operations.',
      icon: Layers,
      items: ['ERP Systems', 'CRM Solutions', 'Business Intelligence', 'Workflow Automation']
    },
    {
      title: 'API Development',
      description: 'RESTful and GraphQL APIs for seamless system integration and data exchange.',
      icon: Database,
      items: ['REST API Design', 'GraphQL Implementation', 'API Documentation', 'Third-party Integration']
    }
  ]

  const benefits = [
    'Reduce development time by 40%',
    'Improve code quality and maintainability',
    'Scale applications to handle growth',
    'Enhance user experience and engagement',
    'Reduce technical debt and maintenance costs',
    'Accelerate time-to-market',
    'Ensure security and compliance',
    'Enable continuous innovation'
  ]

  const technologies = [
    'React & Next.js',
    'Node.js & Express',
    'Python & Django',
    '.NET Core',
    'Angular & Vue.js',
    'PostgreSQL & MongoDB',
    'AWS & Azure',
    'Docker & Kubernetes',
    'GraphQL',
    'TypeScript',
    'Redis & Elasticsearch',
    'Git & CI/CD'
  ]

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-to-b from-orange-50 to-white">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-orange-100 to-white" />
            <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-orange-200 to-red-100 opacity-30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-red-200 to-orange-100 opacity-30 rounded-full blur-3xl" />
          </div>

          <div className="container relative z-10">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm text-orange-700 rounded-full text-sm font-semibold mb-6 shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
              >
                <Code size={18} className="mr-2" />
                Bespoke Solutions
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Software Services
                </span>
                <br />
                <span className="text-gray-900">& Development</span>
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed mb-0 max-w-3xl mx-auto">
                Tailored software solutions built with modern technologies and best practices.
                From custom applications to enterprise systems, we deliver scalable software that drives business growth.
              </p>


            </motion.div>
          </div>
        </section>

        {/* Features Section */}
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
                Modern Software
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"> Development</span>
              </h2>
              <p className="text-xl text-gray-600">
                Expert development services using cutting-edge technologies and industry best practices.
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
                    className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
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
        <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Development
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"> Services</span>
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive software development services tailored to your business needs.
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
                      <div className="w-14 h-14 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
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
                  Drive Business Growth
                  <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"> With Software</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Modern software solutions that enhance efficiency, reduce costs, and enable innovation.
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
                className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-2xl"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center">
                    <Award className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Approach</h3>
                </div>
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6">
                    <div className="font-semibold text-gray-900 mb-2">Agile Development</div>
                    <div className="text-gray-600">Iterative approach for flexibility and faster delivery</div>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <div className="font-semibold text-gray-900 mb-2">Best Practices</div>
                    <div className="text-gray-600">Following industry standards and coding conventions</div>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <div className="font-semibold text-gray-900 mb-2">Quality Assurance</div>
                    <div className="text-gray-600">Comprehensive testing at every development stage</div>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <div className="font-semibold text-gray-900 mb-2">Ongoing Support</div>
                    <div className="text-gray-600">Continuous maintenance and feature enhancements</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Technology
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"> Stack</span>
              </h2>
              <p className="text-xl text-gray-600">
                We use modern, proven technologies for reliable software solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="flex items-center space-x-3 p-4 bg-white rounded-xl border border-orange-200 hover:shadow-md transition-all duration-300"
                >
                  <span className="text-gray-700 font-medium">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Build Your Custom Software?
              </h2>
              <p className="text-xl   mb-8">
                Let&apos;s create software that transforms your business. Schedule a free consultation with our development team today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center space-x-2"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight size={20} />
                </button>
                <Link
                  href="/technology"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-orange-600 transition-colors inline-flex items-center justify-center space-x-2"
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
        initialService="Software Services"
      />
      <Footer />
    </>
  )
}
