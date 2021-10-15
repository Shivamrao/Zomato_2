import React from "react";
import { useParams } from "react-router-dom";

//Components
import Delivery from "./Delivery";
import Nightlife from "./Nightlife";
import Dining from "./Dining";
const Master = () => {
  const { type } = useParams();

  return (<>
    <div className="m-4">
    {type=== "delivery" && <Delivery /> }
    </div>
    <div className="m-4">
    {type=== "night" && <Nightlife /> }
    </div>
    <div className="m-4">
    {type=== "dining" && <Dining /> }
    </div>
    </>);
};

export default Master;