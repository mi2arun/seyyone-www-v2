'use client'

import Navigation from '@/components/Navigation'

import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { BarChart3, CheckCircle, PieChart, TrendingUp, Database, ArrowRight, Eye, Layers, Target, Award } from 'lucide-react'
import Link from 'next/link'

import { useState } from 'react'
import TechnologyContactModal from '@/components/technology/TechnologyContactModal'

export default function AnalyticsReportingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const features = [
    {
      icon: PieChart,
      title: 'Data Visualization',
      description: 'Interactive charts, graphs, and dashboards that transform complex data into actionable insights.'
    },
    {
      icon: Eye,
      title: 'Real-time Dashboards',
      description: 'Live dashboards with auto-refresh capabilities for up-to-the-minute business intelligence.'
    },
    {
      icon: Database,
      title: 'ETL Processes',
      description: 'Extract, Transform, Load pipelines to consolidate data from multiple sources seamlessly.'
    },
    {
      icon: Target,
      title: 'Custom Reports',
      description: 'Tailored reports designed to meet your specific business requirements and KPIs.'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Advanced analytics and forecasting to anticipate trends and make proactive decisions.'
    },
    {
      icon: Layers,
      title: 'Data Integration',
      description: 'Connect and consolidate data from databases, APIs, files, and cloud services.'
    }
  ]

  const solutions = [
    {
      title: 'Business Intelligence Dashboards',
      description: 'Interactive dashboards providing real-time visibility into key business metrics and KPIs.',
      icon: Eye,
      items: ['Executive Dashboards', 'Operational Metrics', 'Sales Analytics', 'Financial Reporting']
    },
    {
      title: 'Custom Report Development',
      description: 'Bespoke reporting solutions tailored to your organization\'s unique requirements.',
      icon: BarChart3,
      items: ['Scheduled Reports', 'Ad-hoc Reporting', 'Multi-format Export', 'Automated Distribution']
    },
    {
      title: 'Data Warehousing',
      description: 'Centralized data repositories optimized for analytics and reporting.',
      icon: Database,
      items: ['Data Modeling', 'ETL Pipelines', 'Data Quality', 'Historical Analysis']
    },
    {
      title: 'Advanced Analytics',
      description: 'Statistical analysis, predictive modeling, and machine learning for deeper insights.',
      icon: TrendingUp,
      items: ['Trend Analysis', 'Forecasting', 'Pattern Detection', 'What-If Analysis']
    }
  ]

  const capabilities = [
    'Interactive Visualizations',
    'Drill-down & Drill-through',
    'Real-time Data Processing',
    'Multi-source Integration',
    'Scheduled Report Generation',
    'Mobile-responsive Dashboards',
    'Role-based Access Control',
    'Export to PDF/Excel/CSV',
    'Alerts & Notifications',
    'Self-service Analytics',
    'Data Governance',
    'Performance Optimization'
  ]

  const benefits = [
    'Make data-driven decisions faster',
    'Identify trends and opportunities early',
    'Reduce manual reporting effort by 80%',
    'Improve data accuracy and consistency',
    'Enable self-service analytics for teams',
    'Gain 360-degree business visibility',
    'Accelerate report generation from days to minutes',
    'Uncover hidden insights in your data'
  ]

  const technologies = [
    'Power BI',
    'Tableau',
    'QlikView',
    'Apache Superset',
    'Metabase',
    'Google Data Studio',
    'PostgreSQL',
    'MongoDB',
    'Apache Spark',
    'Apache Airflow',
    'Python & R',
    'Elasticsearch'
  ]

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
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
                <BarChart3 size={18} className="mr-2" />
                Data-Driven
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Analytics & Reporting
                </span>
                <br />
                <span className="text-gray-900">Solutions</span>
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
                Data-driven insights through advanced analytics and comprehensive reporting platforms.
                Transform raw data into actionable intelligence with powerful visualizations and real-time dashboards.
              </p>


            </motion.div>
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
                Powerful Analytics
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Platform</span>
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive analytics and reporting capabilities for data-driven decision making.
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

        {/* Solutions */}
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
                Analytics
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Solutions</span>
              </h2>
              <p className="text-xl text-gray-600">
                End-to-end analytics and reporting services from data integration to insights delivery.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon
                return (
                  <motion.div
                    key={solution.title}
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
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                        <p className="text-gray-600 leading-relaxed mb-4">{solution.description}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {solution.items.map((item, idx) => (
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
                  Analytics
                  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Capabilities</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Comprehensive features for modern analytics and reporting needs.
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
                      <CheckCircle className="text-indigo-600 flex-shrink-0 mt-1" size={18} />
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
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-2xl">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                      <Award className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Key Benefits</h3>
                  </div>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg">
                        <CheckCircle className="text-indigo-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technologies */}
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
                Analytics
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Technologies</span>
              </h2>
              <p className="text-xl text-gray-600">
                Industry-leading analytics and BI platforms.
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
                  className="flex items-center space-x-3 p-4 bg-white rounded-xl border border-indigo-200 hover:shadow-md transition-all duration-300"
                >
                  <CheckCircle className="text-indigo-600 flex-shrink-0" size={24} />
                  <span className="text-gray-700 font-medium">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
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
                Ready to Unlock Your Data&apos;s Potential?
              </h2>
              <p className="text-xl   mb-8">
                Transform your data into actionable insights with powerful analytics and reporting solutions.
                Get a free analytics consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center space-x-2"
                >
                  <span>Request Consultation</span>
                  <ArrowRight size={20} />
                </button>
                <Link
                  href="/technology"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-colors inline-flex items-center justify-center space-x-2"
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
        initialService="Analytics & Reporting"
      />
      <Footer />
    </>
  )
}
