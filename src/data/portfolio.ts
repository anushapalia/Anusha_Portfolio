export const siteConfig = {
  name: "Anusha Palia",
  title: "Anusha Palia | Full Stack Developer",
  description:
    "Full-Stack Developer building clean, scalable and user-friendly products. Experience in JavaScript, TypeScript, React, Angular, Node.js, and more.",
  url: "https://anushapalia.dev", // TODO: Update with your deployed URL
  ogImage: "/og-image.png", // TODO: Add og-image.png to public/
  location: "Delhi, India",
  email: "anushapalia2003@gmail.com",
  phone: "9891169757",
  initials: "AP",
};

export const hero = {
  name: siteConfig.name,
  tagline: "Full-Stack Developer building clean, scalable and user-friendly products",
  intro:
    "Full-Stack Developer with internship experience in JavaScript, TypeScript, React.js, Angular, Node.js and PHP; REST APIs, database integration (MongoDB, MySQL, Firebase) and CI/CD with GitHub Actions. Focused on clean, maintainable code and effective collaboration on product engineering teams.",
  badge: "Currently Full Stack Developer Intern @ Wingify (VWO)",
  roles: [
    "Full Stack Developer",
    "React & Angular Developer",
    "AI & Mobile Developer",
  ],
  resumePath: "/resume.pdf",
};

export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/anushapalia",
    icon: "github" as const,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/anusha-palia-820a2727a",
    icon: "linkedin" as const,
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/Anusha_Palia",
    icon: "leetcode" as const,
  },
  {
    name: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: "mail" as const,
  },
];

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  summary: hero.intro,
  education: {
    degree: "B.Tech in Computer Science and Artificial Intelligence",
    institution: "Indira Gandhi Delhi Technical University for Women (IGDTUW)",
    location: "Delhi",
    period: "Nov 2022 – May 2026",
  },
  stats: [
    { label: "Internships", value: 4, suffix: "" },
    { label: "Reusable Angular Components Built", value: 5, suffix: "+" },
    { label: "UI Issues Fixed", value: 10, suffix: "+" },
    { label: "REST API Endpoints Designed", value: 6, suffix: "+" },
    { label: "Students Reached (Campus Ambassador)", value: 200, suffix: "+" },
  ],
};

export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  tech: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "wingify",
    role: "Full Stack Developer Intern",
    company: "Wingify (VWO)",
    location: "Remote",
    period: "Apr 2026 – Present",
    bullets: [
      "Built 5+ reusable Angular, TypeScript and PHP UI components for VWO product features, improving UI consistency across workflows and reducing repeated frontend implementation.",
      "Fixed 10+ device-specific UI, frame and alignment issues in mobile session recording and heatmap flows, improving reliability across common mobile viewports and browsers.",
      "Developed 3 MCP server tools in Python and evaluated Langfuse for observability and tracing in AI-assisted development workflows.",
    ],
    tech: ["Angular", "TypeScript", "PHP", "Python", "MCP", "Langfuse"],
  },
  {
    id: "fairseat",
    role: "Full Stack Developer Intern",
    company: "FairSeat",
    location: "Remote",
    period: "Jun 2025 – Aug 2025",
    bullets: [
      "Built full-stack features with TypeScript, Node.js, MongoDB and Prisma; designed 6+ reusable REST API endpoints and backend modules for product workflows.",
      "Configured a GitHub Actions CI/CD pipeline to automate build, test and deployment steps for release workflows.",
    ],
    tech: ["TypeScript", "Node.js", "MongoDB", "Prisma", "GitHub Actions"],
  },
  {
    id: "igdtuw",
    role: "AI & Mobile App Developer",
    company: "IGDTUW AI.DS Department",
    location: "Remote",
    period: "May 2024 – Jul 2024",
    bullets: [
      "Developed 2 AI-powered mobile applications using Flutter, Python and REST APIs.",
      "Integrated Firebase Authentication and Firestore for secure sign-in and structured data storage.",
    ],
    tech: ["Flutter", "Python", "Firebase", "REST APIs"],
  },
  {
    id: "anveshan",
    role: "Web Development Intern",
    company: "Anveshan Foundation",
    location: "Remote",
    period: "May 2023 – Jul 2023",
    bullets: [
      "Built responsive React.js and Firebase web apps with reusable components; supported SEO, Google Analytics, A/B testing and Python/Pandas reporting.",
    ],
    tech: ["React.js", "Firebase", "SEO", "Google Analytics", "Pandas"],
  },
];

export type SkillCategory = {
  title: string;
  skills: { name: string; icon: string }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: "java" },
      { name: "Python", icon: "python" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "PHP", icon: "php" },
      { name: "Dart", icon: "dart" },
      { name: "SQL", icon: "sql" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React.js", icon: "react" },
      { name: "Angular", icon: "angular" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Flutter", icon: "flutter" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Prisma", icon: "prisma" },
      { name: "NumPy", icon: "numpy" },
      { name: "Matplotlib", icon: "matplotlib" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "MySQL", icon: "mysql" },
      { name: "Firebase (Firestore)", icon: "firebase" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Postman", icon: "postman" },
      { name: "VS Code", icon: "vscode" },
      { name: "GitHub Actions (CI/CD)", icon: "githubactions" },
      { name: "Langfuse", icon: "langfuse" },
      { name: "MCP (Python)", icon: "python" },
    ],
  },
];

export const marqueeTech = [
  "React",
  "Angular",
  "TypeScript",
  "Node.js",
  "Flutter",
  "MongoDB",
  "Firebase",
  "Prisma",
  "Python",
  "Tailwind",
  "GitHub Actions",
];

export type Project = {
  id: string;
  title: string;
  date: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  gradient: string;
};

export const projects: Project[] = [
  {
    id: "music-streaming",
    title: "Music Streaming Website",
    date: "May 2023",
    description:
      "Full-stack streaming app with Spotify API integration, Firebase OTP authentication and secure payment flows.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "Spotify API", "Firebase"],
    githubUrl: "[PROJECT_GITHUB_LINK]", // TODO: Replace with real GitHub URL
    liveUrl: "[LIVE_LINK]", // TODO: Replace with live demo URL
    gradient: "from-violet-600 via-purple-500 to-fuchsia-500",
  },
  {
    id: "recipe-app",
    title: "Recipe Generation App",
    date: "Mar 2024",
    description:
      "Flutter recipe app built with REST APIs and Firebase; refined recommendation inputs and API integration for relevant AI-generated suggestions.",
    tech: ["Flutter", "Dart", "Firebase", "REST APIs"],
    githubUrl: "[PROJECT_GITHUB_LINK]", // TODO: Replace with real GitHub URL
    gradient: "from-cyan-600 via-blue-500 to-indigo-600",
  },
];

export const research = {
  title: "Research & Publications",
  items: [
    {
      title: 'Co-authored "Recipe Generate with AI"',
      venue: "ICICC (submitted for review)",
    },
  ],
};

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  year: string;
  link: string;
  type: "cert" | "achievement" | "leetcode";
  description?: string;
};

export const certifications: Certification[] = [
  {
    id: "devtown-fe",
    title: "Frontend Development Bootcamp",
    issuer: "DevTown",
    year: "2024",
    link: "[CERT_LINK]", // TODO
    type: "cert",
  },
  {
    id: "deloitte",
    title: "Data Analytics Virtual Internship",
    issuer: "Deloitte",
    year: "2025",
    link: "[CERT_LINK]", // TODO
    type: "cert",
  },
  {
    id: "walmart",
    title: "Walmart Hackathon",
    issuer: "Walmart",
    year: "2025",
    link: "[CERT_LINK]", // TODO
    type: "achievement",
  },
  {
    id: "devtown-ambassador",
    title: "Campus Ambassador, DevTown",
    issuer: "DevTown",
    year: "",
    link: "[CERT_LINK]", // TODO
    type: "achievement",
    description: "Organized events for 200+ students",
  },
  {
    id: "tvs",
    title: "TVS Credit EPIC 7.0, IT Challenge",
    issuer: "TVS Credit",
    year: "2025",
    link: "[CERT_LINK]", // TODO
    type: "achievement",
  },
  {
    id: "leetcode",
    title: "LeetCode Profile",
    issuer: "LeetCode",
    year: "",
    link: "https://leetcode.com/u/Anusha_Palia",
    type: "leetcode",
  },
];

export const contact = {
  heading: "Let's build something great together",
  formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID", // TODO: Replace YOUR_FORM_ID with Formspree form ID
};
