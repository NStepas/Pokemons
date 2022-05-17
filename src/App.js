import { Fragment } from 'react';

import CardList from './components/Cards/CardList';
import Header from './components/Header/Header';

import './App.scss';

function App() {
   return (
      <Fragment>
         <Header />
         <CardList className="card-list"></CardList>
      </Fragment>
   );
}

export default App;
