import './App.js';
import BackFaceToken from './BackFaceToken.js';
import '../src/FetchPokemonData.css'
import ReactAudioPlayer from 'react-audio-player';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
// import React, {useState, useEffect} from 'react';

  
const AudioPokemon = ({src}) => {
  return (
    <ReactAudioPlayer 
      src={src}
      autoPlay={false}
      controls
    />
  );
};


export default AudioPokemon;