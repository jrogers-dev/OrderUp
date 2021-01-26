import React from 'react';
import RestaurantInfo from './RestaurantInfo';
import RestaurantImage from './RestaurantImage';

class RestaurantContainer extends React.Component {
  render(){
    return(
      <div>
        <RestaurantInfo />
        <RestaurantImage />
      </div>
    )
  }
}

export default RestaurantContainer;