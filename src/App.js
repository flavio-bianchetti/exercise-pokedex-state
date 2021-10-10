import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import Button from './Button';

class App extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.handleClickPokemon = this.handleClickPokemon.bind(this);
    this.pokemonListLenght = this.pokemonListLenght.bind(this);

    this.state = {
      pokemonIndex: 0,
      pokemonLength: pokemons.length,
      pokemonList: pokemons,
      btnNextStatus: '',
    };
  }

  pokemonListLenght() {
    if (this.state.pokemonLength > 1) {
      this.setState({
        btnNextStatus: '',
      });
    } else {
      this.setState({
        btnNextStatus: 'disabled',
      });
    }
  }

  handleClickPokemon(event) {
    if (event.target.name === 'All') {
      this.setState({
        pokemonList: pokemons,
        pokemonLength: pokemons.length,
        pokemonIndex: 0,
        btnNextStatus: '',
      });
    } else {
      this.setState({
        pokemonList: pokemons.filter((pokemon) => pokemon.type === event.target.name),
        pokemonLength: pokemons.filter((pokemon) => pokemon.type === event.target.name).length,
        pokemonIndex: 0,
      });
      if (pokemons.filter((pokemon) => pokemon.type === event.target.name).length > 1) {
        this.setState({
          btnNextStatus: '',
        });
      } else {
        this.setState({
          btnNextStatus: 'disabled',
        });
      }
    }
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
        <Pokedex pokemon={this.state.pokemonList[this.state.pokemonIndex]} />
        <Button type="button" className="btn btn-pokemon" name="All" handleClick={this.handleClickPokemon} />
        <Button type="button" className="btn btn-pokemon" name="Bug" handleClick={this.handleClickPokemon} />
        <Button type="button" className="btn btn-pokemon" name="Dragon" handleClick={this.handleClickPokemon} />
        <Button type="button" className="btn btn-pokemon" name="Electric" handleClick={this.handleClickPokemon} />
        <Button type="button" className="btn btn-pokemon" name="Fire" handleClick={this.handleClickPokemon} />
        <Button type="button" className="btn btn-pokemon" name="Psychic" handleClick={this.handleClickPokemon} />
        <Button type="button" className="btn btn-pokemon" name="Poison" handleClick={this.handleClickPokemon} />
        <Button type="button" className="btn btn-pokemon" name="Normal" handleClick={this.handleClickPokemon} />
        <div>
          <Button type="button" className="btn btn-next-pokemon" name="Next" handleClick={this.handleClick} disabled={this.state.btnNextStatus}/>
        </div>
      </div>
    );
  }
}

export default App;