import * as React from 'react';
import './style.css';
import Header from '../../components/Header';
import PokedexList from '../../components/PokedexList';

function Pokedex() {
  return (
    <div className="Pokedex">
      <Header />
      <PokedexList/>
    </div>

  );
}

export default Pokedex