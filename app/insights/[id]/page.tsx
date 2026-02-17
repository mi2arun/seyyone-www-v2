import { insightPosts } from '@/lib/insights/insight-data'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, User } from 'lucide-react'

interface InsightPageProps {
    params: {
        id: string
    }
}

export async function generateStaticParams() {
    return insightPosts.map((post) => ({
        id: post.id,
    }))
}

export default function InsightPage({ params }: InsightPageProps) {
    const post = insightPosts.find((p) => p.id === params.id)

    if (!post) {
        notFound()
    }

    return (
        <>
            <Navigation />
            <main className="pt-24 pb-20 bg-gray-50">
                {/* Hero / Header */}
                <div className="bg-white border-b border-gray-100">
                    <div className="container py-12">
                        <div className="max-w-4xl mx-auto">
                            <Link
                                href="/insights"
                                className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors mb-8 group"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                                Back to Insights
                            </Link>

                            <div className="flex items-center space-x-2 mb-6">
                                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                                    {post.category.replace('-', ' ')}
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                                {post.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 text-gray-600 pb-8">
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

                {/* Content Section */}
                <div className="container py-16">
                    <div className="max-w-4xl mx-auto">
                        {/* Article Text */}
                        <article
                            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl prose prose-lg prose-blue max-w-none"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
