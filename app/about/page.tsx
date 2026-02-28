'use client'

import Navigation from '@/components/Navigation'
import ContactInfo from '@/components/ContactInfo'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Monitor, Coffee, BookOpen, Laptop, Phone, Clock, Award, Target, ShieldCheck, Lightbulb, Users, FileText, Lock, GraduationCap, ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-36 pb-20 bg-gradient-to-b from-gray-50 to-gray-100">
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

          <div className="relative z-10 flex items-center">
            {/* Hero Content */}
            <div className="container">
              <motion.div
                className="max-w-4xl mx-auto text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    25+ Years
                  </span>
                  <br />
                  <span className="text-gray-900">of Excellence</span>
                </h1>

                <p className="text-xl text-gray-700 leading-relaxed mb-0 max-w-3xl mx-auto bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
                  Since 1999, Seyyone has been transforming businesses through innovative Healthcare KPO services
                  and cutting-edge Software Development solutions. We are your trusted partner in digital transformation.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="pt-8 pb-20 bg-white">
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
                { title: 'Excellence', description: 'We strive for the highest quality in everything we do.', gradient: 'from-orange-500 to-orange-600', icon: Award },
                { title: 'Integrity', description: 'We conduct business with honesty and transparency.', gradient: 'from-blue-500 to-blue-600', icon: ShieldCheck },
                { title: 'Innovation', description: 'We continuously explore new technologies.', gradient: 'from-purple-500 to-purple-600', icon: Lightbulb },
                { title: 'Client Focus', description: 'We prioritize our clients needs and satisfaction.', gradient: 'from-red-500 to-red-600', icon: Target },
                { title: 'Collaboration', description: 'We work closely with clients and team members.', gradient: 'from-green-500 to-green-600', icon: Users },
                { title: 'Compliance', description: 'Ensuring HIPAA compliance and data protection.', gradient: 'from-indigo-500 to-indigo-600', icon: FileText },
                { title: 'Security', description: 'Implementing robust security measures.', gradient: 'from-cyan-500 to-cyan-600', icon: Lock },
                { title: 'Expertise', description: 'Deep domain knowledge and technical skills.', gradient: 'from-teal-500 to-teal-600', icon: GraduationCap }
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
        <section className="pt-8 pb-20 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Leadership Message
              </h2>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
                <blockquote className="text-lg text-gray-700 leading-relaxed mb-6">
                  &ldquo;At Seyyone, we believe in the power of technology and expertise to transform businesses.
                  Our commitment to excellence, innovation, and client success has been the driving force
                  behind our 25+ year journey.&rdquo;
                </blockquote>
                <div className="text-center">
                  <div className="font-semibold text-gray-900">Seyyone Leadership Team</div>
                  <div className="text-sm text-gray-600">Coimbatore, India</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Preview Section */}
        <section className="py-20 bg-gray-50 border-y border-gray-100">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Client Trust
                </h2>
                <p className="text-xl text-gray-600">
                  Hear what healthcare professionals worldwide say about their partnership with Seyyone.
                </p>
              </div>
              <Link
                href="/about/testimonials"
                className="mt-6 md:mt-0 inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 group transition-colors"
              >
                <span>Read all Testimonials</span>
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-gray-100 text-gray-700 text-lg leading-relaxed relative shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-1">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
                  <Star fill="currentColor" size={20} />
                </div>
                &ldquo;We feel your company is trustworthy and would like to give you the business instead of looking elsewhere.&rdquo;
                <div className="mt-6 pt-6 border-t border-gray-200 not-italic">
                  <div className="font-bold text-gray-900">Orthopedic Physician</div>
                  <div className="text-sm text-gray-500">Australia</div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 text-gray-700 text-lg leading-relaxed relative shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-1">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white shadow-lg">
                  <Star fill="currentColor" size={20} />
                </div>
                &ldquo;Thank you for continuing to do a wonderful job with our transcription! Great job! I&rsquo;m impressed.&rdquo;
                <div className="mt-6 pt-6 border-t border-gray-200 not-italic">
                  <div className="font-bold text-gray-900">Office Manager, Oregon Eye Clinic</div>
                  <div className="text-sm text-gray-500">USA</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Moments at Seyyone */}
        <section className="pt-8 pb-20 bg-white">
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
              <p className="max-w-3xl mx-auto text-xl text-gray-600 mb-8">
                Celebrating our journey, achievements, and the memorable moments that define our culture.
              </p>
              <Link
                href="/about/life-at-seyyone"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all hover:shadow-lg"
              >
                <span>Explore Life at Seyyone</span>
                <ArrowRight size={18} />
              </Link>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Team Collaboration', description: 'Working together towards excellence', image: '/perks/team-collaboration.jpg' },
                { title: 'Annual Celebration', description: 'Celebrating our achievements together', image: '/perks/annual-celebration.jpg' },
                { title: 'Team Building', description: 'Building stronger connections', image: '/perks/team-building.jpg' }
              ].map((moment, index) => (
                <motion.div
                  key={moment.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-64"
                >
                  <div className="relative h-full w-full bg-blue-100">
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