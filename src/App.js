import './App.css';
import { NavBar } from './Components/Navbar';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
    <NavBar />
    <ItemListContainer hola="Hola!" />
    </Fragment>
  );
}

export default App;
