import {
  css,
  docker,
  git,
  html,
  javascript,
  nodejs,
  reactjs,
  tailwind,
  typescript,
  project1,
  project2,
  project3,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: "WebIcon",
  },
  {
    title: "React Developer",
    icon: "ReactIcon",
  },
  {
    title: "Idea Alchemist",
    icon: "ServerIcon",
  },
  {
    title: "Visual Narrator",
    icon: "PenToolIcon",
  },
];

// Using direct URLs for tech icons to avoid loading issues
const technologies = [
  {
    name: "HTML 5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS 3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  {
    name: "Node JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Pyonix Technologies",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    iconBg: "#383E56",
    date: "June 2025 - July 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full Stack Developer",
  //   company_name: "Company Two",
  //   icon: nodejs,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Building robust backend systems with Node.js, Express, and MongoDB.",
  //     "Creating RESTful APIs for frontend consumption.",
  //     "Implementing authentication and authorization systems.",
  //     "Optimizing database queries for performance.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Company Three",
  //   icon: javascript,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Leading frontend development for multiple client projects.",
  //     "Mentoring junior developers and conducting code reviews.",
  //     "Implementing CI/CD pipelines for automated testing and deployment.",
  //     "Collaborating with UX/UI designers to implement pixel-perfect designs.",
  //   ],
  // },
  // {
  //   title: "Full Stack Developer",
  //   company_name: "Company Four",
  //   icon: typescript,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Architecting and developing scalable web applications using modern technologies.",
  //     "Leading development teams and managing project timelines.",
  //     "Implementing advanced features like real-time communication and data visualization.",
  //     "Ensuring code quality through comprehensive testing and code reviews.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but this developer proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like this person does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After this developer optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "E-Commerce Platform",
    description:
      "A comprehensive e-commerce platform that allows users to browse products, add items to cart, and complete purchases with various payment methods.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/",
    // live_demo_link: "https://example.com/",
  },
  {
    name: "AI Image Generator",
    description:
      "Web application that leverages AI to generate various types of images including any imaginations, social media and marketing copy based on user inputs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/",
    // live_demo_link: "https://example.com/",
  },
  {
    name: "Blockchain Based KYC System",
    description:
      "A decentralized Know Your Customer (KYC) system that uses blockchain technology to provide secure and transparent identity verification, allowing individuals to have full control over their personal information and providing institutions with a secure and reliable way to verify identities.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/",
    // live_demo_link: "https://example.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };