import React from "react";
import { LIST_TYPE, PROJECTS_LIST } from "../../constantes";
import { Card } from "../"
import "./projects.css";

//TODO: embelezar com CSS e texto (texto da pagina + texto dos cards)
function Projects() {
    return(
        <section className="Projects">
            <h2>Projects</h2>
            <div>
                <h3>Group</h3>
                {PROJECTS_LIST.GROUP.map(obj => (
                    <Card key={obj.name} typeCard={LIST_TYPE.PROJECTS} objCard={obj}/>
                ))}
            </div>
            <div>
                <h3>Solo</h3>
                {PROJECTS_LIST.SOLO.map(obj => (
                    <Card key={obj.name} typeCard={LIST_TYPE.PROJECTS} objCard={obj}/>
                ))}
            </div>
        </section>
    )
}

export default Projects;