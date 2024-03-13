"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function SomeClassics() {
  const featuredClasssics = [
    {
      title: "Porsche 356",
      description:
        "Introduced in 1948, the 356 was Porsche's first production automobile. It had a lightweight, rear-engine, and a sleek design that became iconic.",
      slug: "Porsche-356",
      isFeatured: true,
    },
    {
      title: "Porsche 911 (1964-1973)",
      description:
        "The 911, initially called the 901, is perhaps the most iconic Porsche model. Its distinctive silhouette and rear-engine layout set it apart. Known for its agility and performance, it has become a symbol of the brand.",
      slug: "Porsche-911",
      isFeatured: true,
    },
    {
      title: "Porsche 912",
      description:
        "Introduced as an entry-level variant of the 911, the 912 featured a 4-cylinder engine and retained the 911's classic styling. It offered a more accessible option for Porsche enthusiasts.",
      slug: "Porsche-912",
      isFeatured: true,
    },
    {
      title: "Porsche 914",
      description:
        "Produced from 1969 to 1976, the 914 was a mid-engine sports car developed in collaboration with Volkswagen. It had a unique design and was available with a range of engines, including flat-four and flat-six options.",
      slug: "Porsche-914",
      isFeatured: true,
    },
    {
      title: "Porsche 924",
      description:
        "Introduced in 1976, the 924 was Porsche's first front-engine, water-cooled model. It featured a transaxle layout and was aimed at expanding Porsche's market reach with a more affordable entry-level option.",
      slug: "Porsche-924",
      isFeatured: true,
    },
    {
      title: "Porsche 928",
      description:
        "Introduced in 1977, the 928 was a grand tourer with a front-engine, rear-transaxle layout. It was intended as a more luxurious and comfortable alternative to the 911, featuring innovative technology and a V8 engine.",
      slug: "Porsche-928",
      isFeatured: true,
    },
  ];
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Some classics
          </h2>
        </div>

        <div className="mt-10">
          <HoverEffect
            items={featuredClasssics.map((classics) => ({
              title: classics.title,
              description: classics.description,
              link: "/",
            }))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All classics
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SomeClassics;
