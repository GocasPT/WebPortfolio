import { PAGE_TYPE } from "../../../data/constants"
import "./Navbar.css";

//TODO: verficar para ver se é preciso fazer limpezas
function Navebar(props) {
    const { page, onButtonClick } = props;

    const pageTypeKeys = Object.keys(PAGE_TYPE);

    return(
        <header className="section navbar">
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

export default Navebar;