import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { jobPositions } from '@/lib/career/job-data'

import Footer from '@/components/Footer'

export const metadata = {
  title: 'Careers at Seyyone | Join Our Team of Innovators',
  description: 'Join Seyyone and be part of a dynamic team delivering exceptional Healthcare KPO and Technology solutions. Explore career opportunities in a forward-thinking environment.',
  keywords: 'seyyone careers, jobs, healthcare kpo jobs, software developer jobs, medical transcription jobs, coimbatore jobs'
}

export default function CareerPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-6 py-3 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
                Join Our Team
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                <span className="text-gray-900">Innovators &</span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Problem Solvers
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
                Join our team of passionate technology professionals dedicated to delivering exceptional
                IT solutions and Healthcare KPO services. Be part of something extraordinary.
              </p>
            </div>
          </div>
        </section>

        {/* Work Culture */}
        <section className="py-20 bg-white">
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
                  icon: '🤝',
                  color: 'blue'
                },
                {
                  title: 'Innovation',
                  description: 'We continuously explore cutting-edge technologies and creative solutions.',
                  icon: '💡',
                  color: 'purple'
                },
                {
                  title: 'Collaboration',
                  description: 'We believe in the power of teamwork and collective problem-solving.',
                  icon: '🤝',
                  color: 'green'
                },
                {
                  title: 'Excellence',
                  description: 'We strive for the highest quality standards in everything we deliver.',
                  icon: '🏆',
                  color: 'orange'
                },
                {
                  title: 'Customer Focus',
                  description: 'We prioritize client needs and work tirelessly to exceed expectations.',
                  icon: '🎯',
                  color: 'red'
                },
                {
                  title: 'Accountability',
                  description: 'We take responsibility and deliver on our commitments with reliability.',
                  icon: '✅',
                  color: 'indigo'
                }
              ].map((value, index) => (
                <div key={value.title} className="bg-gray-50 p-8 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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

              <div className="bg-white p-8 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.1)]">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Company Overview</h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Experience</span>
                    <span className="font-semibold text-gray-900">25+ Years</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Global Presence</span>
                    <span className="font-semibold text-gray-900">8 Countries</span>
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
        <section id="open-positions" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Current Openings</h2>
              <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
                Join our growing team and make a difference in Healthcare and Technology sectors.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {jobPositions.map((job) => (
                <div key={job.id} className="bg-gray-50 p-8 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">{job.department}</span>
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">{job.type}</span>
                        <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full">{job.location}</span>
                      </div>
                    </div>
                    <Link href={`/career/jobs/${job.id}`}>
                      <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors mt-4 lg:mt-0">
                        View Details
                      </button>
                    </Link>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed line-clamp-2">{job.description}</p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.slice(0, 3).map((req, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-600 line-clamp-1">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-2xl max-w-2xl mx-auto shadow-[0_0_15px_rgba(0,0,0,0.1)]">
                <h3 className="text-2xl font-bold mb-4">Don&rsquo;t See Your Role?</h3>
                <p className="mb-6">
                  We&rsquo;re always looking for talented individuals to join our team.
                  Send us your resume and let us know how you can contribute to our success.
                </p>
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Send Your Resume
                </button>
              </div>
            </div>
          </div>
        </section>


      </main >
      <Footer />
    </>
  )
}