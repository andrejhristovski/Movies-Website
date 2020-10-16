import React from "react";
import "./card.style.css";
const Card = ({ imagePath, title, year, id, handleOpen }) => (
  <div className="card-container" key={id} onClick={handleOpen}>
    <img src={imagePath} alt="" />

    <h4>{title}</h4>
    <p>{year}</p>
  </div>
);

export default Card;
