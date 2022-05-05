import { url } from "../constants/URL";

export const getPokemons = async () => {
    return fetch(url)
    .then((res) => res.json())
    .then((result) => result.results
    );
}