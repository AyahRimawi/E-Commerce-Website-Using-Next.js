import Image from "next/image";

export const metadata = {
  title: "About Our Candy Store",
  description: "Learn more about our delicious and unique candy offerings.",
};

export default function About() {
  return (
    <div className="min-h-screen bg-cream p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-sage mb-6">About Us</h1>
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
            <Image
              src="/about-candy.jpg" // تأكد من إضافة الصورة المناسبة في public/images
              alt="Our team creating delicious candies"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-light-green mb-4">
              In our candy store, we are passionate about crafting high-quality,
              unique candies that delight the senses.
            </p>
            <p className="text-light-green">
              Our team is dedicated to using the finest ingredients and creating
              innovative flavors to bring joy to every bite.
            </p>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-sage mb-4">Our Mission</h2>
        <p className="text-light-green mb-6">
          We strive to make every occasion sweeter with our delicious
          confections. By offering a curated selection of candies, we hope to
          create memorable experiences for our customers.
        </p>
        <h2 className="text-2xl font-semibold text-sage mb-4">Join Us</h2>
        <p className="text-light-green">
          Together, let’s indulge in the joy of sweets. Visit our store and
          discover the magic of our candies!
        </p>
      </div>
    </div>
  );
}
