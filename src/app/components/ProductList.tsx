// components/ProductList.ts

export type Product = {
    name: string;
    price: number;
    size: string;
    quality: string;
    material: string;
    imageUrl: string;
  };
  
  export async function fetchProductsFromAPI(): Promise<Product[]> {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
  
    // Transform API response to your product shape
    return data.map((item: any) => ({
      name: item.title,
      price: item.price,
      size: 'Medium',
      quality: 'High',
      material: 'Cotton',
      imageUrl: item.image,
    }));
  }
  
  export default fetchProductsFromAPI;
  