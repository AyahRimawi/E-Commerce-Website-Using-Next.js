// app/not-found.js
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-4xl font-bold text-sage mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-xl text-light-green mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        href="/"
        className="bg-light-yellow hover:bg-sage text-sage hover:text-cream transition-colors duration-300 py-2 px-4 rounded-full"
      >
        Return to Home
      </Link>
    </div>
  );
}
