import { createStore } from "redux";

const initialState = {

  characters: [{ id: null, name: null, status: null, },],
  info: [{ prev: null, next: null, }],
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case "ADD_CHARACTER":
      return {
        characters: action.results,
        info: action.info
      }
    default:
      return state
  }
}

export default createStore(reducer)
