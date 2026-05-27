import { insightPosts } from '@/lib/insights/insight-data'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Calendar, User, Tag, BookOpen } from 'lucide-react'

interface InsightPageProps {
    params: {
        id: string
    }
    searchParams: {
        modal?: string
    }
}

export async function generateStaticParams() {
    return insightPosts.map((post) => ({
        id: post.id,
    }))
}

export default function InsightPage({ params, searchParams }: InsightPageProps) {
    const postIndex = insightPosts.findIndex((p) => p.id === params.id)
    
    if (postIndex === -1) {
        notFound()
    }

    const post = insightPosts[postIndex]
    const isModal = searchParams?.modal === 'true'

    const prevPost = postIndex > 0 ? insightPosts[postIndex - 1] : null;
    const nextPost = postIndex < insightPosts.length - 1 ? insightPosts[postIndex + 1] : null;

    // Get more related posts (balanced number to match average content height)
    const relatedPosts = [...insightPosts].filter(p => p.id !== post.id).sort((a,b) => (a.category === post.category ? -1 : 1)).slice(0, 4);

    const popularTags = [
        { name: 'Medical Billing', href: '/medical/medical-billing' },
        { name: 'EHR/EMR', href: '/medical/ehr-emr' },
        { name: 'AI Solutions', href: '/technology/ai-ml-solutions' },
        { name: 'Software Services', href: '/technology/software-services' },
        { name: 'Transcription', href: '/medical/medical-transcription' },
        { name: 'Medical Scribe', href: '/medical/medical-scribe' },
        { name: 'Record Summarization', href: '/medical/medical-record-summarization' },
        { name: 'Peer Review Summary', href: '/medical/peer-review-summary' },
        { name: 'APS Summary', href: '/medical/aps-summary' },
        { name: 'Cloud Solutions', href: '/technology/cloud-solutions' },
        { name: 'Mobile Solutions', href: '/technology/mobile-solutions' },
        { name: 'Talent Management', href: '/technology/talent-management' },
        { name: 'Remote Hardware Infra', href: '/technology/remote-hardware-infra' },
        { name: 'Analytics & Reporting', href: '/technology/analytics-reporting' },
        { name: 'Data Security', href: '/hipaa-compliance' },
        { name: 'HIPAA Compliance', href: '/hipaa-compliance' },
        { name: 'Revenue Cycle', href: '/medical/medical-billing' },
        { name: 'Healthcare IT', href: '/technology' },
        { name: 'Cloud Migration', href: '/technology/cloud-solutions' },
        { name: 'Telemedicine', href: '/technology/software-services' },
        { name: 'Patient Care', href: '/medical/medical-scribe' },
        { name: 'App Development', href: '/technology/mobile-solutions' },
        { name: 'Big Data', href: '/technology/analytics-reporting' },
        { name: 'Machine Learning', href: '/technology/ai-ml-solutions' },
        { name: 'Virtual Assistants', href: '/medical/medical-scribe' }
    ]

    const prevNextNav = !isModal && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {prevPost ? (
                <Link href={`/insights/${prevPost.id}`} className="group flex flex-col w-full sm:w-1/2 p-4 rounded-2xl hover:bg-white hover:shadow-md border border-gray-100 hover:border-blue-100 transition-all bg-gray-50/50">
                    <span className="text-xs text-gray-500 mb-1 flex items-center uppercase tracking-wider font-semibold"><ArrowLeft className="w-3 h-3 mr-1 group-hover:-translate-x-1 transition-transform" /> Previous Post</span>
                    <span className="font-bold text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors">{prevPost.title}</span>
                </Link>
            ) : <div className="w-full sm:w-1/2 p-4"></div>}
            
            {nextPost ? (
                <Link href={`/insights/${nextPost.id}`} className="group flex flex-col items-end text-right w-full sm:w-1/2 p-4 rounded-2xl hover:bg-white hover:shadow-md border border-gray-100 hover:border-blue-100 transition-all bg-gray-50/50">
                    <span className="text-xs text-gray-500 mb-1 flex items-center uppercase tracking-wider font-semibold">Next Post <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" /></span>
                    <span className="font-bold text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors">{nextPost.title}</span>
                </Link>
            ) : <div className="w-full sm:w-1/2 p-4"></div>}
        </div>
    );

    return (
        <>
            {!isModal && <Navigation />}
            <main className={`${isModal ? 'py-6' : 'pt-24 pb-20'} bg-gray-50`}>
                {/* Hero / Header */}
                <div className="bg-white border-b border-gray-100">
                    <div className="container py-12">
                        <div className="max-w-4xl mx-auto">
                            {!isModal && (
                                <Link
                                    href="/insights"
                                    className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors mb-8 group"
                                >
                                    <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                                    Back to Insights
                                </Link>
                            )}
                            <div className="flex items-center space-x-2 mb-6">
                                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                                    {post.category.replace('-', ' ')}
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                                {post.title}
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 text-gray-600 pb-4">
                                <div className="flex items-center">
                                    <User className="w-5 h-5 mr-2 text-blue-600" />
                                    <span className="font-medium text-gray-900">{post.author}</span>
                                </div>
                                <div className="flex items-center">
                                    <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                                    <span>{post.date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cover Image */}
                {post.image && (
                    <div className="container py-8">
                        <div className="max-w-4xl mx-auto">
                            <img src={post.image} alt={post.title} className="w-full h-auto rounded-3xl shadow-lg" />
                        </div>
                    </div>
                )}

                {/* Content Section with Sidebar */}
                <div className="container py-8">
                    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
                        {/* Main Article */}
                        <div className="lg:w-2/3 flex flex-col gap-8">
                            {/* Top Navigation */}
                            {prevNextNav}

                            <article
                                className="bg-white p-8 md:p-12 rounded-3xl shadow-xl blog-content max-w-none"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />

                            {/* Bottom Navigation */}
                            {prevNextNav}
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:w-1/3 space-y-8 sticky top-28 self-start">
                            {/* Tags / Topics */}
                            <div className="bg-white p-6 rounded-3xl shadow-md border border-gray-100">
                                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                                    <Tag className="w-5 h-5 mr-2 text-blue-600" />
                                    Explore Topics
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {popularTags.map(tag => (
                                        <Link key={tag.name} href={tag.href} target={isModal ? "_parent" : "_self"} className="bg-gray-50 border border-gray-200 text-gray-700 px-3 py-1.5 rounded-lg text-sm hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors">
                                            {tag.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Related Posts */}
                            <div className="bg-white p-6 rounded-3xl shadow-md border border-gray-100">
                                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                                    <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                                    Related Reads
                                </h3>
                                <div className="space-y-6">
                                    {relatedPosts.map(rp => (
                                        <div key={rp.id} className="group">
                                            <Link href={`/insights/${rp.id}`} target={isModal ? "_parent" : "_self"} className="block">
                                                {rp.image && (
                                                    <div className="w-full h-32 rounded-xl overflow-hidden mb-3">
                                                        <img src={rp.image} alt={rp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                                    </div>
                                                )}
                                                <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 text-sm mb-1">{rp.title}</h4>
                                                <p className="text-xs text-gray-500">{rp.readTime}</p>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
            {!isModal && <Footer />}
        </>
    )
}
