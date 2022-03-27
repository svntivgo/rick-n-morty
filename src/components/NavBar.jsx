import React from 'react'
import { connect } from 'react-redux';

const urlCharacterByName = "https://rickandmortyapi.com/api/character/?name=";

function fetchCharacters(url, dispatch) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let results = data.results;
      let info = data.info
      dispatch({ type: "ADD_CHARACTER", results , info });
    })
    .catch((e) => console.log(e));
}

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