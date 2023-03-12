import React, { Component } from "react";
import Wrapper from "./components/Wrapper/index.js";
import CharacterCard from "./components/CharacterCards/index.js";
import characters from "../../../characters.json";
import "./style.css";

class Characters extends Component {
  state = {
    characters,
  };

  render() {
  
    return (
      <div className="container">
        <Wrapper>
          {characters.map((character) => (
            <CharacterCard 
              id={character.id}
              image={character.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default Characters;
