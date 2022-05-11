import React from 'react';

export default function Pokemon({ Name, Type_1, HP, Attack }) {
  return (
    <div>Pokemon
      <p>{Name}</p>
      <p>{HP}</p>
      <p>{Type_1}</p>
      <p>{Attack}</p>
    </div>
  );
}
