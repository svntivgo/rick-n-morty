export let favorites = localStorage.getItem("favorites")
  ? JSON.parse(localStorage.getItem("favorites"))
  : [];

export function sendToFavorites(character) {
  favorites.push(character)
  localStorage.setItem('favorites', JSON.stringify(favorites))
}

export function deleteFromFavorites(character) {
  let newFavorites = favorites.filter(favorite => favorite.id !== character.id)
  localStorage.setItem("favorites", JSON.stringify(newFavorites));
}
