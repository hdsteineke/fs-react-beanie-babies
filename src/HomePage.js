import React, { useState, useEffect } from 'react';
import Pokemon from './Pokemon';
import { catchEmAll } from './services/fetch-utils';
import './App.css';

export default function HomePage() {
  const [pokemons, setPokemons] = useState([]); 
  const [page, setPage] = useState(1);
  const perPage = 29;
//   const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetch() {
      const from = page * perPage - perPage;
      const to = page * perPage;
      const pokedex = await catchEmAll(from, to);

      setPokemons(pokedex);
    }
    fetch();
  }, [page]);



  return (
    <div className='pokemon-list'>
      <header><h1>Whos that Pokemon?</h1>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous Page</button>
        <button onClick={() => setPage(page + 1)} disabled={pokemons.length < perPage}>Next Page</button>
      </header>
      {pokemons.map((pokemon, i) => 
        <Pokemon key={`${pokemon.name}-${i}`} {...pokemon} />)
      }
    </div>
  );
}

