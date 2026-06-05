'use client'

import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { jobPositions } from '@/lib/career/job-data'
import { Heart, Sun, Users, Award, Smile, Coffee, ShieldCheck, Lightbulb, Target, ClipboardCheck, Search, Filter, Clock, MapPin, Briefcase, Calendar, Maximize2, X, ArrowRight, Layers } from 'lucide-react'
import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Footer from '@/components/Footer'
import ApplyButton from '@/components/ApplyButton'

export default function CareerPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('All')
  const [selectedType, setSelectedType] = useState('All')
  const [selectedSeniority, setSelectedSeniority] = useState('All')
  const [selectedDepartment, setSelectedDepartment] = useState('All')
  const [previewJobId, setPreviewJobId] = useState<string | null>(null)

  // Filter positions with useMemo for instant re-render
  const filteredJobs = useMemo(() => {
    const query = searchQuery.toLowerCase()
    return jobPositions.filter((job) => {
      const matchesSearch = !query ||
        job.title.toLowerCase().includes(query) ||
        job.department.toLowerCase().includes(query) ||
        job.description.toLowerCase().includes(query) ||
        job.requirements.some(r => r.toLowerCase().includes(query))

      const matchesLocation = selectedLocation === 'All' || job.location === selectedLocation
      const matchesType = selectedType === 'All' || job.type === selectedType
      const matchesSeniority = selectedSeniority === 'All' || job.seniority === selectedSeniority
      const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment

      return matchesSearch && matchesLocation && matchesType && matchesSeniority && matchesDepartment
    })
  }, [searchQuery, selectedLocation, selectedType, selectedSeniority, selectedDepartment])

  return (
    <>
      <Navigation />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-6 py-3 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
                Join Our Team
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-gray-900">Innovators &</span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Problem Solvers
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-0 max-w-3xl mx-auto bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
                Join our team of passionate technology professionals dedicated to delivering exceptional
                IT solutions and Healthcare KPO services. Be part of something extraordinary.
              </p>
            </div>
          </div>
        </section>

        {/* Work Culture */}
        <section className="pt-8 pb-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Work Culture
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We foster an inclusive workplace that values diverse perspectives and empowers individual growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Integrity',
                  description: 'We conduct business with honesty and transparency in all our interactions.',
                  icon: Heart,
                  color: 'blue'
                },
                {
                  title: 'Innovation',
                  description: 'We continuously explore cutting-edge technologies and creative solutions.',
                  icon: Sun,
                  color: 'purple'
                },
                {
                  title: 'Collaboration',
                  description: 'We believe in the power of teamwork and collective problem-solving.',
                  icon: Users,
                  color: 'green'
                },
                {
                  title: 'Excellence',
                  description: 'We strive for the highest quality standards in everything we deliver.',
                  icon: Award,
                  color: 'orange'
                },
                {
                  title: 'Customer Focus',
                  description: 'We prioritize client needs and work tirelessly to exceed expectations.',
                  icon: Smile,
                  color: 'red'
                },
                {
                  title: 'Accountability',
                  description: 'We take responsibility and deliver on our commitments with reliability.',
                  icon: Coffee,
                  color: 'indigo'
                }
              ].map((value, index) => {
                const Icon = value.icon
                const colorClasses: Record<string, { bg: string, text: string, hoverBg: string, glow: string }> = {
                  blue: { bg: 'bg-blue-50', text: 'text-blue-600', hoverBg: 'group-hover:bg-blue-600', glow: 'group-hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]' },
                  purple: { bg: 'bg-purple-50', text: 'text-purple-600', hoverBg: 'group-hover:bg-purple-600', glow: 'group-hover:shadow-[0_0_20px_rgba(147,51,234,0.5)]' },
                  green: { bg: 'bg-green-50', text: 'text-green-600', hoverBg: 'group-hover:bg-green-600', glow: 'group-hover:shadow-[0_0_20px_rgba(22,163,74,0.5)]' },
                  orange: { bg: 'bg-orange-50', text: 'text-orange-600', hoverBg: 'group-hover:bg-orange-600', glow: 'group-hover:shadow-[0_0_20px_rgba(234,88,12,0.5)]' },
                  red: { bg: 'bg-red-50', text: 'text-red-600', hoverBg: 'group-hover:bg-red-600', glow: 'group-hover:shadow-[0_0_20px_rgba(220,38,38,0.5)]' },
                  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', hoverBg: 'group-hover:bg-indigo-600', glow: 'group-hover:shadow-[0_0_20px_rgba(79,70,229,0.5)]' },
                }
                const classes = colorClasses[value.color] || colorClasses.blue
                return (
                  <div key={value.title} className="bg-gray-50 p-8 rounded-2xl shadow-md border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300 group flex flex-col items-start">
                    <div className={`flex items-center justify-center mb-6 transition-all duration-300 ${classes.bg} shadow-sm w-14 h-14 rounded-xl ${classes.hoverBg} ${classes.glow} group-hover:scale-110`}>
                      <Icon className={`${classes.text} group-hover:text-white transition-all duration-300 group-hover:scale-110`} size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 border-y border-gray-100">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Why Choose Seyyone?
                </h2>

                <div className="space-y-6">
                  {[
                    {
                      title: 'Dynamic Environment',
                      description: 'Work in a forward-thinking environment that encourages innovation and growth.'
                    },
                    {
                      title: 'Continuous Learning',
                      description: 'Access to cutting-edge technologies and continuous learning opportunities.'
                    },
                    {
                      title: 'Global Exposure',
                      description: 'Work with international clients across USA, Canada, Australia, and Europe.'
                    },
                    {
                      title: 'Inclusive Culture',
                      description: 'Be part of a diverse team that values different perspectives and ideas.'
                    },
                    {
                      title: 'Career Growth',
                      description: 'Clear career progression paths with opportunities for leadership roles.'
                    },
                    {
                      title: 'Work-Life Balance',
                      description: 'Flexible working arrangements that support your personal and professional life.'
                    }
                  ].map((benefit, index) => (
                    <div key={benefit.title} className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.1)] border border-gray-150">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Company Overview</h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Experience</span>
                    <span className="font-semibold text-gray-900">25+ Years</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Global Presence</span>
                    <span className="font-semibold text-gray-900">7 Countries</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Team Size</span>
                    <span className="font-semibold text-gray-900">150+ Professionals</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Specialization</span>
                    <span className="font-semibold text-gray-900">Healthcare KPO & Tech</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-600">Location</span>
                    <span className="font-semibold text-gray-900">Coimbatore, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Openings */}
        <section id="current-openings" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Current Openings</h2>
              <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
                Our Growing Team
              </p>
            </div>

            {/* Search and Sort Filter Bar */}
            <div className="max-w-5xl mx-auto mb-12 bg-gray-50 p-6 rounded-2xl border border-gray-200/60 shadow-sm space-y-4">
              {/* Top row: Search input full width */}
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search by role, department, skill, or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-gray-200 text-gray-900 rounded-xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all shadow-sm"
                />
              </div>

              {/* Bottom row: Filter dropdowns */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {/* Location Select */}
                <div className="relative">
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full bg-white border border-gray-200 text-gray-900 rounded-xl py-2.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all appearance-none cursor-pointer shadow-sm"
                  >
                    <option value="All">All Locations</option>
                    <option value="Coimbatore, India">Coimbatore, India</option>
                    <option value="India">India</option>
                    <option value="Work from Home / Anywhere">Work from Home / Anywhere</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <MapPin size={14} />
                  </div>
                </div>

                {/* Job Type Filter */}
                <div className="relative">
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full bg-white border border-gray-200 text-gray-900 rounded-xl py-2.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all appearance-none cursor-pointer shadow-sm"
                  >
                    <option value="All">All Job Types</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <Clock size={14} />
                  </div>
                </div>

                {/* Seniority Filter */}
                <div className="relative">
                  <select
                    value={selectedSeniority}
                    onChange={(e) => setSelectedSeniority(e.target.value)}
                    className="w-full bg-white border border-gray-200 text-gray-900 rounded-xl py-2.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all appearance-none cursor-pointer shadow-sm"
                  >
                    <option value="All">All Levels</option>
                    <option value="Junior">Junior</option>
                    <option value="Senior">Senior</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <Layers size={14} />
                  </div>
                </div>

                {/* Department Filter */}
                <div className="relative">
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="w-full bg-white border border-gray-200 text-gray-900 rounded-xl py-2.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all appearance-none cursor-pointer shadow-sm"
                  >
                    <option value="All">All Departments</option>
                    <option value="Healthcare KPO">Healthcare Services</option>
                    <option value="Software Services">Software Services</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <Filter size={14} />
                  </div>
                </div>
              </div>
            </div>

            {/* Openings Listings Grid */}
            <div className="max-w-4xl mx-auto space-y-8">
              <AnimatePresence mode="popLayout">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job) => (
                    <motion.div
                      key={job.id}
                      layout
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => setPreviewJobId(job.id)}
                      className="bg-gray-50 p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300 border border-transparent hover:border-purple-200 cursor-pointer relative group flex flex-col justify-between"
                    >
                      {/* Quick view indicator on top right */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-purple-50 text-purple-700 p-2 rounded-full border border-purple-200">
                        <Maximize2 size={14} />
                      </div>

                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                        <div>
                          <div className="flex items-center space-x-3 mb-2 flex-wrap gap-y-2">
                            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">{job.title}</h3>
                            <span className={`px-2 py-0.5 rounded text-xs font-bold ${job.seniority === 'Senior' ? 'bg-orange-100 text-orange-800' : 'bg-green-100 text-green-800'}`}>
                              {job.seniority}
                            </span>
                          </div>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                            <span className="bg-blue-100 text-blue-750 px-3 py-1 rounded-full font-medium">{job.department}</span>
                            <span className="bg-purple-100 text-purple-750 px-3 py-1 rounded-full font-medium">{job.type}</span>
                            <span className="bg-orange-150 text-orange-850 px-3 py-1 rounded-full font-medium">{job.location}</span>
                          </div>
                        </div>
                        <Link href={`/careers/jobs/${job.id}`} onClick={(e) => e.stopPropagation()}>
                          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors mt-4 lg:mt-0 relative z-10 shadow-sm">
                            View Details
                          </button>
                        </Link>
                      </div>

                      <p className="text-gray-750 mb-6 leading-relaxed line-clamp-2">{job.description}</p>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2.5">Key Requirements (Preview):</h4>
                          <ul className="space-y-1.5">
                            {job.requirements.slice(0, 2).map((req, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                                <span className="text-gray-600 text-sm line-clamp-1">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="text-xs text-gray-500 font-semibold self-end flex items-center space-x-1.5">
                          <Calendar size={13} />
                          <span>Posted {job.postedDate}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-300 p-8">
                    <Briefcase className="mx-auto text-purple-400 mb-4" size={48} />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">No roles match your filters</h3>
                    <p className="text-gray-500 max-w-sm mx-auto">Try clearing your search query or adjusting your filters to find suitable openings.</p>
                  </div>
                )}
              </AnimatePresence>
            </div>

            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-2xl max-w-2xl mx-auto shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Don&rsquo;t See Your Role?</h3>
                <p className="mb-6 text-purple-100">
                  We&rsquo;re always looking for talented individuals to join our team.
                  Send us your resume and let us know how you can contribute to our success.
                </p>
                <ApplyButton
                  jobTitle="General Application"
                  label="Send Your Resume"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-block shadow-md"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Quick View Modal */}
      <AnimatePresence>
        {previewJobId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 bg-black/60 backdrop-blur-sm"
            onClick={() => setPreviewJobId(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl h-[85vh] flex flex-col overflow-hidden relative"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-150 bg-gray-50/80 backdrop-blur-md shrink-0">
                <div className="flex items-center space-x-3">
                  <Briefcase className="text-purple-600" size={20} />
                  <span className="font-semibold text-gray-900">{jobPositions.find(j => j.id === previewJobId)?.title || 'Role Details'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Link 
                    href={`/careers/jobs/${previewJobId}`}
                    className="text-sm font-medium text-white hover:bg-purple-700 bg-purple-600 px-4 py-2 rounded-lg transition-colors flex items-center space-x-2 mr-2"
                  >
                    <span>View Full Page</span>
                    <ArrowRight size={14} />
                  </Link>
                  <button
                    onClick={() => setPreviewJobId(null)}
                    className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
              <div className="flex-grow bg-white relative">
                {/* Loader while iframe loads */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
                </div>
                <iframe 
                  src={`/careers/jobs/${previewJobId}?modal=true`} 
                  className="w-full h-full relative z-10 border-0 bg-white"
                  title="Job Preview"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  )
}