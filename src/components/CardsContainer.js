import { getPokemons } from "../service/getPokemons"
import React, {useState, useEffect} from "react";
import './CardsContainer.scss'
import Card from './Card'

const CardsContainer = () => {
    const [loading, setLoading] = useState(true);
    const [pokemons, setPokemons] = useState([]);
    // const {setPokemonsCards} = props;

    const onMount = async () => {
        let a = await getPokemons();
        setPokemons(a);
        setLoading(false);
    }

    useEffect(() => {
        onMount();
    }, []);

    if(loading) return <div>Loading</div>;

    return (
        <div>
            <ul>
                {pokemons.map((pokemon, index) => {
                <li key={index}> 
                   <Card key={pokemon.name} name={pokemon.name} pokemonsC={pokemon.name}>
                   </Card>
                </li>})}
            </ul>
            
        </div>
    )
} 

export default CardsContainer;