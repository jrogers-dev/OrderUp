import React from 'react';
import CartContainer from './Cart/CartContainer';
import RestaurantContainer from './restaurant-info/RestaurantContainer';

class App extends React.Component {
  render(){
    return(
      <div class="grid grid-cols-3 h-screen w-screen">
        <RestaurantContainer />
        <div id="delete-me">{/* <MenuContainer /> */}</div>
        <CartContainer />
      </div>
    )
  }
}

export default App;