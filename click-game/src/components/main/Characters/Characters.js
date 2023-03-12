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
    function shuffleCards(array) {
      for (let i = characters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array
    } 
    const shuffledCards = shuffleCards(characters);
    
    function handleClick(e) {
      console.log(e)
    }

    return (
      <div className="container">
        <Wrapper>
          {shuffledCards.map((character) => (
            <CharacterCard 
              onClick={(e) => handleClick(e)}
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
