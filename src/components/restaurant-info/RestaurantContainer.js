import React from 'react';
import RestaurantInfo from './RestaurantInfo';
import RestaurantImage from './RestaurantImage';

class RestaurantContainer extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div class="grid grid-rows-2">
        <RestaurantInfo data={this.props.data.restaurant1}/>
        <RestaurantImage image={this.props.data.image} />
      </div>
    )
  }
}

export default RestaurantContainer;