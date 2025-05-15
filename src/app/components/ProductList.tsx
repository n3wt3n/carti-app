// components/ProductList.ts

// This is the original shape from the fakestoreapi.com
export type APIProduct = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };
  
  // Your local app product 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export type Product = {
    name: string;
    price: number;
    size: string;
    quality: string;
    material: string;
    imageUrl: string;
  };
  
  // Fetch and convert API products to your local format
  export async function fetchProductsFromAPI(): Promise<Product[]> {
    const response = await fetch('https://fakestoreapi.com/products');
    const data: APIProduct[] = await response.json();
  
    return data.map((item) => ({
      name: item.title,
      price: item.price,
      size: 'Medium',
      quality: 'High',
      material: 'Cotton',
      imageUrl: item.image,
    }));
  }
  
  export default fetchProductsFromAPI;
  