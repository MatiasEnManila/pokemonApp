import React from 'react';
// import ReactAudioPlayer from 'react-audio-player';
import './App.css';
import BackFaceToken from './BackFaceToken';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from 'react';
import FrontFaceToken from './FrontFaceToken';


// TODO enter key won't work after deleting characters (all after a 404 fetch)

function App() {
  const [pokemonData, setpokemonData] = useState('');
  const [frontFaceToken, setfrontFaceToken] = useState(true);
  const [hasError, setHasError] = useState(false);

  function searchPokemon(searchedPokemon) {
    if (searchedPokemon === '') return;
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchedPokemon}`)
      .then(response => response.json())
      .then(data => {
        setpokemonData(data);
        setfrontFaceToken(!frontFaceToken);
      })
      .catch(error => {
        setHasError(true);
        console.log(error)
      })
  }

  const goback = () => {
    setfrontFaceToken(!frontFaceToken);
  }


  if (frontFaceToken) {
    return (
      < FrontFaceToken
        searchPokemon={searchPokemon}
        hasError={hasError}
        setHasError={setHasError}
      />
    )
  }
  else {
    return (
      < BackFaceToken
        goback={goback}
        pokemon={pokemonData}
        frontFaceToken={frontFaceToken}
      />
    )
  }
};

export default App;