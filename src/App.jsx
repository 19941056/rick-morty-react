import './App.css';
import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [characterName, setCharacterName] = useState("");
  const [characterChosen,setCharacterChosen]=useState(false);
  const [character, setCharacter] = useState({
    name:'',
    id:'',
    image:'',
  });


  const searchCharacter=()=>{
    axios.get('https://rickandmortyapi.com/api/character/?name=' +characterName).then(
      (res) => {
        setCharacter({
          name:characterName,
          id:res.data.results[0].id,
          image:res.data.results[2].image,
        });
        setCharacterChosen(true);
      }
    );
  };

  return (
    <div className="App">
    <div className='TitleSection'>
    <h1>Rick and Morty</h1>
    <input type='text' onChange={(event)=>{
      setCharacterName(event.target.value);
    }}></input>
    <button onClick={searchCharacter}>Search Character</button>
    </div>
    <div className="DisplaySection">
    {!characterChosen ? (
          <h1> Please choose a Character </h1>
        ) : (
          <>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
            <h2 className="id">#{character.id}</h2>
          </>
          
        )}
    </div>
      
    </div>
  )
}

export default App
