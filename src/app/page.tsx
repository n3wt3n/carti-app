'use client';

import React, { useEffect, useState } from 'react';
import ProductCard, { ProductCardProps } from './components/ProductCard';
import { fetchProductsFromAPI } from './components/ProductList';
import Link from 'next/link';

function handleAddToCart(product: ProductCardProps) {
  const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
  const isAlreadyAdded = existingCart.some((item: ProductCardProps) => item.name === product.name);
  if (isAlreadyAdded) {
    alert("Product already added to cart!");
    return;
  }

  const updatedCart = [...existingCart, product];
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  console.log("Product added to cart:", product);
}

function Page() {
  const [allProducts, setAllProducts] = useState<ProductCardProps[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const apiProducts = await fetchProductsFromAPI();
      setAllProducts(apiProducts);
    }

    loadProducts();
  }, []);

  return (
    <div>
      <h1 id='home'>Home Page</h1>
      <header>
        <nav className="w-full flex justify-center bg-gray-800 text-white p-4 space-x-4">
          <Link href="/">Go to Home</Link>
          <Link href="/buy">Go to Buy</Link>
          <Link href="/about">Go to About</Link>
          <Link href="/cart">Go to Cart</Link>
          <Link href="/addNewProduct">Add New</Link>
        </nav>

        <div className="flex-1 p-6 text-center">
          <h1 className="text-2xl font-bold">Welcome to our shop</h1>
          <p className="text-center">Explore the latest trend</p>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {allProducts.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            size={product.size}
            quality={product.quality}
            material={product.material}
            imageUrl={product.imageUrl}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
    </div>
  );
}

export default Page;
