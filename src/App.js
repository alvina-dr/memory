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
    { "src": "/img/6.png", matched: false },
    { "src": "/img/7.png", matched: false  },
    { "src": "/img/8.png", matched: false  },
    { "src": "/img/9.png", matched: false  },
    { "src": "/img/10.png", matched: false  },
    { "src": "/img/11.png", matched: false  },
    { "src": "/img/12.png", matched: false  },
    { "src": "/img/13.png", matched: false  },
    { "src": "/img/14.png", matched: false },
    { "src": "/img/15.png", matched: false  },
    { "src": "/img/16.png", matched: false  },
    { "src": "/img/17.png", matched: false  },
    { "src": "/img/18.png", matched: false  },
    { "src": "/img/19.png", matched: false  },
    { "src": "/img/20.png", matched: false  }
]

function App() {
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [timeLeft, setTimeLeft] = React.useState(0);
    const [score, setScore] = useState(0);
    const [gameState, setGameState] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }))


    //MÉLANGE LES CARTES
    const shuffleCards = () => {

        setChoiceOne(null)
        setChoiceTwo(null)
        setCards(shuffledCards)
        setTurns(0)
        setScore(0)
    }

    //CHOIX DES CARTES
    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }

    //LANCE LE TIMER QUAND ON LANCE LE JEU
    const startGame = () =>  {
        setTimeLeft(60);
        setGameState(true);
    }

    //PAUSE OU DÉPAUSE LE JEU
    const pauseGame = () =>  {
        setGameState(!setGameState);
    }

    //REMET LE TIMER À ZÉRO
    function resetTimer() {
        setTimeLeft(60)
        setGameState(false)
    }
    
    //COMPARE LES DEUX CARTES SÉLECTIONNÉS POUR VOIR SI ELLES MATCHENT
    useEffect(() => {
        if (choiceOne && choiceTwo) {
            setDisabled(true)
            if (choiceOne.src === choiceTwo.src) {
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.src === choiceOne.src) {
                            setScore(score + 1)
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


    //REMET LA CARTE À L'ENVERS
    const resetTurn = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns(prevTurns => prevTurns + 1)
        setDisabled(false)
    }


    //DÉCOMPTE EN SECONDES
    React.useEffect(() => {
        console.log(gameState);
        if (gameState && timeLeft > 0) {
            setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        } else if (gameState && timeLeft === 0) {
            setTimeLeft(0)
            alert("LOSE")
            clearInterval(timeLeft);
            //END OF GAME
        }
    }, [timeLeft]);

    return (
        <div className="App">
            <h1>Pokemon Memory</h1>
            <div class="div-row">
                <div class="div-row">
                    <p class="info">Time : <b>{timeLeft}</b></p>
                    <p class="info">Turns: <b>{turns}</b></p>
                    <p class="info">Score : <b>{score}</b></p>
                </div>
                <div class="div-row btns">
                    <button onClick={pauseGame} class="btn">Home</button>
                    <button onClick={pauseGame} class="btn">||</button>
                </div>
            </div>
            <button onClick={() => {shuffleCards(); startGame()}}>Play</button>

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
        </div>
    );
}

export default App