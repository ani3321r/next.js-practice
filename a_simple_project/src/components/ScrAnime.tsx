"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Versatility",
    description:
      "Porches offer a blend of practicality and performance, suitable for daily commuting as well as thrilling driving experiences on the open road. With a range of models from the iconic 911 to the versatile Cayenne SUV, Porsche caters to a diverse audience.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Versatility
      </div>
    ),
  },
  {
    title: "Engineering Excellence",
    description:
      "Renowned for their precision engineering and meticulous attention to detail, Porsches are crafted to deliver an unparalleled driving experience. From their powerful engines to their responsive handling, each Porsche model is a testament to automotive engineering at its finest.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        Engineering Excellence
      </div>
    ),
  },
  {
    title: "Timeless Design",
    description:
      "Porsche cars boast timeless design elements that have captivated enthusiasts for generations. The sleek lines, iconic silhouettes, and distinctive headlights make Porsches instantly recognizable on the road, ensuring they stand out in any setting.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Timeless Design
      </div>
    ),
  },
  {
    title: "Heritage and Prestige",
    description:
      "With a rich heritage spanning over seven decades, Porsche has established itself as a symbol of luxury and performance. Owning a Porsche not only signifies a passion for driving but also grants access to a prestigious community of enthusiasts who share a deep appreciation for automotive excellence.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Heritage and Prestige
      </div>
    ),
  },
];

function ScrAnime() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
}

export default ScrAnime;
