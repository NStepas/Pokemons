import React, { useState, useEffect } from 'react';
import './Card.scss';
import { getPokemonsInfo } from '../../service/getPokemons';
import AllPokemonInfo from '../AllPokemonInfo/AllPokemonInfo';
// import { AllPokemonInfo } from '../AllPokemonInfo/AllPokemonInfo';

const Card = props => {
   const [pokInfo, setPokInfo] = useState([]);
   const [loading, setLoading] = useState(true);
   const [isOpen, setOpen] = useState(false);

   console.log(pokInfo);
   const handleClick = () => {
      setOpen(!isOpen);
   };

   const onMount = async () => {
      setPokInfo(await getPokemonsInfo(props.url));
      setLoading(false);
   };
   useEffect(() => {
      onMount();
   }, []);

   console.log(pokInfo.sprites);

   if (loading) return <div>Loading...</div>;
   return (
      <div className="card" key={pokInfo.name}>
         <div className="pokemon-card">
            <div className="pokemon-name-container">{props.name}</div>
            <div className="pokemon-info">
               {!isOpen && <img className="pokemon-img" src={pokInfo.sprites.front_default}></img>}
               {isOpen && (
                  <div>
                     {pokInfo?.types?.map(type => (
                        <AllPokemonInfo type={type.type.name}></AllPokemonInfo>
                     ))}
                  </div>
               )}
            </div>
            <button onClick={handleClick}>Get info</button>
         </div>
      </div>
   );
};

export default Card;
