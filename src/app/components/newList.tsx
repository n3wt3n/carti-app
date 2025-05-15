// 'use client';
// import { useEffect, useState } from 'react';

// type Product = {
//   title: string;
//   description: string;
//   price: number;
//   image: string;
//   category: string;
//   stock: number;
// };

// const ProductList = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     const stored = localStorage.getItem('products');
//     if (stored) {
//       setProducts(JSON.parse(stored));
//     }
//   }, []);

//   if (products.length === 0) return <p>No products added yet.</p>;

//   return (
//     <div>
//       <h2>All Products</h2>
//       <div style={{ display: 'grid', gap: '1rem' }}>
//         {products.map((product, i) => (
//           <div key={i} style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px' }}>
//             <img src={product.image} alt={product.title} width="100" />
//             <h3>{product.title}</h3>
//             <p>{product.description}</p>
//             <p><strong>Price:</strong> ${product.price}</p>
//             <p><strong>Stock:</strong> {product.stock}</p>
//             <p><em>{product.category}</em></p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;
