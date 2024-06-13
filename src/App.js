import React from 'react';
import './App.css';
// import FetchPokemonData from './FetchPokemonData.js';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from 'react'; 


//TODO Find a way for useEffect to call only once handlePokemon's input is clicked, avoid request for every typing in the input, only once it is clicked
//TODO Add pokemon's introductory audio* - Responsive    

function App() {
  const [searchedPokemon, setsearchedPokemon] = useState('');
  const [pokemonData, setpokemonData] = useState('');
  const [frontFaceToken, setfrontFaceToken] = useState(true);
  const [introductoryAudio, setintroductoryAudio] = useState(null);
  
  const handlePokemon = (event) => { //Solo haga la request cuando se termine de typear
    setsearchedPokemon(event.target.value.toLowerCase());
  }

    
  // const handleClick = () => {  
  // }

  useEffect(() => { //Se renderiza por cada cambio hence d error 404, di error 404, etc...  function that fires on every render
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchedPokemon}`) //How to start the search once finishing typing
      .then(response =>  response.json())
      .then(data => {
        setpokemonData(data);
        setintroductoryAudio(pokemonData.cries.legacy);
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      })
  }, [searchedPokemon]) //Change this* -  Tells useEffect to re-run only when searchedPokemon have changed


  const searchPokemon = () => {
    if (searchedPokemon == false) {
      alert("Insert name");
      return;
    }
    setfrontFaceToken(!frontFaceToken);
  }


  const goback = () => {
    setfrontFaceToken(!frontFaceToken);
  }



   if (frontFaceToken) {
    return (
        <div className='App'>
        <div className='token-pokemon-front'>
          <div className='pikachu-top'>
            <input className='input-field' type="text submit" placeholder="Insert Pokemon" onChange={handlePokemon}/>
          </div>
          <a>
            {/* <button type='submit' className='btn btn-danger button-color button-width text-dark fw-bolder' onClick={searchPokemon}>Search</button>       */}
          </a>
          <div type='button' className='pokeball-bottom' onClick={searchPokemon}></div>
        </div>
      </div>
      )
  } 
 else {
   return (
     <div className='App'>
     <div className='token-pokemon-back'>
       <div className='pokemon'>
         <img className='pokemon-picture' src={pokemonData.sprites.front_default}/>
       </div>
       <div>
         <h1>{pokemonData.name}</h1>
          <ul className='no-dots'>
              <li><b>Type</b>: {pokemonData.types[0].type.name}</li>
              <li><b>Weight</b>: {pokemonData.weight} lbs.</li>
              <li><b>Ability 1:</b>: {pokemonData.abilities[0].ability.name}</li>
              <li><b>Ability 2: </b>: {pokemonData.abilities[1].ability.name}</li>
          </ul>
         <button className='btn btn-danger button-color-back button-width text-dark fw-bolder' onClick={goback}>Back</button>      
       </div>
     </div>  
   </div>
   )
 }
  
};



/* // <img class="div-pokemon" src="" id="pokemonSprite" style="display: inline-block;" />
TEXT
{/* <button type="submit" onclick="FetchPokemonData()">Enter pokemon name</button><br> */
// Tipo elemento pokemon add switch

export default App;