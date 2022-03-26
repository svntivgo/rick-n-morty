import { React, useEffect } from "react";

export const Navbar = () => {

  const urlPersonajes = "https://rickandmortyapi.com/api/character";

  function fetchPersonajes(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
    }

  useEffect(() => {
    fetchPersonajes(urlPersonajes)
  }, [])

  return (
    <div>Navbar</div>
  )
}
