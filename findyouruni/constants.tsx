
import React from 'react';
import { 
  BookOpen, 
  MapPin, 
  FileText, 
  Search, 
  Award, 
  ClipboardCheck, 
  Users, 
  GraduationCap,
  Globe,
  Coins,
  Briefcase
} from 'lucide-react';
import { Service, Destination, BlogPost } from './types';

export const CONTACT_INFO = {
  phone: '+91 9311449441',
  email: 'contact@findyouruni.com',
  address: 'Global Advisory Hub, New Delhi, India'
};

export const SERVICES: Service[] = [
  {
    id: 'university-finding',
    title: 'University Finding',
    shortDesc: 'Strategic shortlisting based on profile, goals, and institutional fit.',
    fullDesc: 'We move beyond rankings to find institutions that align with your academic strengths and career trajectory. Our database is built on independent research, not commission agreements.',
    process: ['Initial Profile Diagnostic', 'Independent Research Phase', 'Shortlist Presentation', 'Pros & Cons Analysis'],
    mistakes: ['Relying solely on commercial rankings', 'Selecting only "Brand Name" unis without fit analysis', 'Ignoring financial sustainability'],
    idealFor: 'Students seeking a curated list of targets based on pure merit and fit.'
  },
  {
    id: 'sop-writing',
    title: 'Statement of Purpose (SOP)',
    shortDesc: 'Articulating your unique narrative with academic precision.',
    fullDesc: 'The SOP is your only voice in the admissions room. We help you synthesize your experiences into a compelling, coherent academic narrative that resonates with faculty committees.',
    process: ['Brainstorming Sessions', 'Drafting & Narrative Structuring', 'Tone Refinement', 'Final Academic Polish'],
    mistakes: ['Using generic templates', 'Focusing too much on childhood and not enough on academic goals', 'Failing to link past experience to future modules'],
    idealFor: 'Applicants aiming for top-tier research or taught programs where competition is fierce.'
  },
  {
    id: 'scholarship-identification',
    title: 'Scholarships & Funding',
    shortDesc: 'Identifying merit-based and need-based financial aid.',
    fullDesc: 'We provide an honest assessment of your chances for funding. We look for university-specific, government-sponsored, and external private grants.',
    process: ['Eligibility Audit', 'External Grant Research', 'Application Strategic Review', 'Budgeting & Financial Planning'],
    mistakes: ['Missing deadlines for early-bird grants', 'Applying for scholarships without meeting core criteria', 'Not detailing research impact for grants'],
    idealFor: 'Academically strong students looking to offset the cost of international education.'
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'uk',
    name: 'United Kingdom',
    system: 'Research-led education with a focus on specialized mastery. Taught Masters are typically 1 year.',
    types: 'Russell Group (Research intensive), Modern Universities, and specialized conservatoires.',
    cost: '£15,000 - £35,000 (Tuition); £12,000+ (Living).',
    work: '20 hours/week during term; 40 hours during breaks.',
    visa: 'Graduate Route: 2 years post-study work permit (3 years for PhD).'
  },
  {
    id: 'usa',
    name: 'USA',
    system: 'Flexible curriculum allowing for major changes and diverse electives. Strong emphasis on holistic admissions.',
    types: 'Ivy League, Private Research Universities, Large State Systems, Liberal Arts Colleges.',
    cost: '$35,000 - $75,000 (Total per year depending on aid).',
    work: 'On-campus restricted to 20 hours/week.',
    visa: 'F1 Visa with OPT (12 months) + 24 months STEM extension if eligible.'
  },
  {
    id: 'canada',
    name: 'Canada',
    system: 'High-quality public education with a strong link to immigration and industry needs.',
    types: 'U15 Group (Research intensive), Comprehensive Universities, Community Colleges.',
    cost: 'CAD 20,000 - 55,000 (Tuition).',
    work: 'Varies; historically 20 hours/week, now subject to policy updates.',
    visa: 'PGWP (Post-Graduation Work Permit) valid for up to 3 years.'
  },
  {
    id: 'europe',
    name: 'Europe (Ireland, Germany, Netherlands)',
    system: 'Diverse systems; Germany offers low/no tuition; Netherlands focuses on English-taught technical programs.',
    types: 'TU9 (Germany), U15 (Netherlands), Trinity/UCD (Ireland).',
    cost: '€0 - €20,000 (Tuition); €10,000 - €15,000 (Living).',
    work: 'Varies by country; usually 20 hours/week.',
    visa: '1-year job seeker visa commonly available after graduation.'
  },
  {
    id: 'australia',
    name: 'Australia',
    system: 'Modern, globally recognized qualifications with strong industry placement focus.',
    types: 'Group of Eight (Go8), ATN Universities.',
    cost: 'AUD 30,000 - 50,000 (Tuition).',
    work: 'Up to 48 hours per fortnight.',
    visa: 'Temporary Graduate Visa (Subclass 485) - 2 to 4 years post-study.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Hidden Conflict: Why Commission-Based Consulting Hurts Students',
    category: 'Industry Insights',
    date: 'Oct 12, 2023',
    summary: 'When your consultant is paid by the university to recruit you, whose interests are they really serving? We expose the commission-driven model.'
  },
  {
    id: '2',
    title: 'SOP Strategy: Connecting Research Interests to Module Selection',
    category: 'Academic Writing',
    date: 'Nov 05, 2023',
    summary: 'A deep dive into how to demonstrate genuine program fit by mapping your past research to the university’s current curriculum.'
  },
  {
    id: '3',
    title: 'Beyond the Ivy League: Finding Hidden Gems in the US Public System',
    category: 'University Research',
    date: 'Dec 01, 2023',
    summary: 'Why state universities like Berkeley, Michigan, and UT Austin often offer better research ROI than private elite institutions.'
  },
  {
    id: '4',
    title: 'Scholarships for 2024: A Realistic Assessment of Funding Sources',
    category: 'Scholarships',
    date: 'Jan 10, 2024',
    summary: 'Differentiating between university-specific aid, government grants (Chevening, Fulbright), and private endowments.'
  }
];
