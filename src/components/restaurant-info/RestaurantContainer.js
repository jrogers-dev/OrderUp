import React from 'react';
import RestaurantInfo from './RestaurantInfo';
import RestaurantImage from './RestaurantImage';

class RestaurantContainer extends React.Component {
  render() {
    return (
      <div class="grid grid-rows-2">
        <RestaurantInfo />
        <RestaurantImage />
      </div>
    )
  }
}

export default RestaurantContainer;