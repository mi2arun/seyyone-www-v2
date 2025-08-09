'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, Globe } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '91 (422) 2310240',
      description: 'Call us for immediate assistance',
      href: 'tel:+914222310240'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'contact@seyyone.com',
      description: 'Send us your requirements',
      href: 'mailto:contact@seyyone.com'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '73, Anna Nagar, Ramanathapuram',
      description: 'Coimbatore-641045, TN, India',
      href: '#'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: '24/7 Support Available',
      description: 'We work in your timezone',
      href: '#'
    }
  ]

  const regions = [
    { flag: '🇺🇸', country: 'USA', cities: 'Healthcare & Software Solutions' },
    { flag: '🇬🇧', country: 'UK', cities: 'Healthcare & Software Solutions' },
    { flag: '🇨🇦', country: 'Canada', cities: 'Healthcare & Software Solutions' },
    { flag: '🇦🇺', country: 'Australia', cities: 'Healthcare & Software Solutions' },
    { flag: '🇮🇪', country: 'Ireland', cities: 'Healthcare & Software Solutions' },
    { flag: '🇩🇪', country: 'Germany', cities: 'Healthcare & Software Solutions' },
    { flag: '🇳🇱', country: 'Netherlands', cities: 'Healthcare & Software Solutions' },
    { flag: '🇮🇳', country: 'India', cities: 'Headquarters & Operations' }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            <Mail size={16} className="mr-2" />
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform Your
            <span className="gradient-text"> Healthcare Operations?</span>
          </h2>
          <p className="text-xl text-gray-600">
            Contact our healthcare BPO experts today to discuss your requirements 
            and discover how we can help streamline your operations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="john.doe@hospital.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Hospital or Clinic Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Services Interested In
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    <option>Select a service</option>
                    <option>Medical Transcription</option>
                    <option>Medical Billing</option>
                    <option>Medical Coding</option>
                    <option>Remote Medical Scribe</option>
                    <option>EHR/EMR Support</option>
                    <option>Medical Record Summarization</option>
                    <option>Multiple Services</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell us about your requirements..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary justify-center"
                >
                  Send Message
                  <Send size={20} />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h4>
                      <p className="text-primary-600 font-medium mb-1">
                        {info.href !== '#' ? (
                          <a href={info.href} className="hover:text-primary-700">
                            {info.details}
                          </a>
                        ) : (
                          info.details
                        )}
                      </p>
                      <p className="text-sm text-gray-600">
                        {info.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Global Presence */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white"
            >
              <div className="flex items-center space-x-2 mb-6">
                <Globe className="text-white" size={24} />
                <h3 className="text-xl font-bold">Global Presence</h3>
              </div>
              
              <p className="text-primary-100 mb-6">
                We serve clients across 8 countries with comprehensive 
                Healthcare KPO and Software Development solutions.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {regions.map((region, index) => (
                  <motion.div
                    key={region.country}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg"
                  >
                    <span className="text-xl">{region.flag}</span>
                    <div>
                      <div className="font-semibold text-sm">{region.country}</div>
                      <div className="text-xs text-primary-100">{region.cities}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact