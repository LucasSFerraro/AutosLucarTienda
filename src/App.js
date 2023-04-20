import './App.css';
import { NavBar } from './Components/Navbar';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import { Fragment } from 'react';
import { CartWidget } from './Components/CartWidget/CartWidget';

function App() {
  return (
    <Fragment>
    <NavBar />
    <ItemListContainer greeting="Hola" />
    <CartWidget/>
    </Fragment>
  );
}

export default App;
