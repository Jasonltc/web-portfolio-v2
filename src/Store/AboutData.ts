type Menu = {
  title: string;
  link: string;
};

export const MENU: Menu[] = [
  {
    title: "home",
    link: "",
  },
  {
    title: "about",
    link: "/about",
  },
  {
    title: "my work",
    link: "/projects",
  },
];

/* -------------------------- */

export const FACTS: string[] = [
  "I like to watch anime (Otaku in the place)!",
  "I'm a Manchester United F.C. fan (Go red devil).",
  "Watching action and comedy movie is the best.",
  "I don't like scary/horror movies.",
  "I'm more a Mavel fan than dc.",
];

/* -------------------------- */
type Journey = {
  date: {
    dateStart: string;
    dateEnd: string;
  };
  history: string;
};

export const JOURNEY: Journey[] = [
  {
    date: {
      dateStart: "Apr 2023 /",
      dateEnd: "Apr 2024",
    },
    history: `Big opportunity New opportunity to work with a French company - Wshop Mauritius Position: Mid Front-end Developer`,
  },
  {
    date: {
      dateStart: "FEB 2021 /",
      dateEnd: "MAR 2023",
    },
    history: `From Beginner to Junior Became a junior front-end developer at LUCRIN Mauritius. An e-commence web site.I learned a lot of things there with the help of a mentor and evolved further to become a mid-level developer.`,
  },
  {
    date: {
      dateStart: "FEB 2020 /",
      dateEnd: "FEB 2021",
    },
    history: `First opportunity Excited to have my first full-time job in web development at Nova-IX. A web agency as a front-end developer. There I learnt how to code properly and how web works.`,
  },
  {
    date: {
      dateStart: "2019",
      dateEnd: "",
    },
    history: `Start a programming course at Unicomp institution : 
    \n 1. Professional Certificate in Graphic Design; 
    \n 2. Professional Certificate in Web Base Programming First time coding ' HELLO WORLD '`,
  },
  {
    date: {
      dateStart: "JULY 2019 /",
      dateEnd: "FEB 2020",
    },
    history: `Internship in in Graphic Design and web development at ABC motors`,
  },
  {
    date: {
      dateStart: "SEPT 2018 /",
      dateEnd: "JUNE 2019",
    },
    history: `Having my very first full-time job at DTOS Ltd Position: Human Capital Support`,
  },
  {
    date: {
      dateStart: "2015 /",
      dateEnd: "2018",
    },
    history: `Starting my Bachelor in Marketing and Management at Curtin Mauritius University`,
  },
];

/* -------------------------- */

// type Project = {
//   img: string;
//   text: string;
// };

// export const LASTPROJECT: Project[] = [
//   {
//     img: "x",
//     text: "x",
//   },
//   {
//     img: "x",
//     text: "xx",
//   },
//   {
//     img: "x",
//     text: "xxx",
//   },
// ];

/* -------------------------- */
import htmlPng from "../assets/Logo/html.png"; // 0
import CssPng from "../assets/Logo/css.png"; // 1
import JavascriptPng from "../assets/Logo/javascript.png"; // 2
import tailwindPng from "../assets/logo/tailwind.png"; // 3
import sassPng from "../assets/Logo/sass.png"; // 4
import reactPng from "../assets/Logo/reactjs.png"; // 5
import reduxPng from "../assets/Logo/redux.png"; // 6
import motionPng from "../assets/Logo/motion.png"; // 7
import figmaPng from "../assets/Logo/figma.png"; // 8
import gsapPng from "../assets/Logo/gsap-greensock.svg"; // 9
import nextPng from "../assets/Logo/nextjs.svg"; // 10
import three from "../assets/Logo/three.png"; // 11

export const dectArry: string[] = [
  htmlPng,
  CssPng,
  JavascriptPng,
  tailwindPng,
  sassPng,
  reactPng,
  reduxPng,
  motionPng,
  figmaPng,
  gsapPng,
  nextPng,
  three,
];

type Tect = {
  img: string;
  name: string;
};

export const TECTUSED: Tect[] = [
  {
    img: htmlPng,
    name: "Html",
  },
  {
    img: CssPng,
    name: "Css",
  },
  {
    img: JavascriptPng,
    name: "Javascript",
  },
  {
    img: tailwindPng,
    name: "Tailwind",
  },
  {
    img: sassPng,
    name: "Sass",
  },
  {
    img: reactPng,
    name: "React",
  },
  {
    img: reduxPng,
    name: "Redux",
  },
  {
    img: motionPng,
    name: "frame motion",
  },
  {
    img: gsapPng,
    name: "Gsap",
  },
  {
    img: figmaPng,
    name: "Figma",
  },
  {
    img: nextPng,
    name: "Next.js",
  },
  {
    img: three,
    name: "Three.js",
  },
  // {
  //   img: "z",
  //   name: "Blender",
  // },
];

/* -------------------------- */
type Portfolio = {
  xmas: string[];
  divali: string[];
  recruitment: string[];
  poster: string[];
};

export const portfolio: Portfolio = {
  xmas: [],
  divali: [],
  recruitment: [],
  poster: [],
};

/* -------------------------- */
import project1 from "../assets/project_list/project-1.png";
import project2 from "../assets/project_list/project-2.png";
import project3 from "../assets/project_list/project-3.png";
import project4 from "../assets/project_list/project-4.png";
import project5 from "../assets/project_list/project-5.png";
import project6 from "../assets/project_list/project-6.png";

type ProjectStructure = {
  img: string;
  name: string;
  history: string;
  logo: string[];
  link: string;
};

export const projectStructure: ProjectStructure[] = [
  {
    img: project6,
    name: "Coffee Lovers shop",
    history: `A cozy haven where the aroma of freshly ground coffee beans greets you at the door. With the used of framer motion, react and tailwind.`,
    logo: [reactPng, tailwindPng, motionPng],
    link: "https://coffee-lovers-shop.netlify.app/",
  },
  {
    img: project5,
    name: "big burger",
    history: `Where every bite takes you on a flavorful journey. Big burger is the place to eat. The web site is using html, css and gsap.`,
    logo: [htmlPng, CssPng, gsapPng],
    link: "https://lovely-burger.netlify.app/",
  },
  {
    img: project4,
    name: "tic tac toe",
    history: `Welcome to the timeless world of Tic Tac Toe, a game that blends strategy, fun, and simplicity. The game is build with react and css module.`,
    logo: [reactPng, CssPng, JavascriptPng],
    link: "https://game-ox-player.netlify.app/",
  },
  {
    img: project3,
    name: "Book shop",
    history: `Whether you're searching for your next great read or a unique gift for a loved one. This book shop website using react, redux and css module.`,
    logo: [reactPng, reduxPng, CssPng],
    link: "https://store-cover.netlify.app/",
  },
  {
    img: project2,
    name: "Nike shoe shop",
    history: `This is your ultimate online destination for footwear fashion. A clone page of Nike shoe using react and css module.`,
    logo: [reactPng, CssPng],
    link: "https://ecom-shoes.netlify.app/",
  },
  {
    img: project1,
    name: "To do list",
    history: `A javascript to do list where you can put all the things you need to do and achieve a good productive day`,
    logo: [htmlPng, CssPng, JavascriptPng],
    link: "https://today-tasks-do.netlify.app/",
  },
];
