import React from "react";
import AModal from "../modal/modal.component";
import "./card-list.style.css";
let number = 1;
const CardList = ({ movies }) => (
  <div className="card-list">
    {movies.map((movie) => (
      <AModal movie={movie} key={number++} />
    ))}
  </div>
);

export default CardList;
