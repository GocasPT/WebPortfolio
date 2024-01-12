import React from "react";
import { LIST_TYPE, PROJECTS_LIST } from "../../data/constants";
import { findObjectByName } from "../../utils/findObjectByName";
import { Card } from  "../../components";
import "./Home.css";

function Home() {
    const topebotObject = findObjectByName("TopeBot", PROJECTS_LIST);
    const the25gameObject = findObjectByName("The 25 Game", PROJECTS_LIST);

    return(
        <section className="home">
            <h1>Hi, I’m Guilherme.<br/>An software developer</h1>
            <h3>I am a person with limited experiences, but with a strong desire to learn and explore in the world of programming.</h3>
            <div className="grid">
                <Card typeCard={LIST_TYPE.PROJECTS} objCard={topebotObject}/>
            </div>
            <h1>In Process</h1>
            <div className="grid">
                <Card typeCard={LIST_TYPE.PROJECTS} objCard={the25gameObject}/>
            </div>
        </section>
    )
}

export default Home;