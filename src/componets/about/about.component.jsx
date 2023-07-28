import React from "react";
import { LIST_TYPE, PROGRAMMING_LIST, NOT_PROGRAMMING_LIST, SOFTWARE_LIST, GAMES_LIST } from "../../constantes";
import { Card } from ".."
import "./about.css";

//TODO: embelezar com CSS e texto (texto da pagina + texto dos cards)
function About() {
    return(
        <section className="About">
            <h2>About</h2>
            <h3>Programming Language</h3>
            {PROGRAMMING_LIST.map(obj => (
                <Card key={obj.name} typeCard={LIST_TYPE.PROGRAMMING} objCard={obj}/>
            ))}
            <h4>Not Programming Language</h4>
            {NOT_PROGRAMMING_LIST.map(obj => (
                <Card key={obj.name} typeCard={LIST_TYPE.PROGRAMMING} objCard={obj}/>
            ))}
            <h3>Software Experience</h3>
            {SOFTWARE_LIST.map(obj => (
                <Card key={obj.name} typeCard={LIST_TYPE.SOFTWARE} objCard={obj}/>
            ))}
            <h3>Games</h3>
            {GAMES_LIST.map(obj => (
                <Card key={obj.name} typeCard={LIST_TYPE.GAME} objCard={obj}/>
            ))}
        </section>
    )
}

export default About;