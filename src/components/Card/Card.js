// TODO imports order
// TODO imports empty line before self created components
// TODO remove unused imports
import React, { useState, useEffect } from 'react';

import { getPokemonInfo } from '../../service/getPokemons';
import PokemonInfo from '../PokemonInfo/PokemonInfo';

import './Card.scss';
// import { AllPokemonInfo } from '../AllPokemonInfo/AllPokemonInfo';

// * FIY destruct props object
const Card = props => {
   // TODO change to full prop name or simplify ex. pokemonInfo or info
   const [pokInfo, setPokInfo] = useState([]);
   const [loading, setLoading] = useState(true);
   const [isOpen, setOpen] = useState(false);

   // TODO remove console.log
   console.log(pokInfo);
   const handleClick = () => {
      setOpen(!isOpen);
   };

   const onMount = async () => {
      // TODO change to correct singular name for service function
      setPokInfo(await getPokemonInfo(props.url));
      setLoading(false);
   };
   useEffect(() => {
      onMount();
   }, []);

   if (loading) return <div>Loading...</div>;
   return (
      // TODO remove key prop
      // TODO remove unused tag
      // TODO improve scss class naming ex. use БЕМ
      <div className="card" key={pokInfo.name}>
         <div className="pokemon-card">
            {/* TODO change class name to easier one or ex. pokemon-card-name || pokemon-card-header */}
            <div className="pokemon-name-container">{props.name}</div>
            {/* TODO change class name ex. pokemon-card-body | card-body */}
            <div className="pokemon-info">
               {/* TODO add alt property  */}
               {/* TODO use ternary operator isOpen? true: false */}
               {!isOpen && <img className="pokemon-img" src={pokInfo.sprites.front_default} />}
               {isOpen && (
                  <div>
                     {/* FIY add destruct for type prop */}
                     {/* TODO naming improvements for AllPokemonInfo component */}
                     {pokInfo?.types?.map(({ type }) => (
                        <PokemonInfo type={type.name} />
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
