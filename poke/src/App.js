import React, { Component } from 'react';
import './App.css';
import { PokemonList } from './components/PokemonList'

// mock lista pockemons
const mockPokemonList = [
  { name: 'Bulbasaur', url: 'bulbasaur.com' },
  { name: 'Charmander', url: 'charmander.com' },
  { name: 'Squirtle', url: 'squirtle.com' },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPokemon: mockPokemonList[0]
    }
    this.selectPokemon = this.selectPokemon.bind(this);
  }

  selectPokemon(name) {
    this.setState({
      selectedPokemon: mockPokemonList.find((pokemon) => pokemon.name === name)
    });
  }

  render() {
    return <PokemonList pokemonList={mockPokemonList} onClick={this.selectPokemon}/>
  }
}

export default App;