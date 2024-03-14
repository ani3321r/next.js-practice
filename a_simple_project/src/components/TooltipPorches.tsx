"use client";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
  {
    id: 1,
    name: "911 turbo s",
    designation: "coupe",
    image:
      "https://images.unsplash.com/photo-1611651338412-8403fa6e3599?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Panamera",
    designation: "hatchback",
    image:
      "https://images.unsplash.com/photo-1615145670597-b0e3cadecafb?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "cayman",
    designation: "sedan",
    image:
      "https://images.unsplash.com/photo-1522325901921-e199d3eaa5ce?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "carrera",
    designation: "coupe",
    image:
      "https://images.unsplash.com/photo-1578911504392-fb6cee1da196?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function TooltipPorches() {
  return (
    <div>
      <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
          <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
            Some Porsches
          </h2>
          <p className="text-base md:text-lg text-white text-center mb-4">
            These are my favourite
          </p>
          <div className="flex flex-row items-center justify-center mb-10 w-full">
            <AnimatedTooltip items={instructors} />
          </div>
        </WavyBackground>
      </div>
    </div>
  );
}

export default TooltipPorches;
