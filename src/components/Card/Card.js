import React, { useState, useEffect } from 'react';
import './Card.scss'
import { getPokemonsInfo } from "../../service/getPokemons"
import { AllPokemonInfo } from '../AllPokemonInfo/AllPolemonInfo';

const Card = (props) => {
    const [pokInfo, setPokInfo] = useState([]);

    const getPokemonsUrl = async () => {
        setPokInfo(await getPokemonsInfo(props.url));
    }
    useEffect(() => {
        getPokemonsUrl();
    }, []);
    // console.log(pokInfo.types);

    const allInfo = pokInfo.types;
    // console.log(allInfo);


    return (
    <div className='card'>
        <div className="pokemon-card">
            <div className="pokemon-name-container">{props.name}</div>
            {   allInfo ? allInfo.map((info) => (
                    <div className="pokemon-img" type={info.type}>{allInfo.map(res => console.log(res.type))}</div>
                )) : null
            }
            <button>Get info</button>
            </div>
    </div>
    )
}


export default Card;