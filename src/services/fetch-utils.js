import { client } from './client';

export async function catchEmAll() {
  const response = await client
    .from('pokemon')
    .select('*');

  return response.body;

}

export async function getPokemonByName(name) {
  const response = await client
    .from('pokemon')
    .select('*')
    .match({ name: name })
    .single();

  return response.body;
}