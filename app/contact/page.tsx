'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Mail, Phone, MapPin, Clock, Send, Globe, Shield, Award, Users, ArrowRight, Star } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [selectedService, setSelectedService] = useState('')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    service: '',
    message: ''
  })

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '91 (422) 2310240',
      description: 'Available 24/7 for immediate assistance',
      href: 'tel:+914222310240',
      color: 'blue'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@seyyone.com',
      description: 'Send us your detailed requirements',
      href: 'mailto:info@seyyone.com',
      color: 'green'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '73, Anna Nagar, Ramanathapuram',
      description: 'Coimbatore-641045, TN, India',
      href: 'https://maps.google.com/?q=73+Anna+Nagar+Ramanathapuram+Coimbatore',
      color: 'purple'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: '24/7 Support Available',
      description: 'We work across global time zones',
      href: '#',
      color: 'orange'
    }
  ]


  const regions = [
    { flag: '🇺🇸', country: 'USA' },
    { flag: '🇬🇧', country: 'UK' },
    { flag: '🇨🇦', country: 'Canada' },
    { flag: '🇦🇺', country: 'Australia' },
    { flag: '🇮🇪', country: 'Ireland' },
    { flag: '🇩🇪', country: 'Germany' }
  ]

  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      title: 'Chief Medical Officer',
      organization: 'Regional Medical Center',
      quote: 'Exceptional service quality and HIPAA compliance. Highly recommended!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      title: 'IT Director',
      organization: 'TechCorp Solutions',
      quote: 'Outstanding software development team. Delivered beyond expectations.',
      rating: 5
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <>
      <Navigation />
      <main>
        {/* Enhanced Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute top-20 right-20 w-32 h-32 border-2 border-blue-200 rounded-full opacity-20"
            />
            <motion.div
              animate={{ y: [-20, 20, -20] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-32 left-16 w-24 h-24 bg-purple-100 rounded-full opacity-30"
            />
          </div>

          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold mb-2"
              >
                <span className="text-gray-900">Let&rsquo;s Transform</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Your Business Together
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-gray-600 leading-relaxed mb-0 max-w-4xl mx-auto"
              >
                Ready to streamline your healthcare operations or accelerate your digital transformation?
                Our expert team of 150+ professionals is here to deliver exceptional results.
              </motion.p>

            </div>
          </div>
        </section>


        {/* Enhanced Contact Form & Info */}
        <section id="contact-form" className="pt-2 pb-20 bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Enhanced Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-2xl p-8 shadow-xl">
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                      <Send className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Send Us a Message
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="John"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="john.doe@company.com"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Organization
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Hospital, Clinic, or Company Name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Services Interested In
                      </label>
                      <select
                        name="service"
                        value={selectedService || formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        <optgroup label="Healthcare KPO">
                          <option value="Medical Transcription">Medical Transcription</option>
                          <option value="Medical Billing & Coding">Medical Billing & Coding</option>
                          <option value="Remote Medical Scribe">Remote Medical Scribe</option>
                          <option value="EHR/EMR Support">EHR/EMR Support</option>
                          <option value="Medical Record Summarization">Medical Record Summarization</option>
                        </optgroup>
                        <optgroup label="Technology Solutions">
                          <option value="Custom Software Development">Custom Software Development</option>
                          <option value="AI/ML Solutions">AI/ML Solutions</option>
                          <option value="Mobile App Development">Mobile App Development</option>
                          <option value="Cloud Solutions">Cloud Solutions</option>
                          <option value="Analytics & BI">Analytics & BI</option>
                        </optgroup>
                        <option value="Multiple Services">Multiple Services</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Tell us about your requirements, timeline, and any specific questions you have..."
                        required
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-3"
                    >
                      <span>Send Message</span>
                      <Send size={20} />
                    </motion.button>

                    <p className="text-sm text-gray-500 text-center">
                      We&rsquo;ll respond within 24 hours • HIPAA Compliant • No spam, ever
                    </p>
                  </form>
                </div>
              </motion.div>

              {/* Enhanced Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Contact Details */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon
                    return (
                      <motion.div
                        key={info.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        className="group flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
                      >
                        <div className={`w-14 h-14 bg-gradient-to-r from-${info.color}-500 to-${info.color}-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent size={24} className="text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1 text-lg">
                            {info.title}
                          </h4>
                          <p className={`text-${info.color}-600 font-semibold mb-2`}>
                            {info.href !== '#' ? (
                              <a href={info.href} className={`hover:text-${info.color}-700 transition-colors`}>
                                {info.details}
                              </a>
                            ) : (
                              info.details
                            )}
                          </p>
                          <p className="text-gray-600">
                            {info.description}
                          </p>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Testimonials */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6"
                >
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                    <Star className="text-yellow-500 mr-2" size={20} />
                    What Our Clients Say
                  </h4>
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className={`${index > 0 ? 'mt-6 pt-6 border-t border-gray-200' : ''}`}>
                      <p className="text-gray-700 italic mb-3">&ldquo;{testimonial.quote}&rdquo;</p>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.title}, {testimonial.organization}</div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Global Presence */}
        <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center space-x-3 mb-6">
                <Globe className="text-white" size={32} />
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Global Presence
                </h2>
              </div>
              <p className="text-blue-100 text-xl max-w-3xl mx-auto">
                We serve clients across 6 countries with comprehensive Healthcare KPO
                and Software Development solutions tailored to local market needs.
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
              {regions.map((region, index) => (
                <motion.div
                  key={region.country}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/30 transition-all duration-300 text-center w-40"
                >
                  <div className="text-4xl mb-4">{region.flag}</div>
                  <div className="font-bold text-white text-lg">{region.country}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-center mt-16"
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-blue-100 mb-6">
                  Join 150+ satisfied clients who trust Seyyone with their critical business operations.
                  Experience the difference that 25+ years of expertise can make.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+914222310240"
                    className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
                  >
                    <Phone size={20} />
                    <span>Call Now</span>
                  </a>
                  <a
                    href="mailto:info@seyyone.com"
                    className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center space-x-2"
                  >
                    <Mail size={20} />
                    <span>Send Email</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="flex flex-wrap justify-center items-center gap-8">
              {[
                { icon: Shield, text: 'HIPAA Compliant', color: 'green' },
                { icon: Award, text: '25+ Years Experience', color: 'blue' },
                { icon: Users, text: '150+ Professionals', color: 'purple' },
                { icon: Globe, text: 'Global Presence', color: 'orange' }
              ].map((badge, index) => {
                const IconComponent = badge.icon
                return (
                  <motion.div
                    key={badge.text}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className={`flex items-center space-x-3 bg-${badge.color}-50 px-6 py-4 rounded-full border border-${badge.color}-200`}
                  >
                    <IconComponent className={`text-${badge.color}-600`} size={24} />
                    <span className={`font-semibold text-${badge.color}-700`}>{badge.text}</span>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}