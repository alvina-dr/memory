import React, { useState } from 'react'
import './App.css'

const cardImages = [
    { "src": "/img/test.png" },
    { "src": "/img/test1.png" },
    { "src": "/img/test2.png" },
    { "src": "/img/test3.png" },
    { "src": "/img/test4.png" },
    { "src": "/img/test5.png" },
]

function App() {
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [timeLeft, setTimeLeft] = React.useState(60);

    //shuffle cards
    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))

        setCards(shuffledCards)
        setTurns(0)
    }

    React.useEffect(() => {
        timeLeft > 0 && setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    }, [timeLeft]);
    
    console.log(cards, turns)

    return (
        <div className="App">
            <h1>Pokemon memory</h1>
            <button onClick={shuffleCards}>Start New Game</button>
            <div>
                <p>Time : <b>{timeLeft}</b></p>
            </div>
            <div className="card-grid">
                {cards.map(card => (
                    <div className="card" key={card.id}>
                        <div>
                            <img className="front" src={card.src} alt="card front" />
                            <img className="back" src="/img/cover.png" alt="card back" />
                        </div> 
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App