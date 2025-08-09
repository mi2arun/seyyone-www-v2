'use client'

import { motion } from 'framer-motion'
import { 
  ExternalLink, 
  Github, 
  Award, 
  Users, 
  Calendar,
  TrendingUp,
  Smartphone,
  Brain,
  Cloud,
  ShoppingCart,
  Building,
  Heart,
  ArrowRight,
  Activity,
  Cpu,
  Database,
  Network,
  Bot,
  LineChart,
  Sparkles,
  Zap,
  Shield,
  Lock,
  Globe,
  Server,
  Layers,
  CircuitBoard,
  BrainCircuit,
  Workflow
} from 'lucide-react'

const TechnologyProjects = () => {
  const projects = [
    {
      title: 'AI-Powered Healthcare Platform',
      category: 'Healthcare AI',
      description: 'Intelligent diagnostic platform using machine learning to assist healthcare professionals with patient analysis and treatment recommendations.',
      technologies: ['Python', 'TensorFlow', 'React', 'AWS'],
      features: ['Computer Vision', 'NLP Processing', 'Real-time Analytics', 'HIPAA Compliant'],
      metrics: { users: '10K+', accuracy: '94%', reduction: '40%' },
      icon: Heart,
      additionalIcons: [Brain, Activity, Shield],
      color: 'from-red-500 to-pink-500',
      bgPattern: 'healthcareAI',
      status: 'Live Production'
    },
    {
      title: 'FinTech Mobile Banking App',
      category: 'Financial Technology',
      description: 'Secure mobile banking application with advanced features including AI-driven financial insights and fraud detection.',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Azure'],
      features: ['Biometric Authentication', 'Real-time Transactions', 'AI Insights', 'Multi-currency'],
      metrics: { users: '50K+', transactions: '1M+', rating: '4.8★' },
      icon: Smartphone,
      additionalIcons: [Lock, LineChart, Shield],
      color: 'from-blue-500 to-cyan-500',
      bgPattern: 'fintech',
      status: 'Award Winner'
    },
    {
      title: 'Enterprise Cloud Migration',
      category: 'Cloud Infrastructure',
      description: 'Complete cloud transformation for a Fortune 500 company, migrating legacy systems to modern microservices architecture.',
      technologies: ['Kubernetes', 'Docker', 'AWS', 'Terraform'],
      features: ['Microservices', 'Auto-scaling', 'DevOps Pipeline', 'Security First'],
      metrics: { cost_saving: '60%', uptime: '99.9%', deployment: '10x faster' },
      icon: Cloud,
      additionalIcons: [Server, Database, Layers],
      color: 'from-green-500 to-teal-500',
      bgPattern: 'cloud',
      status: 'Client Testimonial'
    },
    {
      title: 'AI E-commerce Personalization',
      category: 'Retail Technology',
      description: 'Machine learning platform that provides personalized shopping experiences and intelligent product recommendations.',
      technologies: ['Python', 'React', 'GraphQL', 'Redis'],
      features: ['Recommendation Engine', 'A/B Testing', 'Real-time Analytics', 'Inventory Management'],
      metrics: { conversion: '+35%', revenue: '+25%', engagement: '+60%' },
      icon: ShoppingCart,
      additionalIcons: [Brain, TrendingUp, Sparkles],
      color: 'from-purple-500 to-indigo-500',
      bgPattern: 'ecommerce',
      status: 'Recent Launch'
    },
    {
      title: 'Smart Building IoT Platform',
      category: 'IoT & Smart Systems',
      description: 'Comprehensive IoT platform for smart building management with energy optimization and predictive maintenance.',
      technologies: ['React', 'Node.js', 'InfluxDB', 'MQTT'],
      features: ['IoT Integration', 'Energy Analytics', 'Predictive Maintenance', 'Real-time Monitoring'],
      metrics: { energy_saved: '30%', sensors: '1000+', buildings: '25+' },
      icon: Building,
      additionalIcons: [Network, Cpu, Zap],
      color: 'from-orange-500 to-red-500',
      bgPattern: 'iot',
      status: 'Scaling Up'
    },
    {
      title: 'AI-Driven Analytics Dashboard',
      category: 'Business Intelligence',
      description: 'Advanced analytics platform that transforms raw business data into actionable insights using artificial intelligence.',
      technologies: ['D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
      features: ['Predictive Analytics', 'Custom Visualizations', 'Automated Reporting', 'API Integration'],
      metrics: { decisions: '2x faster', accuracy: '92%', time_saved: '50%' },
      icon: TrendingUp,
      additionalIcons: [BrainCircuit, LineChart, Database],
      color: 'from-teal-500 to-blue-500',
      bgPattern: 'analytics',
      status: 'Industry Leader'
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

  // Generate different background patterns based on project type
  const getBackgroundPattern = (pattern: string) => {
    switch(pattern) {
      case 'healthcareAI':
        return (
          <>
            {/* Neural Network Animation */}
            <svg className="absolute inset-0 w-full h-full opacity-20">
              {/* Neural Nodes */}
              {[...Array(8)].map((_, i) => {
                const angle = (i * Math.PI * 2) / 8
                const radius = 35
                const x = 50 + radius * Math.cos(angle)
                const y = 50 + radius * Math.sin(angle)
                return (
                  <g key={i}>
                    <motion.circle
                      cx={x}
                      cy={y}
                      r="4"
                      fill="white"
                      animate={{ 
                        opacity: [0.3, 1, 0.3],
                        r: [3, 5, 3]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                    {/* Connection Lines */}
                    <motion.line
                      x1="50"
                      y1="50"
                      x2={x}
                      y2={y}
                      stroke="white"
                      strokeWidth="0.5"
                      animate={{ opacity: [0, 0.5, 0] }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                  </g>
                )
              })}
              {/* Central AI Core */}
              <motion.circle
                cx="50"
                cy="50"
                r="8"
                fill="white"
                animate={{ 
                  r: [6, 10, 6],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </svg>
            
            {/* DNA Helix Background */}
            <svg className="absolute inset-0 w-full h-full opacity-10">
              <motion.path
                d="M 20 0 Q 40 25 20 50 T 20 100 M 80 0 Q 60 25 80 50 T 80 100"
                stroke="white"
                strokeWidth="1"
                fill="none"
                strokeDasharray="5 5"
                animate={{ strokeDashoffset: [0, -20] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            </svg>
            
            {/* Pulse Wave */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
            >
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{ 
                  scale: [0, 2],
                  opacity: [0.5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              >
                <div className="w-32 h-32 border-2 border-white/30 rounded-full" />
              </motion.div>
            </motion.div>
            
            {/* Floating Medical Icons */}
            <motion.div
              className="absolute top-4 right-4"
              animate={{ 
                y: [-2, 2, -2],
                rotate: [0, 10, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Activity className="text-white/30" size={16} />
            </motion.div>
            <motion.div
              className="absolute bottom-4 left-4"
              animate={{ 
                y: [2, -2, 2],
                rotate: [0, -10, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              <Shield className="text-white/30" size={16} />
            </motion.div>
          </>
        )
      case 'fintech':
        return (
          <>
            {/* Financial Graph Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-20">
              <motion.polyline
                points="0,50 25,45 50,30 75,35 100,20"
                stroke="white"
                strokeWidth="2"
                fill="none"
                animate={{ 
                  points: [
                    "0,50 25,45 50,30 75,35 100,20",
                    "0,45 25,35 50,40 75,25 100,30",
                    "0,50 25,45 50,30 75,35 100,20"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </svg>
            {/* Floating Currency Symbols */}
            <motion.div
              className="absolute top-4 right-4 text-white/30 text-2xl font-bold"
              animate={{ y: [-5, 5, -5], rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              $
            </motion.div>
            <motion.div
              className="absolute bottom-4 left-4 text-white/30 text-2xl font-bold"
              animate={{ y: [5, -5, 5], rotate: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            >
              €
            </motion.div>
          </>
        )
      case 'cloud':
        return (
          <>
            {/* Floating Cloud Layers */}
            <motion.div
              className="absolute top-2 left-10 w-16 h-10 bg-white/10 rounded-full"
              animate={{ x: [0, 20, 0], y: [0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
              className="absolute top-8 right-10 w-20 h-12 bg-white/10 rounded-full"
              animate={{ x: [0, -20, 0], y: [0, 5, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            {/* Network Connections */}
            <svg className="absolute inset-0 w-full h-full opacity-15">
              <motion.line
                x1="10" y1="10" x2="90" y2="90"
                stroke="white"
                strokeWidth="1"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.line
                x1="90" y1="10" x2="10" y2="90"
                stroke="white"
                strokeWidth="1"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
            </svg>
          </>
        )
      case 'ecommerce':
        return (
          <>
            {/* Shopping Cart Path Animation */}
            <svg className="absolute inset-0 w-full h-full opacity-15">
              <motion.path
                d="M 10 50 L 30 50 L 35 30 L 60 30 L 55 50 L 70 50"
                stroke="white"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5 5"
                animate={{ strokeDashoffset: [0, -100] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </svg>
            {/* Floating Product Cards */}
            <motion.div
              className="absolute top-6 left-6 w-8 h-10 bg-white/20 rounded"
              animate={{ y: [-5, 5, -5], rotate: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-6 right-6 w-8 h-10 bg-white/20 rounded"
              animate={{ y: [5, -5, 5], rotate: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            />
          </>
        )
      case 'iot':
        return (
          <>
            {/* Connected Devices Network */}
            <div className="absolute inset-0">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-white/30 rounded-full"
                  style={{
                    top: `${20 + (i % 3) * 30}%`,
                    left: `${20 + Math.floor(i / 3) * 30}%`
                  }}
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                />
              ))}
              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full opacity-10">
                <motion.path
                  d="M 20 20 L 50 50 L 80 20 L 50 50 L 20 80 L 50 50 L 80 80"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </svg>
            </div>
          </>
        )
      case 'analytics':
        return (
          <>
            {/* Data Flow Animation */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-full w-0.5 bg-gradient-to-b from-transparent via-white/30 to-transparent"
                  style={{ left: `${20 + i * 15}%` }}
                  animate={{ y: [-200, 200] }}
                  transition={{ 
                    duration: 2 + i * 0.5, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              ))}
            </div>
            {/* Floating Data Points */}
            <motion.div
              className="absolute top-8 right-8"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <CircuitBoard className="text-white/30" size={24} />
            </motion.div>
          </>
        )
      default:
        return null
    }
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
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
            <Award size={16} className="mr-2" />
            Featured Projects
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Transformative
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Technology</span>
            <br />Solutions in Action
          </h2>
          <p className="text-xl text-gray-600">
            Explore our portfolio of successful projects spanning AI/ML, mobile development, 
            cloud solutions, and digital transformation initiatives.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group relative"
              >
                <div className="h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-purple-200">
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`bg-gradient-to-r ${project.color} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Enhanced Project Visual */}
                  <div className="relative h-56 overflow-hidden">
                    <div className={`w-full h-full bg-gradient-to-br ${project.color} relative`}>
                      {/* Custom Background Pattern */}
                      {getBackgroundPattern(project.bgPattern)}
                      
                      {/* Central Icon with Better Design */}
                      <motion.div 
                        className="absolute inset-0 flex items-center justify-center z-10"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                          delay: index * 0.1
                        }}
                      >
                        <motion.div
                          animate={{ 
                            rotate: project.title.includes('AI') ? 360 : 0,
                          }}
                          transition={{ 
                            duration: project.title.includes('AI') ? 20 : 0,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          className="relative"
                        >
                          <div className="w-24 h-24 bg-white/30 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl border-2 border-white/20">
                            <motion.div
                              animate={project.title.includes('AI') ? {
                                scale: [1, 1.2, 1],
                              } : {}}
                              transition={{ 
                                duration: 2,
                                repeat: Infinity
                              }}
                            >
                              <IconComponent className="text-white drop-shadow-lg" size={40} />
                            </motion.div>
                          </div>
                          
                          {/* Enhanced Orbiting Icons */}
                          {project.additionalIcons.map((AdditionalIcon, i) => (
                            <motion.div
                              key={i}
                              className="absolute"
                              style={{
                                top: '50%',
                                left: '50%',
                              }}
                              animate={{ 
                                rotate: 360
                              }}
                              transition={{ 
                                duration: 15 + i * 5,
                                repeat: Infinity,
                                ease: "linear"
                              }}
                            >
                              <motion.div
                                className="w-10 h-10 bg-white/25 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg border border-white/30"
                                style={{
                                  transform: `translateX(55px)`
                                }}
                                whileHover={{ scale: 1.2 }}
                                animate={{
                                  boxShadow: [
                                    "0 0 10px rgba(255,255,255,0.3)",
                                    "0 0 20px rgba(255,255,255,0.5)",
                                    "0 0 10px rgba(255,255,255,0.3)"
                                  ]
                                }}
                                transition={{
                                  boxShadow: {
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.5
                                  }
                                }}
                              >
                                <AdditionalIcon className="text-white drop-shadow-md" size={16} />
                              </motion.div>
                            </motion.div>
                          ))}
                        </motion.div>
                      </motion.div>

                      {/* Tech Stack Floating */}
                      <div className="absolute bottom-2 left-2 right-2 flex justify-center gap-2">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                            className="px-2 py-1 bg-black/30 backdrop-blur-sm rounded text-white text-xs font-medium"
                          >
                            {tech}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <div className="text-sm text-purple-600 font-semibold mb-1">
                        {project.category}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div className="space-y-2 mb-4">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Sparkles className="text-purple-500 flex-shrink-0" size={12} />
                          <span className="text-xs text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2 mb-6 p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                      {Object.entries(project.metrics).map(([key, value], idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-sm font-bold text-gray-900">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key.replace('_', ' ')}</div>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <button className="group/btn inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors text-sm">
                        View Case Study
                        <ArrowRight 
                          size={14} 
                          className="ml-2 transition-transform group-hover/btn:translate-x-1" 
                        />
                      </button>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-400 hover:text-purple-600 transition-colors">
                          <ExternalLink size={16} />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-purple-600 transition-colors">
                          <Github size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Success Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-20"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Our Track Record Speaks for Itself
              </h3>
              <p className="text-gray-600">
                Delivering exceptional results across diverse technology projects
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: '100+', label: 'Projects Delivered', icon: Award },
                { number: '95%', label: 'Client Satisfaction', icon: Users },
                { number: '15+', label: 'Years Experience', icon: Calendar },
                { number: '24/7', label: 'Support Available', icon: TrendingUp }
              ].map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                )
              })}
            </div>
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
            <h3 className="text-2xl font-bold mb-4">
              Ready to Build Your Next Big Project?
            </h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Let&apos;s collaborate to create innovative technology solutions that drive your business forward. 
              From concept to deployment, we&apos;re your trusted technology partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Discuss Your Project</span>
                <ArrowRight size={20} />
              </a>
              <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Download Portfolio
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechnologyProjects