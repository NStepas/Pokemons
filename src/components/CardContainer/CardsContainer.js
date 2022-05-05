import React, {useState, useEffect} from "react";

import { getPokemons } from "../../service/getPokemons"
import Card from '../Card/Card'

import './CardsContainer.scss'

const CardsContainer = () => {
    const [loading, setLoading] = useState(true);
    const [pokemons, setPokemons] = useState([]);

    const onMount = async () => {
        setPokemons(await getPokemons());
        setLoading(false);
    }
    console.log(pokemons)
    useEffect(() => {
        onMount();
    }, []);

    if(loading) return <div>Loading</div>;

    return (
        <div className="card-container">
                {pokemons.map((pokemon) => (
                   <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} />
                ))}
        </div>
    )
} 

export default CardsContainer;