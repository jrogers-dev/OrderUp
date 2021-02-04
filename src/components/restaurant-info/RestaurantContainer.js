import React from 'react';
import RestaurantInfo from './RestaurantInfo';
import RestaurantImage from './RestaurantImage';

class RestaurantContainer extends React.Component {
  constructor(props) {
    super(props);

    console.log(props.restaurantData);
  }

  render() {
    return (
      <div class="grid grid-rows-2 bg-green-700">
        <RestaurantInfo restaurantData={this.props.restaurantData}/>
        <RestaurantImage image={"images/restaurants/"+this.props.restaurantData.restaurant_id+".jpg"}/>
      </div>
    )
  }
}

export default RestaurantContainer;