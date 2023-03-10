import React from 'react';
import './App.css';
import StarWarsProvider from './contexts/StarWarsProvider';
import Home from './pages/Home';

function App() {
  return (
    <StarWarsProvider>
      <Home />
    </StarWarsProvider>
  );
}

export default App;
