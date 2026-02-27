import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiCss3,
  SiNodedotjs, SiExpress, SiPostgresql,
  SiGit, SiGithub, SiVsco, SiFigma, SiDocker, SiKubernetes, SiPython, SiJavascript, 
  SiFastapi, SiDotnet, SiMui, SiJira, SiSplunk, SiAmazon,
} from "react-icons/si";
// ============================================
// SITE CONFIG — Update your personal info here
// ============================================
export const siteConfig = {
  name: "Thirumala Sai Sriram",
  role: "Software Engineer",
  tagline: "I build things for the web.",
  email: "you@email.com",
  linkedin: "https://www.linkedin.com/in/thirumala-sai-sriram-p-5a0950199/",
  github: "https://github.com/yourname",
  resume: "/resume.pdf",
};

// ============================================
// INTRODUCTION
// ============================================
export const introduction = {
  greeting: "Hi, I'm",
  description:
    "A passionate Fullstack Developer who loves building modern web applications. I enjoy turning complex problems into simple, beautiful solutions.",
};

// ============================================
// ABOUT ME
// ============================================
export const aboutMe = {
  bio: "I'm a fullstack developer with a passion for creating seamless digital experiences. When I'm not coding, you'll find me exploring new technologies, contributing to open source, or debugging at 2 AM.",
};

// ============================================
// PROJECTS
// ============================================
export const projects = [
  {
    title: "Project One",
    description: "A brief description of what this project does and the problem it solves.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/yourname/project-one",
    live: "https://project-one.vercel.app",
  },
  {
    title: "Project Two",
    description: "A brief description of what this project does and the problem it solves.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourname/project-two",
    live: "",
  },
  {
    title: "Project Three",
    description: "A brief description of what this project does and the problem it solves.",
    tech: ["Vue.js", "Express", "PostgreSQL"],
    github: "https://github.com/yourname/project-three",
    live: "https://project-three.vercel.app",
  },
];

// ============================================
// SKILLS
// ============================================
export const skills = {
  languages: [
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "C#", icon: null, color: "#9B4F96" },
  ],
  frontend: [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Material UI", icon: SiMui, color: "#007FFF" },
    { name: "HTML", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", icon: SiCss3, color: "#1572B6" },
  ],
  backend: [
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express", icon: SiExpress, color: "#ffffff" },
    { name: "FastAPI", icon: SiFastapi, color: "#009688" },
    { name: ".NET", icon: SiDotnet, color: "#512BD4" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  ],
  cloud: [
    { name: "AWS S3", icon: SiAmazon, color: "#FF9900" },
    { name: "AWS Lambda", icon: SiAmazon, color: "#FF9900" },
    { name: "AWS EC2", icon: SiAmazon, color: "#FF9900" },
    { name: "Splunk", icon: SiSplunk, color: "#FF6600" },
  ],
  tools: [
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#ffffff" },
    { name: "VS Code", icon: SiVsco, color: "#007ACC" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
    { name: "Jira", icon: SiJira, color: "#0052CC" },
  ],
};

// ============================================
// EXPERIENCE
// ============================================
export const experience = [
  {
    role: "Software Engineer",
    company: "Synovus",
    location: "Atlanta, United States",
    period: "Dec 2024 – Present",
    current: true,
    description:
      "Describe what you did here — technologies used, impact made, teams worked with.",
  },
  {
    role: "Software Engineer",
    company: "AdventHealth",
    location: "Hyderabad, India",
    period: "Nov 2023 – July 2023",
    current: false,
    description:
      "At AdventHealth, I built and maintained an internal Electronic Health Record system, delivering a unified desktop interface with robust state management, scalable APIs, and secure data communication. I drove code quality through automated testing, enforced strict database integrity, and streamlined deployment workflows through containerization and CI/CD practices.",
  },
  {
    role: "Frontend Developer",
    company: "Ericsson",
    location: "Hyderabad, India",
    period: "Mar 2020 – Oct 2021",
    current: false,
    description:
      "As a Marketing Frontend Developer at Ericsson, I was responsible for building consumer-facing campaign landing pages, bridging design and technology by translating Figma mockups into pixel-perfect, responsive experiences using Next.js, React.js, and TypeScript. I managed CMS templates, empowered marketing teams to update content independently, and ensured consistent brand presentation across all digital assets.",
  },
];

// ============================================
// EDUCATION
// ============================================
export const education = [
  {
    degree: "Master's in Computer Science",
    institution: "Lamar University",
    location: "Beaumont, TX",
    period: "2023 – 2025",
    description: "Relevant coursework, achievements, or activities.",
  },

  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Dhanekula Institute of Engineering and Technology",
    location: "Vijayawada, Andhra Pradesh",
    period: "2019 – 2023",
    description: "Relevant coursework, achievements, or activities.",
  },
];

// ============================================
// INTERESTS
// ============================================
export const interests = [
  { label: "NeetCode", link: "https://neetcode.io/profile/yourusername" },
  { label: "Open Source", link: "" },
  { label: "Reading", link: "" },
  { label: "Running", link: "" },
  { label: "Music", link: "" },
  { label: "Travelling", link: "" },
  
];