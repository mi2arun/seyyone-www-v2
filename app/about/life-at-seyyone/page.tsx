'use client'

import Navigation from '@/components/Navigation'
import ContactInfo from '@/components/ContactInfo'
import Footer from '@/components/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Users, Heart, Coffee, Sun, Smile, Award, Star, X, ChevronLeft, ChevronRight, Folder } from 'lucide-react'
import { useState, useEffect } from 'react'

const perks = [
    {
        icon: Coffee,
        title: 'Work-Life Balance',
        description: 'We believe in maintaining a healthy balance between professional and personal life.',
        color: 'blue'
    },
    {
        icon: Heart,
        title: 'Inclusive Culture',
        description: 'A diverse and inclusive workplace where everyone feels valued and respected.',
        color: 'purple'
    },
    {
        icon: Sun,
        title: 'Growth Opportunities',
        description: 'Continuous learning and career development paths for all our team members.',
        color: 'orange'
    },
    {
        icon: Smile,
        title: 'Employee Well-being',
        description: 'Regular wellness programs and activities to keep our team happy and healthy.',
        color: 'green'
    }
]

const categories = [
    {
        id: 'workplace-training',
        title: 'Workplace & Training',
        description: 'Biometric-controlled training labs and secure workspace infrastructure.',
        image: '/images/medical_scribe_training.png',
        items: [
            {
                title: 'Medical Scribes Training',
                description: 'Comprehensive specialty-specific training for virtual scribes',
                image: '/images/medical_scribe_training.png'
            }
        ]
    },
    {
        id: 'operations-support',
        title: 'Operations & Support',
        description: 'Medical billing, transcription, and healthcare BPO operations.',
        image: '/images/healthcare_bpo_ops.png',
        items: [
            {
                title: 'Healthcare BPO Operations',
                description: 'Our state-of-the-art medical transcription and RCM billing floor',
                image: '/images/healthcare_bpo_ops.png'
            }
        ]
    },
    {
        id: 'engineering-innovation',
        title: 'Engineering & Innovation',
        description: 'Our software development team building AI models and cloud architecture.',
        image: '/images/software_development_team.png',
        items: [
            {
                title: 'Software & AI Engineering',
                description: 'Our tech division building custom EHR integrations and AI/ML models',
                image: '/images/software_development_team.png'
            },
            {
                title: 'Infrastructure & Data Security',
                description: 'HIPAA-compliant secure facilities and robust network architecture',
                image: '/images/data_security_infra.png'
            }
        ]
    },
    {
        id: 'events-leadership',
        title: 'Events & Leadership',
        description: 'Celebrating milestones, team thanksgiving lunch, and leadership events.',
        image: '/Seyyone-Group-Photo-Updated.png',
        items: [
            {
                title: 'Annual Celebration',
                description: 'Celebrating milestones and employee achievements together',
                image: '/Seyyone-Group-Photo-Updated.png'
            },
            {
                title: 'Thanksgiving Team Lunch',
                description: 'Thanksgiving team lunch at Four Cups',
                image: '/images/team_outing_1.jpg'
            },
            {
                title: 'Team Gathering',
                description: 'Team gathering and dinner celebration inside the restaurant',
                image: '/images/team_gathering.jpg'
            },
            {
                title: 'Vice President Ravi Chinnathambi',
                description: 'Vice President Ravi Chinnathambi addressing the team',
                image: '/images/ravi_chinnathambi.jpg'
            },
            {
                title: 'President Karupannan Sabapathy',
                description: 'President Karupannan Sabapathy addressing the team',
                image: '/images/karupannan_sabapathy.jpg'
            }
        ]
    }
]

export default function LifeAtSeyyonePage() {
    const [activeFolderIndex, setActiveFolderIndex] = useState<number | null>(null)
    const [activeImageIndex, setActiveImageIndex] = useState<number>(0)

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (activeFolderIndex === null) return
            if (e.key === 'Escape') {
                setActiveFolderIndex(null)
            } else if (e.key === 'ArrowRight') {
                const folder = categories[activeFolderIndex]
                setActiveImageIndex((prev) => (prev + 1) % folder.items.length)
            } else if (e.key === 'ArrowLeft') {
                const folder = categories[activeFolderIndex]
                setActiveImageIndex((prev) => (prev - 1 + folder.items.length) % folder.items.length)
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [activeFolderIndex])

    const openLightbox = (folderIndex: number) => {
        setActiveFolderIndex(folderIndex)
        setActiveImageIndex(0)
    }

    return (
        <>
            <Navigation />
            <main>
                {/* Hero Section */}
                <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
                    <div className="container relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center px-4 py-2 mb-4 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full"
                            >
                                <Users size={16} className="mr-2" />
                                Join Our Family
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="mb-6 text-4xl font-bold md:text-6xl"
                            >
                                Life at <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Seyyone</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="mb-0 text-xl leading-relaxed text-gray-700 bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-xl font-medium"
                            >
                                Discover a culture of innovation, excellence, and collaboration.
                                At Seyyone, we&rsquo;re not just employees; we&rsquo;re a team driven by passion.
                            </motion.p>
                        </div>
                    </div>
                </section>

                {/* Culture & Perks */}
                <section className="pt-8 pb-20 bg-white">
                    <div className="container">
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {perks.map((perk, index) => {
                                const Icon = perk.icon
                                const colorClasses: Record<string, { bg: string, text: string, hoverBg: string, glow: string }> = {
                                    blue: { bg: 'bg-blue-50', text: 'text-blue-600', hoverBg: 'group-hover:bg-blue-600', glow: 'group-hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]' },
                                    purple: { bg: 'bg-purple-50', text: 'text-purple-600', hoverBg: 'group-hover:bg-purple-600', glow: 'group-hover:shadow-[0_0_20px_rgba(147,51,234,0.5)]' },
                                    orange: { bg: 'bg-orange-50', text: 'text-orange-600', hoverBg: 'group-hover:bg-orange-600', glow: 'group-hover:shadow-[0_0_20px_rgba(234,88,12,0.5)]' },
                                    green: { bg: 'bg-green-50', text: 'text-green-600', hoverBg: 'group-hover:bg-green-600', glow: 'group-hover:shadow-[0_0_20px_rgba(22,163,74,0.5)]' },
                                }
                                const classes = colorClasses[perk.color] || colorClasses.blue
                                return (
                                    <motion.div
                                        key={perk.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="p-8 transition-all duration-300 border border-gray-100 bg-gray-50 rounded-2xl shadow-md hover:bg-white hover:shadow-xl group"
                                    >
                                        <div className={`flex items-center justify-center mb-6 transition-all duration-300 ${classes.bg} shadow-sm w-14 h-14 rounded-xl ${classes.hoverBg} ${classes.glow} group-hover:scale-110`}>
                                            <Icon className={`${classes.text} group-hover:text-white transition-all duration-300 group-hover:scale-110`} size={28} />
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
                                A glimpse into our daily lives, celebrations, and achievements. Click any folder to view and scroll through the gallery.
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
                            {categories.map((category, index) => (
                                <motion.div
                                    key={category.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    onClick={() => openLightbox(index)}
                                    className="relative overflow-hidden group rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-1 bg-white border border-gray-100 flex flex-col h-[22rem]"
                                >
                                    <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 shrink-0 overflow-hidden">
                                        <Image
                                            src={category.image}
                                            alt={category.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-6 flex-grow flex flex-col">
                                        <h3 className="mb-2 text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                            {category.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">
                                            {category.description}
                                        </p>
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
                                    href="/careers"
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

            {/* Lightbox Modal */}
            <AnimatePresence>
                {activeFolderIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
                        onClick={() => setActiveFolderIndex(null)}
                    >
                        <button
                            onClick={() => setActiveFolderIndex(null)}
                            className="absolute top-6 right-6 z-50 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors focus:outline-none"
                            title="Close Lightbox (Esc)"
                        >
                            <X size={24} />
                        </button>

                        {/* Left Button */}
                        {categories[activeFolderIndex].items.length > 1 && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation()
                                    const folder = categories[activeFolderIndex!]
                                    setActiveImageIndex((prev) => (prev - 1 + folder.items.length) % folder.items.length)
                                }}
                                className="absolute left-4 md:left-8 z-50 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors focus:outline-none"
                                title="Previous Image"
                            >
                                <ChevronLeft size={32} />
                            </button>
                        )}

                        {/* Right Button */}
                        {categories[activeFolderIndex].items.length > 1 && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation()
                                    const folder = categories[activeFolderIndex!]
                                    setActiveImageIndex((prev) => (prev + 1) % folder.items.length)
                                }}
                                className="absolute right-4 md:right-8 z-50 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors focus:outline-none"
                                title="Next Image"
                            >
                                <ChevronRight size={32} />
                            </button>
                        )}

                        {/* Media Area */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="w-full max-w-4xl max-h-[85vh] flex flex-col items-center justify-center relative p-2"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full aspect-[4/3] max-h-[65vh] bg-neutral-950 rounded-2xl overflow-hidden flex items-center justify-center shadow-2xl border border-neutral-800">
                                {categories[activeFolderIndex].items[activeImageIndex].image === 'upcoming_president' ? (
                                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-8 text-center text-white">
                                        <motion.div
                                            animate={{ scale: [1, 1.05, 1], y: [0, -5, 0] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                            className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-6"
                                        >
                                            <Users size={40} className="text-blue-100" />
                                        </motion.div>
                                        <h3 className="text-2xl font-bold mb-2">President Karupannan Sabapathy</h3>
                                        <p className="text-blue-100 text-lg max-w-md">
                                            Presidential address and visionary leadership.
                                        </p>
                                        <span className="mt-8 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold tracking-wide">
                                            Upcoming Image Upload
                                        </span>
                                    </div>
                                ) : (
                                    <Image
                                        src={categories[activeFolderIndex].items[activeImageIndex].image}
                                        alt={categories[activeFolderIndex].items[activeImageIndex].title}
                                        fill
                                        className="object-contain cursor-pointer"
                                        sizes="(max-width: 1024px) 100vw, 1024px"
                                        priority
                                        onClick={() => {
                                            const folder = categories[activeFolderIndex!]
                                            if (folder.items.length > 1) {
                                                setActiveImageIndex((prev) => (prev + 1) % folder.items.length)
                                            }
                                        }}
                                    />
                                )}
                            </div>

                            {/* Title & Description & Pagination */}
                            <div className="mt-6 text-center text-white max-w-2xl px-4">
                                <h4 className="text-xl font-bold">{categories[activeFolderIndex].items[activeImageIndex].title}</h4>
                                <p className="text-sm text-neutral-300 mt-2">
                                    {categories[activeFolderIndex].items[activeImageIndex].description}
                                </p>
                                <div className="mt-4 inline-flex items-center space-x-2 bg-neutral-800/80 px-4 py-1.5 rounded-full text-xs text-neutral-400 font-semibold">
                                    <span>{categories[activeFolderIndex].title}</span>
                                    <span className="text-neutral-600">•</span>
                                    <span>{activeImageIndex + 1} of {categories[activeFolderIndex].items.length}</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
