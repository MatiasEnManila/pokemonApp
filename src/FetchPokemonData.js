import './App.js';
import '../src/FetchPokemonData.css'
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
// import React, {useState, useEffect} from 'react';

  
  function FetchPokemonData({handlePokemon, pokemonPicture}) {
    return (
      <div className='App'>
      <div className='token-pokemon'>
        <div className='pikachu-top'>
          <input className='input-field' type="text submit" placeholder="Insert Pokemon" onChange={handlePokemon} />
        </div>
        <button className='btn btn-danger button-color button-width text-dark fw-bolder'>Search</button>      
        <div className='pokeball-bottom'></div>
      </div>
    </div>
    )
  }


  export default FetchPokemonData;