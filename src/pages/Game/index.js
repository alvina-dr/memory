import { useEffect, useState } from 'react';
import SingleCard from '../../components/SingleCard';
import * as React from 'react';
import Header from '../../components/Header';
import './style.css';
import { FindPokedexCard } from '../../components/PokedexList';

const cardImages = [
    /*{ "src": "/img/019.jpg", matched: false, pokedexid:'019'},
    { "src": "/img/025.jpg", matched: false, pokedexid:'025'},
    { "src": "/img/041.jpg", matched: false, pokedexid:'041'},
    { "src": "/img/063.jpg", matched: false, pokedexid:'063'},
    { "src": "/img/066.jpg", matched: false, pokedexid:'066'},*/

    { "src": "/img/387.jpg", matched: false, pokedexid:'387'},
    { "src": "/img/388.jpg", matched: false, pokedexid:'388'  },
    { "src": "/img/389.jpg", matched: false, pokedexid:'389'  },
    { "src": "/img/390.jpg", matched: false, pokedexid:'390'  },
    { "src": "/img/391.jpg", matched: false, pokedexid:'391'  },
    { "src": "/img/392.jpg", matched: false, pokedexid:'392' },
    { "src": "/img/393.jpg", matched: false, pokedexid:'393'  },
    { "src": "/img/394.jpg", matched: false, pokedexid:'394'  },
    { "src": "/img/395.jpg", matched: false, pokedexid:'395'  },
    { "src": "/img/396.jpg", matched: false, pokedexid:'396'  },
    { "src": "/img/397.jpg", matched: false, pokedexid:'397'  },
    { "src": "/img/398.jpg", matched: false, pokedexid:'398'  },
    { "src": "/img/399.jpg", matched: false, pokedexid:'399'  },
    { "src": "/img/400.jpg", matched: false, pokedexid:'400' },
    { "src": "/img/401.jpg", matched: false, pokedexid:'401'  },
    { "src": "/img/402.jpg", matched: false, pokedexid:'402'  },
    { "src": "/img/403.jpg", matched: false, pokedexid:'403'  },
    { "src": "/img/404.jpg", matched: false, pokedexid:'404'  },
    { "src": "/img/405.jpg", matched: false, pokedexid:'405'  },
    { "src": "/img/406.jpg", matched: false, pokedexid:'406'  }, 
    { "src": "/img/407.jpg", matched: false, pokedexid:'407' },
    { "src": "/img/408.jpg", matched: false, pokedexid:'408'  },
    { "src": "/img/409.jpg", matched: false, pokedexid:'409'  },
    { "src": "/img/410.jpg", matched: false, pokedexid:'410'  },
    { "src": "/img/411.jpg", matched: false, pokedexid:'411'  },
    { "src": "/img/412.jpg", matched: false, pokedexid:'412'  },
    { "src": "/img/413.jpg", matched: false, pokedexid:'413'  }, 
    { "src": "/img/414.jpg", matched: false, pokedexid:'414' },
    { "src": "/img/415.jpg", matched: false, pokedexid:'415'  },
    { "src": "/img/416.jpg", matched: false, pokedexid:'416'  },
    { "src": "/img/417.jpg", matched: false, pokedexid:'417'  },
    { "src": "/img/418.jpg", matched: false, pokedexid:'418'  },
    { "src": "/img/419.jpg", matched: false, pokedexid:'419'  },
    { "src": "/img/420.jpg", matched: false, pokedexid:'420'  }, 
    { "src": "/img/421.jpg", matched: false, pokedexid:'421' },
    { "src": "/img/422.jpg", matched: false, pokedexid:'422'  }
]

export function random(array) { 
    return array[Math.floor(Math.random()*array.length)];
    //return Math.random() * (mx - mn) + mn; 
} 

export default function Game() {
    //JEU DE MEMORY
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const shuffledCards = cardImages.sort(() => Math.random() - 0.5)     //1. Mélanger mon array de base (sans creer de doublons)
    .slice(0, 20);    //2. Sélectionner les N premiers

    //TEMPS DU JEU
    const [timeLeft, setTimeLeft] = React.useState(0);
    const [gameState, setGameState] = useState(false);
    const [disabled, setDisabled] = useState(false);

    //SCORES ET HIGHSCORES
    const [score, setScore] = useState(0);
    const [localHighscore, setLocalHighscore] = useState(0);
    const [highscore, setHighscore] = useState(() => {
        const saved = localStorage.getItem("highscore");
        const initialValue = JSON.parse(saved);
        return initialValue || score;
      });

    //AFFICHAGE DU BOUTON QUAND ON COMMENCE
    const [showStartButton, setShowStartButton] = React.useState(true)

    //POSSESSION DES CARTES
    let [pokedexCardsHave, setPokedexCardsHave] = useState(() => {
        const ls = localStorage.getItem("pokedexCardsHave");
        if (ls) return JSON.parse(ls);
        else return [];
      });

    //FIN DÉCLARATION CONSTANTES ---------------------------------------------------------------------------------------------------------

    //LANCE LE JEU + REMET TIMER À ZÉRO + MÉLANGE LES CARTES
    const shuffleCards = () => {
        setChoiceOne(null) //met la première sélection de carte à zéro
        setChoiceTwo(null) //met la deuxième sélection de carte à zéro
        setDisabled(false); //le joueur peut sélectionner une carte
        setCards(shuffledCards);
        setCards(shuffledCards => [...shuffledCards, ...shuffledCards]    //3. Réaliser des doublons de chaque cartes sélectionnées
            .sort(() => Math.random() - 0.5)     //4. Remélanger avec ces doublons
            .map((card) => ({ ...card, id: Math.random() })))
        setTurns(0) //remet le nombre de paire retournées à zéro
        setScore(0) //remet le nombre de paires trouvé à zéro
        setTimeLeft(60) //indique le temps d'une partie
        setGameState(true) //indique que le jeu a commencé et que le timer peut se déclencher
    }

    //POUR RECOMMENCER LE JEU
    const restart = () => {
        setGameState(false);
        setCards(prevCards => {
        return prevCards.map(card => {
            return {...card, matched: true}       
            })
        }) //MONTRER TOUTES LES CARTES
        setTimeout(() => setCards(prevCards => {
            return prevCards.map(card => {
                return {...card, matched: false};
                })
            }), 1000) //LES CACHER
        setTimeout(() => shuffleCards(), 1500) //LES MÉLANGER
    }

    //CHOIX DES CARTES PAR LE JOUEUR
    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
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
    
    //COMPARE LES DEUX CARTES SÉLECTIONNÉS POUR VOIR SI ELLES MATCHENT
    useEffect(() => {
        if (choiceOne && choiceTwo) {
            setDisabled(true)
            if (choiceOne.src === choiceTwo.src) {
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.src === choiceOne.src) { //Si nos deux cartes sont identiques
                            let localScore = score;
                            localScore++;
                            setScore(localScore) //On utilise encore la variable score pour l'affichage
                            if (localScore >= highscore) { //On compare le score avec le highscore et s'il est supérieur : 
                                setLocalHighscore(localScore); //On donne au highscore local la valeur du score
                                localStorage.setItem("highscore", JSON.stringify(localScore));
                                setHighscore(localStorage.getItem("highscore"));
                            }
                            setPokedexCardsHave(prevState => [...prevState, FindPokedexCard(card.pokedexid)]); //AJOUTE LE POKÉMON DE LA PAIRE À LA LISTE DES POKÉMONS POSSÉDÉS
                            localStorage.setItem("pokedexCardsHave", JSON.stringify(pokedexCardsHave)); //SAUVEGARDE LA LISTE DES POKÉMONS POSSÉDÉS DANS LE LOCAL STORAGE
                            return {...card, matched:true, score, localHighscore, highscore};
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
    }, [choiceOne, choiceTwo, score, highscore, localHighscore, pokedexCardsHave])


    //REMET LE TOUR À ZÉRO ET CACHE LES DEUX CARTES SI ELLES SONT MAUVAISES + PERMET DE REJOUER
    const resetTurn = () => {
        setChoiceOne(null) //remet la sélection de la première carte à zéro
        setChoiceTwo(null) //remet la sélection de la deuxième carte à zéro
        setTurns(prevTurns => prevTurns + 1); // ajoute 1 au nombre de tours joués
        setDisabled(false)
    }


    //DÉCOMPTE EN SECONDES
    React.useEffect(() => {
        if (gameState && timeLeft > 0) {
            setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        } else if (gameState && timeLeft === 0) {
            setTimeLeft(0)
            clearInterval(timeLeft);
            setDisabled(true);
            setCards(prevCards => {
            return prevCards.map(card => {
                return {...card, matched: true}       
                })
            })
        }
    }, [timeLeft, gameState]);



    return (
        <div className="Game">
            <Header/>
            <div className="div-info-button-game">
                <div className="div-row">
                    <p className="info">Time : <b>{timeLeft}</b></p>
                    <p className="info">Turns: <b>{turns}</b></p>
                    <p className="info">Score : <b>{score}</b></p>
                    <p className="info">Highscore : <b>{highscore}</b></p>
                </div>
                <div className="div-row btns">
                    <button onClick={pauseGame} className="btn">{gameState ? "||" : "►"}</button> 
                    <button onClick={restart} className="btn">↻</button>
                </div>
            </div>
            <button onClick={ () => {shuffleCards(); setShowStartButton(false)}} className={showStartButton ? "" : "started"}>Play</button>

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