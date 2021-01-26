import React from 'react';

class RestaurantInfo extends React.Component {
  render(){
    return(
      <div class="flex flex-col bg-blue-400 justify-center items-center">
        <div><span>Restaurant Name</span></div>
        <div><span>Address</span></div>
        <div><span>Phone Number</span></div>
        <div><span>Hours</span></div>
      </div>
    )
  }
}

export default RestaurantInfo;