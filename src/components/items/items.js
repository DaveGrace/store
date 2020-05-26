import React from 'react';
import './items.css';





class Items extends React.Component {
    render(){
        return (

            < div className="item" >
                <div className="image-container" >
                    <img src={this.props.item.imageSrc} alt='cheeky cheddar'  />
                </div>
                
                <h2>{this.props.item.FoodType}</h2>
    <div className="item-information">
        <div className="item-attributes">
                        <p>{`${this.props.item.MaximumCalories} Calories`}</p>
                        <p>{`${this.props.item.MaximumCarbs} Carbs`}</p>
                        <p>{`Indulgence level: ${this.props.item.indulgence}`}</p>
        </div>
        <div className="item-reviews">
                        <h3>{this.props.item.name}</h3>
                        <h3>{`Rating: ${this.props.item.rating} stars`}</h3>
                        <p>{`${this.props.item.reviewCount} reviews`} </p>
        </div>
                </div>
                
                <div className="item-hiddenText"><p>{this.props.item.description}</p>
                    </div>
            </div>
     
        )
    };
}
export default Items;

