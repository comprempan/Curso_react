import React from 'react';

// mock lista pockemons
const mockPokemonList = [
  { name: 'Bulbasaur', url: 'bulbasaur.com' },
  { name: 'Charmander', url: 'charmander.com' },
  { name: 'Squirtle', url: 'squirtle.com' },
];

export const PokemonList = (props) => {
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

