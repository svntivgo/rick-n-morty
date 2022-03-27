import React from "react";
import { connect } from "react-redux";
import { fetchCharacters } from "../actions/actions";

const Characters = ({ characters, info, addCharacter, changePage }) => (

  <section>
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
  </section>
);

const mapStateToProps = state => ({
  characters: state.characters,
  info: state.info
})

const mapDispatchToProps = dispatch => ({
  changePage(pageUrl) {
    fetchCharacters(pageUrl, dispatch)
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Characters)
