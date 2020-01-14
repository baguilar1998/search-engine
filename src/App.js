import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import Results from './components/Results/Results';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/' component={MainPage} />
        <Route path='/results' component={Results} />
      </div>
    </BrowserRouter>
  );
}

export default App;
