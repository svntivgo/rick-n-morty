import { createStore } from "redux";

const initialState = {
  characters: [{ id: "x1", name: "Rick Sanchez", status: "Alive", },],
  info: [{ prev: null, next: null, }],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CHARACTER":
      return {
        // ...state,
        characters: action.results, //state.characters.concat(action.results)
        info: action.info
      }
      break;

    default:
      return state
      break;
  }
}

export default createStore(reducer)
