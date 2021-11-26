import * as React from 'react';
import PropTypes from 'prop-types'; // ES6
import './style.css';

 const pokedexCards = [
  {name: 'Turtwig',
  id: '387', src:'/img/1.png'},
  {name: 'Grotle',
  id: '388', src:'/img/2.png'},
  {name: 'Torterra',
  id: '389', src:'/img/3.png'},
  {name: 'Chimchar',
  id: '390', src:'/img/4.png'},
  {name: 'Chimchar',
  id: '390', src:'/img/4.png'},
  {name: 'Chimchar',
  id: '390', src:'/img/4.png'},
  {name: 'Chimchar',
  id: '390', src:'/img/4.png'},
  {name: 'Chimchar',
  id: '390', src:'/img/4.png'},
  {name: 'Chimchar',
  id: '390', src:'/img/4.png'},
  {name: 'Chimchar',
  id: '390', src:'/img/4.png'}

];

const PokedexCard = props => {
  return (
    <div className="card">
      <img className="card-image" src={props.src} alt="Pokemon card"/>
      <div className="div-row-pokedex">
        <p>{props.name}</p>
        <p>{props.id}</p>
      </div>
    </div>
  );
};

PokedexCard.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string, 
  img: PropTypes.string
}

const PokedexList = props => {
  const pokedexArray = pokedexCards.map((pokedexCard) => {
    return (
      <PokedexCard name={pokedexCard.name} id={pokedexCard.id} src={pokedexCard.src}/>
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