import React from "react";
import "./card.style.css";
const Card = ({ imagePath, title, year, id, handleOpen }) => (
  <div className="card-container" key={id} onClick={handleOpen}>
    <img src={`https://image.tmdb.org/t/p/w185${imagePath}`} alt="" />

    <h4>{title}</h4>
    <p>{year.substring(0, 4)}</p>
  </div>
);

export default Card;
