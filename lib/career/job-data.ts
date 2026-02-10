import jobsData from '../../data/career/jobs.json';

export interface JobPosition {
    id: string;
    slug: string;
    title: string;
    department: string;
    type: string;
    location: string;
    description: string;
    experience: string;
    requirements: string[];
    responsibilities: string[];
    benefits: string[];
    postedDate: string;
}

export const jobPositions: JobPosition[] = jobsData as JobPosition[];
