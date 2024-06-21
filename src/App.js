import React from 'react';
import './App.css';
import BackFaceToken from './BackFaceToken';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState, useEffect } from 'react'; 
import FrontFaceToken from './FrontFaceToken';


//TODO Add pokemon's audio, fix h1 + picture positioning,  Responsive    
//TODO The Hydreigon problem - Ability needs fixing   

function App() {
  const [pokemonData, setpokemonData] = useState('');
  const [frontFaceToken, setfrontFaceToken] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [introductoryAudio, setintroductoryAudio] = useState(null);


  function searchPokemon (searchedPokemon) {
    if (searchedPokemon === '') return;
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchedPokemon}`)
      .then(response =>  response.json())
      .then(data => {
        setpokemonData(data);
        setfrontFaceToken(!frontFaceToken);
        setintroductoryAudio(pokemonData.cries.legacy);
      })
      .catch(error => {
        setHasError(true);
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
        picture={pokemonData.sprites.front_default}
        name={pokemonData.name}
        type={pokemonData.types[0].type.name}
        weight={pokemonData.weight}
        abilityOne={pokemonData.abilities[0].ability.name}
        abilityTwo={pokemonData.abilities[1].ability.name}
        goback={goback}
        frontFaceToken={frontFaceToken}
        cry={introductoryAudio}
      />
    )
 }
  
};


export default App;