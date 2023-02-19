import React from 'react';

const Card = ({ imageUrl, name, location, price, acres, plots }) => {
  return (
    <div class="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden card">
    <img src={imageUrl} alt="Alt text" class="w-full h-40 object-cover card-image" />
    <div class="p-4 text-center card-content">
    <h2 class="mt-4 text-2xl font-bold card-name">Card Name</h2>
    </div>
    </div>
  );
};

export default Card;
