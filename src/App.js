import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

class App extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      pokemonIndex: 0,
      pokemonLength: pokemons.length,
    };
  }

  handleClick() {
    if (this.state.pokemonIndex < this.state.pokemonLength - 1) {
      this.setState((previusState, _props) => ({
        pokemonIndex: previusState.pokemonIndex + 1
      }));
    } else {
      this.setState({
        pokemonIndex: 0
      });
    }
  }
  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemon={pokemons[this.state.pokemonIndex]} />
        <button onClick={this.handleClick}>Next</button>
      </div>
    );
  }
}

export default App;