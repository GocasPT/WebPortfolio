import React from "react";

import { PAGE_TYPE } from "../../constantes";
import { Home, Projects, Experience, About } from "../"
import "./page.css";

function Page(props) {
    const { type } = props;

    let componentToRender;

    switch (type) {
        case PAGE_TYPE.HOME:
            componentToRender = <Home/>;
            break;
        case PAGE_TYPE.PROJECTS:
            componentToRender = <Projects/>;
            break;
        case PAGE_TYPE.EXPERIENCE:
            componentToRender = <Experience/>;
            break
        case PAGE_TYPE.ABOUT_ME:
            componentToRender = <About/>;
            break;
        default:
            componentToRender = <Home/>;
            break;
    }

    return(
        <>{componentToRender}</>
    )
}

export default Page;