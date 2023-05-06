import React from "react";
import Card from "@/components/flip"
import FlipCard from "@/components/flipcard"

const MyPage = () => {
  return (
    <div className="container mx-auto my-4">
      <FlipCard
        front={<div className="p-4">Front content</div>}
        back={<div className="p-4">Back content</div>}
      />
      <Card />
    </div>
  );
};

export default MyPage;
