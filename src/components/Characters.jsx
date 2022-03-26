import { React, useEffect } from "react";

export const Characters = () => {

  const urlCharacters = "https://rickandmortyapi.com/api/character";

  function fetchCharacters(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
    }

  useEffect(() => {
    fetchCharacters(urlCharacters)
  }, [])

  return (
    <div>Characters</div>
  )

}
