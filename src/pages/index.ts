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
        path: "/WebPortfolio/Home",
        name: PageNames.Home,
        component: Home,
    },
    {
        path: "/WebPortfolio/Experience",
        name: PageNames.Experience,
        component: Experience,
    },
    {
        path: "/WebPortfolio/Projects",
        name: PageNames.Projects,
        component: Projects,
    },
    {
        path: "/WebPortfolio/Education",
        name: PageNames.Education,
        component: Education,
    },
    {
        path: "/WebPortfolio/AboutMe",
        name: PageNames.AboutMe,
        component: AboutMe,
    },
];

export { Pages };
