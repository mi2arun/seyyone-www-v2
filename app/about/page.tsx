'use client'

import Navigation from '@/components/Navigation'
import ContactInfo from '@/components/ContactInfo'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Monitor, Coffee, BookOpen, Laptop, Phone, Clock, Award, Target, ShieldCheck, Lightbulb, Users, FileText, Lock, GraduationCap } from 'lucide-react'

// Metadata removed for client component

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section with Office Interior and Team Photo */}
        <section className="min-h-screen relative overflow-hidden pt-20 bg-gradient-to-b from-gray-50 to-gray-100">
          {/* Office Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-200" />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-300 via-gray-250 to-transparent opacity-50" />
            <div className="absolute left-0 top-20 w-96 h-96 bg-gradient-to-br from-sky-100 to-blue-50 opacity-30 transform skew-y-12">
              <div className="grid grid-cols-3 gap-4 p-4">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="bg-white/20 h-24 rounded" />
                ))}
              </div>
            </div>
            <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-yellow-50/20 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 min-h-screen flex items-center">
            {/* Team Photo - Framed on Wall with Hanging Thread */}
            <motion.div 
              className="absolute top-28 right-20"
              initial={{ opacity: 0, y: -50 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                rotate: [0, 1, -1, 0.5, 0]
              }}
              transition={{ 
                delay: 0.5, 
                duration: 2,
                rotate: {
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
              whileHover={{ scale: 1.02, rotate: 0 }}
            >
              {/* Hanging Thread/Wire */}
              <div className="absolute left-1/2 -top-28 transform -translate-x-1/2">
                {/* Nail/Hook */}
                <div className="w-2 h-2 bg-gradient-to-b from-gray-600 to-gray-800 rounded-full shadow-md" />
                {/* Thread/Wire */}
                <div className="w-px h-28 bg-gradient-to-b from-gray-400 to-gray-600 mx-auto" />
                {/* Thread Shadow */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-28 bg-black/10 blur-sm translate-x-0.5" />
              </div>
              
              {/* Frame Shadow */}
              <div className="absolute inset-0 bg-black/20 blur-xl transform translate-y-4" />
              
              {/* Photo Frame */}
              <div className="relative bg-gradient-to-br from-amber-800 via-amber-700 to-amber-900 p-4 shadow-2xl">
                {/* Frame Hook/Mount Point */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-2 bg-gradient-to-b from-brass-500 to-brass-700 rounded-t-full" 
                       style={{ background: 'linear-gradient(to bottom, #B8860B, #8B6914)' }} />
                </div>
                
                <div className="relative bg-gradient-to-br from-amber-600 to-amber-700 p-2">
                  <div className="bg-white p-4">
                    <div className="relative w-64 h-40 overflow-hidden">
                      <Image
                        src="/Seyyone-Group-Photo-Updated.png"
                        alt="Seyyone Team"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-2 text-center">
                      <p className="text-xs text-gray-600 font-serif italic">Team Excellence 2024</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-amber-400/20 to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-300/50 to-transparent" />
              </div>
            </motion.div>

            {/* Office Decorations */}
            <motion.div
              className="absolute top-40 left-20"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="bg-white/80 backdrop-blur-sm p-3 shadow-lg transform -rotate-3">
                <Award className="text-blue-600 mx-auto" size={32} />
                <p className="text-xs mt-1 text-gray-600">HIPAA Compliant</p>
              </div>
            </motion.div>

            {/* Hero Content */}
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
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  About Seyyone
                </motion.div>
                
                <h1 className="text-5xl md:text-7xl font-bold mb-8">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    25+ Years
                  </span>
                  <br />
                  <span className="text-gray-900">of Excellence</span>
                </h1>
                
                <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                  Since 1999, Seyyone has been transforming businesses through innovative Healthcare KPO services 
                  and cutting-edge Software Development solutions. We are your trusted partner in digital transformation.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    Founded in Coimbatore, India, Seyyone began with a vision to bridge the gap between 
                    healthcare providers and technology solutions. Over two decades, we have evolved into 
                    a comprehensive service provider serving clients across USA, Canada, Australia, Ireland, 
                    Germany, Netherlands, UK, and India.
                  </p>
                  <p>
                    Our journey started with a focus on healthcare back-office services, recognizing the 
                    critical need for HIPAA-compliant, accurate medical transcription and billing services. 
                    Today, we&rsquo;ve expanded our expertise to include cutting-edge software development, 
                    AI/ML solutions, and cloud services.
                  </p>
                  <p>
                    With a team of 150+ dedicated professionals, we&rsquo;ve successfully completed over 100+ 
                    projects, maintaining our commitment to integrity, innovation, collaboration, excellence, 
                    customer focus, and accountability.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                className="grid grid-cols-2 gap-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-blue-50 p-6 rounded-2xl text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
                  <div className="text-sm text-gray-700">Employees</div>
                </div>
                <div className="bg-green-50 p-6 rounded-2xl text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">8</div>
                  <div className="text-sm text-gray-700">Countries</div>
                </div>
                <div className="bg-purple-50 p-6 rounded-2xl text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
                  <div className="text-sm text-gray-700">Projects</div>
                </div>
                <div className="bg-orange-50 p-6 rounded-2xl text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">25+</div>
                  <div className="text-sm text-gray-700">Years</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These values guide everything we do, from client relationships to internal operations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Excellence',
                  description: 'We strive for the highest quality in everything we do, exceeding expectations consistently.',
                  gradient: 'from-orange-500 to-orange-600',
                  icon: Award
                },
                {
                  title: 'Integrity',
                  description: 'We conduct business with honesty, transparency, and ethical practices in all our interactions.',
                  gradient: 'from-blue-500 to-blue-600',
                  icon: ShieldCheck
                },
                {
                  title: 'Innovation',
                  description: 'We continuously explore new technologies and methodologies to deliver cutting-edge solutions.',
                  gradient: 'from-purple-500 to-purple-600',
                  icon: Lightbulb
                },
                {
                  title: 'Client Focus',
                  description: 'We prioritize our clients needs and work tirelessly to deliver value and satisfaction.',
                  gradient: 'from-red-500 to-red-600',
                  icon: Target
                },
                {
                  title: 'Collaboration',
                  description: 'We work closely with our clients and team members to achieve shared goals and success.',
                  gradient: 'from-green-500 to-green-600',
                  icon: Users
                },
                {
                  title: 'Compliance',
                  description: 'We adhere to all regulatory requirements and industry standards, ensuring HIPAA compliance and data protection.',
                  gradient: 'from-indigo-500 to-indigo-600',
                  icon: FileText
                },
                {
                  title: 'Security',
                  description: 'We implement robust security measures to protect sensitive data and maintain confidentiality.',
                  gradient: 'from-cyan-500 to-cyan-600',
                  icon: Lock
                },
                {
                  title: 'Expertise',
                  description: 'We bring deep domain knowledge and technical skills to deliver exceptional solutions.',
                  gradient: 'from-teal-500 to-teal-600',
                  icon: GraduationCap
                }
              ].map((value, index) => {
                const IconComponent = value.icon
                return (
                  <motion.div
                    key={value.title}
                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                      <IconComponent className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Leadership Message */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Leadership Message
              </h2>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
                <blockquote className="text-lg text-gray-700 leading-relaxed italic mb-6">
                  &ldquo;At Seyyone, we believe in the power of technology and expertise to transform businesses.
                  Our commitment to excellence, innovation, and client success has been the driving force
                  behind our 25+ year journey. We&rsquo;re not just a service provider; we&rsquo;re a strategic partner
                  dedicated to your growth and success.&rdquo;
                </blockquote>
                <div className="text-center">
                  <div className="font-semibold text-gray-900">Seyyone Leadership Team</div>
                  <div className="text-sm text-gray-600">Coimbatore, India</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Moments at Seyyone */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Moments at Seyyone
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Celebrating our journey, achievements, and the memorable moments that define our culture.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Team Collaboration',
                  description: 'Working together towards excellence',
                  image: '/moments/team-collaboration.jpg'
                },
                {
                  title: 'Annual Celebration',
                  description: 'Celebrating our achievements together',
                  image: '/moments/annual-celebration.jpg'
                },
                {
                  title: 'Innovation Workshop',
                  description: 'Exploring new technologies and ideas',
                  image: '/moments/innovation-workshop.jpg'
                },
                {
                  title: 'Client Success',
                  description: 'Delivering exceptional results',
                  image: '/moments/client-success.jpg'
                },
                {
                  title: 'Team Building',
                  description: 'Building stronger connections',
                  image: '/moments/team-building.jpg'
                },
                {
                  title: 'Milestone Achievement',
                  description: 'Celebrating 25+ years of excellence',
                  image: '/moments/milestone.jpg'
                }
              ].map((moment, index) => (
                <motion.div
                  key={moment.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-64 bg-gradient-to-br from-blue-100 to-purple-100">
                    <Image
                      src="/Seyyone-Group-Photo-Updated.png"
                      alt={moment.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="text-lg font-bold text-white mb-1">{moment.title}</h3>
                    <p className="text-sm text-gray-200">{moment.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <ContactInfo />
      </main>
      <Footer />
    </>
  )
}