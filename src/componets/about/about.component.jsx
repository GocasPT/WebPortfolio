import React from "react";
import GAMES_LIST from "../../constantes/GameList.json";
import { Card } from ".."
import "./about.css";

//TODO: embelezar com CSS e texto (texto da pagina + texto dos cards)
function About() {
    return(
        <section className="About">
            <h2>About</h2>
            {GAMES_LIST.map(obj => (
                <Card key={obj.name} objCard={obj} showIcon={true} showArt={true}/>
            ))}
        </section>
    )
}

export default About;