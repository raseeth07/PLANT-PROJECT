import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './E-commerce';

const ProductList = () => {
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();

  const plantsArray = [
    {
      name: 'Aloe Vera',
      image: 'path/to/aloe-vera.jpg',
      description: 'Aloe Vera is a succulent plant species...',
      cost: 12.99
    },
    {
      name: 'Monstera',
      image: 'path/to/monstera.jpg',
      description: 'Monstera is a genus of 45 species...',
      cost: 19.99
    },
    // Add more plants as needed
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prev) => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div className="product-grid">
      {plantsArray.map((plant, index) => (
        <div key={index} className="product-card">
          <img src={plant.image} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>{plant.description}</p>
          <p>Price: ${plant.cost.toFixed(2)}</p>
          <button 
            onClick={() => handleAddToCart(plant)} 
            disabled={addedToCart[plant.name]}
          >
            {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
