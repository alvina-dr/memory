import * as React from 'react';
import PropTypes from 'prop-types'; // ES6
import './style.css';

export const PokedexCard = props => {

  const pokedexCardsHave = localStorage.getItem("pokedexCardsHave"); //VA CHERCHER LA LISTE DES POKÉMONS POSSÉDÉS
  let isHave = false;
  if (pokedexCardsHave !== null) {
    isHave = pokedexCardsHave.includes(props.pokedexid); //VÉRIFIE QUE LA CARTE QUE L'ON REGARDE FAIT PARTIE DE CETTE LISTE
  } else {
    isHave = false;
  }



  return (
    <div className={isHave ? "have-true card-pokedex" : "have-false card-pokedex"}>
      <img className="card-image" src={props.src} alt="Pokemon card"/>
      <img className={isHave ? "have-icon" : "not-have-icon"} src='/img/pokedex/have.png' alt="Have icon"/>
      <div className="div-text-pokedex">
        <p className="pokedex-text-name">{props.name}</p>
        <p className="pokedex-text-id">#{props.pokedexid}</p>
    </div>
    </div>
  );

};

PokedexCard.propTypes = {
  name: PropTypes.string,
  pokedexid: PropTypes.string, 
  img: PropTypes.string, 
}