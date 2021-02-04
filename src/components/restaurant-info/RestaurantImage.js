import React from 'react';

class RestaurantImage extends React.Component {
  constructor(props) {
    super(props);

  }

  render(){
    return(
      <div class="flex justify-center items-center">
        <img class="p-1 outline-white" alt="Restaurant" src={this.props.image} />
      </div>
    )
  }
}

export default RestaurantImage;