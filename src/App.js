import React from 'react';
import './App.css';
import FetchPokemonData from './FetchPokemonData.js';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from 'react'; 


//flag

function App() {
  const [insertedPokemon, setinsertedPokemon] = useState('');
  const [pokemonPicture, setpokemonPicture] = useState('');

  const handlePokemon = (event) => {
    setinsertedPokemon(event.target.value);
  }
  

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${insertedPokemon}`)
      .then(response =>  response.json()) //response object, get data wth json
      .then(data => setpokemonPicture(data.sprites.front_default))
      .catch(error => {
        console.error(error);
      })
  }, [insertedPokemon]);  

  return (
    <FetchPokemonData 
      handlePokemon={handlePokemon}
      pokemonPicture={pokemonPicture}
    />
  );
};



/* // <img class="div-pokemon" src="" id="pokemonSprite" style="display: inline-block;" />
TEXT
{/* <button type="submit" onclick="FetchPokemonData()">Enter pokemon name</button><br> */


export default App;