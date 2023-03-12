import './App.css';
import Jumbotron from './components/header/jumbotron';
import NavBar from './components/header/nav';
import Characters from './components/main/Characters/Characters';
// create json file with 12 images & ids

// create a header component
// useState to count the score

// useEffect for everytime user clicks a card
// funciton to check if clicked card matches previously clicked card. Use card ID to check match.
// every time the card is clicked the cards rerender. Each rerender is random. 

// if card matches, compare score with top score and if is greater save as new top score else discard. Reset the score count to 0


function App() {
  


  return (
    <div>
      <header>
        <NavBar />
        <Jumbotron />
      </header>
      <main>
        <Characters />
      </main>
    </div>
  );
}

export default App;
