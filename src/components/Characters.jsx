import { React, useEffect } from "react";
import { connect } from "react-redux";

const urlCharacters = "https://rickandmortyapi.com/api/character";

function fetchCharacters(url) {
  fetch(url)
  .then((response) => response.json())
  .then((data) => data)
  .then(data => console.log(url))
  .catch((e) => console.log(e));
}

// useEffect(() => {
//   fetchCharacters(urlCharacters)
// }, [])

const Characters = ({characters}) => (
    <section>
      {characters.map(character => (
        <h3 key={character.id}>{character.name}</h3>
      ))}
    </section>
)

const mapStateToProps = state => ({
  characters: state.characters
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Characters)
