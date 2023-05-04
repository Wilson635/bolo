import React from "react";

import { useState } from "react";

interface FlipCardProps {
  front: JSX.Element;
  back: JSX.Element;
}

const FlipCard = ({ front, back }: FlipCardProps) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      className={`LaCarteTourne ${
        flipped ? "LaCarteTourne--flipped" : ""
      } rounded-md shadow-lg`}
      onClick={handleClick}
    >
      <div className="LaCarteTourne__inner h-full w-full rounded-md bg-white transition-transform duration-500">
        <div className="LaCarteTourne__front flex flex-col items-center justify-center rounded-md bg-white p-4 text-gray-800">
          {front}
          <p className="mt-4 text-sm font-medium">
            Cliquez pour voir en arrière
          </p>
        </div>
        <div className="LaCarteTourne__back flex flex-col items-center justify-center rounded-md bg-white p-4 text-gray-800">
          {back}
          <p className="mt-4 text-sm font-medium">
            Cliquez pour revenir en avant
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;



