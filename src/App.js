import { useState} from 'react';
import './App.scss';
import CardsContainer from './components/CardsContainer'


const App = () => {
const [pokemonsCards, setPokemonsCards] = useState();
  
const PokemonsCallBack = (pokemonsC) => {
  setPokemonsCards({pokemonsC})
}
console.log(pokemonsCards)

  return (
    <div className="main-container"> 
      <div className="title-container">
        <h1>PokeDex</h1>
      </div> 
      <div className="menu-container"></div>
      <CardsContainer className="card-container" CallBack={PokemonsCallBack}>{console.log(PokemonsCallBack)}</CardsContainer>
      <div className="load-more-container"></div>
    </div>
  );
}

export default App;