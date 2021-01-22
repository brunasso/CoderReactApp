import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemList/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {ItemDetailContainer} from './components/ItemDetail/ItemDetailContainer'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar/>
          <br/>
        <Switch>

          <Route path ='/item/:id'>
            <ItemDetailContainer/> 
          </Route>

          <Route>
            <ItemListContainer path='/' greeting={'Bienvenido compradores!'}/>           
          </Route>
          
        </Switch>
      </BrowserRouter>
      {/*<header className="App-header"/>*/}
    </div>
  );
}

export default App;
