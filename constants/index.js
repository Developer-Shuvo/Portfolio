import project1 from "../assets/projects/Technology-zone.png";
import project2 from "../assets/projects/clock.png";
import project3 from "../assets/projects/books-world.png";
import project4 from "../assets/projects/mobile-banking.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2025 - Present",
    role: "Frontend With API integration",
    company: "Local",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB", "TailWind"],
  },
  {
    year: "2023 - 2024",
    role: "Frontend Developer",
    company: "Remote/local",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "JavaScript", "TailWind", "Authentication"],
  },
  {
    year: "2022 - 2023",
    role: "Landing Page Designer",
    company: "Local/Small Project",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
  {
    year: "2020 - 2022",
    role: "Start Work",
    company: "Small Project",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: [
      "Functionality",
      "Landing Page idea build",
      "Basic Start",
      "HTML/CSS",
    ],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    link: "https://technology-zone-by-shuvooo.netlify.app/",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "TailWind", "JavaScript"],
  },
  {
    title: "Dynamic Clock",
    link: "https://special-clock.netlify.app/",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "TailWind", "JavaScript"],
  },
  {
    title: "Read Book",
    link: "https://book-workd-by-shuvo.netlify.app/",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Mobile Banking App",
    link: "https://mobile-banking-by-shuvo.netlify.app/index.html",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];
