// import { IS_REACT_LEGACY } from 'swr/_internal'; 
import AudioPokemon from './AudioPokemon.js';
import './App.js';
import './BackFaceToken.css'
import { useState, useEffect } from 'react'; 


//TODO map abilities

function BackFaceToken({goback, pokemon}) {
  
  const cryPokemon = new Audio(pokemon.cries.latest);

  const playPokemonCry = () => {
    cryPokemon.play();
  }

  let hasAbility = false

  if (pokemon.abilities.length >= 2)  {
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
    .includes(pokemon.types[0].type.name) //*
    ? pokemon.types[0].type.name 
    : '';
 

  return (
    <div className='App'>
      <div className='token-pokemon-back'>
        <div className='pokemon'>
          <img className='pokemon-picture' src={pokemon.sprites.front_default}/>
        </div>
        <div>
              <h1 className='title'>{pokemon.name}</h1>
              <i className={'pokemon-sound ' + elementClassName} onClick={playPokemonCry}>
                {/* <AudioPokemon src={pokemon.cries.latest}/> */}
              </i>
      
            <ul className='no-dots'>
                <li><b>Type</b>: {pokemon.types[0].type.name}</li>
                <li><b>Weight</b>: {pokemon.weight} lbs.</li>
                <li><b>Ability 1:</b>: {pokemon.abilities[0].ability.name}</li>
                {hasAbility && <li><b>Ability 2:</b>: {pokemon.abilities[1].ability.name}</li>}
            </ul>
          <button className='btn btn-danger button-color-back button-width text-dark fw-bolder' onClick={goback}>Back</button>      
        </div>
      </div>  
    </div>
  )
}


export default BackFaceToken;