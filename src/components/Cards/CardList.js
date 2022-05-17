import Card from './Card';
import { getPokemons } from '../../service/getUrl';

import './CardList.scss';
import { useEffect, useState } from 'react';

const CardList = () => {
   const [loading, setLoading] = useState(true);
   const [pokemons, setPokemons] = useState([]);

   const onMount = async () => {
      setPokemons(await getPokemons());
      setLoading(false);
   };

   useEffect(() => {
      onMount();
   }, []);

   if (loading) return <div>Loading...</div>;

   return (
      <div>
         <ul>
            {pokemons.map(({ name, url }) => (
               <Card key={name} name={name} url={url} />
            ))}
         </ul>
      </div>
   );
};

export default CardList;
