import React, { Component }  from 'react';
import Cart from './Cart'
import menuItems from '../../sample-menu-items'

export default class CartContainer extends Component {
    state = {
        items: menuItems
    }

    render() {
        return (
            <div className="cart-container" style={{float:"right"}}>
                <Cart items={this.state.items}/>
            </div>
        )
    }
}