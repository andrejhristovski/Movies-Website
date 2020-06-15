import React from "react";
import AModal from "../modal/modal.component";
import "./card-list.style.css";

const CardList = ({ movies, i = 1 }) => (
  <div className="card-list">
    {movies.map((movie) => (
      <AModal movie={movie} key={i++} />
    ))}
  </div>
);

export default CardList;
