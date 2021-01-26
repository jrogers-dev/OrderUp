import React from 'react';
import CartContainer from './Cart/CartContainer';
import RestaurantContainer from './restaurant-info/RestaurantContainer';

class App extends React.Component {
  render(){
    return(
      <div>
        <RestaurantContainer />
        {/* <MenuContainer /> */}
        <CartContainer />
      </div>
    )
  }
}

export default App;