import React from "react";
import "./WorkCardStyles.css";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="..." />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <NavLink
            to={props.view}
            className="btn btn-light"
            target="_blank"
            rel="noopener noreferrer"
          >
            Więcej
          </NavLink>
          <NavLink
            to={props.link}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zobacz
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
