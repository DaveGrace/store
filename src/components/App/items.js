import React from 'react';
import './items.css';
import cheese from './cheese.jpg';





class Items extends React.Component {
    render(){
        return (

            < div className="item" >
                <div className="image-container" >
                    <img src={this.props.imageSrc} alt='cheeky cheddar'  />
                </div>
                
                <h2>{this.props.FoodType}</h2>
    <div className="item-information">
        <div className="item-attributes">
                        <p>{`${this.props.MaximumCalories} Calories`}</p>
                        <p>{`${this.props.MaximumCarbs} Carbs`}</p>
                        <p>{`Indulgence level: ${this.props.indulgence}`}</p>
        </div>
        <div className="item-reviews">
                        <h3>{this.props.name}</h3>
                        <h3>{`Rating: ${this.props.rating} stars`}</h3>
                        <p>{`${this.props.reviewCount} reviews`} </p>
        </div>
                </div>
                
                    <div className="item-hiddenText"><p>{this.props.description}</p>
                    </div>
            </div>
     
        )
    };
}
export default Items;

