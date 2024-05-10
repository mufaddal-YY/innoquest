"use client";

import { TextGenerateEffect } from "../ui/textEffect";

const words = `“You can dream, create, design and build the most wonderful place in the world…but it
requires people to make the dream a reality.”
`;


const HeroBanner = () => {
  return (
    <div className="bg-gray-800"> <TextGenerateEffect words={words} /></div>
  )
}

export default HeroBanner