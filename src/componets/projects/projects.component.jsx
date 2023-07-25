import React from "react";

import { PROJECTS_LIST } from "../../constantes";
import { Card } from "../"
import "./projects.css";

//TODO: embelezar com CSS e texto (texto da pagina + texto dos cards)
function Projects() {
    return(
        <div className="Projects">
            <p>Projects</p>
            {PROJECTS_LIST.map((e, i) => (
                <Card key={i} idCard={e}/>
            ))}
        </div>
    )
}

export default Projects;