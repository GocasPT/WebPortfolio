import React from "react";
import { IMAGES_PATH } from "../../constantes";
import "./card.css";

//TODO: modificar para objectos e não para valores
function Card(props) {
    const { objCard, showIcon = false, showArt = false } = props;

    return(
        <div className="Card" id={objCard.name}>
            {showIcon === true ? <img src={process.env.PUBLIC_URL + IMAGES_PATH + objCard.icon}  alt={objCard.name + " Icon"} /> : <></>}
            {showArt === true ? <img src={process.env.PUBLIC_URL + IMAGES_PATH + objCard.art} alt={objCard.name + " Art"} /> : <></>}
            <p>Card ({objCard.name})</p>
        </div>
    )
}

export default Card;