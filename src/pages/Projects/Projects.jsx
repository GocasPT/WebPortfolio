import React from "react";
import { LIST_TYPE, PROJECTS_LIST } from "../../data/constants";
import { Card } from  "../../components";
import "./Projects.css";

//TODO: texto (texto da pagina + texto dos cards)
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
                    {PROJECTS_LIST.Group.map(obj => (
                        <Card key={obj.name} typeCard={LIST_TYPE.PROJECTS} objCard={obj}/>
                    ))}
                </div>
            </div>
            <div className="solo">
                <h3>Solo</h3>
                <div className="card-grid">
                    {PROJECTS_LIST.Solo.map(obj => (
                        <Card key={obj.name} typeCard={LIST_TYPE.PROJECTS} objCard={obj}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;