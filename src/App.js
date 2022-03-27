import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './reducers/Reducer'
import Characters from "./components/Characters";
import NavBar from './components/NavBar';

const App = () => (
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
