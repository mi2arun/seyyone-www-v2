'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Code, Smartphone, Cloud, Brain, Zap, Users, Award, Globe } from 'lucide-react'

const TechnologyHero = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const highlights = [
    { icon: Brain, text: 'AI/ML Solutions', color: 'text-purple-600' },
    { icon: Cloud, text: 'Cloud-Native', color: 'text-blue-600' },
    { icon: Zap, text: 'Agile Development', color: 'text-orange-600' },
    { icon: Globe, text: 'Global Delivery', color: 'text-green-600' }
  ]

  const techStack = [
    'React', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes',
    'TensorFlow', 'MongoDB', 'GraphQL', 'Next.js', 'TypeScript', 'Azure'
  ]

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20 pb-16 bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-32 h-32 border-2 border-purple-200 rounded-full opacity-20"
        />
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-16 w-24 h-24 bg-blue-100 rounded-lg opacity-30"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/4 w-16 h-16 bg-green-200 rounded-full opacity-20"
        />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-6 py-3 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold"
            >
              <Code size={18} className="mr-2" />
              Technology & Software Solutions
            </motion.div>

            {/* Main Title */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold leading-tight"
              >
                <span className="text-gray-900">Innovative</span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Software Development
                </span>
                <br />
                <span className="text-gray-700">& AI Solutions</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-gray-600 leading-relaxed max-w-2xl"
              >
                Cutting-edge technology solutions including AI/ML development, cloud services,
                mobile applications, and custom software. Transform your business with scalable,
                modern technology architecture.
              </motion.p>
            </div>

            {/* Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon || null
                return (
                  <motion.div
                    key={highlight.text}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                    className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100"
                  >
                    {IconComponent && <IconComponent size={24} className={highlight.color} />}
                    <span className="font-medium text-gray-800 text-sm">
                      {highlight.text}
                    </span>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="space-y-3"
            >
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                Technologies We Master
              </div>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.1 + index * 0.05, duration: 0.4 }}
                    className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={onOpenModal}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Project
              </button>

            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative"
          >
            {/* Main Dashboard Card */}
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                      <Code className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Development Dashboard</h3>
                      <p className="text-sm text-gray-600">Active Projects</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold"
                  >
                    Live
                  </motion.div>
                </div>

                {/* Project Cards */}
                <div className="space-y-3">
                  {[
                    { name: 'AI Healthcare Platform', progress: 85, status: 'In Development', color: 'bg-blue-500' },
                    { name: 'Mobile Banking App', progress: 72, status: 'Testing Phase', color: 'bg-purple-500' },
                    { name: 'Cloud Migration', progress: 95, status: 'Deployment', color: 'bg-green-500' }
                  ].map((project, index) => (
                    <motion.div
                      key={project.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.5 + index * 0.2, duration: 0.6 }}
                      className="bg-gray-50 rounded-lg p-4"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-semibold text-gray-900">{project.name}</h4>
                        <span className="text-xs text-gray-500">{project.progress}%</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="flex-1 h-2 bg-gray-200 rounded-full">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${project.progress}%` }}
                            transition={{ delay: 2 + index * 0.2, duration: 1.5 }}
                            className={`h-2 rounded-full ${project.color}`}
                          />
                        </div>
                        <span className="text-xs text-gray-600">{project.status}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Technologies Used */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: Brain, name: 'AI/ML', color: 'text-purple-600' },
                    { icon: Smartphone, name: 'Mobile', color: 'text-blue-600' },
                    { icon: Cloud, name: 'Cloud', color: 'text-green-600' }
                  ].map((tech, index) => {
                    const IconComponent = tech.icon || null
                    return (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.5 + index * 0.1, duration: 0.6 }}
                        className="text-center p-3 bg-gray-50 rounded-lg"
                      >
                        {IconComponent && <IconComponent size={20} className={`${tech.color} mx-auto mb-1`} />}
                        <span className="text-xs text-gray-700">{tech.name}</span>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TechnologyHero