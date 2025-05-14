'use client';

import { useEffect, useState } from 'react';

type Product = {
  name: string;
  price: number;
  size: string;
  quality: string;
  material: string;
  imageUrl: string;
};

export default function CartPage() {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) {
      setCart(JSON.parse(stored));
    }
  }, []);

  const handleRemove = (nameToRemove: string) => {
    const updatedCart = cart.filter(item => item.name !== nameToRemove);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart); // update state to re-render
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {cart.map((product, index) => (
            <div key={index} className="border p-4 rounded shadow">
              <img src={product.imageUrl} alt={product.name} className="w-32 h-32 object-cover mb-2" />
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p>Price: ${product.price}</p>
              <p>Size: {product.size}</p>
              <p>Quality: {product.quality}</p>
              <p>Material: {product.material}</p>
              <button
                onClick={() => handleRemove(product.name)}
                className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Remove from Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
