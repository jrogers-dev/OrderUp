import React from 'react';
import CartContainer from './Cart/CartContainer';
import RestaurantContainer from './restaurant-info/RestaurantContainer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurantData: null
    }
  }
  
  //Replace key in fetch url with your own documenu API key for now. I'll add a file to import
  //that will hold our individual keys and have git ignore it. 
  componentDidMount(){
    fetch(
      "https://api.documenu.com/v2/restaurant/4072702673999819?key=f53454bdef423ba62d4b07a44bd10e82"
    ).then(response => response.json()
    ).then(json => {
      this.setState(
        { restaurantData: json.result },
        () => console.log({message: "App.js:21 (API Fetch Call)", response: this.state.restaurantData})
      )
    })
  }

  render(){
    return(
      <div class="grid grid-cols-3 h-screen w-screen">
        {/*<RestaurantContainer data={this.state.restaurantData} />*/}
        <div id="delete-me">{/* <MenuContainer /> */}</div>
        <CartContainer />
      </div>
    )
  }
}

export default App;