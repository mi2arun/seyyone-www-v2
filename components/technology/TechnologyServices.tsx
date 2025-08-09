'use client'

import { motion } from 'framer-motion'
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

const TechnologyServices = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI/ML Solutions',
      description: 'Advanced artificial intelligence and machine learning solutions to automate processes and gain intelligent insights.',
      features: ['Computer Vision', 'Natural Language Processing', 'Predictive Analytics', 'Deep Learning Models'],
      highlight: 'Next-Gen AI',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications with native performance and exceptional user experiences.',
      features: ['iOS & Android', 'React Native', 'Flutter Development', 'Progressive Web Apps'],
      highlight: 'Cross-Platform',
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud architecture and migration services for modern, resilient applications.',
      features: ['AWS & Azure', 'Microservices', 'DevOps & CI/CD', 'Container Orchestration'],
      highlight: 'Cloud-Native',
      gradient: 'from-green-600 to-teal-600'
    },
    {
      icon: Code,
      title: 'Custom Software',
      description: 'Tailored software solutions built with modern technologies and best practices.',
      features: ['Full-Stack Development', 'API Integration', 'Database Design', 'Performance Optimization'],
      highlight: 'Bespoke Solutions',
      gradient: 'from-orange-600 to-red-600'
    },
    {
      icon: BarChart3,
      title: 'Analytics & BI',
      description: 'Data-driven insights through advanced analytics and business intelligence platforms.',
      features: ['Data Visualization', 'Real-time Dashboards', 'ETL Processes', 'Machine Learning Analytics'],
      highlight: 'Data-Driven',
      gradient: 'from-indigo-600 to-purple-600'
    },
    {
      icon: Database,
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize legacy systems and processes.',
      features: ['Legacy Modernization', 'Process Automation', 'Digital Strategy', 'Change Management'],
      highlight: 'Future-Ready',
      gradient: 'from-teal-600 to-blue-600'
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
                  <button className="group/btn inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors">
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

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Technologies We Excel In
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our expert developers work with the latest technologies and frameworks 
              to deliver world-class solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'React', logo: '⚛️', category: 'Frontend' },
              { name: 'Node.js', logo: '🚀', category: 'Backend' },
              { name: 'Python', logo: '🐍', category: 'AI/ML' },
              { name: 'AWS', logo: '☁️', category: 'Cloud' },
              { name: 'Docker', logo: '🐳', category: 'DevOps' },
              { name: 'TensorFlow', logo: '🧠', category: 'AI/ML' },
              { name: 'MongoDB', logo: '🍃', category: 'Database' },
              { name: 'Kubernetes', logo: '⚙️', category: 'Orchestration' },
              { name: 'Flutter', logo: '📱', category: 'Mobile' },
              { name: 'GraphQL', logo: '📊', category: 'API' },
              { name: 'Next.js', logo: '▲', category: 'Framework' },
              { name: 'Azure', logo: '☁️', category: 'Cloud' }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-lg hover:border-purple-200 transition-all duration-300 text-center group"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {tech.logo}
                </div>
                <div className="font-semibold text-gray-900 text-sm">{tech.name}</div>
                <div className="text-xs text-gray-500">{tech.category}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white shadow-2xl">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Zap className="text-yellow-300" size={24} />
              <Shield className="text-green-300" size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business with Technology?
            </h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Join 100+ companies who trust Seyyone with their digital transformation journey. 
              Let&apos;s build the future together with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight size={20} />
              </a>
              <a 
                href="#projects"
                className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>View Portfolio</span>
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechnologyServices