'use client'; 

import AddProductForm from '../components/AddProductForm/AddProducts';
import { useRouter } from 'next/navigation';
export default function AddProductPage() {
  const router = useRouter();

  const handleAdd = (product: any) => {
    const existing = localStorage.getItem('addedProducts');
    const parsed = existing ? JSON.parse(existing) : [];

    parsed.push(product);
    localStorage.setItem('addedProducts', JSON.stringify(parsed));

    alert('Product added successfully!');
    router.push('cart'); 
  };

  return <AddProductForm onAdd={handleAdd} />;
}

