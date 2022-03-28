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
  <section className="view" id="view">
    <div
      className="view__page-button-container"
      id="view__page-button-container"
    >
      {info.prev ? (
        <button
          className="view__page-button prev"
          id="view__page-button-prev"
          onClick={() => changePage(info.prev)}
        >
          ⟵
        </button>
      ) : null}

      {info.next ? (
        <button
          className="view__page-button next"
          id="view__page-button-next"
          onClick={() => changePage(info.next)}
        >
          ⟶
        </button>
      ) : null}
    </div>

    {characters.map((character) => (
      <div className="view__character-container" key={character.id}>
        <img
          className="view__character-image"
          id={"image-character-image-" + character.id}
          src={character.image}
          alt={character.name}
        />
        <div
          className="view__character-info"
          id={"image-character-info-" + character.id}
        >
          <h3
            className="view__character-name"
            id={"image-character-name-" + character.id}
          >
            {character.name}
          </h3>

          {JSON.parse(localStorage.getItem("favorites"))?.some(
            (favorite) => favorite.id === character.id
          ) ? (
            <button
              className="view__character-fav-btn del"
              id={"image-character-fav-btn-del-" + character.id}
              onClick={() => removeFromFavorites(character)}
            >
              ♥
            </button>
          ) : (
            <button
              className="view__character-fav-btn add"
              id={"image-character-fav-btn-add-" + character.id}
              onClick={() => addToFavorites(character)}
            >
              ♥
            </button>
          )}
        </div>
        <p
          className="view__character-status"
          id={"image-character-status-" + character.id}
        >
          {character.status}
        </p>
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
