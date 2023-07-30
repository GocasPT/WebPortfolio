import React from "react";
import { LIST_TYPE, PROJECTS_LIST } from "../../constantes";
import { Card } from "../"
import "./projects.css";

//TODO: embelezar com CSS e texto (texto da pagina + texto dos cards)
function Projects() {
    return(
        <section className="projects">
            <h2>Projects</h2>
            <div className="text-zon">
                <p>Texto porque sim</p>
            </div>
            <div className="group">
                <h3>Group</h3>
                <div className="card-grid">
                    {PROJECTS_LIST.GROUP.map(obj => (
                        <Card key={obj.name} typeCard={LIST_TYPE.PROJECTS} objCard={obj}/>
                    ))}
                </div>
            </div>
            <div className="solo">
                <h3>Solo</h3>
                <div className="card-grid">
                    {PROJECTS_LIST.SOLO.map(obj => (
                        <Card key={obj.name} typeCard={LIST_TYPE.PROJECTS} objCard={obj}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;