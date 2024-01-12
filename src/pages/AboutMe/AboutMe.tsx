import React from "react";
import { LIST_TYPE, GAMES_LIST } from "../../data/constants";
import { Card } from "../../components";
import "./AboutMe.css";

//TODO: completar o text-zone
function AboutMe() {
    return(
        <section className="about">
            <h2>About me</h2>
            <div className="text-zon">
                <p>Texto porque sim</p>
            </div>
            <div className={LIST_TYPE.GAME}>
                <h3>Games</h3>
                <div className="grid">
                    {GAMES_LIST.map(obj => (
                        <Card key={obj.name} typeCard={LIST_TYPE.GAME} objCard={obj}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AboutMe;