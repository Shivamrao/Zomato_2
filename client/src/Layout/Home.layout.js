import React, { useEffect } from "react";
import { useDispatch} from "react-router";

//Components
import Navbar from "../Components/Navbar";
import FoodTab from "../Components/FoodTab";




const HomeLayout = (props) => {
   

   

  return <>
   <div className="container mx-auto lg:px-20">
   <Navbar />
   <FoodTab />
   
    {props.children}
   </div>
   
  </>
};

export default HomeLayout;