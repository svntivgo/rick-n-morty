export function fetchCharacters(url, dispatch) {

  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let results = data.results
    let info = data.info;
    dispatch({ type: "ADD_CHARACTER", results , info });
  })
  .catch((e) => console.log(e));
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
