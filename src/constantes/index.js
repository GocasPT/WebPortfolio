export const WINDOWS_HEIGHT = window.innerHeight; 
export const WINDOWS_WEIGHT = window.innerWidth;
export const IMAGES_PATH = "/assets/images/";
export const PAGE_TYPE = {
  HOME: "Home",
  PROJECTS: "Projects",
  EXPERIENCE: "Experience",
  ABOUT_ME: "About Me"
};
export const LIST_TYPE = {
  EDUCATION: "education",
  GAME: "game",
  PROGRAMMING: "programming",
  PROJECTS: "projects",
  SOFTWARE: "software"
};

//TODO: verificar os linsk (ser pt ou universal?)
export { default as EDUCATION_LIST } from "./EducationList.json"
export { default as GAMES_LIST } from "./GameList.json"
export { default as PROGRAMMING_LIST } from "./ProgrammingList.json"
export { default as PROJECTS_LIST } from "./ProjectsList.json"
export { default as SOFTWARE_LIST } from "./SoftwareList.json"