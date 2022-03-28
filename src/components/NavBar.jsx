import React from 'react'
import { connect } from 'react-redux';
import { fetchCharacters, showFavorites } from '../actions/actions';

const urlCharacterByName = "https://rickandmortyapi.com/api/character/?name=";
const urlCharacterAlive = "https://rickandmortyapi.com/api/character/?status=alive"
const urlCharacterDead = "https://rickandmortyapi.com/api/character/?status=dead"

function toogleMenu() {
  let navigationButton = document.getElementById("navbar__menu-button");
  let navigationMenu = document.getElementById("navbar__menu-list");

    navigationButton.classList.toggle("navbar__menu-button--expanded");
    navigationMenu.classList.toggle("navbar__menu-list--expanded");
}

function NavBar({searchCharacter, searchCharacterAlive, searchCharacterDead, printFavorites}) {

  return (
    <div className="navbar" id="navbar">
      <input
        className="navbar__input"
        id="navbar__input"
        type="text"
        placeholder="nombre del personaje"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            searchCharacter();
          }
        }}
      ></input>

      <button
        className="navbar__input-button"
        id="navbar__input-button"
        onClick={() => searchCharacter()}
      >
        Buscar
      </button>

      <nav className="navbar__menu" id="navbar__menu">
        <button
          className="navbar__menu-button"
          id="navbar__menu-button"
          onClick={() => toogleMenu()}
        >
          Filtros
        </button>
        <ul className="navbar__menu-list" id="navbar__menu-list">
          <a onClick={(() => {printFavorites(); toogleMenu()})}>
            <li className="navbar__menu-item fav" id="navbar__menu-item-fav">
              Favoritos
            </li>
          </a>
          <a onClick={(() => {searchCharacterAlive(); toogleMenu()})}>
            <li
              className="navbar__menu-item alive"
              id="navbar__menu-item-alive"
            >
              Personajes vivos
            </li>
          </a>
          <a onClick={(() => {searchCharacterDead(); toogleMenu()})}>
            <li className="navbar__menu-item dead" id="navbar__menu-item-dead">
              Personajes muertos
            </li>
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
