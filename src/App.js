import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const APP_ID = '6e21081a';
const APP_KEY = 'c57e2d06ed57335ecb1393abfa793179';
const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

useEffect(() => {

}, []);

function App() {
  return (
    <div className="App">
      <form>
        <input type='text'></input>
        <button type='submit'>
          search
        </button>
      </form>
    </div>
  );
}

export default App;
