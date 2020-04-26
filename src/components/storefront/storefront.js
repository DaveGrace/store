import React from 'react';
import './storefront.css';

const sortByOptions = {

    "Food Type": 'query',
    "Maximum Calories": 'maxCalories',
    "Maximum Carbs": 'maxCarbs',
    
}

class Banner extends React.Component {

    renderSortByOptions() {

        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue}>{sortByOption}</li>;
        });
        }
    render() {
        return (
            <div className="banner">
            <div className="banner-sort-options">
                <ul>
                        {this.renderSortByOptions()}
    </ul>
            </div>
            <div className="banner-fields">
                <input placeholder="Search Items" />
                <input placeholder="How many choices?" />
            </div>
                <div className="banner-submit">
                    <a type="button" href='www.thepeoplescouncil.com'>Let's Go</a>
            </div>
        </div>
        );
      }
    }

export default Banner;

   


