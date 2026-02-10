'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Code,
  Smartphone,
  Cloud,
  Brain,
  BarChart3,
  Users,
  Database,
  Shield,
  ArrowRight,
  Zap
} from 'lucide-react'

const TechnologyServices = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud architecture and migration services for modern, resilient applications.',
      features: ['AWS & Azure', 'Microservices', 'DevOps & CI/CD', 'Container Orchestration'],
      highlight: 'Cloud-Native',
      gradient: 'from-green-600 to-teal-600',
      href: '/technology/cloud-solutions'
    },
    {
      icon: Code,
      title: 'Software Services',
      description: 'Tailored software solutions built with modern technologies and best practices.',
      features: ['Full-Stack Development', 'API Integration', 'Database Design', 'Performance Optimization'],
      highlight: 'Bespoke Solutions',
      gradient: 'from-orange-600 to-red-600',
      href: '/technology/software-services'
    },
    {
      icon: Users,
      title: 'Talent Management',
      description: 'Comprehensive IT talent acquisition and management services to build high-performing teams.',
      features: ['IT Recruitment', 'Team Augmentation', 'Skill Assessment', 'Resource Management'],
      highlight: 'Expert Teams',
      gradient: 'from-blue-600 to-indigo-600',
      href: '/technology/talent-management'
    },
    {
      icon: Brain,
      title: 'AI/ML Solutions',
      description: 'Advanced artificial intelligence and machine learning solutions to automate processes and gain intelligent insights.',
      features: ['Computer Vision', 'Natural Language Processing', 'Predictive Analytics', 'Deep Learning Models'],
      highlight: 'Next-Gen AI',
      gradient: 'from-purple-600 to-pink-600',
      href: '/technology/ai-ml-solutions'
    },
    {
      icon: Smartphone,
      title: 'Mobile Solutions',
      description: 'Cross-platform mobile applications with native performance and exceptional user experiences.',
      features: ['iOS & Android', 'React Native', 'Flutter Development', 'Progressive Web Apps'],
      highlight: 'Cross-Platform',
      gradient: 'from-blue-600 to-cyan-600',
      href: '/technology/mobile-solutions'
    },
    {
      icon: Database,
      title: 'Remote Hardware Infra',
      description: 'Remote infrastructure management and hardware support for seamless IT operations.',
      features: ['Remote Monitoring', 'Infrastructure Setup', 'Hardware Support', '24/7 Maintenance'],
      highlight: 'Always On',
      gradient: 'from-teal-600 to-green-600',
      href: '/technology/remote-hardware-infra'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Data-driven insights through advanced analytics and comprehensive reporting platforms.',
      features: ['Data Visualization', 'Real-time Dashboards', 'ETL Processes', 'Custom Reports'],
      highlight: 'Data-Driven',
      gradient: 'from-indigo-600 to-purple-600',
      href: '/technology/analytics-reporting'
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
    <section id="services" className="py-20 bg-gradient-to-br from-white to-purple-50">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
            <Code size={16} className="mr-2" />
            Technology Services
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Technology</span>
            <br />Solutions Portfolio
          </h2>
          <p className="text-xl text-gray-600">
            From AI/ML development to cloud solutions, we deliver cutting-edge technology
            services that drive digital transformation and business growth.
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
                <div className="h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-purple-200">
                  {/* Highlight Badge */}
                  <div className="absolute -top-3 left-6">
                    <span className={`bg-gradient-to-r ${service.gradient} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                      {service.highlight}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl mb-6 group-hover:shadow-lg transition-all duration-300`}>
                    <IconComponent
                      size={28}
                      className="text-white"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Zap size={14} className="text-purple-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={service.href}
                    className="group/btn inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                  >
                    Learn More
                    <ArrowRight
                      size={16}
                      className="ml-2 transition-transform group-hover/btn:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </motion.div>


      </div>
    </section>
  )
}

export default TechnologyServices