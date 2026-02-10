'use client'

import Navigation from '@/components/Navigation'
import ContactInfo from '@/components/ContactInfo'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Users, Heart, Coffee, Sun, Smile, Award, Star } from 'lucide-react'

export default function LifeAtSeyyonePage() {
    const perks = [
        {
            icon: Coffee,
            title: 'Work-Life Balance',
            description: 'We believe in maintaining a healthy balance between professional and personal life.'
        },
        {
            icon: Heart,
            title: 'Inclusive Culture',
            description: 'A diverse and inclusive workplace where everyone feels valued and respected.'
        },
        {
            icon: Sun,
            title: 'Growth Opportunities',
            description: 'Continuous learning and career development paths for all our team members.'
        },
        {
            icon: Smile,
            title: 'Employee Well-being',
            description: 'Regular wellness programs and activities to keep our team happy and healthy.'
        }
    ]

    const moments = [
        {
            title: 'Team Collaboration',
            description: 'Working together towards excellence',
            image: '/Seyyone-Group-Photo-Updated.png'
        },
        {
            title: 'Annual Celebration',
            description: 'Celebrating our achievements together',
            image: '/Seyyone-Group-Photo-Updated.png'
        },
        {
            title: 'Innovation Workshop',
            description: 'Exploring new technologies and ideas',
            image: '/Seyyone-Group-Photo-Updated.png'
        },
        {
            title: 'Client Success',
            description: 'Delivering exceptional results',
            image: '/Seyyone-Group-Photo-Updated.png'
        },
        {
            title: 'Team Building',
            description: 'Building stronger connections',
            image: '/Seyyone-Group-Photo-Updated.png'
        },
        {
            title: 'Milestone Achievement',
            description: 'Celebrating 25+ years of excellence',
            image: '/Seyyone-Group-Photo-Updated.png'
        }
    ]

    return (
        <>
            <Navigation />
            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
                    <div className="container relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center px-4 py-2 mb-6 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full"
                            >
                                <Users size={16} className="mr-2" />
                                Join Our Family
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="mb-6 text-5xl font-bold md:text-7xl"
                            >
                                Life at <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Seyyone</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="mb-10 text-xl leading-relaxed text-gray-700"
                            >
                                Discover a culture of innovation, excellence, and collaboration.
                                At Seyyone, we&rsquo;re not just employees; we&rsquo;re a team driven by passion.
                            </motion.p>
                        </div>
                    </div>
                </section>

                {/* Culture & Perks */}
                <section className="py-20 bg-white">
                    <div className="container">
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {perks.map((perk, index) => {
                                const Icon = perk.icon
                                return (
                                    <motion.div
                                        key={perk.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="p-8 transition-all duration-300 border border-gray-100 bg-gray-50 rounded-2xl shadow-md hover:bg-white hover:shadow-xl group"
                                    >
                                        <div className="flex items-center justify-center mb-6 transition-colors bg-white shadow-sm w-14 h-14 rounded-xl group-hover:bg-blue-600">
                                            <Icon className="text-blue-600 group-hover:text-white" size={28} />
                                        </div>
                                        <h3 className="mb-4 text-xl font-bold text-gray-900">{perk.title}</h3>
                                        <p className="leading-relaxed text-gray-600">{perk.description}</p>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Moments Gallery */}
                <section className="py-20 bg-gray-50">
                    <div className="container">
                        <div className="mb-16 text-center">
                            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">Shared Moments</h2>
                            <p className="max-w-2xl mx-auto text-xl text-gray-600">
                                A glimpse into our daily lives, celebrations, and achievements.
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {moments.map((moment, index) => (
                                <motion.div
                                    key={moment.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    className="relative overflow-hidden group rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                                >
                                    <div className="relative h-72 bg-gradient-to-br from-blue-100 to-purple-100">
                                        <Image
                                            src="/Seyyone-Group-Photo-Updated.png"
                                            alt={moment.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                        <h3 className="mb-1 text-lg font-bold text-white">{moment.title}</h3>
                                        <p className="text-sm text-gray-200">{moment.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Join Us Section */}
                <section className="py-20 bg-blue-600">
                    <div className="container">
                        <div className="max-w-4xl mx-auto text-center text-white">
                            <h2 className="mb-8 text-3xl font-bold md:text-4xl">Ready to be part of our journey?</h2>
                            <p className="mb-10 text-xl text-blue-100">
                                We&rsquo;re always looking for talented individuals who share our values and passion for excellence.
                            </p>
                            <div className="flex flex-col justify-center gap-4 sm:flex-row">
                                <a
                                    href="/career"
                                    className="px-8 py-4 font-semibold text-blue-600 transition-colors bg-white rounded-xl hover:bg-blue-50"
                                >
                                    Explore Careers
                                </a>
                                <a
                                    href="/contact"
                                    className="px-8 py-4 font-semibold text-white transition-colors border-2 border-white rounded-xl hover:bg-white hover:text-blue-600"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}
