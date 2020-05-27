import React from 'react';
//import logo from './public/favicon';//
import './App.css';
import Banner from '../storefront/storefront';
import ItemList from '../itemlist/itemlist.js'
import cheese from './cheese.jpg';
import Trolley from '../trolley/trolley';


const item = {

    imageSrc: cheese,
    FoodType: 'Artisan Cheddar Cheese',
    description: " A cheeky little cheddar that likes to bite tongues and then settle down to a salty smoothness",
    MaximumCalories: 345,
    MaximumCarbs: 2,
    rating: 4.5,
    indulgence: 99,
    reviewCount: 20
};

const items = [
    item,
    item,
    item,
    item,
    item,
    item,

];

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1>Dave's Groceries</h1>
                <Banner />
                <ItemList items={items} />
            </div>
        );
    }
}
export default App;
