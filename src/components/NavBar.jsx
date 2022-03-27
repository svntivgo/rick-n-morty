import React from 'react'
import { connect } from 'react-redux';
import { fetchCharacters } from '../actions/actions';

const urlCharacterByName = "https://rickandmortyapi.com/api/character/?name=";

function NavBar({searchCharacter}) {
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
          <li>Favoritos</li>
          <li>Personajes vivos</li>
          <li>Personajes muertos</li>
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
    let input = inputBox.value.toLowerCase()

    fetchCharacters(urlCharacterByName+input, dispatch);

    inputBox.value = "";
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
