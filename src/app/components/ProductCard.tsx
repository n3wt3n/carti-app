// components/ProductCard.tsx

import Image from "next/image";

export type ProductCardProps = {
  name: string;
  price: number;
  size: string;
  quality: string;
  material: string;
  imageUrl: string;
  onAddToCart?: (product: {
    name: string;
    price: number;
    size: string;
    quality: string;
    material: string;
    imageUrl: string;
  }) => void;
};

const ProductCard = ({
  name,
  price,
  size,
  quality,
  material,
  imageUrl,
  onAddToCart,
}: ProductCardProps) => {
  const discountedPrice = price * 0.5;

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg border p-4 bg-white">
      <div className="relative w-full h-48">
        <Image src={imageUrl} alt={name} fill className="object-cover rounded-xl" />
        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md">
          50% OFF
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="text-gray-500 line-through text-sm">Rs{price.toFixed(2)}</div>
        <div className="text-green-600 font-bold text-lg">Rs{discountedPrice.toFixed(2)}</div>
        <p className="text-sm mt-2"><strong>Size:</strong> {size}</p>
        <p className="text-sm"><strong>Quality:</strong> {quality}</p>
        <p className="text-sm"><strong>Material:</strong> {material}</p>

        <button
  onClick={() =>
    onAddToCart &&
    onAddToCart({
      name,
      price,
      size,
      quality,
      material,
      imageUrl,
    })
  }
  className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md"
>
  Add to Cart
</button>
      </div>
    </div>
  );
};

export default ProductCard;
