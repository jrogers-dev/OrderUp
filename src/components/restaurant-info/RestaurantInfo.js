import React from 'react';

class RestaurantInfo extends React.Component {
  constructor(props) {
    super(props);
  }


  render(){
    return(
      <div class="flex flex-col justify-center items-center">
        <div><span class="text-4xl">{this.props.restaurantData.restaurant_name}</span></div>
        <br />
        <div><span class="text-xl">{this.props.restaurantData.address.street}</span></div>
        <div><span class="text-xl">{this.props.restaurantData.address.city}, {this.props.restaurantData.address.state} {this.props.restaurantData.address.postal_code}</span></div>
        <div><span class="text-xl">{this.props.restaurantData.restaurant_phone}</span></div>
        <br />
        <div><span class="text-xl underline bold"><a href={this.props.restaurantData.restaurant_website}>Website</a></span></div>
        <br />
        <div><span class="text-xl">{this.props.restaurantData.hours}</span></div>
        <div><span class="text-xl">{this.props.restaurantData.price_range}</span></div>
      </div>
    )
  }
}

export default RestaurantInfo;