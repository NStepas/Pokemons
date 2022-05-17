import { useState, Fragment, useEffect } from 'react';
import { getPokemonsInfo } from '../../service/getUrl';
import Modal from '../Modal/Modal';

import './Card.scss';

const Card = props => {
   const [pokemonInfo, setPokemonInfo] = useState([]);
   const [loading, setLoading] = useState(true);
   const [domReady, setDomReady] = useState(false);
   const [cardIsShown, setCardIsShown] = useState(false);
   const { name, url } = props;

   const showCardHandler = () => {
      setCardIsShown(true);
   };

   const hideCardHandler = () => {
      setCardIsShown(false);
   };

   const onMount = async () => {
      setPokemonInfo(await getPokemonsInfo(url));
      setLoading(false);
   };

   useEffect(() => {
      onMount();
   }, []);

   useEffect(() => {
      setDomReady(true);
   }, []);

   if (loading) return <div>Loading...</div>;
   return (
      <Fragment>
         <div className="card-container">
            <title name={name}>{name}</title>
            <img
               className="pokemon-img"
               src={pokemonInfo.sprites.front_default}
               alt={pokemonInfo.name}
            />
            {cardIsShown ? (
               <div>
                  {pokemonInfo.types?.map((type, slot) => (
                     <div type={type.name} key={slot} className="pokemon-in">
                        {domReady ? (
                           <Modal
                              onClose={hideCardHandler}
                              type={type.type.name}
                              name={name}
                              src={pokemonInfo.sprites.front_default}
                           />
                        ) : null}
                     </div>
                  ))}
               </div>
            ) : null}
            <button onClick={showCardHandler} className="card-button">
               Get Info
            </button>
         </div>
      </Fragment>
   );
};

export default Card;
