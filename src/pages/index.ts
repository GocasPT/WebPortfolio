import { Home } from "./Home/Home";
import { Education } from "./Education/Education";
import { Projects } from "./Projects/Projects";
import { Experience } from "./Experience/Experience";
import { AboutMe } from "./AboutMe/AboutMe";

enum PageNames {
    Home = "Home",
    Experience = "Experience",
    Projects = "Projects",
    Education = "Education",
    AboutMe = "About Me",
}

interface Page {
    path: string;
    name: PageNames;
    component: React.ComponentType;
}

const Pages: Page[] = [
    {
        path: "/WebPortfolio/",
        name: PageNames.Home,
        component: Home,
    },
    {
        path: "/WebPortfolio/experience",
        name: PageNames.Experience,
        component: Experience,
    },
    {
        path: "/WebPortfolio/projects",
        name: PageNames.Projects,
        component: Projects,
    },
    {
        path: "/WebPortfolio/education",
        name: PageNames.Education,
        component: Education,
    },
    {
        path: "/WebPortfolio/aboutme",
        name: PageNames.AboutMe,
        component: AboutMe,
    },
];

export { Pages };
