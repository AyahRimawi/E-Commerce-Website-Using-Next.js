// app/layout.js
import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Candy Shop - Sweet Treats for Everyone",
  description:
    "Shop for delicious candies and sweets that bring joy to every occasion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-cream`}>
        <Navigation />
        <main>{children}</main>
        <footer className="bg-sage text-cream text-center p-4 mt-8">
          <p>&copy; 2024 Candy Shop. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
