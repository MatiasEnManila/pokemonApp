import { useEffect, useRef, useState } from "react";

function FrontFaceToken({searchPokemon, hasError, setHasError}) {
  //TODO invalid pokemon setTimeOut
  const pokemonSearched = useRef('');


  const assignEnterKeyPokeball = () => {
    document.addEventListener("keyup", function enterKey(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        document.removeEventListener("keyup", enterKey);
        searchPokemon(pokemonSearched.current);
      }
    });
  }

  useEffect(() => {
    assignEnterKeyPokeball();
  }, []);

  
  const handleInputChange = (event) => {
    pokemonSearched.current = event.target.value.toLowerCase();
    if (hasError) {
      setHasError(false);
      assignEnterKeyPokeball();
    }
  }


  return (
    <div className='App'>
      <div className='token-pokemon-front'>
        <div className='pikachu-top'>
          <input 
            className='input-field' 
            type="text" 
            placeholder="Insert Pokemon" 
            onChange={handleInputChange} 
          />
          {hasError && <div id='invalid-pokemon' className='invalid-search'>Invalid pokemon</div>}
        </div>
        <a>
        </a>
        <div type='button' id='pokeball' className='pokeball-bottom' onClick={() =>  searchPokemon(pokemonSearched)}></div>
      </div>
    </div>
      )
}




export default FrontFaceToken;