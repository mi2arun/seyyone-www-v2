'use client'

import { motion } from 'framer-motion'
import { Quote, Star, Building, User, CheckCircle } from 'lucide-react'

const MedicalTestimonials = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const testimonials = [
    {
      name: "IME Transcription Client",
      title: "Medical Transcription Client",
      organization: "IME Services",
      location: "USA",
      image: "",
      quote: "I just got off the phone with the doctor and he asked that I pass along a compliment and some feedback. He was very impressed with the transcription. He said it was a complex dictation and he was a bit all over the place when he dictated. He was nervous about how it was going to come back. He was very happy with the job transcription did.",
      rating: 5,
      services: ["Medical Transcription"],
      results: "Excellent complex transcription job"
    },
    {
      name: "Surgeon from the west coast",
      title: "Busy Physician & Surgeon",
      organization: "Orthopedic Practice",
      location: "USA",
      image: "",
      quote: "We have been using a service in India named Seyyone Solutions for over 10 years. They have proved very useful in some of our EHR interfaces with NextGen. I cannot say enough good about the quality of their service, the time-saving nature of what they do for us as busy physicians, and the reasonableness of their pricing.",
      rating: 5,
      services: ["EHR Support", "NextGen Interface"],
      results: "10+ Years of Trusted Partnership"
    },
    {
      name: "Plastic Surgeon",
      title: "Medical Practitioner",
      organization: "Private Practice",
      location: "West Coast, USA",
      image: "",
      quote: "Thx for all of your help. You're a good teammate. I know that it has saved my practice and enjoyment of medicine.",
      rating: 5,
      services: ["Medical Scribe", "Practice Support"],
      results: "Saved practice & physician enjoyment"
    }
  ]

  const stats = [
    { number: "99.8%", label: "Accuracy Rate", icon: CheckCircle },
    { number: "24/7", label: "Support Available", icon: Building },
    { number: "60+", label: "Healthcare Providers", icon: User },
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
                <div className="h-full bg-white rounded-2xl p-8 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2)] transition-all duration-500 border border-gray-100 hover:border-blue-200 group-hover:-translate-y-1">
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

    </>
  )
}

export default MedicalTestimonials