import React from "react";
import PropTypes from "prop-types";
import "./Bar.css";

function Bar(props) {
    const { skillLevel } = props;

    const filledBarStyles = {
        width: `${(skillLevel / 10) * 100}%`,
    };

    return(
        <div className="Bar">
            <div className="Value" style={filledBarStyles}/>
        </div>
    )
}

Bar.propTypes = {
    skillLevel: PropTypes.number.isRequired,
  };

export default Bar;