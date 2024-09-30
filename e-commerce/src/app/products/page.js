// // app/products/page.js
// import Link from "next/link";

// const products = [
//   { id: 1, name: "Eco-friendly Water Bottle", price: 19.99 },
//   { id: 2, name: "Organic Cotton T-shirt", price: 24.99 },
//   { id: 3, name: "Recycled Paper Notebook", price: 9.99 },
//   // Add more products as needed
// ];

// export default function Products() {
//   return (
//     <div className="min-h-screen bg-cream p-8">
//       <h1 className="text-3xl font-bold text-sage mb-8">Our Products</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <Link
//             key={product.id}
//             href={`/products/${product.id}`}
//             className="bg-light-yellow p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
//           >
//             <h2 className="text-xl font-semibold text-sage mb-2">
//               {product.name}
//             </h2>
//             <p className="text-light-green">${product.price.toFixed(2)}</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// app/products/page.jsimport Link from 'next/link'

import Link from "next/link";

import Image from 'next/image';

const products = [
  // { id: 1, name: "Chocolate Caramel", price: 2.99, image: "/images/chocolate-caramel.jpg" },
  { id: 2, name: "Gummy Bears", price: 3.49, image: "/images/gummy-bears.jpg" },
  { id: 3, name: "Lollipop Assortment", price: 1.99, image: "/images/lollipop-assortment.jpg" },
  { id: 4, name: "Sour Candy Mix", price: 4.29, image: "/images/sour-candy-mix.jpg" },
  // { id: 5, name: "Chocolate Bar", price: 1.59, image: "/images/chocolate-bar.jpg" },
  { id: 6, name: "Candy Canes", price: 5.99, image: "/images/candy-canes.jpg" },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-cream p-8">
      <h1 className="text-3xl font-bold text-sage mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`} passHref>
            <div className="bg-light-yellow p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              {/* <Image src={product.image} alt={product.name} width={300} height={10} className="mb-4 rounded" /> */}
              <Image
                src={product.image}
                alt={product.name}
                width={300} 
                height={200} 
                className="mb-4 rounded-lg object-cover w-full h-auto" 
              />

              <h2 className="text-xl font-semibold text-sage mb-2">
                {product.name}
              </h2>
              <p className="text-light-green">${product.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
