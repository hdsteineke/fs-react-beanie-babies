import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonByName } from './services/fetch-utils';
import { Link } from 'react-router-dom';


export default function DetailPage() {
  const [pokemon, setPokemon] = useState({});
  const params = useParams();
  

  useEffect(() => {
    async function fetch() {
      const pokeData = await getPokemonByName(params.name);
      setPokemon(pokeData);
      
    } 
    fetch();
  }, [params.name]);

  return (
    <>
      <Link to='/' >Home</Link>
      <div className='pokemon-detail'>
      
        <h3>{pokemon.name}</h3>
        <p>HP: {pokemon.hp}</p>
        <p>Type 1: {pokemon.type_1}</p>
        <p>Type 2: {pokemon.type_2}</p>
        <p>Attack: {pokemon.attack}</p>
        <p>Defense: {pokemon.defense}</p>

      </div>
    </>
  );
}
