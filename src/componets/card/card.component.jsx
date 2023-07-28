import React from "react";
import { IMAGES_PATH, LIST_TYPE } from "../../constantes";
import { Bar } from "../";
import "./card.css";

//TODO: fazer que os card sejam variados consuante os tipo de objeto de entrada (jogo, programa, projeto, etc)
function Card(props) {
    const { typeCard, objCard } = props;

    const renderCardContent  = () => {
        switch(typeCard) {
            case LIST_TYPE.GAME:
                return(
                    <>
                        <a href={objCard.url} target="_blank" rel="author noreferrer">
                            <div className="content">
                                <img
                                    className="icon"
                                    src={process.env.PUBLIC_URL + IMAGES_PATH + objCard.icon} 
                                    alt={`${objCard.name} Icon`}
                                />
                                <p className="name">{objCard.name}</p>
                            </div>
                            <img
                                className="art"
                                src={process.env.PUBLIC_URL + IMAGES_PATH + objCard.art}
                                alt={`${objCard.name} Art`}
                            />
                            <p className="description">{objCard.description}</p>
                        </a>
                    </>

                );
            case LIST_TYPE.PROGRAMMING:
                return(
                    <>
                        <img className="icon" src={process.env.PUBLIC_URL + IMAGES_PATH + objCard.icon}  alt={objCard.name + " Icon"} />
                        <div className="text-content">
                            <p className="name">{objCard.name}</p>
                            <div className="bar-content">
                                <p className="skill">Skill Level: </p>
                                <Bar skillLevel={objCard.skillLevel}/>
                                <p className="skill-value">{objCard.skillLevel}</p>
                            </div>
                        </div>
                    </>
                );
            case LIST_TYPE.NOT_PROGRAMMING:
                return(
                    <>
                        <img
                            className="icon"
                            src={process.env.PUBLIC_URL + IMAGES_PATH + objCard.icon}
                            alt={`${objCard.name} Icon`}
                        />
                        <div className="text-content">
                            <p className="name">{objCard.name}</p>
                            <p className="skill">{objCard.skillLevel}</p>
                        </div>
                    </>
                    );
            case LIST_TYPE.PROJECTS:
                return(
                    <>
                        <a href={objCard.url} target="_blank" rel="author noreferrer">
                            <div className="text-content">
                                <p className="name">{objCard.name}</p>
                                <p className="description">{objCard.description}</p>
                            </div>
                        </a>
                    </>
                );
            //TODO: config this
            case LIST_TYPE.SOFTWARE:
                return(
                    <> 
                        <img
                                className="icon"
                                src={process.env.PUBLIC_URL + IMAGES_PATH + objCard.icon}
                                alt={`${objCard.name} Icon`}
                            />
                            <div className="text-content">
                                <p className="name">{objCard.name}</p>
                                <div className="bar-content">
                                    <p className="skill">Skill Level:</p>
                                    <Bar skillLevel={objCard.skillLevel} />
                                    <p className="skill-value">{objCard.skillLevel}</p>
                                </div>
                            </div>
                        {/* <a href={objCard.url} target="_blank" rel="author noreferrer">
                           Link 
                        </a> */}
                    </>
                );
            default:
                return(
                    <></>
                )
        }
    };

    return(
        <div className={`card ${typeCard}`} id={objCard.name}>
            {renderCardContent()}
        </div>
    )
}

export default Card;