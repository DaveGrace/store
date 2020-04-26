import React from 'react';
import './itemlist.css';

import Items from '../items/items';


class ItemList extends React.Component {

    render() {
        return (
            <div className="itemList">
                <Items />
                <Items />
                <Items />
                <Items />

            </div>
            )
    
    




    }



}
export default ItemList;