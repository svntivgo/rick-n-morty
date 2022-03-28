import React from "react";
import { connect } from "react-redux";
import { addFavorite, fetchCharacters, removeFavorite } from "../actions/actions";

const View = ({
  characters,
  info,
  addCharacter,
  changePage,
  addToFavorites,
  removeFromFavorites,
}) => (
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
        <div>
          <h3>{character.name}</h3>

          <button onClick={() => addToFavorites(character)}>
            Agregar a favoritos
          </button>
          <button onClick={() => removeFromFavorites(character)}>
            Eliminar de favoritos
          </button>
        </div>
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
  addToFavorites(character) {
    addFavorite(character, dispatch)
  },
  removeFromFavorites(character) {
    removeFavorite(character, dispatch)
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(View)
