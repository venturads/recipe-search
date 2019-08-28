import React, { useEffect, useState } from 'react';
import './App.css';
import { async } from 'q';

function App() {
const APP_ID = '6e21081a';
const APP_KEY = 'c57e2d06ed57335ecb1393abfa793179';

useEffect(() => {
  getRecipe();
  console.log("effect count");
}, []);

const getRecipe = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  console.log(data);
} 

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type='text'></input>
        <button className="search-button" type='submit'>
          search
        </button>
      </form>
    </div>
  );
}

export default App;
