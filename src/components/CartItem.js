// CartItem.js
import React from 'react';

const CartItem = ({ item }) => {
    return (
        <div className="flex border-b py-2">
            <img src={item.image} alt={item.name} className="w-16 h-16 mr-4" />
            <div className="flex flex-col">
                <h3>{item.name}</h3>
                <p>{item.info}</p>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.amount}</p>
            </div>
        </div>
    );
};

export default CartItem;
