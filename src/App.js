import React from 'react';
import fakenews from './assets/fakenews.JPG';
import './App.css';
import SearchForm from './components/SearchForm/SearchForm';

function App() {
  return (
    <div className="App">
        <div className="App-ImageHeader">
          <img src={fakenews} />
        </div>
        <div className="App-body">
          <SearchForm />
        </div>
    </div>
  );
}

export default App;
