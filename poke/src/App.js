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
  }

  render() {
    return <PokemonList pokemonList={mockPokemonList}/>
  }
}

export default App;