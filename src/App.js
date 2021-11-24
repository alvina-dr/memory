import { useState, useEffect } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';
import * as React from 'react';


const cardImages = [
    { "src": "/img/cover1.png" },
    { "src": "/img/test1.png" },
    { "src": "/img/test2.png" },
    { "src": "/img/test3.png" },
    { "src": "/img/test4.png" },
    { "src": "/img/test5.png" },
]

function App() {
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)
    const [timeLeft, setTimeLeft] = React.useState();
    const [gameState, setGameState] = useState(false);

    //shuffle cards
    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))

        setCards(shuffledCards)
        setTurns(0)
}

    //handle a choice
    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }

    const startGame = () =>  {
        setTimeLeft(60);
        setGameState(true);
    }

    function resetTimer() {
        setTimeLeft(60)
        setGameState(false)
    }
    
    React.useEffect(() => {
        console.log(gameState);
        if (gameState && timeLeft > 0) {
            setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        } else if (gameState && timeLeft === 0) {
            alert("LOSE")
            clearInterval(timeLeft);
            //END OF GAME
        }
    }, [timeLeft]);
    
    console.log(cards, turns)

    return (
        <div className="App">
            <h1>Pokemon memory</h1>
            <button onClick={() => {shuffleCards(); startGame()}}>Start New Game</button>
            <p>Time : <b>{timeLeft}</b></p>
            <div className="card-grid">
                {cards.map(card => (
                <SingleCard
                    key={card.id}
                    card={card}
                    handleChoice={handleChoice}
                    />
                ))}
            </div>
        </div>
    );
}

export default App