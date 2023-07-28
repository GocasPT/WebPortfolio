export const WINDOWS_HEIGHT = window.innerHeight; 
export const WINDOWS_WEIGHT = window.innerWidth;
export const IMAGES_PATH = "/assets/images/";
export const PAGE_TYPE = {
  HOME: "Home",
  PROJECTS: "Projects",
  ABOUT_ME: "About Me",
};
export const LIST_TYPE = {
  GAME: "game",
  NOT_PROGRAMMING: "not-programming",
  PROGRAMMING: "programming",
  PROJECTS: "projects",
  SOFTWARE: "software"
};

//TODO: verificar os linsk (ser pt ou universal?)
//TODO: GameList.json → ver uma melhor forma de "ver" a descrição de cada objeto
//TODO: ProgrammingList.json → verificar esta parte
//TODO: NotProgrammingList.json → verificar esta parte
//TODO: SoftwareList.json → verificar esta parte
//TODO: ProjectsList.json → mudar isto para classes em vez de listas (para puder configurar e ser mais autnomo na parte de mostar as infoes + imagens)
export { default as GAMES_LIST } from "./GameList.json"
export { default as PROGRAMMING_LIST } from "./ProgrammingList.json"
export { default as NOT_PROGRAMMING_LIST } from "./NotProgrammingList.json"
export { default as PROJECTS_LIST } from "./ProjectsList.json"
export { default as SOFTWARE_LIST } from "./SoftwareList.json"