import React from 'react';
import LineItem from './LineItem'

const Cart = ({items}) => {
    const renderItems = Object.keys(items).map(itemId =>
        <LineItem name={items[itemId].name} />
    );

    return (
        <div>
            {renderItems}
        </div>
    )
}

export default Cart