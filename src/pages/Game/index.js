import { useEffect, useState } from 'react';
import SingleCard from '../../components/SingleCard';
import * as React from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';
import './style.css';

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

function Game() {
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [timeLeft, setTimeLeft] = React.useState(0);
    const [score, setScore] = useState(0);
    const [highscore, setHighscore] = useState(0);
    const [gameState, setGameState] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }))
    const [showStartButton, setShowStartButton] = React.useState(true)
    //const [showHome, setShowHome] = useState(false);



    //LANCE LE JEU + REMET TIMER À ZÉRO + MÉLANGE LES CARTES
    const shuffleCards = () => {
        setChoiceOne(null) //met la première sélection de carte à zéro
        setChoiceTwo(null) //met la deuxième sélection de carte à zéro
        setDisabled(false); //le joueur peut sélectionner une carte
        setCards(shuffledCards)
        setTurns(0) //remet le nombre de paire retournées à zéro
        setScore(0) //remet le nombre de paires trouvé à zéro
        setTimeLeft(60) //indique le temps d'une partie
        setGameState(true) //indique que le jeu a commencé et que le timer peut se déclencher
    }

    const restart = () => {
        //this.setTimeout(() => this.setTimeLeft(0)); 
        setGameState(false);
        setCards(prevCards => {
        return prevCards.map(card => {
            return {...card, matched: true}       
            })
        })
        setTimeout(() => setCards(prevCards => {
            return prevCards.map(card => {
                return {...card, matched: false};
                })
            }), 1000)
        setTimeout(() => shuffleCards(), 1500)
    }

    //CHOIX DES CARTES
    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }

    //PAUSE OU DÉPAUSE LE JEU
    const pauseGame = () =>  {
        setGameState(!gameState);
        if (gameState) { //le jeu vient d'être désactivé
            setDisabled(true) //le joueur ne peut pas sélectionner une carte
        } else if (!gameState) { //le jeu vient d'être réactivé
            setDisabled(false); //le joueur peut sélectionner une carte
        }
    }

    // const getHome = () => {
    //     setGameState(false);
    //     setShowHome(true);
    // }

    //REMET LE TIMER À ZÉRO
    // function resetTimer() {
    //     setTimeLeft(60)
    //     setGameState(false)
    // }
    
    //COMPARE LES DEUX CARTES SÉLECTIONNÉS POUR VOIR SI ELLES MATCHENT
    useEffect(() => {
        if (choiceOne && choiceTwo) {
            setDisabled(true)
            if (choiceOne.src === choiceTwo.src) {
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.src === choiceOne.src) {
                            setScore(score + 1); //ajoute 1 au score
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
    }, [choiceOne, choiceTwo, score])


    //REMET LE TOUR À ZÉRO ET CACHE LES DEUX CARTES SI ELLES SONT MAUVAISES + PERMET DE REJOUER
    const resetTurn = () => {
        setChoiceOne(null) //remet la sélection de la première carte à zéro
        setChoiceTwo(null) //remet la sélection de la deuxième carte à zéro
        setTurns(prevTurns => prevTurns + 1); // ajoute 1 au nombre de tours joués
        setDisabled(false)
    }


    //DÉCOMPTE EN SECONDES
    React.useEffect(() => {
        console.log(gameState);
        if (gameState && timeLeft > 0) {
            setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        } else if (gameState && timeLeft === 0) {
            setTimeLeft(0)
            clearInterval(timeLeft);
            setDisabled(true);
            if (score > highscore) {
                setHighscore(score)
            }
            setCards(prevCards => {
            return prevCards.map(card => {
                return {...card, matched: true}       
                })
            })
        }
    }, [timeLeft, gameState, score, highscore]);

    //►
    return (
        <div className="Game">
            <Header/>
            <div class="div-row">
                <div class="div-row">
                    <p class="info">Time : <b>{timeLeft}</b></p>
                    <p class="info">Turns: <b>{turns}</b></p>
                    <p class="info">Score : <b>{score}</b></p>
                    <p class="info">Highscore : <b>{highscore}</b></p>

                </div>
                <div class="div-row btns">
                    <Button link="/">
                        Home
                    </Button>
                    <button onClick={pauseGame} class="btn">{gameState ? "||" : "►"}</button> 
                    <button onClick={restart} class="btn">↻</button>
                </div>
            </div>
            <button onClick={ () => {shuffleCards(); setShowStartButton(false)}} className={showStartButton ? "" : "started"}>Play</button>

            <div ></div>
            <div className="card-grid">
                {cards.map(card => (
                <SingleCard
                    key={card.id}
                    card={card}
                    handleChoice={handleChoice}
                    flipped={card === choiceOne || card === choiceTwo || card.matched} 
                    //si une carte est soit le choix 1, soit le choix 2, soit déjà appairés, elle reste retournée
                    disabled={disabled}
                    />
                ))}
            </div>
        </div>
    );
}

export default Game