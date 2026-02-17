import { jobPositions } from '@/lib/career/job-data'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Clock, MapPin, Briefcase, Calendar } from 'lucide-react'
import ApplyButton from '@/components/ApplyButton'

interface JobPageProps {
    params: {
        id: string
    }
}

export async function generateStaticParams() {
    return jobPositions.map((job) => ({
        id: job.id,
    }))
}

export default function JobPage({ params }: JobPageProps) {
    const job = jobPositions.find((j) => j.id === params.id)

    if (!job) {
        notFound()
    }

    return (
        <>
            <Navigation />
            <main className="pt-24 pb-20">
                {/* Job Header */}
                <div className="bg-gradient-to-br from-purple-50 via-white to-blue-50 border-b border-gray-100">
                    <div className="container py-12">
                        <Link
                            href="/career"
                            className="inline-flex items-center text-gray-600 hover:text-purple-600 transition-colors mb-8"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Careers
                        </Link>

                        <div className="max-w-4xl mx-auto">


                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{job.title}</h1>

                            <div className="flex flex-wrap gap-6 text-gray-600 mb-8">
                                <div className="flex items-center">
                                    <Briefcase className="w-5 h-5 mr-2 text-purple-600" />
                                    <span>{job.department}</span>
                                </div>
                                <div className="flex items-center">
                                    <Clock className="w-5 h-5 mr-2 text-purple-600" />
                                    <span>{job.type}</span>
                                </div>
                                <div className="flex items-center">
                                    <MapPin className="w-5 h-5 mr-2 text-purple-600" />
                                    <span>{job.location}</span>
                                </div>
                                <div className="flex items-center">
                                    <Calendar className="w-5 h-5 mr-2 text-purple-600" />
                                    <span>Posted {job.postedDate}</span>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                {/* Job Content */}
                <div className="container py-16">
                    <div className="max-w-4xl mx-auto grid md:grid-cols-[1fr_300px] gap-12">

                        {/* Main Content */}
                        <div className="space-y-12">
                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Role</h2>
                                <p className="text-gray-600 leading-relaxed text-lg">{job.description}</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Responsibilities</h2>
                                <ul className="space-y-3">
                                    {job.responsibilities.map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                                            <span className="text-gray-600 leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h2>
                                <ul className="space-y-3">
                                    {job.requirements.map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                                            <span className="text-gray-600 leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits & Perks</h2>
                                <ul className="space-y-3">
                                    {job.benefits.map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                                            <span className="text-gray-600 leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 sticky top-24">
                                <h3 className="font-bold text-gray-900 mb-4">Job Summary</h3>
                                <div className="space-y-4 text-sm">
                                    <div>
                                        <span className="block text-gray-500 mb-1">Department</span>
                                        <span className="font-medium text-gray-900">{job.department}</span>
                                    </div>
                                    <div>
                                        <span className="block text-gray-500 mb-1">Employment Type</span>
                                        <span className="font-medium text-gray-900">{job.type}</span>
                                    </div>
                                    <div>
                                        <span className="block text-gray-500 mb-1">Location</span>
                                        <span className="font-medium text-gray-900">{job.location}</span>
                                    </div>
                                    <div>
                                        <span className="block text-gray-500 mb-1">Experience</span>
                                        <span className="font-medium text-gray-900">{job.experience}</span>
                                    </div>
                                    <div className="pt-4 mt-4 border-t border-gray-100">
                                        <ApplyButton jobTitle={job.title} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
