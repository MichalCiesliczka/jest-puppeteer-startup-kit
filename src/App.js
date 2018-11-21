import React, { useState, useEffect } from 'react';
import { fetchSWHeroes } from './api';
import './App.css';

const App = () => {
    const [heroes, setHeroes] = useState([]);
    const handleFetchData = async () => {
      const SWHeroes = await fetchSWHeroes();
      setHeroes(SWHeroes.results)
    }
    useEffect(() => {
      handleFetchData();
    }, [])

    return (
      <div className="App">
        <header className="App-header">
          <h1 data-testid="App-title">Welcome!</h1>
          {
            heroes.length ? (
              <ul data-testid="App-heroes-list">
                {
                  heroes.map(hero => (
                    <li key={hero.name}>
                      Name: {hero.name}
                    </li>
                  ))
                }
              </ul>
            ) : (
              <p data-testid="App-loader">Waiting for heroes...</p>
            )
          }
        </header>
      </div>
    );
}

export default App;
