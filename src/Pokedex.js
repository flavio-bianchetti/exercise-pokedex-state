import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    return (
      <div className="pokedex">
        <Pokemon key={this.props.pokemon.id} pokemon={this.props.pokemon} />
      </div>
    );
  }
}

export default Pokedex;