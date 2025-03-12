const navLinks = [
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
    title: "Backend Developer",
    icon: "ServerIcon",
  },
  {
    title: "Content Creator",
    icon: "PenToolIcon",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
  },
  {
    name: "CSS 3",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  },
  {
    name: "React JS",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  },
  {
    name: "Redux Toolkit",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg",
  },
  {
    name: "Node JS",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Three JS",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/threejs/threejs-original.svg",
  },
  {
    name: "Git",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
  },
  {
    name: "Figma",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
  },
  {
    name: "Docker",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Company One",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Company Two",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Building robust backend systems with Node.js, Express, and MongoDB.",
      "Creating RESTful APIs for frontend consumption.",
      "Implementing authentication and authorization systems.",
      "Optimizing database queries for performance.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Company Three",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Leading frontend development for multiple client projects.",
      "Mentoring junior developers and conducting code reviews.",
      "Implementing CI/CD pipelines for automated testing and deployment.",
      "Collaborating with UX/UI designers to implement pixel-perfect designs.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Company Four",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Architecting and developing scalable web applications using modern technologies.",
      "Leading development teams and managing project timelines.",
      "Implementing advanced features like real-time communication and data visualization.",
      "Ensuring code quality through comprehensive testing and code reviews.",
    ],
  },
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
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    source_code_link: "https://github.com/",
    live_demo_link: "https://example.com/",
  },
  {
    name: "AI Content Generator",
    description:
      "Web application that leverages AI to generate various types of content including blog posts, social media captions, and marketing copy based on user inputs.",
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
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356",
    source_code_link: "https://github.com/",
    live_demo_link: "https://example.com/",
  },
  {
    name: "Interactive Dashboard",
    description:
      "A comprehensive dashboard with data visualization tools, real-time analytics, and customizable widgets for business intelligence and monitoring.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    source_code_link: "https://github.com/",
    live_demo_link: "https://example.com/",
  },
];

export { navLinks, services, technologies, experiences, testimonials, projects };