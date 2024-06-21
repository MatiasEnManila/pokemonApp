import { IS_REACT_LEGACY } from 'swr/_internal';
import './App.js';
import './BackFaceToken.css'
import ditto from './pictures/ditto-boss.jpg';
import { useState, useEffect } from 'react'; 


function BackFaceToken({picture, name, type, weight, abilityOne, abilityTwo, goback, cry}) {

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


  
  let elementClassName = '';

  switch(type) {
    case 'normal':
    elementClassName = 'normal';
    break;

    case 'electric':
      elementClassName = 'electric';
    break;

    case 'rock':
      elementClassName = 'rock';
    break;

    case 'fire':
      elementClassName = 'fire';
    break;

    case 'bug':
      elementClassName = 'bug';
    break;

    case 'dark':
      elementClassName = 'dark';
    break;

    case 'dragon':
      elementClassName = 'dragon';
    break;

    case 'fairy':
      elementClassName = 'fairy';
    break;

    case 'fighting':
      elementClassName = 'fighting';
    break;

    case 'flying':
      elementClassName = 'flying';
    break;

    case 'ghost':
      elementClassName = 'ghost';
    break;

    case 'grass':
      elementClassName = 'grass';
    break;

    case 'ground':
      elementClassName = 'ground';
    break;

    case 'ice':
      elementClassName = 'ice';
    break;

    case 'poison':
      elementClassName = 'poison';
    break;

    case 'psychic':
      elementClassName = 'psychic';
    break;

    case 'steel':
      elementClassName = 'steel';
    break;

    case 'water':
      elementClassName = 'water';
    break;

  }

 

  return (
    <div className='App'>
      <div className='token-pokemon-back'>
        <div className='pokemon'>
          {name == 'ditto' ? <img className='pokemon-picture' src={ditto}/> : <img className='pokemon-picture' src={picture}/>}
          {/* <img className='pokemon-picture' src={picture}/> */}
        </div>
        <div>
            
              <h1 className='title'>{name}</h1>
              <i className={'pokemon-sound ' + elementClassName}></i>
      
            <ul className='no-dots'>
                <li><b>Type</b>: {type}</li>
                <li><b>Weight</b>: {weight} lbs.</li>
                <li><b>Ability 1:</b>: {abilityOne}</li>
                <li><b>Ability 2: </b>: {abilityTwo}</li>
            </ul>
          <button className='btn btn-danger button-color-back button-width text-dark fw-bolder' onClick={goback}>Back</button>      
        </div>
      </div>  
    </div>
  )
}


export default BackFaceToken;