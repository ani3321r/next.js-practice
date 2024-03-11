"use client";
import Link from "next/link";
import products from "../data/porches.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Products {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  topSpeed: string;
  isFeatured: boolean;
}
function FeaturedCars() {
  const featuredCars = products.products.filter(
    (products: Products) => products.isFeatured
  );
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED CARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            The Best Porches
          </p>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCars.map((products: Products) => (
            <div key={products.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {products.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {products.description}
                  </p>
                  <Link href={`/products/${products.slug}`}>Learn More</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/products"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View all products
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCars;
