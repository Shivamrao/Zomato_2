import React from "react";

//component
import DeliveryFoodCategory from "./DeliveryFoodCategory";

const DeliveryCarousal = () => {
  return (
    <>
    <h1 className="text-xl font-semibold my-3">Eat what makes you happy!</h1>
    <div className="flex flex-wrap  gap-2">
      <DeliveryFoodCategory />
      <DeliveryFoodCategory />
      
      <DeliveryFoodCategory />
      <div className=''>
        <img
          src="https://b.zmtcdn.com/web/assets/e80201cf2e86a49ce4722e9b5ddfab551620045350.png" loading="lazy"
          alt="img"
          className="w-full w-full"
        />
      </div>
      
    </div>
    </>
  );
};

export default DeliveryCarousal;