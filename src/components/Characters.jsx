import React from "react";
import { connect } from "react-redux";

const urlCharacters = "https://rickandmortyapi.com/api/character";

function fetchCharacters(url, dispatch) {
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let results = data.results
    dispatch({type: "ADD_CHARACTER", results,})
  })
  .catch((e) => console.log(e));
}

const Characters = ({ characters, addCharacter }) => (
  <section>
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
  characters: state.characters
})

const mapDispatchToProps = dispatch => ({
  addCharacter() {
    fetchCharacters(urlCharacters, dispatch)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Characters)
