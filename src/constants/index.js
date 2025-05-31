const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Java", imgPath: "/images/java.svg" },
  { text: "Spring Boot", imgPath: "/images/springboot.svg" },
  { text: "React.js", imgPath: "/images/react.svg" },
  { text: "REST API", imgPath: "/images/api.svg" },
  { text: "MongoDB", imgPath: "/images/mongodb.svg" },
  { text: "Hibernate", imgPath: "/images/hibernate.svg" },
  { text: "MySQL", imgPath: "/images/mysql.svg" },
  { text: "JavaScript", imgPath: "/images/js.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 0, suffix: "+", label: "Satisfied Clients" },
  { value: 9, suffix: "+", label: "Completed Projects" },
  { value: 100, suffix: "😅%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "Java Full Stack Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "React & Firebase",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "3D UI/UX Developer – Three.js & Web Animation",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "Java Full Stack Developer",
    modelPath: "/models/java.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "React & Firebase",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "3D UI/UX Developer – Three.js & Web Animation",
    modelPath: "/models/3DUIUX.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Vivek’s frontend skills brought our thrift store platform to life. His clean UI, responsive design, and secure payment integration helped us launch smoothly.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer – Thrifty",
    date: "2024",
    responsibilities: [
      "Designed responsive UI using React.js, HTML, CSS, and Redux.",
      "Integrated Stripe for secure online payments.",
      "Collaborated with backend developers to ensure a seamless UX.",
      ,
    ],
  },
  {
    review:
      "Vivek handled everything from backend APIs to WebRTC integration in our language learning platform. His full stack expertise made real-time video calls and scheduling a breeze.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer – LinguaLive",
    date: "2024",
    responsibilities: [
      "Developed the full-stack web app with React, Spring Boot, and MySQL.",
      "Implemented WebRTC-based real-time video calling.",
      "Built user scheduling and secure payment flows.",
    ],
  },
  {
    review:
      "Vivek helped visualize complex retail KPIs into interactive dashboards. His insights directly supported leadership decisions at Tata Group.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Data Visualization Intern – Tata Group",
    date: "January 2025",
    responsibilities: [
      "Created Tableau/Power BI dashboards for strategic insights.",
      "Framed analytical questions for senior leadership use.",
      "Delivered reports aligning with retail performance goals.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Ankit Sharma",
    mentions: "Project Teammate, LinguaLive",
    review:
      "Working with Vivek on the LinguaLive project was a game changer. His understanding of full-stack development and ability to integrate video calling with secure payments really made our app stand out.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Sneha Verma",
    mentions: "College Peer",
    review:
      "Vivek has always been the go-to person whenever we’re stuck in a coding problem. His knowledge in Java, Spring Boot, and APIs is incredible for someone still in college.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Prof. R. Mishra",
    mentions: "Faculty, TIT (Excellence)",
    review:
      "Vivek consistently demonstrates an impressive grasp of software development concepts and applies them to real-world projects. His dedication to learning and implementing new tech is commendable.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Kunal Mehta",
    mentions: "Friend & Coding Partner",
    review:
      "Whether it’s DSA problems or web development, Vivek always brings a logical approach and clean code. We’ve solved over 700 Leetcode problems together and his problem-solving skills are next level.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Ritika Singh",
    mentions: "Design Collaborator, Thrifty Project",
    review:
      "I collaborated with Vivek on the Thrifty store project. He handled backend integration and security so efficiently that it made the whole dev process smooth and fun!",
    imgPath: "/images/client1.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    link: "https://www.instagram.com/vivekkumar5829/",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    link: "https://www.instagram.com/vivekkumar5829/", // Consider updating to actual FB link
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    link: "https://www.instagram.com/vivekkumar5829/", // Consider updating to actual X (Twitter) link
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/vivek-kumar-a8b20633b/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
