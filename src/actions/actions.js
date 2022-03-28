export function fetchCharacters(url, dispatch) {
  let results
  let info

  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    results = data.results
    info = data.info;
  }).catch (error => {
    console.log(error)
  }).finally (() =>{
    typeof results !== "undefined" ? dispatch({ type: "ADD_CHARACTER", results, info }) : alert("El personaje no existe")
  })
}


export function addFavorite(character, dispatch) {
  dispatch({ type: "ADD_FAVORITES", character });
}

export function removeFavorite(character, dispatch) {
  dispatch({ type: "REMOVE_FAVORITES", character });
}

export function showFavorites(dispatch) {
  dispatch({ type: "SHOW_FAVORITES", });
}
