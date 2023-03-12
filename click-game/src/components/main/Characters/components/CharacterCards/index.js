import React from "react";
import "./style.css";

function CharacterCard(props) {

  return (
    <div className="card-container" >
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
