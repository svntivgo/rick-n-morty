import { createStore } from "redux";

const initialState = {
  characters: [{ id: 1, name: "Rick Sanchez", status: "Alive" },],
  episodes: [],
  locations: [],
};

const reducer = (state = initialState, action) => {
  return state
}

export default createStore(reducer)
