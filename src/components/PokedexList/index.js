import * as React from 'react';
import PropTypes from 'prop-types'; // ES6
import './style.css';

 const pokedexCards = [
  {name: 'Turtwig', id: '387', src:'/img/pokedex/387.png', have:true},
  {name: 'Grotle', id: '388', src:'/img/pokedex/388.png', have:true},
  {name: 'Torterra', id: '389', src:'/img/pokedex/389.png', have:false},
  {name: 'Chimchar', id: '390', src:'/img/pokedex/390.png', have:true},
  {name: 'Monferno', id: '391', src:'/img/pokedex/391.png', have:true},
  {name: 'Infernape', id: '392', src:'/img/pokedex/392.png', have:false},
];

const PokedexCard = props => {
  return (
    <div className="card-pokedex">
      <img className={props.have ? "have-true card-image" : "have-false card-image"} src={props.src} alt="Pokemon card"/>
      <img className={props.have ? "have-icon" : "not-have-icon"} src='/img/pokedex/have.png' alt="Have icon"/>
      <div className="div-text-pokedex">
        <p className="pokedex-text-name">{props.name}</p>
        <p className="pokedex-text-id">#{props.id}</p>
      </div>
    </div>
  );
};

PokedexCard.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string, 
  img: PropTypes.string, 
  have: PropTypes.bool
}

const PokedexList = props => {
  const pokedexArray = pokedexCards.map((pokedexCard) => {
    return (
      <PokedexCard name={pokedexCard.name} id={pokedexCard.id} src={pokedexCard.src} have={pokedexCard.have}/>
    );
  });
  return (
    <div class="pokedex-grid">
      {pokedexArray}
    </div>
  );
};

PokedexList.propTypes = {
  pokedexCards: PropTypes.array
}

export default PokedexList