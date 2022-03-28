import React from 'react'
import { connect } from 'react-redux';
import { fetchCharacters, showFavorites } from '../actions/actions';

const urlCharacterByName = "https://rickandmortyapi.com/api/character/?name=";
const urlCharacterAlive = "https://rickandmortyapi.com/api/character/?status=alive"
const urlCharacterDead = "https://rickandmortyapi.com/api/character/?status=dead"

function NavBar({searchCharacter, searchCharacterAlive, searchCharacterDead, printFavorites}) {

  return (
    <div>
      <input
        id="navbar__input"
        type="text"
        placeholder="nombre del personaje"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            searchCharacter();
          }
        }}
      ></input>

      <button onClick={() => searchCharacter()}>Buscar</button>

      <nav>
        <ul>
          <a onClick={() => printFavorites()}>
            <li>Favoritos</li>
          </a>
          <a onClick={() => searchCharacterAlive()}>
            <li>Personajes vivos</li>
          </a>
          <a onClick={() => searchCharacterDead()}>
            <li>Personajes muertos</li>
          </a>
        </ul>
      </nav>
    </div>
  );
}

const mapStateToProps = (state) => ({
  characters: state.characters,
});

const mapDispatchToProps = (dispatch) => ({
  searchCharacter() {
    let inputBox = document.getElementById("navbar__input");
    let input = inputBox.value.toLowerCase();

    fetchCharacters(urlCharacterByName + input, dispatch);

    inputBox.value = "";
  },

  searchCharacterAlive() {
    fetchCharacters(urlCharacterAlive, dispatch);
  },

  searchCharacterDead() {
    fetchCharacters(urlCharacterDead, dispatch);
  },

  printFavorites() {
    showFavorites(dispatch);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
