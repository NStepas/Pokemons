import { link } from "../constants/URL";


export const getPokemons = async () => {
    return fetch(link)
    .then((res) => res.json())
    .then((result) => result.results
    );
}

export const getPokemonsInfo = async (url) => {
    // console.log(url);
    return fetch(url)
    .then((res) => res.json())
    .then((data)=> data);
}
// console.log(data)