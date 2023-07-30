import React from "react";

import { PAGE_TYPE } from "../../constantes"
import "./header.css";

//TODO: verficar para ver se é preciso fazer limpezas
function Header(props) {
    const { onButtonClick } = props;

    const pageTypeKeys = Object.keys(PAGE_TYPE);

    return(
        <header className="section header">
            <img src="" alt="" />
            <ul>
                {pageTypeKeys.map(key => (
                    <li key={PAGE_TYPE[key]}>
                        <button className="Button" onClick={() => onButtonClick(PAGE_TYPE[key])}>{PAGE_TYPE[key]}</button>
                    </li>
                ))}
            </ul>
        </header>
    )
}

export default Header;