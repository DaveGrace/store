import React from 'react';
import './items.css';

const item = {
    
    imageSrc: './cheese.jpg',
    FoodType: 'Artisan Cheddar Cheese',
    description: " A cheeky little cheddar that likes to bite tongues and then settle down to a salty smoothness",
    MaximumCalories: 345,
    MaximumCarbs: 2,        
    rating: 4.5,
    indulgence: 99,
    reviewCount: 20
};



class Items extends React.Component {
    render(){
        return (

            < div className="item" >
    <div className="image-container">
                    <img src={item.imageSrc} alt='cheeky cheddar' />
    </div>
                <h2>{item.FoodType}</h2>
    <div className="item-information">
        <div className="item-attributes">
                        <p>{`${item.MaximumCalories} Calories`}</p>
                        <p>{`${item.MaximumCarbs} Carbs`}</p>
                        <p>{`Indulgence level: ${item.indulgence}`}</p>
        </div>
        <div className="item-reviews">
                        <h3>{item.name}</h3>
                        <h3>{`Rating: ${item.rating} stars`}</h3>
                        <p>{`${item.reviewCount} reviews`} </p>
        </div>
    </div>
</div>
        )
    };
}
export default Items;


