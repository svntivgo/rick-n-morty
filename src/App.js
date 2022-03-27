import { React, useEffect } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './reducers/Reducer'
import Characters from "./components/Characters";
import NavBar from './components/NavBar';
import { fetchCharacters } from './actions/actions';

const urlCharacters = "https://rickandmortyapi.com/api/character";

const App = () => (

    useEffect(() => {
      fetchCharacters(urlCharacters, store.dispatch)
    }, []),

    <Provider store={store}>
      <nav>
        <NavBar />
      </nav>
      <main>
        <h2>Rick 'n' Morty</h2>
        <Characters />
      </main>
    </Provider>
)

export default App;
