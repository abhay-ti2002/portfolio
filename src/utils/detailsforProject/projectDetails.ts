interface ProjectDetails {
  id: number;
  name: string;
  image: string;
  stack: string[];
  description: string;
  KeyFeaturesImplemented: string[];
}

const projectInfo: ProjectDetails[] = [
  {
    id: 0,
    name: "Zomato Clone",
    image: "/images/project_5.png",
    stack: [
      "React JS",
      "Tailwind CSS",
      "Redux",
      "Jest and React Testing Library",
      "React-Router",
      "API",
    ],
    description:
      "I developed a fully functional Zomato clone using modern web technologies, showcasing my expertise in frontend development, state management, and testing. This project replicates the core features of the popular food delivery platform, Zomato, and demonstrates my ability to build scalable, responsive, and user-friendly applications.",
    KeyFeaturesImplemented: [
      "Restaurant Listings",
      "Search Functionality",
      "Restaurant Details Page",
      "Cart and Checkout",
      "State Management",
      "Testing",
    ],
  },
  {
    id: 1,
    name: "Netflix Clone",
    image: "/images/project_7.png",
    stack: [
      "React JS",
      "Tailwind CSS",
      "Redux",
      "React Router",
      "Firebase Authentication",
      "TMDB API",
    ],
    description:
      "Welcome to my Netflix Clone project, a fully functional streaming platform inspired by Netflix, built using modern web technologies. This project showcases my skills in front-end development, state management, authentication, and API integration.",
    KeyFeaturesImplemented: [
      "TMDB API Integration",
      "User Authentication with Firebase",
      "State Management with Redux",
      "Profile Picture Integartion",
      "Dynamic Routing",
      "Movie Details Page",
    ],
  },
  {
    id: 2,
    name: "Document Converter (Docs to PDF)",
    image: "/images/project_3.png",
    stack: ["React JS", "Tailwind CSS", " TypeScript"],
    description:
      "This project is a fully functional Netflix clone that integrates multiple modern web technologies. Built with React JS for the front end, it replicates the core features of Netflix, including a dynamic.",
    KeyFeaturesImplemented: [
      "Seamless Document Conversion",
      "React & TypeScript",
      "Tailwind CSS for Styling",
    ],
  },
  {
    id: 3,
    name: "Furniture Hub",
    image: "/images/project_1.png",
    stack: ["HTML", "CSS", "JavaScript"],
    description:
      "Welcome to my Furniture Website project, a fully responsive and visually appealing e-commerce platform designed to showcase furniture products. Built using HTML, CSS, and JavaScript, this project highlights my skills in front-end development, UI/UX design, and interactive web features.",
    KeyFeaturesImplemented: [
      "Image Slider",
      "Form Validation",
      "Clean and Modern Design",
      "Product Cards",
      "Form Validation",
    ],
  },
];

export default projectInfo;
