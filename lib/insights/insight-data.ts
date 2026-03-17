import blogsData from '../../data/insights/blogs.json';
import articlesData from '../../data/insights/articles.json';
import caseStudiesData from '../../data/insights/case-studies.json';

export interface InsightPost {
    id: string;
    category: 'blogs' | 'articles' | 'case-studies';
    title: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    readTime: string;
    image: string;
    tags?: string[];
}

export const insightPosts: InsightPost[] = [
    ...blogsData,
    ...articlesData,
    ...caseStudiesData
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) as InsightPost[];

export function getInsightById(id: string): InsightPost | undefined {
    return insightPosts.find(post => post.id === id);
}

export function getInsightsByCategory(category: string): InsightPost[] {
    if (category === 'all') return insightPosts;
    return insightPosts.filter(post => post.category === category);
}
