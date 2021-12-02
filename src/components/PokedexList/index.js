import * as React from 'react';
import PropTypes from 'prop-types'; // ES6
import './style.css';
import { PokedexCard } from './pokedex-card';

const pokedexCards = [
  /*{name: 'Rattata', key: '019', src:'/img/pokedex/019.jpg'},
  {name: 'Pikachu', key: '025', src:'/img/pokedex/025.jpg'},
  {name: 'Zubat', key: '041', src:'/img/pokedex/041.jpg'},
  {name: 'Abra', key: '063', src:'/img/pokedex/063.jpg'},
  {name: 'Machop', key: '066', src:'/img/pokedex/066.jpg'},*/

  {name: 'Turtwig', key: '387', src:'/img/pokedex/387.jpg'},
  {name: 'Grotle', key: '388', src:'/img/pokedex/388.jpg'},
  {name: 'Torterra', key: '389', src:'/img/pokedex/389.jpg'},
  {name: 'Chimchar', key: '390', src:'/img/pokedex/390.jpg'},
  {name: 'Monferno', key: '391', src:'/img/pokedex/391.jpg'},
  {name: 'Infernape', key: '392', src:'/img/pokedex/392.jpg'},
  {name: 'Piplup', key: '393', src:'/img/pokedex/393.jpg'},
  {name: 'Prinplup', key: '394', src:'/img/pokedex/394.jpg'},
  {name: 'Empoleon', key: '395', src:'/img/pokedex/395.jpg'},
  {name: 'Starly', key: '396', src:'/img/pokedex/396.jpg'},
  {name: 'Staravia', key: '397', src:'/img/pokedex/397.jpg'},
  {name: 'Staraptor', key: '398', src:'/img/pokedex/398.jpg'},
  {name: 'Bidoof', key: '399', src:'/img/pokedex/399.jpg'},
  {name: 'Bibarel', key: '400', src:'/img/pokedex/400.jpg'},
  {name: 'Kricketot', key: '401', src:'/img/pokedex/401.jpg'},
  {name: 'Kricketune', key: '402', src:'/img/pokedex/402.jpg'},
  {name: 'Shinx', key: '403', src:'/img/pokedex/403.jpg'},
  {name: 'Luxio', key: '404', src:'/img/pokedex/404.jpg'},
  {name: 'Luxray', key: '405', src:'/img/pokedex/405.jpg'},
  {name: 'Budew', key: '406', src:'/img/pokedex/406.jpg'},
  {name: 'Roserade', key: '407', src:'/img/pokedex/407.jpg'},
  {name: 'Cranidos', key: '408', src:'/img/pokedex/408.jpg'},
  {name: 'Rampardos', key: '409', src:'/img/pokedex/409.jpg'},
  {name: 'Shieldon', key: '410', src:'/img/pokedex/410.jpg'},
  {name: 'Bastiodon', key: '411', src:'/img/pokedex/411.jpg'},
  {name: 'Burmy', key: '412', src:'/img/pokedex/412.jpg'},
  {name: 'Wormadam', key: '413', src:'/img/pokedex/413.jpg'},
  {name: 'Mothim', key: '414', src:'/img/pokedex/414.jpg'},
  {name: 'Combee', key: '415', src:'/img/pokedex/415.jpg'},
  {name: 'Vespiquen', key: '416', src:'/img/pokedex/416.jpg'},
  {name: 'Pachirisu', key: '417', src:'/img/pokedex/417.jpg'},
  {name: 'Buizel', key: '418', src:'/img/pokedex/418.jpg'},
  {name: 'Floatzel', key: '419', src:'/img/pokedex/419.jpg'},
  {key: '420', name: 'Cherubi', src:'/img/pokedex/420.jpg'},
  {key: '421', name: 'Cherrim', src:'/img/pokedex/421.jpg'},
  {key: '422', name: 'Shellos', src:'/img/pokedex/422.jpg'},
  {key: '423', name: 'Gastrodon', src:'/img/pokedex/423.jpg'},
  {key: '424', name: 'Ambipom', src:'/img/pokedex/424.jpg'},
  {key: '425', name: 'Drifloon', src:'/img/pokedex/425.jpg'},
  {key: '426', name: 'Drifblim', src:'/img/pokedex/426.jpg'},
  {key: '427', name: 'Buneary', src:'/img/pokedex/427.jpg'},
  {key: '428', name: 'Lopunny ', src:'/img/pokedex/428.jpg'},
  {key: '429', name: 'Mismagius ', src:'/img/pokedex/429.jpg'},
  {key: '430', name: 'Honchkrow ', src:'/img/pokedex/430.jpg'},
  {key: '431', name: 'Glameow ', src:'/img/pokedex/431.jpg'},
  {key: '432', name: 'Purugly ', src:'/img/pokedex/432.jpg'},
  {key: '433', name: 'Chingling ', src:'/img/pokedex/433.jpg'},
  {key: '434', name: 'Stunky ', src:'/img/pokedex/434.jpg'},
  {key: '435', name: 'Skuntank ', src:'/img/pokedex/435.jpg'},
  {key: '436', name: 'Bronzor ', src:'/img/pokedex/436.jpg'},
  {key: '437', name: 'Bronzong ', src:'/img/pokedex/437.jpg'},
  {key: '438', name: 'Bonsly ', src:'/img/pokedex/438.jpg'},
  {key: '439', name: 'Mime Jr.', src:'/img/pokedex/439.jpg'},
  {key: '440', name: 'Happiny ', src:'/img/pokedex/440.jpg'},
  {key: '441', name: 'Chatot ', src:'/img/pokedex/441.jpg'},
  {key: '442', name: 'Spiritomb ', src:'/img/pokedex/442.jpg'},
  {key: '443', name: 'Gible ', src:'/img/pokedex/443.jpg'},
  {key: '444', name: 'Gabite ', src:'/img/pokedex/444.jpg'},
  {key: '445', name: 'Garchomp ', src:'/img/pokedex/445.jpg'},
  {key: '446', name: 'Munchlax ', src:'/img/pokedex/446.jpg'},
  {key: '447', name: 'Riolu ', src:'/img/pokedex/447.jpg'},
  {key: '448', name: 'Lucario ', src:'/img/pokedex/448.jpg'},
  {key: '449', name: 'Hippopotas ', src:'/img/pokedex/449.jpg'},
  {key: '450', name: 'Hippowdon ', src:'/img/pokedex/450.jpg'},
  {key: '451', name: 'Skorupi ', src:'/img/pokedex/451.jpg'},
  {key: '452', name: 'Drapion', src:'/img/pokedex/452.jpg'},
  {key: '453', name: 'Croagunk ', src:'/img/pokedex/453.jpg'},
  {key: '454', name: 'Toxicroak ', src:'/img/pokedex/454.jpg'},
  {key: '455', name: 'Carnivine ', src:'/img/pokedex/455.jpg'},
  {key: '456', name: 'Finneon ', src:'/img/pokedex/456.jpg'},
  {key: '457', name: 'Lumineon ', src:'/img/pokedex/457.jpg'},
  {key: '458', name: 'Mantyke ', src:'/img/pokedex/458.jpg'},
  {key: '459', name: 'Snover ', src:'/img/pokedex/459.jpg'},
  {key: '460', name: 'Abomasnow ', src:'/img/pokedex/460.jpg'},
  {key: '461', name: 'Weavile ', src:'/img/pokedex/461.jpg'},
  {key: '462', name: 'Magnezone ', src:'/img/pokedex/462.jpg'},
  {key: '463', name: 'Lickilicky', src:'/img/pokedex/463.jpg'},
  {key: '464', name: 'Rhyperior ', src:'/img/pokedex/464.jpg'},
  {key: '465', name: 'Tangrowth ', src:'/img/pokedex/465.jpg'},
  {key: '466', name: 'Electivire', src:'/img/pokedex/466.jpg'},
  {key: '467', name: 'Magmortar ', src:'/img/pokedex/467.jpg'},
  {key: '468', name: 'Togekiss ', src:'/img/pokedex/468.jpg'},
  {key: '469', name: 'Yanmega ', src:'/img/pokedex/469.jpg'},
  {key: '470', name: 'Leafeon ', src:'/img/pokedex/470.jpg'},
  {key: '471', name: 'Glaceon ', src:'/img/pokedex/471.jpg'},
  {key: '472', name: 'Gliscor ', src:'/img/pokedex/472.jpg'},
  {key: '473', name: 'Mamoswine ', src:'/img/pokedex/473.jpg'},
  {key: '474', name: 'Porygon-Z', src:'/img/pokedex/474.jpg'},
  {key: '475', name: 'Gallade ', src:'/img/pokedex/475.jpg'},
  {key: '476', name: 'Probopass ', src:'/img/pokedex/476.jpg'},
  {key: '477', name: 'Dusknoir ', src:'/img/pokedex/477.jpg'},
  {key: '478', name: 'Froslass ', src:'/img/pokedex/478.jpg'},
  {key: '479', name: 'Rotom ', src:'/img/pokedex/479.jpg'},
  {key: '480', name: 'Uxie ', src:'/img/pokedex/480.jpg'},
  {key: '481', name: 'Mesprit', src:'/img/pokedex/481.jpg'},
  {key: '482', name: 'Azelf ', src:'/img/pokedex/482.jpg'},
  {key: '483', name: 'Dialga ', src:'/img/pokedex/483.jpg'},
  {key: '484', name: 'Palkia ', src:'/img/pokedex/484.jpg'},
  {key: '485', name: 'Heatran ', src:'/img/pokedex/485.jpg'},
  {key: '486', name: 'Regigigas ', src:'/img/pokedex/486.jpg'},
  {key: '487', name: 'Giratina ', src:'/img/pokedex/487.jpg'},
  {key: '488', name: 'Cresselia ', src:'/img/pokedex/488.jpg'},
  {key: '489', name: 'Phione ', src:'/img/pokedex/489.jpg'},
  {key: '490', name: 'Manaphy ', src:'/img/pokedex/490.jpg'},
  {key: '491', name: 'Darkrai ', src:'/img/pokedex/491.jpg'},
  {key: '492', name: 'Shaymin ', src:'/img/pokedex/492.jpg'},
  {key: '493', name: 'Arceus ', src:'/img/pokedex/493.jpg'}
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