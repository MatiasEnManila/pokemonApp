import './App.js';
import './BackFaceToken.css'
import { useEffect } from 'react';


//TODO map abilities
function BackFaceToken({ goback, pokemon }) {

  const cryPokemon = new Audio(pokemon.cries.latest);

  const playPokemonCry = () => {
    cryPokemon.volume = 0.2;
    cryPokemon.play();
  }

  let hasAbility = false

  if (pokemon.abilities.length >= 2) {
    hasAbility = true;
  }


  const assignBackspaceButton = () => {
    document.addEventListener("keyup", function backSpaceKey(event) {
      if (event.key === "Backspace") {
        event.preventDefault();
        document.removeEventListener("keyup", backSpaceKey);
        goback();
      }
    });
  }

  useEffect(() => {
    assignBackspaceButton();
  }, []);


  let elementClassName = ['rock', 'fire', 'bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'steel', 'water']
    .includes(pokemon.types[0].type.name)
    ? pokemon.types[0].type.name
    : '';


  return (
    <div className='App'>
      <div className='token-pokemon color-back'>
        <div className='token-top-container'>
          <div className='pokemon-display'>
            <img className='pokemon-picture' src={pokemon.sprites.front_default} />
          </div>
        </div>

        <div className='token-bottom-container'>
            <div className='div-title'>
              <h1 className='name-icon'>{pokemon.name}</h1>
                <img className={'pokemon-sound ' + elementClassName} onClick={playPokemonCry}/>
            </div>
            <div className='pokemon-information'>
              <li className='info-size'><b className='info-size'>Type</b>: {pokemon.types[0].type.name}</li>
              <li className='info-size'><b className='info-size'>Weight</b>: {pokemon.weight} lbs.</li>
              <li className='info-size'><b className='info-size'>Ability 1:</b>: {pokemon.abilities[0].ability.name}</li>
              {hasAbility && <li className='info-size'><b>Ability 2:</b>: {pokemon.abilities[1].ability.name}</li>}
            </div>
            <div className='div-button-back'>
              <button className='btn btn-danger button-color-back button-width text-dark fw-bolder mt-1 mb-3' onClick={goback}>Back</button>
            </div>
        </div>
      </div>
    </div>
  )
}


export default BackFaceToken;