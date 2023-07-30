import React from "react";
import { LIST_TYPE, PROGRAMMING_LIST, SOFTWARE_LIST } from "../../constantes";
import { Card } from "../"
import "./experience.css";

//TODO: completar o text-zone
function Experience() {
    return(
        <section className="experience">
            <h2>Experience</h2>
            <div className="text-zone">
                <p>Texto porque sim</p>
            </div>
            <div className={LIST_TYPE.PROGRAMMING}>
                <h3>Programming Language</h3>
                <div className={"card-grid " + LIST_TYPE.PROGRAMMING}>
                    {PROGRAMMING_LIST.map(obj => (
                        <Card key={obj.name} typeCard={LIST_TYPE.PROGRAMMING} objCard={obj}/>
                    ))}
                </div>
            </div>
            <div className={LIST_TYPE.SOFTWARE}>
                <h3>Software Experience</h3>
                <div className={"card-grid " + LIST_TYPE.SOFTWARE}>
                    {SOFTWARE_LIST.map(obj => (
                        <Card key={obj.name} typeCard={LIST_TYPE.SOFTWARE} objCard={obj}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience;