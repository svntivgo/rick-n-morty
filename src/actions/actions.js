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
