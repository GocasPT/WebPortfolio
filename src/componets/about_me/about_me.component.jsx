import React from "react";

import { GAMES_LIST } from "../../constantes";
import { Card } from "../"
import "./about_me.css";

//TODO: embelezar com CSS e texto (texto da pagina + texto dos cards)
function AboutMe() {
    return(
        <div className="AboutMe">
            <p>AboutMe</p>
            {GAMES_LIST.map((e, i) => (
                <Card key={i} idCard={e}/>
            ))}
        </div>
    )
}

export default AboutMe;