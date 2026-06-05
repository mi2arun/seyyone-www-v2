'use client'

import Navigation from '@/components/Navigation'

import Footer from '@/components/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import { Cloud, CheckCircle, Server, Shield, Zap, ArrowRight, Code, Lock, TrendingUp, Award , ChevronDown} from 'lucide-react'
import Link from 'next/link'

import { useState } from 'react'
import TechnologyContactModal from '@/components/technology/TechnologyContactModal'

export default function CloudSolutionsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Which cloud providers do you support?",
      answer: "We are certified partners and have extensive experience with AWS, Microsoft Azure, and Google Cloud Platform (GCP)."
    },
    {
      question: "How do you handle cloud migration with zero downtime?",
      answer: "We use blue-green deployment strategies, database replication, and meticulous traffic routing to ensure seamless migrations with zero or minimal disruption."
    },
    {
      question: "Do you offer ongoing cloud management?",
      answer: "Yes, we provide 24/7 cloud monitoring, cost optimization, and managed DevOps services to keep your infrastructure running efficiently."
    },
    {
      question: "How do you help us optimize cloud infrastructure costs?",
      answer: "We conduct thorough resource utilization audits, set up auto-scaling, implement serverless architectures, and configure reserved instances to reduce your monthly cloud spending by up to 30%."
    },
    {
      question: "What security measures do you implement in the cloud?",
      answer: "We implement a multi-layered security architecture, including firewalls, VPCs, network isolation, identity and access management (IAM), data encryption at rest/in transit, and continuous vulnerability scanning."
    },
    {
      question: "Do you support hybrid cloud environments?",
      answer: "Yes, we design hybrid solutions that bridge your on-premise servers with public cloud environments (AWS, Azure, GCP), ensuring secure and reliable data flow between locations."
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const features = [
    {
      icon: Server,
      title: 'AWS & Azure',
      description: 'Expert cloud architecture and deployment on leading platforms like AWS, Azure, and Google Cloud.'
    },
    {
      icon: Code,
      title: 'Microservices',
      description: 'Modern microservices architecture for scalable, maintainable, and resilient cloud applications.'
    },
    {
      icon: Zap,
      title: 'DevOps & CI/CD',
      description: 'Automated deployment pipelines and DevOps practices for faster, more reliable releases.'
    },
    {
      icon: Server,
      title: 'Container Orchestration',
      description: 'Kubernetes and Docker containerization for efficient application deployment and management.'
    },
    {
      icon: Shield,
      title: 'Cloud Security',
      description: 'Enterprise-grade security implementation following cloud security best practices and compliance.'
    },
    {
      icon: TrendingUp,
      title: 'Auto-Scaling',
      description: 'Intelligent auto-scaling solutions to optimize performance and reduce infrastructure costs.'
    }
  ]

  const services = [
    {
      title: 'Cloud Migration',
      description: 'Seamless migration of applications and data from on-premises to cloud infrastructure.',
      icon: Cloud,
      items: ['Assessment & Planning', 'Data Migration', 'Application Refactoring', 'Post-Migration Support']
    },
    {
      title: 'Cloud Architecture',
      description: 'Design and implementation of scalable, resilient cloud-native architectures.',
      icon: Server,
      items: ['Architecture Design', 'Infrastructure as Code', 'High Availability Setup', 'Disaster Recovery']
    },
    {
      title: 'Managed Cloud Services',
      description: '24/7 monitoring, management, and optimization of your cloud infrastructure.',
      icon: Zap,
      items: ['24/7 Monitoring', 'Performance Optimization', 'Cost Management', 'Security Updates']
    },
    {
      title: 'Cloud Security',
      description: 'Comprehensive security implementation and compliance management for cloud environments.',
      icon: Lock,
      items: ['Security Assessment', 'Identity Management', 'Encryption Setup', 'Compliance Monitoring']
    }
  ]

  const benefits = [
    'Reduce infrastructure costs by up to 40%',
    'Scale automatically based on demand',
    'Improve application performance and reliability',
    'Accelerate time-to-market for new features',
    'Enhance security and compliance posture',
    'Achieve 99.9%+ uptime SLA',
    'Enable global application deployment',
    'Reduce operational overhead'
  ]

  const technologies = [
    'Amazon Web Services (AWS)',
    'Microsoft Azure',
    'Google Cloud Platform',
    'Kubernetes',
    'Docker',
    'Terraform',
    'Jenkins',
    'GitLab CI/CD',
    'Prometheus',
    'Grafana',
    'ELK Stack',
    'Redis'
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-to-b from-green-50 to-white">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-green-100 to-white" />
            <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-green-200 to-teal-100 opacity-30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-200 to-green-100 opacity-30 rounded-full blur-3xl" />
          </div>

          <div className="container relative z-10">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm text-green-700 rounded-full text-sm font-semibold mb-6 shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
              >
                <Cloud size={18} className="mr-2" />
                Cloud-Native Solutions
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  Cloud Solutions
                </span>
                <br />
                <span className="text-gray-900">& Services</span>
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed mb-0 max-w-3xl mx-auto">
                Scalable cloud architecture and migration services for modern, resilient applications.
                Transform your infrastructure with cloud-native solutions built for performance, security, and growth.
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
                Enterprise Cloud
                <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent"> Capabilities</span>
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive cloud solutions leveraging the latest technologies and best practices.
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
                    className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
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
        <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Cloud Service
                <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent"> Offerings</span>
              </h2>
              <p className="text-xl text-gray-600">
                Full-spectrum cloud services from migration to managed operations.
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
                      <div className="w-14 h-14 bg-gradient-to-r from-green-600 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
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
                  Cloud Transformation
                  <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent"> Benefits</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Unlock the full potential of cloud computing with our expert solutions.
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
                className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 shadow-2xl"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-xl flex items-center justify-center">
                    <Award className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Success Metrics</h3>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-white rounded-xl">
                    <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
                    <div className="text-sm text-gray-600">Uptime SLA</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl">
                    <div className="text-3xl font-bold text-teal-600 mb-2">40%</div>
                    <div className="text-sm text-gray-600">Cost Reduction</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl">
                    <div className="text-3xl font-bold text-green-600 mb-2">3x</div>
                    <div className="text-sm text-gray-600">Faster Deployment</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl">
                    <div className="text-3xl font-bold text-teal-600 mb-2">100%</div>
                    <div className="text-sm text-gray-600">Auto-Scaling</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Technologies
                <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent"> We Use</span>
              </h2>
              <p className="text-xl text-gray-600">
                Industry-leading cloud platforms and tools.
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
                  className="flex items-center space-x-3 p-4 bg-white rounded-xl border border-green-200 hover:shadow-md transition-all duration-300"
                >
                  <span className="text-gray-700 font-medium">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        
        {/* FAQ Section */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  Frequently Asked <span className="bg-gradient-to-r from-sky-600 to-sky-600 bg-clip-text text-transparent">Questions</span>
                </h2>
              </div>
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:border-sky-300 hover:shadow-md">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-8 py-6 flex items-center justify-between text-left"
                    >
                      <span className="text-lg font-bold text-gray-900">{item.question}</span>
                      <motion.div animate={{ rotate: openFaq === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                        <ChevronDown className={`text-sky-600 transition-colors ${openFaq === index ? 'text-sky-700' : ''}`} size={24} />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
                          <div className="px-8 pb-8 text-gray-600 leading-relaxed border-t border-gray-100 pt-6">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Move to the Cloud?
              </h2>
              <p className="text-xl   mb-8">
                Transform your infrastructure with Seyyone&apos;s cloud solutions. Get a free cloud readiness assessment today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center space-x-2"
                >
                  <span>Request Assessment</span>
                  <ArrowRight size={20} />
                </button>
                <Link
                  href="/technology"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center justify-center space-x-2"
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
        initialService="Cloud Solutions"
      />
      <Footer />
    </>
  )
}
