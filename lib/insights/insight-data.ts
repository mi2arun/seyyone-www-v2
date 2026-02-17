import insightsData from '../../data/insights/posts.json';

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

export const insightPosts: InsightPost[] = insightsData as InsightPost[];

export function getInsightById(id: string): InsightPost | undefined {
    return insightPosts.find(post => post.id === id);
}

export function getInsightsByCategory(category: string): InsightPost[] {
    if (category === 'all') return insightPosts;
    return insightPosts.filter(post => post.category === category);
}
