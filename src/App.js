import React from 'react';
import fakenews from './assets/fakenews.JPG';
import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
        <div className="App-ImageHeader">
          <img src={fakenews} />
        </div>
        <div className="App-Body">
          <SearchBar />
        </div>
    </div>
  );
}

export default App;
