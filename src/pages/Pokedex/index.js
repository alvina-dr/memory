import * as React from 'react';
// import { useState } from 'react/cjs/react.development';
import Header from '../../components/Header';
import PokedexCard from '../../components/PokedexCard';
import './style.css';

// const cardImages = [
//     { "src": "/img/1.png"},
//     { "src": "/img/2.png"},
//     { "src": "/img/3.png"},
//     { "src": "/img/4.png"},
//     { "src": "/img/5.png"},
//     { "src": "/img/6.png"},
//     { "src": "/img/7.png"},
//     { "src": "/img/8.png"},
//     { "src": "/img/9.png"},
//     { "src": "/img/10.png"},
//     { "src": "/img/11.png"},
//     { "src": "/img/12.png"},
//     { "src": "/img/13.png"},
//     { "src": "/img/14.png"},
//     { "src": "/img/15.png"},
//     { "src": "/img/16.png"},
//     { "src": "/img/17.png"},
//     { "src": "/img/18.png"},
//     { "src": "/img/19.png"},
//     { "src": "/img/20.png"}
// ]

function Pokedex() {

    // const [cards, setCards] = useState([]);

    // const shuffledCards = [...cardImages, ...cardImages]
    // .sort(() => 1, -1)
    // .map((card) => ({ ...card, id: Math.random() }))


    // //LANCE LE JEU + REMET TIMER À ZÉRO + MÉLANGE LES CARTES
    // const shuffleCards = () => {
    //     setCards(shuffledCards)
    // }

    return (
        <div className="Pokedex">
            <Header />
            <p>Pokedex</p>
            <div className="card-grid">
            {cards.map(card => (
                <PokedexCard
                key={card.id}
                card={card}/>
                ))}
            </div>
        </div>




    );
}

export default Pokedex