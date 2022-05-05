import CardsContainer from './components/CardContainer/CardsContainer'
import './App.scss';

const App = () =>  (
    <div className="main-container"> 
      <div className="title-container">
        <h1>PokeDex</h1>
      </div> 
      <div className="menu-container"></div>
      <CardsContainer />
    </div>
  );
export default App;