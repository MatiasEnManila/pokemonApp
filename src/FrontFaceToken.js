import { useEffect, useRef } from "react";
import pikachu from './pictures/pikachu-input.png'


function FrontFaceToken({ searchPokemon, hasError, setHasError }) {

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
      // assignEnterKeyPokeball();
    }
  }


  return (
    <div className='App'>
      <div className='token-pokemon color-front'>
        <div className="pikachu-picture-container">
          <img className='pikachu-picture' src={pikachu} />
        </div>
        <input
          className='input-field fs-4'
          type="text"
          placeholder="Insert Pokemon"
          onChange={handleInputChange}
        />

        {hasError && <div id='invalid-pokemon' className='invalid-search fw-medium'>Invalid pokemon</div>}
        <div type='button' id='pokeball' className='pokeball-bottom' onClick={() => searchPokemon(pokemonSearched.current)}></div>
        <div className="bottom-logo"></div>
      </div>
    </div>
  )
}




export default FrontFaceToken;