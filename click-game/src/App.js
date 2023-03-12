import './App.css';
import Jumbotron from './components/header/jumbotron';
import NavBar from './components/header/nav';
import Characters from './components/main/Characters/Characters';
import { useState, useEffect } from 'react';

// create json file with 12 images & ids

// create a header component
// useState to count the score

// useEffect for everytime user clicks a card
// funciton to check if clicked card matches previously clicked card. Use card ID to check match.
// every time the card is clicked the cards rerender. Each rerender is random. 

// if card matches, compare score with top score and if is greater save as new top score else discard. Reset the score count to 0


function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <header>
        <NavBar count={count} />
        <Jumbotron  />
      </header>
      <main>
        <div onClick={() => handleClick()}>
        <Characters />
        </div>
        
      </main>
    </div>
  );
}

export default App;
