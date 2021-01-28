import React from 'react';

class RestaurantImage extends React.Component {
  constructor(props) {
    super(props);

  }

  render(){
    return(
      <div class="flex justify-center items-center">
        <img alt="Restaurant" src="images/restaurant1.jpg" />
      </div>
    )
  }
}

export default RestaurantImage;