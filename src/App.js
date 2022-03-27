import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './reducers/Reducer'
import Characters from "./components/Characters";

const App = () => (
    <Provider store={store}>
      <main>
        <h2>Rick 'n' Morty</h2>
        <Characters />
      </main>
    </Provider>
)

export default App;
