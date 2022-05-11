// import './PokemonInfo.scss';

const PokemonInfo = props => {
   const { type } = props;

   return (
      <div>
         <div className="pokemon-type">{type}</div>
      </div>
   );
};

export default PokemonInfo;
