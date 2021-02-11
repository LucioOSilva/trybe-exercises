import React from 'react';
import Image from './PokemonImage';
import PropTypes from 'prop-types';
import './Pokemon.css'

class Pokemon extends React.Component {
  render() {
    const {name, type, averageWeight, image} = this.props.pokemon
    return (
      <div className='pokeBlock'>
        <div className='pokeData'>
          <p>{name}</p>
          <p>{type}</p>
          <p>Average Weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
        <div className='pokeImg'>
          <Image pokemonLinkImg={image}/>
        </div>
      </div>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string,
  averageWeight: PropTypes.shape ({
    value: PropTypes.number,
    measurementUnit: PropTypes.string
  })
}

Pokemon.defaultProps = {
  name: 'im a Pokemon',
}

export default Pokemon;
