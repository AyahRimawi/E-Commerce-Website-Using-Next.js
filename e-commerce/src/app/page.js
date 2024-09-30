// app/page.js
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import FeaturedProduct from "./components/FeaturedProduct";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center p-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-sage mb-6">
          Welcome to Candy Shop
        </h1>
        <p className="text-xl md:text-2xl text-light-green mb-8">
          Discover delicious sweets for a joyful life!
        </p>
        <Link
          href="/products"
          className="bg-light-yellow hover:bg-sage text-sage hover:text-cream transition-colors duration-300 py-3 px-6 rounded-full text-lg flex items-center inline-flex"
        >
          Shop Now
          <ArrowRightIcon className="w-5 h-5 ml-2" />
        </Link>
      </div>
      <FeaturedProduct />
    </div>
  );
}
