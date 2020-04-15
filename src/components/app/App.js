import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import CharactersDetails from '../characters-details/characters-details';
import RandomCharacters from '../random-characters/random-characters';
import ItemList from '../item-list/item-list';

import './App.sass';

function App() {
  return (
    <div className="App">
      <Header />
      <RandomCharacters />
      <div className="components-list container-fluid">
        <div className="row mb-2">
          <div className="col-md-6">
            <ItemList />
          </div>
          <div className="col-md-6">
            <CharactersDetails />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
