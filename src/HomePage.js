import React, { useState, useEffect } from 'react';
import Pokemon from './Pokemon';
import { catchEmAll } from './services/fetch-utils';
import './App.css';

export default function HomePage() {
  const [pokemons, setPokemons] = useState([]); 
//   const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetch() {
      const pokedex = await catchEmAll();

     

      setPokemons(pokedex);
    }
    fetch();
  }, []);

  return (
    <div>HomePage
      {pokemons.map((pokemon, i) => 
        <Pokemon key={`${pokemon.name}-${i}`} {...pokemon} />)
      }
    </div>
  );
}

