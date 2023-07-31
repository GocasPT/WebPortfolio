import React from "react";
import { PAGE_TYPE } from "../../constantes"
import "./header.css";

//TODO: verficar para ver se é preciso fazer limpezas
function Header(props) {
    const { page, onButtonClick } = props;

    const pageTypeKeys = Object.keys(PAGE_TYPE);

    return(
        <header className="section header">
            <ul className="buttons-list">
                {pageTypeKeys.map(key => (
                    <li key={PAGE_TYPE[key]}>
                        <button className={page === PAGE_TYPE[key] ? "on" : ""} onClick={() => onButtonClick(PAGE_TYPE[key])}>{PAGE_TYPE[key]}</button>
                    </li>
                ))}
            </ul>
        </header>
    )
}

export default Header;