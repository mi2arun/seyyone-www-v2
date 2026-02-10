'use client'

import { motion } from 'framer-motion'
import { Quote, Star, Server, Users, Code, CheckCircle } from 'lucide-react'

const TechnologyTestimonials = ({ onOpenModal }: { onOpenModal: () => void }) => {
    const testimonials = [
        {
            name: "James Wilson",
            title: "CTO",
            organization: "InnovateTech Inc",
            location: "California, USA",
            image: "",
            quote: "Seyyone's cloud migration expertise was pivotal in our digital transformation. We achieved 99.9% uptime and significantly reduced operational costs.",
            rating: 5,
            services: ["Cloud Solutions", "DevOps"],
            results: "40% reduction in infra costs"
        },
        {
            name: "Sarah Jenkins",
            title: "Product Director",
            organization: "EdFuture Global",
            location: "London, UK",
            image: "",
            quote: "The custom software solutions provided by Seyyone have revolutionized our learning platform. Their team's technical prowess and dedication are unmatched.",
            rating: 5,
            services: ["Software Development", "QA Testing"],
            results: "2x faster time-to-market"
        },
        {
            name: "David Chen",
            title: "IT Manager",
            organization: "LogiChain Solutions",
            location: "Singapore",
            image: "",
            quote: "From legacy modernization to API integration, Seyyone has been a reliable partner. Their ability to deliver complex projects on time is impressive.",
            rating: 5,
            services: ["Legacy Modernization", "API Integration"],
            results: "Seamless system integration"
        }
    ]

    const stats = [
        { number: "99.9%", label: "Uptime Guaranteed", icon: CheckCircle },
        { number: "24/7", label: "Technical Support", icon: Server },
        { number: "100+", label: "Tech Clients", icon: Users },
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
            <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 border-b border-gray-100">
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
                            <Quote size={16} className="mr-2" />
                            Client Testimonials
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                            Trusted by
                            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Technology</span>
                            <br />Leaders Worldwide
                        </h2>
                        <p className="text-xl text-gray-600">
                            See how Seyyone&apos;s innovative technology solutions have helped
                            companies drive digital transformation and achieve business growth.
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
                                        <IconComponent className="w-8 h-8 text-purple-600 mx-auto mb-4" />
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
                                <div className="h-full bg-white rounded-2xl p-8 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2)] transition-all duration-500 border border-gray-100 hover:border-purple-200 group-hover:-translate-y-1">
                                    {/* Rating */}
                                    <div className="flex items-center space-x-1 mb-6">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} size={16} className="text-yellow-400 fill-current" />
                                        ))}
                                    </div>

                                    {/* Quote */}
                                    <div className="relative mb-8">
                                        <Quote className="absolute -top-2 -left-2 text-purple-200" size={24} />
                                        <blockquote className="text-gray-700 leading-relaxed pl-6">
                                            &ldquo;{testimonial.quote}&rdquo;
                                        </blockquote>
                                    </div>

                                    {/* Services Used */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {testimonial.services.map((service, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium"
                                            >
                                                {service}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Results */}
                                    <div className="bg-pink-50 border border-pink-200 rounded-lg p-3 mb-6">
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle size={16} className="text-pink-600" />
                                            <span className="text-sm font-semibold text-pink-800">
                                                {testimonial.results}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Profile */}
                                    <div className="flex items-center space-x-4 border-t border-gray-100 pt-6">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-semibold">
                                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-900">
                                                {testimonial.name}
                                            </div>
                                            <div className="text-sm text-gray-600">
                                                {testimonial.title}
                                            </div>
                                            <div className="text-sm text-purple-600 font-medium">
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

export default TechnologyTestimonials
