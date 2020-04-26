import React from 'react';
//import logo from './public/favicon';//
import './App.css';
import Banner from '../storefront/storefront';
import ItemList from  '../itemlist/itemlist.js'

function App() {
  return (
    <div className="App">
          <h1>Dave's Groceries</h1>
          <Banner />
          <ItemList />
    </div>
  );
}

export default App;

