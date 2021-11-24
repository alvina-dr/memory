import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';
import * as React from 'react';


const cardImages = [
    { "src": "/img/1.png", matched: false },
    { "src": "/img/2.png", matched: false  },
    { "src": "/img/3.png", matched: false  },
    { "src": "/img/4.png", matched: false  },
    { "src": "/img/5.png", matched: false  },
    { "src": "/img/1.png", matched: false },
    { "src": "/img/2.png", matched: false  },
    { "src": "/img/3.png", matched: false  },
    { "src": "/img/4.png", matched: false  },
    { "src": "/img/5.png", matched: false  },
    { "src": "/img/4.png", matched: false  },
    { "src": "/img/4.png", matched: false  },
    { "src": "/img/5.png", matched: false  },
    { "src": "/img/1.png", matched: false },
    { "src": "/img/2.png", matched: false  },
    { "src": "/img/3.png", matched: false  },
    { "src": "/img/4.png", matched: false  },
    { "src": "/img/5.png", matched: false  },
    { "src": "/img/4.png", matched: false  },
    { "src": "/img/6.png", matched: false  }
]

function App() {
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)
    const [disabled, setDisabled] = useState(false)

    const [timeLeft, setTimeLeft] = React.useState(60);

    //shuffle cards
    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))

        setChoiceOne(null)
        setChoiceTwo(null)
        setCards(shuffledCards)
        setTurns(0)
    }

    //handle a choice
    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }

    //compare 2 selected cards
    useEffect(() => {
        if (choiceOne && choiceTwo) {
            setDisabled(true)
            if (choiceOne.src === choiceTwo.src) {
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.src === choiceOne.src) {
                            return {...card, matched: true}
                        } else {
                            return card
                        }
                    })
                })
                resetTurn()
            } else {
                setTimeout(() => resetTurn(), 1000)
            }
        }
    }, [choiceOne, choiceTwo])

    console.log(cards)

    const resetTurn = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns(prevTurns => prevTurns + 1)
        setDisabled(false)
    }

    React.useEffect(() => {
        timeLeft > 0 && setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    }, [timeLeft]);
    
    console.log(cards, turns)

    //start new game automagtically
    useEffect(() => {
        shuffleCards()
    }, [])

    return (
        <div className="App">
            <h1>Jaune Prod - Memory</h1>
            <button onClick={shuffleCards}>Start New Game</button>
            <div>
                <p>Time : <b>{timeLeft}</b></p>
            </div>
            <div className="card-grid">
                {cards.map(card => (
                <SingleCard
                    key={card.id}
                    card={card}
                    handleChoice={handleChoice}
                    flipped={card === choiceOne || card === choiceTwo || card.matched}
                    disabled={disabled}
                    />
                ))}
            </div>
            <p>Turns: {turns}</p>
        </div>
    );
}

export default App