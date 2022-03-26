import { createStore } from "@reduxjs/toolkit";

const initialState = {
  personajes: [{ id: 1, name: "Rick Sanchez", status: "Alive" },],
  capitulos: [],
  locaciones: [],
};

const reducer = (state = initialState, action) => {
  return state
}

export default createStore(reducer)
