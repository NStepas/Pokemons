import React, { useState, useEffect } from 'react';

import Card from '../Card/Card';
import { getPokemons } from '../../service/getPokemons';

import './CardsList.scss';

const CardsList = () => {
   const [loading, setLoading] = useState(true);
   const [pokemons, setPokemons] = useState([]);
   // const { name, url } = pokemons;

   const onMount = async () => {
      setPokemons(await getPokemons());
      setLoading(false);
   };

   useEffect(() => {
      onMount();
   }, []);

   if (loading) return <div>Loading</div>;
   return (
      <div className="cards-list">
         {/* FIY destruct pokemon props { name, url} or use spread operator to pass props */}
         {pokemons.map(pokemon => (
            <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} />
         ))}
      </div>
   );
};

export default CardsList;
