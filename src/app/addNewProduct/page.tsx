'use client';

import AddProductForm from '../components/AddProductForm/AddProducts';
import { useRouter } from 'next/navigation';

type Product = {
  name: string;
  price: number;
  size: string;
  quality: string;
  material: string;
  imageUrl: string;
};

export default function AddProductPage() {
  const router = useRouter();

  const handleAdd = (product: Product) => {
    const existing = localStorage.getItem('addedProducts');
    const parsed = existing ? JSON.parse(existing) : [];

    parsed.push(product);
    localStorage.setItem('addedProducts', JSON.stringify(parsed));

    alert('Product added successfully!');
    router.push('/'); // Go back to home or update as needed
  };

  return <AddProductForm onAdd={handleAdd} />;
}
