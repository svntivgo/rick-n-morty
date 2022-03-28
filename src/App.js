import { React, useEffect } from 'react';
import { Provider } from 'react-redux';
import './styles/styles.css';
import store from './reducers/Reducer'
import View from "./components/View";
import NavBar from './components/NavBar';
import { fetchCharacters } from './actions/actions';

const urlCharacters = "https://rickandmortyapi.com/api/character";

const App = () => (
  useEffect(() => {
    fetchCharacters(urlCharacters, store.dispatch)
  }, []),
  (
    <Provider store={store}>
      <nav>
        <NavBar />
      </nav>
      <main>
        <h1 className="main__title" id="main__title">
          Wiky Morty
        </h1>
        <View />
      </main>
    </Provider>
  )
);

export default App;
