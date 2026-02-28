'use client'

import Navigation from '@/components/Navigation'

import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Brain, CheckCircle, Eye, TrendingUp, MessageSquare, ArrowRight, Cpu, BarChart3, Target, Award } from 'lucide-react'
import Link from 'next/link'

import { useState } from 'react'
import TechnologyContactModal from '@/components/technology/TechnologyContactModal'

export default function AIMLSolutionsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const features = [
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Advanced image and video analysis for object detection, facial recognition, and visual inspection.'
    },
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description: 'Text analysis, sentiment detection, chatbots, and language understanding powered by AI.'
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Forecast trends, predict outcomes, and make data-driven decisions with machine learning models.'
    },
    {
      icon: Cpu,
      title: 'Deep Learning Models',
      description: 'Custom neural networks for complex pattern recognition and automated decision-making.'
    },
    {
      icon: Target,
      title: 'Recommendation Systems',
      description: 'Personalized recommendations to enhance user experience and drive engagement.'
    },
    {
      icon: TrendingUp,
      title: 'Model Optimization',
      description: 'Fine-tuning and optimization of ML models for maximum accuracy and performance.'
    }
  ]

  const solutions = [
    {
      title: 'Computer Vision Applications',
      description: 'Image recognition, object detection, and video analysis solutions for various industries.',
      icon: Eye,
      useCases: ['Quality Inspection', 'Facial Recognition', 'Medical Imaging', 'Autonomous Systems']
    },
    {
      title: 'NLP & Conversational AI',
      description: 'Intelligent chatbots, virtual assistants, and text analysis systems.',
      icon: MessageSquare,
      useCases: ['Customer Support Bots', 'Document Analysis', 'Sentiment Analysis', 'Voice Assistants']
    },
    {
      title: 'Predictive Modeling',
      description: 'Machine learning models for forecasting, risk assessment, and optimization.',
      icon: BarChart3,
      useCases: ['Demand Forecasting', 'Risk Prediction', 'Price Optimization', 'Churn Prevention']
    },
    {
      title: 'Custom AI Solutions',
      description: 'Tailored artificial intelligence solutions for unique business challenges.',
      icon: Brain,
      useCases: ['Anomaly Detection', 'Process Automation', 'Decision Support', 'Pattern Recognition']
    }
  ]

  const benefits = [
    'Automate repetitive tasks and processes',
    'Improve decision-making with data insights',
    'Enhance customer experience and engagement',
    'Reduce operational costs by 30-50%',
    'Scale operations without proportional cost increase',
    'Gain competitive advantage through innovation',
    'Increase accuracy and reduce human error',
    'Unlock hidden insights from data'
  ]

  const technologies = [
    'TensorFlow',
    'PyTorch',
    'Scikit-learn',
    'OpenCV',
    'Hugging Face',
    'Keras',
    'NLTK & spaCy',
    'Apache Spark',
    'MLflow',
    'AWS SageMaker',
    'Azure ML',
    'Google Cloud AI'
  ]

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-to-b from-purple-50 to-white">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-100 to-white" />
            <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-100 opacity-30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-200 to-purple-100 opacity-30 rounded-full blur-3xl" />
          </div>

          <div className="container relative z-10">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm text-purple-700 rounded-full text-sm font-semibold mb-6 shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
              >
                <Brain size={18} className="mr-2" />
                Next-Gen AI
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  AI/ML Solutions
                </span>
                <br />
                <span className="text-gray-900">& Services</span>
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed mb-0 max-w-3xl mx-auto">
                Advanced artificial intelligence and machine learning solutions to automate processes and gain intelligent insights.
                Transform your business with cutting-edge AI technology tailored to your needs.
              </p>


            </motion.div>
          </div>
        </section>

        {/* Features */}
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
                AI/ML
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Capabilities</span>
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive AI and machine learning services leveraging state-of-the-art technologies.
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
                    className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
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
        <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                AI-Powered
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Solutions</span>
              </h2>
              <p className="text-xl text-gray-600">
                Industry-specific AI applications addressing real business challenges.
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
                      <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="text-white" size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                        <p className="text-gray-600 leading-relaxed mb-4">{solution.description}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {solution.useCases.map((useCase, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <span className="text-sm text-gray-700">{useCase}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Benefits */}
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
                  Transform with
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Artificial Intelligence</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Unlock new possibilities and drive innovation with AI-powered solutions.
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
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-2xl"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                    <Award className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">AI Technologies</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {technologies.map((tech, index) => (
                    <div key={index} className="flex items-center space-x-2 p-3 bg-white rounded-lg">
                      <span className="text-sm text-gray-700 font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Harness the Power of AI?
              </h2>
              <p className="text-xl   mb-8">
                Let&apos;s explore how AI and machine learning can transform your business. Schedule a consultation with our AI experts today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center space-x-2"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight size={20} />
                </button>
                <Link
                  href="/technology"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center justify-center space-x-2"
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
        initialService="AI/ML Solutions"
      />
      <Footer />
    </>
  )
}
