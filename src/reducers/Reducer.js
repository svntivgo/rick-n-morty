import { createStore } from "redux";

const initialState = {

  characters: [{ id: null, name: null, status: null, },],
  info: [{ prev: null, next: null, }],
};

const reducer = (state = initialState, action) => {
  let favorites

  switch (action.type) {
    case "ADD_CHARACTER":
      return {
        characters: action.results,
        info: action.info,
      };
    case "ADD_FAVORITES":
      favorites = localStorage.getItem("favorites")
        ? JSON.parse(localStorage.getItem("favorites"))
        : [];
      favorites.push(action.character);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      return {
        ...state,
      };
    case "REMOVE_FAVORITES":
      favorites = localStorage.getItem("favorites")
        ? JSON.parse(localStorage.getItem("favorites"))
        : [];
      let uno = favorites.filter(
        (favorite) => favorite.id !== action.character.id
      );
      localStorage.setItem("favorites", JSON.stringify(uno));
      return {
        ...state,
      };
    case "SHOW_FAVORITES":
      favorites = localStorage.getItem("favorites")
        ? JSON.parse(localStorage.getItem("favorites"))
        : [];
      return {
        characters: favorites,
        info: [{ prev: null, next: null }],
      };
    default:
      return state;
  }
}

export default createStore(reducer)
