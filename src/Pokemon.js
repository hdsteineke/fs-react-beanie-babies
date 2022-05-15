import React from 'react';
import { Link } from 'react-router-dom';

export default function Pokemon({ name, hp, attack }) {
  return (
    <Link to={`/pokemon/${name}`}>
      <div className='pokemon'>
        <h3>{name}</h3>
        <p>HP: {hp}</p>
        <p>Attack: {attack}</p>
      </div>
    </Link>
  );
}
