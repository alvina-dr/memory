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
  {name: 'Piplup', id: '393', src:'/img/pokedex/393.png', have:true},
  {name: 'Prinplup', id: '394', src:'/img/pokedex/394.png', have:true},
  {name: 'Empoleon', id: '395', src:'/img/pokedex/395.png', have:true},
  {name: 'Starly', id: '396', src:'/img/pokedex/396.png', have:true},
  {name: 'Staravia', id: '397', src:'/img/pokedex/397.png', have:true},
  {name: 'Staraptor', id: '398', src:'/img/pokedex/398.png', have:true},
  {name: 'Bidoof', id: '399', src:'/img/pokedex/399.png', have:true},
  {name: 'Bibarel', id: '400', src:'/img/pokedex/400.png', have:false},
  {name: 'Kricketot', id: '401', src:'/img/pokedex/401.png', have:true},
  {name: 'Kricketune', id: '402', src:'/img/pokedex/402.png', have:false},
  {name: 'Shinx', id: '403', src:'/img/pokedex/403.png', have:false},
  {name: 'Luxio', id: '404', src:'/img/pokedex/404.png', have:true},
  {name: 'Luxray', id: '405', src:'/img/pokedex/405.png', have:false},
  {name: 'Budew', id: '406', src:'/img/pokedex/406.png', have:true},
  {name: 'Roserade', id: '407', src:'/img/pokedex/407.png', have:true},
  {name: 'Cranidos', id: '408', src:'/img/pokedex/408.png', have:true},
  {name: 'Rampardos', id: '409', src:'/img/pokedex/409.png', have:true},
  {name: 'Shieldon', id: '410', src:'/img/pokedex/410.png', have:true},
  {name: 'Bastiodon', id: '411', src:'/img/pokedex/411.png', have:true},
  {name: 'Burmy', id: '412', src:'/img/pokedex/412.png', have:false},
  {name: 'Wormadam', id: '413', src:'/img/pokedex/413.png', have:true},
  {name: 'Mothim', id: '414', src:'/img/pokedex/414.png', have:true},
  {name: 'Combee', id: '415', src:'/img/pokedex/415.png', have:true},
  {name: 'Vespiquen', id: '416', src:'/img/pokedex/416.png', have:true},
  {name: 'Pachirisu', id: '417', src:'/img/pokedex/417.png', have:false},
  {name: 'Buizel', id: '418', src:'/img/pokedex/418.png', have:false},
  {name: 'Floatzel', id: '419', src:'/img/pokedex/419.png', have:false},
  {name: 'Cherubi', id: '420', src:'/img/pokedex/420.png', have:false},
  {name: 'Cherrim', id: '421', src:'/img/pokedex/421.png', have:true},
  {name: 'Shellos', id: '422', src:'/img/pokedex/422.png', have:true}
];

const PokedexCard = props => {
  return (
    <div className={props.have ? "have-true card-pokedex" : "have-false card-pokedex"}>
      <img className="card-image" src={props.src} alt="Pokemon card"/>
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