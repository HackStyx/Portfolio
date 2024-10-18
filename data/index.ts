export const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Education", link: "#education" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "My Tech Stack",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "grid grid-cols-3 gap-4 mt-4",
    titleClassName: "justify-center text-xl font-bold mb-2",
    img: "",
    spareImg: "",
    techIcons: [
      { name: "Java", icon: "/java.svg" },
      { name: "Python", icon: "/python.svg" },
      { name: "HTML", icon: "/html.svg" },
      { name: "CSS", icon: "/css.svg" },
      { name: "JavaScript", icon: "/javascript.svg" },
      { name: "React", icon: "/react.svg" },
      { name: "Bootstrap", icon: "/bootstrap.svg" },
      { name: "Tailwind", icon: "/tailwind.svg" },
      { name: "MongoDB", icon: "/mongodb.svg" },
      { name: "MySQL", icon: "/mysql.svg" },
      { name: "Node.js", icon: "/nodejs.svg" },
      { name: "Next.js", icon: "/next.svg" },
    ],
    iconClassName: "w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16",
  },

  {
    id: 2,
    title: "Connect with me, Anytime ✨",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start items-start pt-4 absolute top-0 left-0 m-4",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "",
    //img: "https://github-profile-summary-cards.vercel.app/api/cards/stats?username=HackStyx&theme=2077",
    spareImg: "",
  },
  {
    id: 4,
    title: "Turning ideas into code, and code into innovation.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a React based Browser Extension",
    description: "The Core Insight",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-[60%] w-[80%] transform scale-140",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/cs.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "PathFinder",
    des: "An AI-driven platform designed to provide personalized career guidance to students in educational institutions.",
    img: "/path.png",
    iconLists: [
      "/bootstrap.svg",
      "/flask1.svg",
      "/llama.png",
      "/streamlit.png",
      "/python.svg",
    ],
    link: "https://github.com/HackStyx/PathFinder",
  },
  {
    id: 2,
    title: "BuildInsight",
    des: "A platform designed to monitor the construction process and manage construction projects.",
    img: "/build.png",
    iconLists: [
      "/bootstrap.svg",
      "/flask1.svg",
      "/sl.svg",
      "/pyt.svg",
      "/python.svg",
    ],
    link: "https://github.com/HackStyx/BuildInsight",
  },
  {
    id: 3,
    title: "CleanSlate",
    des: "CleanSlate is a browser extension with a minimalist, distraction-free design, featuring full-screen mode, a to-do list, notes, and customizable options for better focus and productivity.",
    img: "/clean.png",
    iconLists: [
      "/html.svg",
      "/css.svg",
      "/javascript.svg",
      "/react.svg",
      "/tailwind.svg",
    ],
    link: "https://github.com/HackStyx/Clean-Slate",
  },
  {
    id: 4,
    title: "RomeArte",
    des: "A website that showcases various museums in Rome, providing information about exhibitions, pricing, and a ticket booking system for tourists.",
    img: "/roma.png",
    iconLists: ["/html.svg", "/css.svg", "/bootstrap.svg"],
    link: "https://github.com/HackStyx/RomeArte",
  },
];



export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/HackStyx"
  },
  {
    id: 2,
    img: "/email.svg", // Change this to your email icon
    link: "mailto:princegupta8497@gmail.com" // Change this to your email address
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://linkedin.com/in/princekumargupta"
  },
];

