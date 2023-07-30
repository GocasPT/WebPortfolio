import React from "react";
import { LIST_TYPE, EDUCATION_LIST, GAMES_LIST } from "../../constantes";
import { Card } from ".."
import "./about.css";

//TODO: completar o text-zone
function About() {
    return(
        <section className="about">
            <h2>About</h2>
            <div className="text-zon">
                <p>Texto porque sim</p>
            </div>
            <div>
                <h3>Education</h3>
                {EDUCATION_LIST.map(obj => (
                    <div className={LIST_TYPE.EDUCATION}>
                        <p>{obj.name} ({obj.acronym})</p>
                        <p>{obj.educationLevel} - {obj.educationAres}</p>
                        <p>{obj.yearsStart} to {obj.yearEnd}</p>
                    </div>
                ))}
            </div>
            <div className={LIST_TYPE.GAME}>
                <h3>Games</h3>
                <div className={"card-grid " + LIST_TYPE.GAME}>
                    {GAMES_LIST.map(obj => (
                        <Card key={obj.name} typeCard={LIST_TYPE.GAME} objCard={obj}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About;