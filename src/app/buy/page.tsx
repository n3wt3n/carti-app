'use client';

import React from 'react';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

export default function BuyPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      <ShoppingCart className="w-20 h-20 text-gray-500 mb-4" />
      <h1 className="text-3xl font-bold text-gray-800 mb-2">You Bought Nothing</h1>
      <p className="text-gray-600 mb-6">Looks like your cart is empty. Start shopping and fill it up!</p>
      
      <Link href="/">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
          🛍️ Continue Shopping
        </button>
      </Link>
    </div>
  );
}
