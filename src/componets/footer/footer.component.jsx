import React from "react";
import { AiFillMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai"

import "./footer.css";

function Footer() {
    return(
        <footer className="section footer">
            <section className="contact">
                <h2>Contact</h2>
                <ul>
                    <li>
                        <AiFillMail/>
                        <p>mail: guilherme.sousa.camacho@gmail.com</p>
                    </li>
                    <li>
                        <AiFillLinkedin/>
                        <p>linkdin: https://www.linkedin.com/in/guilherme-camacho-67b5b2264/</p>
                    </li>
                    <li>
                        <AiFillGithub/>
                        <p>github: https://github.com/GocasPT</p>
                    </li>
                </ul>
            </section>
        </footer>
    )
}

export default Footer;