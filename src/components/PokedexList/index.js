import * as React from 'react';
import PropTypes from 'prop-types'; // ES6
import './style.css';
import { PokedexCard } from './pokedex-card';

const pokedexCards = [
  /*{name: 'Rattata', key: '019', src:'/img/pokedex/019.png'},
  {name: 'Pikachu', key: '025', src:'/img/pokedex/025.png'},
  {name: 'Zubat', key: '041', src:'/img/pokedex/041.png'},
  {name: 'Abra', key: '063', src:'/img/pokedex/063.png'},
  {name: 'Machop', key: '066', src:'/img/pokedex/066.png'},*/

  {name: 'Turtwig', key: '387', src:'/img/pokedex/387.png'},
  {name: 'Grotle', key: '388', src:'/img/pokedex/388.png'},
  {name: 'Torterra', key: '389', src:'/img/pokedex/389.png'},
  {name: 'Chimchar', key: '390', src:'/img/pokedex/390.png'},
  {name: 'Monferno', key: '391', src:'/img/pokedex/391.png'},
  {name: 'Infernape', key: '392', src:'/img/pokedex/392.png'},
  {name: 'Piplup', key: '393', src:'/img/pokedex/393.png'},
  {name: 'Prinplup', key: '394', src:'/img/pokedex/394.png'},
  {name: 'Empoleon', key: '395', src:'/img/pokedex/395.png'},
  {name: 'Starly', key: '396', src:'/img/pokedex/396.png'},
  {name: 'Staravia', key: '397', src:'/img/pokedex/397.png'},
  {name: 'Staraptor', key: '398', src:'/img/pokedex/398.png'},
  {name: 'Bidoof', key: '399', src:'/img/pokedex/399.png'},
  {name: 'Bibarel', key: '400', src:'/img/pokedex/400.png'},
  {name: 'Kricketot', key: '401', src:'/img/pokedex/401.png'},
  {name: 'Kricketune', key: '402', src:'/img/pokedex/402.png'},
  {name: 'Shinx', key: '403', src:'/img/pokedex/403.png'},
  {name: 'Luxio', key: '404', src:'/img/pokedex/404.png'},
  {name: 'Luxray', key: '405', src:'/img/pokedex/405.png'},
  {name: 'Budew', key: '406', src:'/img/pokedex/406.png'},
  {name: 'Roserade', key: '407', src:'/img/pokedex/407.png'},
  {name: 'Cranidos', key: '408', src:'/img/pokedex/408.png'},
  {name: 'Rampardos', key: '409', src:'/img/pokedex/409.png'},
  {name: 'Shieldon', key: '410', src:'/img/pokedex/410.png'},
  {name: 'Bastiodon', key: '411', src:'/img/pokedex/411.png'},
  {name: 'Burmy', key: '412', src:'/img/pokedex/412.png'},
  {name: 'Wormadam', key: '413', src:'/img/pokedex/413.png'},
  {name: 'Mothim', key: '414', src:'/img/pokedex/414.png'},
  {name: 'Combee', key: '415', src:'/img/pokedex/415.png'},
  {name: 'Vespiquen', key: '416', src:'/img/pokedex/416.png'},
  {name: 'Pachirisu', key: '417', src:'/img/pokedex/417.png'},
  {name: 'Buizel', key: '418', src:'/img/pokedex/418.png'},
  {name: 'Floatzel', key: '419', src:'/img/pokedex/419.png'},
  {key: '420', name: 'Cherubi', src:'/img/pokedex/420.png'},
  {key: '421', name: 'Cherrim', src:'/img/pokedex/421.png'},
  {key: '422', name: 'Shellos', src:'/img/pokedex/422.png'}
];

export function FindPokedexCard(pokedexid) {
  return pokedexCards.find((pokedexCard) => {
    return pokedexCard.key === pokedexid;
  })
}

const PokedexList = props => {



  const pokedexArray = pokedexCards.map((pokedexCard) => {
    return (
      <PokedexCard name={pokedexCard.name} key={pokedexCard.key} pokedexid={pokedexCard.key} src={pokedexCard.src} />
    );
  });
  return (
    <div className="pokedex-grid">
      {pokedexArray}
    </div>
  );
};

PokedexList.propTypes = {
  pokedexCards: PropTypes.array
}



export default PokedexList