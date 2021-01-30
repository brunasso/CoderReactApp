import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemList/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {ItemDetailContainer} from './components/ItemDetail/ItemDetailContainer'
import {Cart} from './components/Cart/Cart'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar/>
        <Switch>

          <Route path ='/item/:id'>
            <ItemDetailContainer/> 
          </Route>

          <Route path ='/category/:category'>
            <ItemListContainer/> 
          </Route>

          <Route path ='/cart'>
            <Cart/> 
          </Route>

          <Route>
            <ItemListContainer path='/'/>           
          </Route>      
          
        </Switch>
      </BrowserRouter>
      {/*<header className="App-header"/>*/}
    </div>
  );
}

export default App;
