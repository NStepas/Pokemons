import CardsList from './components/CardsList/CardsList';

import './App.scss';

const App = () => (
   <div className="main-container">
      <header className="title">PokeDex</header>
      <div className="menu"></div>
      <CardsList />
   </div>
);
export default App;
