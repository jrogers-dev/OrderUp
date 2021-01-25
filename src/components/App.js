import React from 'react';
import CartContainer from './Cart/CartContainer';
import Restaurant from './Restaurant';

class App extends React.Component {
  render(){
    return(
      <div>
        <Restaurant />
        <CartContainer />
      </div>
    )
  }
}

export default App;