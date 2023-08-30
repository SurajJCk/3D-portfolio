import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  meta,
  starbucks,
  tesla,
  shopify,
  nike,
  ecomm,
  tripguide,
  python,
  mysql,
  postgresql,
  powerbi,
  excel,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Mysql",
    icon: mysql,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "excel",
    icon: excel,
  },
  {
    name: "Power BI",
    icon: powerbi,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
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
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];
const profileLinks = [
  {
    github_link: "https://github.com/SurajJCk",
    linkedIn_link: "https://www.linkedin.com/in/surajjchangkakoti/",
  },
];

const qualifications = [
  {
    course: "Master of Commerce",
    institute: "K C Das Commerce College, Guwahati",
    board: "Gauhati University",
    year: "2018-2020",
  },
  {
    course: "Bachelor of Commerce",
    institute: "K C Das Commerce College, Guwahati",
    board: "Gauhati University",
    year: "2015-2018",
  },
  {
    course: "Class 12",
    institute: "Faculty Higher Secondary School, Guwahati",
    board: "CBSE",
    year: "2014-15",
  },
];
const certifications = [
  {
    course: "CS50 Web Programming",
    institute: "Harvard University",
    year: "2023",
  },
  {
    course: "Full Stack Web Development",
    institute: "Physics Wallah",
    year: "2022",
  },
  {
    course: "Web Development by Angela Yu",
    institute: "Udemy",
    year: "2021",
  },
];

const projects = [
  {
    name: "Nike website",
    description:
      "Nike landing page using ReactJS and Tailwind, creating an engaging and dynamic user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: nike,
    source_code_link: "https://github.com/SurajJCk/nike",
    deploy_link: "https://nike-blue.vercel.app/",
  },
  {
    name: "Ecommerce",
    description:
      "an ecommerce website using HTML, CSS, and JavaScript, incorporating essential features like a responsive design, product catalog, shopping cart for seamless online shopping.",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
    ],
    image: ecomm,
    source_code_link: "https://github.com/SurajJCk/Ecommerce-app",
    deploy_link: "https://ecommercesjc.netlify.app/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export {
  services,
  profileLinks,
  technologies,
  experiences,
  qualifications,
  certifications,
  projects,
};
