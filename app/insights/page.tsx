'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import ContactInfo from '@/components/ContactInfo'
import Footer from '@/components/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, FileText, FileCheck, MessageSquare, Award, Calendar, ArrowRight, User } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const searchParams = useSearchParams()

  // Handle hash-based category filtering from navigation dropdown
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash && ['blogs', 'articles', 'case-studies'].includes(hash)) {
        setActiveCategory(hash)
      } else if (!hash) {
        setActiveCategory('all')
      }
    }

    // Set initial category and handle same-page navigation
    handleHashChange()

    window.addEventListener('hashchange', handleHashChange)
    window.addEventListener('popstate', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      window.removeEventListener('popstate', handleHashChange)
    }
  }, [searchParams])

  const categories = [
    { id: 'all', name: 'All Insights', icon: BookOpen },
    { id: 'blogs', name: 'Blogs', icon: FileText },
    { id: 'articles', name: 'Articles', icon: FileCheck },
    { id: 'case-studies', name: 'Case Studies', icon: Award }
  ]

  const insights = [
    // Blogs
    {
      id: 1,
      category: 'blogs',
      title: 'The Future of Healthcare KPO in 2025',
      excerpt: 'Explore emerging trends in healthcare business process outsourcing and how AI is transforming the industry.',
      author: 'Seyyone Team',
      date: 'December 15, 2024',
      readTime: '5 min read',
      image: '/insights/blog-1.jpg'
    },
    {
      id: 2,
      category: 'blogs',
      title: 'HIPAA Compliance Best Practices',
      excerpt: 'Essential guidelines for maintaining HIPAA compliance in your healthcare operations.',
      author: 'Seyyone Team',
      date: 'December 10, 2024',
      readTime: '7 min read',
      image: '/insights/blog-2.jpg'
    },
    // Articles
    {
      id: 3,
      category: 'articles',
      title: 'Optimizing Medical Billing Workflows',
      excerpt: 'A comprehensive guide to streamlining medical billing processes and reducing claim denials.',
      author: 'Healthcare Experts',
      date: 'December 5, 2024',
      readTime: '10 min read',
      image: '/insights/article-1.jpg'
    },
    {
      id: 4,
      category: 'articles',
      title: 'AI/ML in Healthcare: Opportunities and Challenges',
      excerpt: 'How artificial intelligence and machine learning are revolutionizing healthcare delivery.',
      author: 'Tech Team',
      date: 'November 28, 2024',
      readTime: '12 min read',
      image: '/insights/article-2.jpg'
    },
    // Case Studies
    {
      id: 9,
      category: 'case-studies',
      title: 'Reducing Claim Denials by 40%',
      excerpt: 'How we helped a multi-specialty clinic improve their revenue cycle management and reduce claim denials.',
      author: 'Case Study',
      date: 'November 10, 2024',
      readTime: '8 min read',
      image: '/insights/case-study-1.jpg'
    },
    {
      id: 10,
      category: 'case-studies',
      title: 'Cloud Migration Success Story',
      excerpt: 'A healthcare provider\'s journey to cloud-based infrastructure with 99.9% uptime achievement.',
      author: 'Case Study',
      date: 'October 30, 2024',
      readTime: '10 min read',
      image: '/insights/case-study-2.jpg'
    }
  ]

  const filteredInsights = activeCategory === 'all'
    ? insights
    : insights.filter(insight => insight.category === activeCategory)

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      blogs: 'from-blue-500 to-blue-600',
      articles: 'from-purple-500 to-purple-600',
      'case-studies': 'from-red-500 to-red-600'
    }
    return colors[category] || 'from-gray-500 to-gray-600'
  }

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
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
                  <BookOpen size={18} className="mr-2" />
                  Knowledge Center
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-bold mb-8">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Insights
                  </span>
                  <br />
                  <span className="text-gray-900">& Resources</span>
                </h1>

                <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                  Explore our collection of blogs, articles, and case studies
                  covering healthcare KPO and technology solutions.
                </p>

                {/* Category Navigation */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="flex flex-wrap justify-center gap-2"
                >
                  {categories.map((category) => {
                    const IconComponent = category.icon
                    return (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`flex items-center space-x-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-md ${activeCategory === category.id
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white scale-105'
                          : 'bg-white text-gray-700 hover:bg-gray-50'
                          }`}
                      >
                        <IconComponent size={14} />
                        <span>{category.name}</span>
                      </button>
                    )
                  })}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Insights Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {filteredInsights.length > 0 ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredInsights.map((insight, index) => (
                      <motion.article
                        key={insight.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                      >
                        {/* Image Placeholder */}
                        <div className={`relative h-48 bg-gradient-to-br ${getCategoryColor(insight.category)}`}>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <BookOpen className="text-white/50" size={64} />
                          </div>
                          {/* Category Badge */}
                          <div className="absolute top-4 left-4">
                            <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-semibold uppercase">
                              {insight.category.replace('-', ' ')}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                            <div className="flex items-center space-x-1">
                              <Calendar size={14} />
                              <span>{insight.date}</span>
                            </div>
                            <span>•</span>
                            <span>{insight.readTime}</span>
                          </div>

                          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                            {insight.title}
                          </h3>

                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {insight.excerpt}
                          </p>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2 text-sm text-gray-500">
                              <User size={16} />
                              <span>{insight.author}</span>
                            </div>

                            <button className="group/btn flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                              <span>Read More</span>
                              <ArrowRight
                                size={16}
                                className="transition-transform group-hover/btn:translate-x-1"
                              />
                            </button>
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20">
                    <BookOpen className="mx-auto text-gray-400 mb-4" size={64} />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">No content available</h3>
                    <p className="text-gray-600">Check back soon for new {activeCategory} content.</p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Want to Learn More?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Subscribe to our newsletter to receive the latest insights, articles, and updates
                directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center space-x-2"
                >
                  <span>Contact Us</span>
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <span>About Seyyone</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <ContactInfo />
      </main>
      <Footer />
    </>
  )
}
