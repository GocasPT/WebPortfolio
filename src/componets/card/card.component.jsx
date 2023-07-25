import React from "react";

import "./card.css";

//TODO: modificar para objectos e não para valores
function Card(props) {
    const { idCard } = props;

    return(
        <div className="Card" id={idCard}>
            <p>Card ({idCard})</p>
        </div>
    )
}

export default Card;