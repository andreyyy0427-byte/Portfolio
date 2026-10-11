export const profile = {
    name: 'Andrei Philippe B. Mangabang',
    portfolio: 'Portfolio',
    role: 'Computer Engineering Student',
    location: 'Cattaran, Solana, Cagayan',
    phone: '09911838180',
    email: 'andreyyy0427@gmail.com',
    social: 'Andrei Philippe Mangabang - Facebook'
}

export const aboutParagraph: string[] = [
    'I Love my program.'
]

export const interestText = 'Interested at Development and Creating a Better world for the future.'

export const interestTags = [
    'Embedded Systems',
    'MicroControllers',
    'IoT'
]

export interface Education {
    level: string
    years: string
    school: string
}

export const education: Education[] = [
    {
        level: "Tertiary",
        years: "2023 - Present",
        school: "College of Engineering and Architecture, Cagayan State University - Carig Campus",
    },
    {
        level: "Senior High School",
        years: "2021 - 2023",
        school: "STEM - Andarayan National High School",
    },
    {
        level: "Junior High School",
        years: "2017 - 2021",
        school: "Tagumpay National High School",
    },
    {
        level: "Elementary",
        years: "2011-2017",
        school: "Tagumpay Elementary School",
    },
    {
        level: "Pre-Elementary",
        years: "2008 - 2010",
        school: "New Era University - Kindergarten",
    },
]

export const degree = {
    name: 'Bachelor of Science in Computer Engineering',
    status: '4th year Student',
}

export const majorCourses: string[] = [
    'Database Management',
    'Object Oriented Programming'
]

export const activities: string[] = [
    'Member - ICpEP.se',
    'Member - Committee on Logistics'
]

export const hardSkills: string[] = [
    'Breadboarding',
    'Troubleshooting',
    'English Language Proficient',
    'Sarcasm Proficient'
]

export const softSkills: string[] = [
    'Empathy',
    'Adaptability',
    'Teamwork',
    'Soft spoken'
]

export const languages: string[] = [
    'English',
    'Tagalog',
    'Sarcasm'
]

// ---------- NEW: social media links ----------
export interface SocialLink {
    name: string
    handle: string
    url: string
}

export const socialLinks: SocialLink[] = [
    {
        name: 'Facebook',
        handle: 'Andrei Philippe Mangabang',
        url: 'https://www.facebook.com/profile.php?id=61593062744207',
    },
    {
        name: 'Instagram',
        handle: '@scrdcmptr',
        url: 'https://www.instagram.com/scrdcmptr/',
    },
    {
        name: 'TikTok',
        handle: '@lmaoxdapm',
        url: 'https://www.tiktok.com/@lmaoxdapm',
    },
    {
        name: 'OnlyFans',
        handle: '@u390761402',
        url: 'https://onlyfans.com/u390761402',
    },
]