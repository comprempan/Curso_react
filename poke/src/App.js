import React, { Component } from 'react';
import './App.css';

// mock lista pockemons
const mockPokemonList = [
  { name: 'Bulbasaur', url: 'bulbasaur.com' },
  { name: 'Charmander', url: 'charmander.com' },
  { name: 'Squirtle', url: 'squirtle.com' },
];

class App extends Component {
  render() {
    return (
      <section className="pokemon-list-container">
        <h2>Pokemon List</h2>
        <ul className="pokemon-list">
          {
            mockPokemonList.map(p => (
              <li key={p.name}>
                <button className="pokemon-list-item">
                  {p.name}
                </button>
              </li>
            ))
          }
        </ul>
      </section>
    );
  }
}

export default App;
