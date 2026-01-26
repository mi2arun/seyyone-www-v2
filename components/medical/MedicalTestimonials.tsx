'use client'

import { motion } from 'framer-motion'
import { Quote, Star, Building, User, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const MedicalTestimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      title: "Chief Medical Officer",
      organization: "Regional Medical Center",
      location: "California, USA",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
      quote: "Seyyone has transformed our documentation workflow. Their medical scribes are incredibly accurate and professional, allowing our physicians to focus entirely on patient care.",
      rating: 5,
      services: ["Medical Scribe", "EHR Support"],
      results: "40% reduction in documentation time"
    },
    {
      name: "Michael Chen",
      title: "Practice Administrator",
      organization: "Metro Health Group",
      location: "Texas, USA",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      quote: "The medical billing and coding services have significantly improved our revenue cycle. Claims processing is faster and denial rates have dropped dramatically.",
      rating: 5,
      services: ["Medical Billing", "Medical Coding"],
      results: "25% increase in revenue collection"
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "Family Physician",
      organization: "Community Healthcare",
      location: "Florida, USA",
      image: "https://images.unsplash.com/photo-1594824072264-6a2c3ab545b2?w=100&h=100&fit=crop&crop=face",
      quote: "Outstanding medical transcription services with incredible accuracy. The turnaround time is excellent and the quality is consistently high. Highly recommended!",
      rating: 5,
      services: ["Medical Transcription", "Record Summarization"],
      results: "99.8% accuracy rate maintained"
    }
  ]

  const stats = [
    { number: "99.8%", label: "Accuracy Rate", icon: CheckCircle },
    { number: "24/7", label: "Support Available", icon: Building },
    { number: "50+", label: "Healthcare Clients", icon: User },
    { number: "25+", label: "Years Experience", icon: Star }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 border-b border-gray-100">
        <div className="container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              <Quote size={16} className="mr-2" />
              Client Testimonials
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Healthcare</span>
              <br />Professionals Worldwide
            </h2>
            <p className="text-xl text-gray-600">
              See how Seyyone&apos;s HIPAA-compliant healthcare KPO services have helped
              medical professionals streamline operations and improve patient care.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <IconComponent className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Testimonials */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={itemVariants}
                className="group"
              >
                <div className="h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200">
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative mb-8">
                    <Quote className="absolute -top-2 -left-2 text-blue-200" size={24} />
                    <blockquote className="text-gray-700 leading-relaxed pl-6">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                  </div>

                  {/* Services Used */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {testimonial.services.map((service, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-6">
                    <div className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-green-600" />
                      <span className="text-sm font-semibold text-green-800">
                        {testimonial.results}
                      </span>
                    </div>
                  </div>

                  {/* Profile */}
                  <div className="flex items-center space-x-4 border-t border-gray-100 pt-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center text-white font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.title}
                      </div>
                      <div className="text-sm text-blue-600 font-medium">
                        {testimonial.organization} • {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Simplified Full-Width CTA Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white shadow-2xl text-center max-w-5xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Join 50+ Healthcare Providers Who Trust Seyyone
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Schedule a no-obligation consultation to discuss your unique needs and how Seyyone can help streamline your operations and technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg inline-flex items-center justify-center group"
              >
                <span>Schedule Free Consultation</span>
                <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/medical"
                className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
              >
                <span>Download Case Studies</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default MedicalTestimonials