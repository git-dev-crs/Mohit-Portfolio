import {
    interviewPrep,
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    meta,
    starbucks,
    tesla,
    shopify,
    studyNotion,
    zoom,
    //crunchFitness,
    threejs,
    codeItUp,
    dsa,
    ietdavv,
    deloitte,
    shs,
    java,
    zerodha,
} from "../assets";

export const navLinks = [
    {
        id: "",
        title: "Home",
    },
    {
        id: "about",
        title: "About",
    },
    {
        id: "education",
        title: "Experience and Education"
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
        icon: web,
    },
    {
        title: "React Native Developer",
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
        name: "java",
        icon: java,
    },
    {
        name: "dsa",
        icon: dsa,
    },
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
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
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
];

const experiences = [
    {
        title: "Deloitte Virtual Intern",
        company_name: "Deloitte-Technology Job Simulation via forage",
        icon: deloitte,
        iconBg: "#383E56",
        date: "June 2025 - July 2025",
        points: [
            "Gained hands-on experience in coding and software development by solving real-world simulation tasks used at Deloitte via Forage.",
            "Developed practical solutions simulating Deloitte client scenarios—bridging the gap between technical proficiency and real-world consulting applications.",
            "Successfully completed a selective virtual internship designed by Deloitte professionals, showcasing self-motivation, time management, and adaptability.",
        ],
    },
    {
        title: "B.Tech [CSE]",
        company_name: "Institute of Engineering and Technology DAVV",
        icon: ietdavv,
        iconBg: "#383E56",
        date: "November 2022 - June 2026",
        points: [
            "Learned about computer fundamentals like DSA , OOPS Principle, SQL , Database Management, Operating System.",
            "Participated in a coding Contests in a various different Platform.",
            "Learned MERN stack web development and developed various projects using the tech stack.",
        ],
    },
    {
        title: "High School",
        company_name: "Scholars Home School",
        icon: shs,
        iconBg: "#E6DEDD",
        date: "Jan 2020 - Mar 2021",
        points: [
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "InterviewPrep",
        description:
            "Interview Prepration website that allows students to pratice DSA questions based on their prepration level.",
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
                name: "express",
                color: "pink-text-gradient",
            },
        ],
        image: interviewPrep,
        source_code_link: "https://interview-prep-front.vercel.app/",
    },
    {
        name: "Zerodha-Stock Trading Platform",
        description:
            "Developed a fully functional Zerodha-inspired trading dashboard using React and Redux, enabling users to track real-time stock data, manage portfolios, and simulate buy/sell operations.",
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
                name: "express",
                color: "pink-text-gradient",
            },
        ],
        image:zerodha,
        source_code_link: "https://github.com/git-dev-crs/Zerodha-Web",
    },
    {
        name: "Zoom - Link up",
        description:
            "Developed a real-time video conferencing platform using WebRTC and Socket.io, enabling seamless peer-to-peer audio/video communication and screen sharing.",
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
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: zoom,
        source_code_link: "https://apnacollegezoombackend.onrender.com",
    },
    // {
    //     name: "Code-It-Up",
    //     description:
    //         "Developed a web application that replicates the functionality of the CodePen online code editor using ReactJS, enabling users to create, edit, and preview HTML, CSS, and JavaScript code in real-time.",
    //     tags: [
    //         {
    //             name: "ReactJS",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "HTML",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "CSS",
    //             color: "pink-text-gradient",
    //         },
    //     ],
    //     image: codeItUp,
    //     source_code_link: "https://code-it-up.netlify.app/",
    // },
];

export { services, technologies, experiences, testimonials, projects };