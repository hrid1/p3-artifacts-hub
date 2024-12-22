import React, { useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const HistoricalFacts = () => {
  const facts = [
    "The Rosetta Stone, discovered in 1799, was the key to decoding Egyptian hieroglyphs.",
    "The Antikythera Mechanism is believed to be the world’s first analog computer, built over 2,000 years ago.",
    "The Dead Sea Scrolls are considered the oldest known biblical manuscripts, dating back to 300 BCE.",
    "Vikings used sunstones to navigate cloudy skies as early as the 10th century.",
    "The Terracotta Army in China was built to protect Emperor Qin Shi Huang in the afterlife and consists of over 8,000 life-sized statues.",
  ];

  const [currentFact, setCurrentFact] = useState(0);

  const handleNextFact = () => {
    setCurrentFact((prev) => (prev + 1) % facts.length);
  };

  return (
    <div className="bg-amber-50 py-12 px-6 my-4 md:my-8">
      <h2 className="text-3xl md:text-4xl  font-bold text-center mb-6 ">
        Fun Historical Facts
      </h2>
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 relative">
        <FaQuoteLeft className="text-gray-400 absolute top-4 left-4 text-2xl" />
        <p className="text-lg text-gray-700 text-center italic m-4">
          {facts[currentFact]}
        </p>
        <FaQuoteRight className="text-gray-400 absolute bottom-4 right-4 text-2xl" />
        <button
          onClick={handleNextFact}
          className="btn bg-amber-300 btn-sm mt-4 block mx-auto"
        >
          Next Fact
        </button>
      </div>
    </div>
  );
};

export default HistoricalFacts;
