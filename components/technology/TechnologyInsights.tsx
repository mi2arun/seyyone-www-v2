'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Award, FileText, FileCheck, ArrowRight } from 'lucide-react'

export default function TechnologyInsights() {
    return (
        <section className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                                Latest Tech Insights
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Stay ahead with our expert technology trends and analysis
                            </p>
                        </div>
                        <Link
                            href="/insights"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-sm mt-4 sm:mt-0"
                        >
                            View All Insights
                            <ArrowRight size={16} />
                        </Link>
                    </div>

                    {/* Insight Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Case Studies",
                                icon: Award,
                                description: "Explore how our cutting-edge software and cloud solutions have driven digital transformation for leading enterprises.",
                                href: "/insights#tech-case-studies",
                                gradient: "from-purple-600 to-pink-600",
                                bgGradient: "from-purple-50 to-pink-50"
                            },
                            {
                                title: "Tech Blogs",
                                icon: FileText,
                                description: "Insights on the latest technologies including AI, Machine Learning, Cloud Computing, and Cybersecurity.",
                                href: "/insights#tech-blogs",
                                gradient: "from-blue-600 to-cyan-600",
                                bgGradient: "from-blue-50 to-cyan-50"
                            },
                            {
                                title: "Whitepapers",
                                icon: FileCheck,
                                description: "Technical deep dives and research papers on emerging technology trends and architectural best practices.",
                                href: "/insights#whitepapers",
                                gradient: "from-orange-500 to-amber-500",
                                bgGradient: "from-orange-50 to-amber-50"
                            }
                        ].map((insight, idx) => {
                            const Icon = insight.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                                    className="group"
                                >
                                    <Link href={insight.href} className="block h-full">
                                        <div className={`bg-gradient-to-br ${insight.bgGradient} border border-gray-200 rounded-2xl p-8 flex flex-col h-full hover:shadow-2xl transition-all duration-300 shadow-md`}>
                                            <div className="flex items-center space-x-4 mb-6">
                                                <div className={`w-14 h-14 bg-gradient-to-r ${insight.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                                    <Icon className="text-white" size={28} />
                                                </div>
                                                <h3 className="text-2xl font-bold text-gray-900">{insight.title}</h3>
                                            </div>
                                            <p className="text-gray-700 leading-relaxed flex-grow mb-6">
                                                {insight.description}
                                            </p>
                                            <div className="pt-6 border-t border-gray-200">
                                                <span className={`inline-flex items-center gap-2 bg-gradient-to-r ${insight.gradient} bg-clip-text text-transparent font-bold transition-all text-sm group-hover:gap-3`}>
                                                    <span>Explore {insight.title}</span>
                                                    <ArrowRight size={16} className="text-gray-900 transition-transform group-hover:translate-x-1" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
