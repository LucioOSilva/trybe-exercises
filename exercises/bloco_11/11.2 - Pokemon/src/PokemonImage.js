import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render () {
    return <img className='pokeImg' src={this.props.pokemonLinkImg} alt='Im a Pokemon'/>
  }
}

Image.propTypes = {image: PropTypes.string}

export default Image;
