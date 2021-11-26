import * as React from 'react';
import PropTypes from 'prop-types'; // ES6
import './style.css';

 const pokedexCards = [
  {name: 'Turtwig', id: '387', src:'/img/1.png', have:true},
  {name: 'Grotle', id: '388', src:'/img/2.png', have:true},
  {name: 'Torterra', id: '389', src:'/img/3.png', have:false},
  {name: 'Chimchar', id: '390', src:'/img/4.png', have:true},
  {name: 'Monferno', id: '391', src:'/img/4.png', have:true},
  {name: 'Infernape', id: '392', src:'/img/4.png', have:false},
];

const PokedexCard = props => {
  return (
    <div className="card">
      <img className={props.have ? "have-true card-image" : "have-false card-image"} src={props.src} alt="Pokemon card"/>
      <img className={props.have ? "have-icon" : "not-have-icon"} src='/img/pokedex/have.png' alt="Have icon"/>
      <div className="div-row-pokedex">
        <p>{props.name}</p>
        <p>#{props.id}</p>
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