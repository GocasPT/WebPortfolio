import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillFacebook } from "react-icons/ai"

export const WINDOWS_HEIGHT = window.innerHeight; 
export const WINDOWS_WEIGHT = window.innerWidth;
export const IMAGES_PATH = "/assets/images/";
export const PAGE_TYPE = {
  HOME: "Home",
  EXPERIENCE: "Experience",
  PROJECTS: "Projects",
  EDUCATION: "Education",
  ABOUT_ME: "About me"
};
export const LIST_TYPE = {
  EDUCATION: "education",
  GAME: "game",
  PROGRAMMING: "programming",
  PROJECTS: "projects",
  SOFTWARE: "software"
};
export const SOCIAL_NETWORK_LIST = [
  { name: "github", icon: <AiFillGithub/>, link: "https://github.com/GocasPT" },
  { name: "linkdin", icon: <AiFillLinkedin/>, link: "https://www.linkedin.com/in/guilherme-camacho-67b5b2264/" },
  { name: "instagram", icon: <AiFillInstagram/>, link: "https://www.instagram.com/camacho.gui/" },
  { name: "facebook", icon: <AiFillFacebook/>, link: "https://www.facebook.com/guilherme.camacho.35380"}
];

export { default as EDUCATION_LIST } from "./EducationList.json"
export { default as GAMES_LIST } from "./GameList.json"
export { default as PROGRAMMING_LIST } from "./ProgrammingList.json"
export { default as PROJECTS_LIST } from "./ProjectsList.json"
export { default as SOFTWARE_LIST } from "./SoftwareList.json"