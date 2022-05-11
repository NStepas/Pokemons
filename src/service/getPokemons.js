import { BASE_URL } from '../constants/URL';

export const getPokemons = async () => {
   return fetch(BASE_URL)
      .then(res => res.json())
      .then(result => result.results);
};

export const getPokemonInfo = async url => {
   return fetch(url)
      .then(res => res.json())
      .then(data => data);
};
