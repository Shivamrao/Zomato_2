import React from "react";

//component
import DiningFoodCategory from "./DiningFoodCategory";

const DiningCarousal = () => {
  return (
    <>
    <h1 className="text-xl font-semibold my-3">Enjoy the Dining!</h1>
    <div className="flex flex-wrap  gap-2">
      <DiningFoodCategory />
      <DiningFoodCategory />
      
      <DiningFoodCategory />
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

export default DiningCarousal;