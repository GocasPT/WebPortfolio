import React from "react";

import { PAGE_TYPE } from "../../constantes"
import "./header.css";

//TODO: verficar para ver se é preciso fazer limpezas
function Header(props) {
    const { onButtonClick } = props;

    return(
        <div className="Header">
            <p>Header</p>
            <button className="Button" onClick={() => onButtonClick(PAGE_TYPE.HOME)}>{PAGE_TYPE.HOME}</button>
            <button className="Button" onClick={() => onButtonClick(PAGE_TYPE.PROJECTS)}>{PAGE_TYPE.PROJECTS}</button>
            <button className="Button" onClick={() => onButtonClick(PAGE_TYPE.ABOUT_ME)}>{PAGE_TYPE.ABOUT_ME}</button>
        </div>
    )
}

export default Header;