import React from 'react';
import './App.css';
// import Item from './MyItem';
import StarWars from './StarWars';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Item name="Joe" /> */}
        <StarWars />
      </header>
    </div>
  );
}

export default App;
