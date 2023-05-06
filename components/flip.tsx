import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className="front w-64 rounded-md bg-white p-6 shadow-lg">
          <p className="text-lg font-medium text-gray-800">
            This is the front of the card.
          </p>
          <button
            className="mt-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
            onMouseOver={handleClick}
          >
            Click to flip
          </button>
        </div>

        <div className="back w-64 rounded-md bg-white p-6 shadow-lg">
          <p className="text-lg font-medium text-gray-800">voila la dataline</p>
          <button
            className="mt-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
            onClick={handleClick}
          >
            escape je le suis
          </button>
        </div>
      </ReactCardFlip>
      <div className="b">
        <button className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-red-600 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
          <span className="absolute right-0 top-0 mr-1 inline-block h-3 w-3 animate-ping rounded-full bg-red-600"></span>
          <span>Button Text</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
