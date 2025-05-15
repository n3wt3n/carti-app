'use client'; 

import AddProductForm from '../components/AddProductForm/AddProducts';
import { useRouter } from 'next/navigation';
import { ProductCardProps } from '../components/ProductCard';
export default function AddProductPage() {
  const router = useRouter();

  const handleAdd = (product: ProductCardProps) => {
    const existing = localStorage.getItem('addedProducts');
    const parsed = existing ? JSON.parse(existing) : [];

    parsed.push(product);
    localStorage.setItem('addedProducts', JSON.stringify(parsed));

    alert('Product added successfully!');
    router.push('addNewProduct'); 
  };

  return <AddProductForm onAdd={handleAdd} />;
}

