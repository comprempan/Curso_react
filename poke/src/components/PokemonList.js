import React from 'react';
import PropTypes from 'prop-types';

export const PokemonList = (props) => {
  return (
      <section className="pokemon-list-container">
          <h2>Pokemon List</h2>
          <ul className="pokemon-list">
          {
            props.pokemonList.map(pokemon => (
              <li key={pokemon.name}>
                  <button className="pokemon-list-item"
                    onClick={() => props.onClick(pokemon.name)}>
                    {pokemon.name}
                  </button>
              </li>
              ))
          }
          </ul>
      </section>
  );
}

PokemonList.defaultProps = {
    onItemClick: () => {},
};

PokemonList.propTypes = {
    pokemonList: PropTypes.array.isRequired,
    onClick: PropTypes.func
};
