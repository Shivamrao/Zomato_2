import React from "react";

const DiningFoodCategory = () => {
  return (
    <>
     <div className="bg-white rounded-md shadow">
      <div className='w-40 h-40'>
        <img
          src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
          alt="Pizza"
          className="w-full w-full"
        />
      </div>

      <div>
        <h3 className="my-2 text-base font-medium font-light mx-4">Pizza</h3>
      </div>
      </div>
      <div className="bg-white rounded-md shadow">
      <div className='w-40 h-40'>
        <img
          src="https://b.zmtcdn.com/data/o2_assets/dff007e05e2f72a4abc0772c7a8cd0951632716697.png"
          alt="Burger"
          className="w-full w-full"
        />
      </div>

      <div>
        <h3 className="my-2 text-base font-medium font-light mx-4">Burger</h3>
      </div>
      </div>
    
    </>
  );
};

export default DiningFoodCategory;