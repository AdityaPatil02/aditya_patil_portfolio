export const profile = {
  name: 'Aditya Patil',
  headline: 'Freelance Web Developer | System Engineer Trainee at Infosys Limited',
  designation: 'Founder – PATIL GROUPS',
  businessFocus: 'Professional Website Development',
  email: 'adityapatil0275@gmail.com',
  phone: '+91 6363552689',
  phoneHref: 'tel:+916363552689',
  resumeUrl: 'https://drive.google.com/file/d/1dG2lGB-8HUqoWMZ22Gpy2dtmf3bbmtQu/view?usp=sharing',
  photo: '/images/WhatsApp_Image_2026-08-30_at_00.12.24.jpeg',
  logo: '/images/Patil_Groups_Gold_Skyline_Logo.png',
};

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/AdityaPatil02', handle: 'AdityaPatil02' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aditya-patil-60138525a/',
    handle: 'aditya-patil-60138525a',
  },
  { label: 'Instagram', href: 'https://www.instagram.com/adiipatil__02', handle: '@adiipatil__02' },
  { label: 'X', href: 'https://x.com/adityapatil275', handle: '@adityapatil275' },
] as const;

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
] as const;

export const aboutParagraphs = [
  'I am a Computer Science Engineering graduate and a System Engineer Trainee at Infosys Limited. I am passionate about software development, web technologies, artificial intelligence, and emerging technologies.',
  'Alongside my professional journey, I develop responsive websites and web applications. I enjoy learning new technologies, solving problems, and building practical solutions.',
];

export const highlights = [
  { value: 'Full Stack', label: 'Front-end to back-end' },
  { value: 'Responsive', label: 'Desktop, tablet and mobile' },
  { value: 'Clean Code', label: 'Maintainable and scalable' },
];

export const skillGroups = [
  { title: 'Programming Languages', items: ['Java', 'C', 'C++', 'JavaScript', 'Python'] },
  { title: 'Front-end', items: ['HTML', 'CSS', 'Bootstrap', 'Tailwind CSS', 'React'] },
  { title: 'Back-end', items: ['Node.js', 'Express.js', 'PHP'] },
  { title: 'Databases', items: ['MySQL', 'MongoDB'] },
  { title: 'AI and Machine Learning', items: ['Machine Learning', 'Deep Learning', 'XGBoost', 'SHAP'] },
  { title: 'Tools and Platforms', items: ['Git', 'GitHub', 'VS Code', 'Microsoft Excel', 'Vercel', 'Render', 'Docker'] },
];

export const services = [
  {
    title: 'Business Website Development',
    description: 'Professional corporate and company websites that communicate credibility and make it easy for clients to reach you.',
  },
  {
    title: 'Restaurant Website Development',
    description: 'Elegant menu-driven websites with clear dining details, reservation calls to action and a look that suits your brand.',
  },
  {
    title: 'Portfolio Website Development',
    description: 'Personal and professional portfolios that showcase your work, skills and experience with a polished presentation.',
  },
  {
    title: 'Responsive Website Design',
    description: 'Clean, modern layouts that adapt smoothly to desktops, tablets and mobile phones.',
  },
  {
    title: 'Landing Page Development',
    description: 'Focused, conversion-oriented pages for campaigns, product launches and lead generation.',
  },
  {
    title: 'Website Redesign',
    description: 'Modernize an outdated website with a fresh design, faster performance and a layout that works on every screen size.',
  },
];

export const projects: {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  image: string;
  imageAlt: string;
}[] = [
  {
    title: 'Zaika – Premium Restaurant Website',
    category: 'Web Development',
    description:
      'Designed and developed a modern, responsive restaurant website featuring an attractive interface, restaurant information, menu presentation, and a premium dining experience.',
    technologies: [],
    liveUrl: 'https://restaurant-website-taupe-seven-29.vercel.app',
    githubUrl: 'https://github.com/AdityaPatil02/restaurant-website',
    image: 'https://images.pexels.com/photos/6876589/pexels-photo-6876589.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
    imageAlt: 'Elegant restaurant interior with stylish seating and warm lighting',
  },
  {
    title: 'AI-Powered Epilepsy Variant Diagnostic Assistant',
    category: 'AI and Genomics',
    description:
      'An AI-driven genomic variant classification system using XGBoost, automated ACMG/AMP classification and SHAP-based explainability. Developed a 93-dimensional genomic feature pipeline achieving 89.89% accuracy in pathogenicity prediction. Integrated ClinVar, gnomAD, PubMed and PharmGKB through a RAG pipeline.',
    technologies: ['Python', 'XGBoost', 'SHAP', 'FastAPI', 'React'],
    liveUrl: null,
    githubUrl: 'https://github.com/AdityaPatil02/Epilepsy-Variant-Diagnostic-Assistant',
    image: 'https://images.pexels.com/photos/39588768/pexels-photo-39588768.png?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
    imageAlt: 'Metallic gold DNA helix on a dark background',
  },
  {
    title: 'Real Estate Management System',
    category: 'Web Application',
    description:
      'A property management application featuring property listings, search filters, inquiry management and role-based access.',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'PHP', 'MySQL'],
    liveUrl: null,
    githubUrl: 'https://github.com/AdityaPatil02/Real-Estate-Management',
    image: 'https://images.pexels.com/photos/13752348/pexels-photo-13752348.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
    imageAlt: 'Contemporary villa with a stunning facade illuminated at dusk',
  },
  {
    title: 'Virtual Rock Paper Scissor Using AI',
    category: 'AI Game',
    description: 'AI-powered Rock, Paper, Scissors game built with HTML, CSS and JavaScript.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: null,
    githubUrl: 'https://github.com/AdityaPatil02/Virtual-Rock-Paper-Scissor-Using-AI',
    image: 'https://images.pexels.com/photos/16748674/pexels-photo-16748674.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
    imageAlt: 'Wooden hand forming a rock gesture on a dark background',
  },
];

export const experience: {
  role: string;
  company: string;
  location?: string;
  period: string;
  points: string[];
}[] = [
  {
    role: 'System Engineer Trainee',
    company: 'Infosys Limited',
    location: 'Mysuru DC, Karnataka',
    period: 'July 2026 – Present',
    points: [
      'Completed Java and Data Structures and Algorithms training at Infosys.',
      'Building foundational skills in enterprise software engineering.',
    ],
  },
  {
    role: 'Artificial Intelligence Intern',
    company: 'Indian Institute of Remote Sensing (IIRS), ISRO',
    period: 'September 2025',
    points: ['Artificial Intelligence internship involving AI and Machine Learning.'],
  },
  {
    role: 'Machine Learning Intern',
    company: 'Corizo',
    period: 'April 2025 – May 2025',
    points: ['Completed a Machine Learning internship and worked on a Stock Market Price Prediction project.'],
  },
];

export const education: {
  level: string;
  title?: string;
  institution: string;
  period: string;
  score: string;
  status?: string;
}[] = [
  {
    level: 'Bachelor of Engineering',
    title: 'Computer Science and Engineering',
    institution: 'JSS Science and Technology University, Mysuru',
    period: 'January 2022 – September 2026',
    score: 'CGPA: 8.25/10',
    status: 'Completed in 2026',
  },
  {
    level: 'Pre-University Course',
    title: 'PCMB',
    institution: 'Shree Channabasaveshwara Gurukula PU College, Kardyal',
    period: 'June 2020 – July 2022',
    score: 'Percentage: 95.83%',
  },
  {
    level: 'High School',
    institution: 'Shree Channabasaveshwar Gurukula Residential High School, Kardyal',
    period: 'June 2019 – August 2020',
    score: 'Percentage: 92%',
  },
];

export const certifications: { title: string; issuer?: string }[] = [
  {
    title: 'Java and Data Structures and Algorithms Training',
    issuer: 'Infosys',
  },
  {
    title: 'SQL Training',
  },
  {
    title: 'Conversational AI, Machine Learning and Deep Learning',
    issuer: 'IIRS, ISRO',
  },
  {
    title: 'Machine Learning Internship',
    issuer: 'Corizo',
  },
];
