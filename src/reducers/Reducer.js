import { createStore } from "redux";

const initialState = {
  characters: [{ id: "x1", name: "Rick Sanchez", status: "Alive" },],
  episodes: [],
  locations: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CHARACTER":
      return {
        ...state,
        characters: state.characters.concat(action.results)
      }
      break;

    default:
      return state
      break;
  }
}

export default createStore(reducer)
