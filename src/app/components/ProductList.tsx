import axios from 'axios';

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
  
  // local app product 

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
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    
      if (!apiUrl) {
        throw new Error("API URL not defined in .env file");
      }
    
      const response = await axios.get<APIProduct[]>(apiUrl);
      const data = response.data;
      
      return data.map((apiProduct: APIProduct) => ({
        name: apiProduct.title,
        price: apiProduct.price,
        size: "",
        quality: "",
        material: "",
        imageUrl: apiProduct.image,
      }));
    }
  
  export default fetchProductsFromAPI;
  