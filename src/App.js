import React, { useEffect, useState } from 'react';
import './App.css';
import { async } from 'q';
import Recipe from './Recipe';

function App() {
const APP_ID = '6e21081a';
const APP_KEY = 'c57e2d06ed57335ecb1393abfa793179';

const [recipes, setRecipts] = useState([]);
const [search, setSearch] = useState('');
const [query, setQuery] = useState('chicken');

useEffect(() => {
  getRecipe();
  console.log("effect count");
}, [query]);

const getRecipe = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  console.log(data.hits);
  setRecipts(data.hits);  
} 

const updateSearch = e => {
  setSearch(e.target.value);
  console.log(search);
}

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
}
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type='text' value={search} onChange={updateSearch}></input>
        <button className="search-button" type='submit'>
          search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
}

export default App;
