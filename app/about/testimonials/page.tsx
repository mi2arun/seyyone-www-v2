'use client'

import Navigation from '@/components/Navigation'
import ContactInfo from '@/components/ContactInfo'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { MessageSquare, Star, Quote, Award, ShieldCheck, Users } from 'lucide-react'

export default function TestimonialsPage() {
    const trustBadges = [
        { icon: Award, text: '25+ Years Experience' },
        { icon: ShieldCheck, text: 'HIPAA Compliant' },
        { icon: Users, text: '500+ Global Clients' }
    ]

    const testimonials = [
        {
            quote: "I just got off the phone with the doctor and he asked that I pass along a compliment and some feedback. He was very impressed with the transcription. He said it was a complex dictation and he was a bit all over the place when he dictated. He was nervous about how it was going to come back. He was very happy with the job transcription did. He is asking if possible, to have that same typist work on his dictations going forward.",
            author: "IME Transcription Client",
            location: "USA",
            rating: 5
        },
        {
            quote: "It has been a great pleasure working with my technical support rep Hari and his team. When we first started I was very skeptical of using an outside remote vendor to provide us with network/server management, but my concerns were quickly converted to a confidence that they were skilled IT network/server managers. Seyyone quickly helped secure any security threats we had in our network, helped coordinate the installation of our phone systems, troubleshoot any issues with our security system, and any other network/server related issues we experienced. It has been a pleasure working with them and I would recommend them to anyone in need of the same services.",
            author: "Practice Administrator on the East Coast",
            location: "Newyork, USA",
            rating: 5
        },
        {
            quote: "Thx for all of your help. You&rsquo;re a good teammate. I know that it has saved my practice and enjoyment of medicine.",
            author: "Plastic Surgeon on the West Coast",
            location: "USA",
            rating: 5
        },
        {
            quote: "We are very pleased with you and your team and thank you for making it an easy transition.",
            author: "Office Manager &ndash; Plastic Surgeon office",
            location: "Oregon, USA",
            rating: 5
        },
        {
            quote: "We have been using a service in India named Seyyone Solutions for over 10 years. They have proved very useful in some of our EHR interfaces with NextGen. I cannot say enough good about the quality of their service, the time-saving nature of what they do for us as busy physicians, and the reasonableness of their pricing. Many providers in our area also use their services and are very happy.",
            author: "Surgeon from the west coast",
            location: "USA",
            rating: 5
        },
        {
            quote: "We feel your company is trustworthy and would like to give you the business instead of looking elsewhere and thanks for keeping up a high standard.",
            author: "Orthopedic Physician",
            location: "Australia",
            rating: 5
        },
        {
            quote: "Thank you for continuing to do a wonderful job with our transcription! Great job! I&rsquo;m impressed. Thank you so much! I&rsquo;m excited that this transition is turning out to be easier than I was expecting.",
            author: "Office Manager, Oregon Eye Clinic",
            location: "USA",
            rating: 5
        }
    ]

    return (
        <>
            <Navigation />
            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-blue-50">
                    <div className="container relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center px-4 py-2 mb-6 text-sm font-semibold text-indigo-700 bg-indigo-100 rounded-full"
                            >
                                <MessageSquare size={16} className="mr-2" />
                                Trusted by Experts
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="mb-6 text-5xl font-bold md:text-7xl"
                            >
                                Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Testimonials</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="mb-12 text-xl leading-relaxed text-gray-700"
                            >
                                Hear from the medical professionals and organizations who trust Seyyone for their
                                Healthcare KPO and Technology needs.
                            </motion.p>

                            {/* Trust Badges */}
                            <div className="flex flex-wrap justify-center gap-6">
                                {trustBadges.map((badge, index) => (
                                    <motion.div
                                        key={badge.text}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 + index * 0.1 }}
                                        className="flex items-center space-x-2 text-gray-600"
                                    >
                                        <badge.icon size={20} className="text-blue-600" />
                                        <span className="font-semibold text-sm uppercase tracking-wider">{badge.text}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials Grid */}
                <section className="py-20 bg-white">
                    <div className="container">
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
                            {testimonials.map((t, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    className="relative p-8 transition-all duration-300 bg-gray-50 border border-gray-100 rounded-3xl hover:bg-white hover:shadow-2xl group flex flex-col"
                                >
                                    <div className="absolute top-8 right-8 text-blue-100 transition-colors group-hover:text-blue-50">
                                        <Quote size={64} fill="currentColor" />
                                    </div>

                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="flex mb-6 text-yellow-400">
                                            {[...Array(t.rating)].map((_, i) => (
                                                <Star key={i} size={18} fill="currentColor" />
                                            ))}
                                        </div>

                                        <p className="mb-8 text-lg font-medium leading-relaxed text-gray-700 italic flex-grow">
                                            &ldquo;{t.quote}&rdquo;
                                        </p>

                                        <div className="pt-6 border-t border-gray-200">
                                            <h4 className="text-xl font-bold text-gray-900">{t.author}</h4>
                                            <p className="font-semibold text-blue-600 uppercase text-xs tracking-widest">{t.location}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Global Impact */}
                <section className="py-20 bg-gray-900 text-white">
                    <div className="container text-center">
                        <h2 className="mb-8 text-3xl font-bold md:text-4xl italic">
                            &ldquo;Excellence is not an act, but a habit.&rdquo;
                        </h2>
                        <p className="max-w-2xl mx-auto text-xl text-gray-400 leading-relaxed">
                            We take pride in our 99.8% accuracy rate and our ability to deliver results that
                            consistently exceed our clients&apos; expectations across 6 countries.
                        </p>
                    </div>
                </section>

                <ContactInfo />
            </main>
            <Footer />
        </>
    )
}
