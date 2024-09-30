// app/components/FeaturedProduct.js
import Link from "next/link";
import Image from "next/image";

export default function FeaturedProduct() {
  const product = {
    id: 1,
    name: "Chocolate Caramel Delight",
    price: 2.99,
    description: "Indulge in our rich and creamy chocolate caramel.",
    imageUrl: "/featured-candy.jpg",
  };

  return (
    <div className="bg-light-yellow p-6 rounded-lg shadow-md my-8">
      <h2 className="text-2xl font-bold text-sage mb-4">Featured Product</h2>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-6">
          <h3 className="text-xl font-semibold text-sage mb-2">
            {product.name}
          </h3>
          <p className="text-light-green mb-2">${product.price.toFixed(2)}</p>
          <p className="text-sage mb-4">{product.description}</p>
          <Link
            href={`/products/${product.id}`}
            className="bg-sage hover:bg-light-green text-cream hover:text-sage transition-colors duration-300 py-2 px-4 rounded-full inline-block"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
