// components/ProductList.ts

export async function fetchProductsFromAPI() {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
  
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