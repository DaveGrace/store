import React from 'react';
import './itemlist.css';
import Items from '../items/items';


class ItemList extends React.Component {

    render() {
        return (
            <div className="ItemList">
                {
                    this.props.items.map(item => {
                        return <Items item={item} />
                    })
                 }

            </div>
            )
    
    




    }



}
export default ItemList;

