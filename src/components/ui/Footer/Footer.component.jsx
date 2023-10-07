import React from "react";
import { SOCIAL_NETWORK_LIST } from "../../../data/constants";
import "./Footer.css";

function Footer() {
    return(
        <footer className="section footer">
            <section className="social-media">
                <h2>Socail Media</h2>
                <ul className="social-media-list">
                    {SOCIAL_NETWORK_LIST.map(obj => (
                        <li key={obj.name}>
                            <a href={obj.link} target="_blank" rel="author noreferrer">
                                {obj.icon}
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </footer>
    )
}

export default Footer;