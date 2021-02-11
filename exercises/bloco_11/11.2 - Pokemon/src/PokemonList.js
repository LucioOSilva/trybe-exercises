import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';
import './Pokelist.css';

class Pokelist extends React.Component {
  render () {
    return (
      <div className='PokeList'>
        {pokemons.map((pokemonData,index) => <Pokemon key={index} pokemon={pokemonData}/>)}
      </div>
    )
  }
}

export default Pokelist;
