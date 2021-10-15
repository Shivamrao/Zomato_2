import React from "react";

//component
import NightlifeFoodCategory from "./NightlifeFoodCategory";

const NightlifeCarousal = () => {
  return (
    <>
    <h1 className="text-xl font-semibold my-3">NightLife in your Town!</h1>
    <div className="flex flex-wrap  gap-2">
    <NightlifeFoodCategory />
      <NightlifeFoodCategory />
      <NightlifeFoodCategory />
        
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

export default NightlifeCarousal;