import * as React from 'react';
import PropTypes from 'prop-types'; // ES6
import './style.css';
import { useLocalStorage } from "../../useLocalStorage";

export const PokedexCard = props => {

  console.log(localStorage.getItem("pokedexCardsHave"));

  const pokedexCardsHave = localStorage.getItem("pokedexCardsHave");
  console.log("gotten from use local storage to avoid use state problem" + pokedexCardsHave + "end of gotten");

  /*let [pokedexCardsHave] = useState(() => {
    const ls = localStorage.getItem("pokedexCardsHave");
    if (ls) return JSON.parse(ls);
    else return [];
  });  /*console.log("Je récupère mon array dans le local storage : " + pokedexCardsHave)*/
  const isHave = pokedexCardsHave.includes(props.pokedexid);
  console.log(isHave);

  return (
    <div className={isHave ? "have-true card-pokedex" : "have-false card-pokedex"}>
      <img className="card-image" src={props.src} alt="Pokemon card"/>
      <img className="have-icon"/*{pokedexCardHave ? "have-icon" : "not-have-icon"}*/ src='/img/pokedex/have.png' alt="Have icon"/>
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