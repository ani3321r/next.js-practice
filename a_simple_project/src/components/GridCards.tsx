"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const gridCards = [
  {
    quote: "The 911 is the essence of Porsche. It sums up everything we do.",
    name: "August Achleitner",
    place: "1",
  },
  {
    quote:
      "In the beginning, I looked around and could not find the car I'd been dreaming of: a small, lightweight sports car that uses energy efficiently. So I decided to build it myself.",
    name: "Ferdinand Porsche",
    place: "2",
  },
  {
    quote: "Porsche. There is no substitute.",
    name: "Joel Goodson (Tom Cruise)",
    place: "3",
  },
  {
    quote:
      "Every Porsche is a sports car at heart: always has been and always will be.",
    name: "Matthias Müller",
    place: "4",
  },
  {
    quote: "When I see an Alfa Romeo drive by, I tip my hat",
    name: "Henry Ford",
    place: "5",
  },
  {
    quote:
      "The 356 was a lightweight sports car so it wasn't a difficult decision to take it into the mountains for the Innsbruck Winter Olympics.",
    name: "Ferry Porsche",
    place: "6",
  },
  {
    quote: "I couldn't find the sports car of my dreams, so I built it myself.",
    name: "Ferdinand Porsche",
    place: "7",
  },
  {
    quote:
      "Every Porsche that comes to life is a product of people, their dreams, their passion, their love for perfection, and their love for the brand.",
    name: "Oliver Blume",
    place: "8",
  },
  {
    quote:
      "A Porsche is more than just a car. It is an expression of freedom and a unique attitude towards life.",
    name: "Detlev von Platen",
    place: "9",
  },
  {
    quote:
      "The Porsche 911 is the quintessential sports car: fast, beautiful, and an absolute joy to drive.",
    name: "Jeremy Clarkson",
    place: "10",
  },
];

function GridCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-dot-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear the Roar
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={gridCards}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default GridCards;
