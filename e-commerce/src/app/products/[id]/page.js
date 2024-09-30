// app/products/[id]/page.js
"use client";

import { useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const products = {
  1: { id: 1, name: "Chocolate Caramel", price: 2.99, description: "Indulge in our rich and creamy chocolate caramel.", image: "/images/chocolate-caramel.jpg" },
  2: { id: 2, name: "Gummy Bears", price: 3.49, description: "Sweet and chewy gummy bears in various flavors.", image: "/images/gummy-bears.jpg" },
  3: { id: 3, name: "Lollipop Assortment", price: 1.99, description: "A fun mix of colorful lollipops.", image: "/images/lollipop-assortment.jpg" },
  4: { id: 4, name: "Sour Candy Mix", price: 4.29, description: "A tangy mix of sour candies for the adventurous palate.", image: "/images/sour-candy-mix.jpg" },
  5: { id: 5, name: "Chocolate Bar", price: 1.59, description: "Classic chocolate bar made with the finest ingredients.", image: "/images/chocolate-bar.jpg" },
  6: { id: 6, name: "Candy Canes", price: 5.99, description: "Delicious peppermint candy canes for the holiday season.", image: "/images/candy-canes.jpg" },
};
export default function ProductDetails({ params }) {
  const [isAdded, setIsAdded] = useState(false);
  const product = products[params.id];

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        Product not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream p-8 flex flex-col md:flex-row items-center justify-center">
      <div className="bg-light-yellow p-8 rounded-lg shadow-md max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-sage mb-4">{product.name}</h1>
        <p className="text-xl text-light-green mb-4">
          ${product.price.toFixed(2)}
        </p>
        <p className="text-sage mb-6">{product.description}</p>
        <button
          onClick={handleAddToCart}
          className={`${
            isAdded
              ? "bg-sage text-cream"
              : "bg-light-green text-sage hover:bg-sage hover:text-cream"
          } transition-colors duration-300 py-2 px-4 rounded-full flex items-center justify-center w-full`}
        >
          <ShoppingCartIcon className="w-5 h-5 mr-2" />
          {isAdded ? "Added to Cart!" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
