import React from 'react';

class RestaurantInfo extends React.Component {
  constructor(props) {
    super(props);

  }


  render(){
    return(
      <div class="flex flex-col justify-center items-center">
        <div><span>{this.props.data.name}</span></div>
        <div><span>{this.props.data.address}</span></div>
        <div><span>{this.props.data.phone}</span></div>
        <div>
          <br />
          <center>Hours</center>
          <span>Mon: {this.props.data.hours.mon}</span>
          <br />
          <span>Tue: {this.props.data.hours.tue}</span>
          <br />
          <span>Wed: {this.props.data.hours.wed}</span>
          <br />
          <span>Thu: {this.props.data.hours.thu}</span>
          <br />
          <span>Fri: {this.props.data.hours.fri}</span>
          <br />
          <span>Sat: {this.props.data.hours.sat}</span>
          <br />
          <span>Sun: {this.props.data.hours.sun}</span>
          <br />
        </div>
      </div>
    )
  }
}

export default RestaurantInfo;