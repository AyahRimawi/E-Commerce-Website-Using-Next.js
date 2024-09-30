// app/components/Navigation.js
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-sage p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-cream text-2xl font-bold">
          Candy Shop
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/"
              className="text-cream hover:text-light-yellow transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="text-cream hover:text-light-yellow transition-colors duration-300"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-cream hover:text-light-yellow transition-colors duration-300"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
