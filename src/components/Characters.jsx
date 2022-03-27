import React from "react";
import { connect } from "react-redux";

const urlCharacters = "https://rickandmortyapi.com/api/character";

function fetchCharacters(url, dispatch) {
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let results = data.results
    let info = data.info;
    dispatch({ type: "ADD_CHARACTER", results , info });
  })
  .catch((e) => console.log(e));
}

const Characters = ({ characters, info, addCharacter, changePage }) => (

  <section>

    {window.addEventListener("load", () => {
      addCharacter();
    })}

    <div>

      {info.prev ? (
        <button onClick={() => changePage(info.prev)}>⟵</button>
      ) : null}

      {info.next ? (
        <button onClick={() => changePage(info.next)}>⟶</button>
      ) : null}

    </div>

    {characters.map((character) => (

      <div key={character.id}>
        <img src={character.image} alt={character.name} />
        <h3>{character.name}</h3>
        <p>{character.status}</p>
      </div>

    ))}

    <button onClick={() => addCharacter()}>Click</button>

  </section>

);

const mapStateToProps = state => ({
  characters: state.characters,
  info: state.info
})

const mapDispatchToProps = dispatch => ({
  addCharacter() {
    fetchCharacters(urlCharacters, dispatch)
  },
  changePage(pageUrl) {
    fetchCharacters(pageUrl, dispatch)
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Characters)
