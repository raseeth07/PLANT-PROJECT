import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

const CartItems = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem({ name: item.name }));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem({ name: item.name }));
  };

  const calculateTotalCost = () => {
    return items.reduce((total, item) => total + item.cost * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-items">
      {items.map((item, index) => (
        <div key={index} className="cart-item">
          <h3>{item.name}</h3>
          <p>Price: ${item.cost.toFixed(2)}</p>
          <p>Subtotal: ${(item.cost * item.quantity).toFixed(2)}</p>
          <button onClick={() => handleDecrement(item)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => handleIncrement(item)}>+</button>
          <button onClick={() => handleRemove(item)}>Remove</button>
        </div>
      ))}
      <h2>Total: ${calculateTotalCost()}</h2>
      <button onClick={handleCheckoutShopping}>Checkout</button>
    </div>
  );
};

const handleCheckoutShopping = () => {
  alert('Functionality to be added for future reference');
};

export default CartItems;
