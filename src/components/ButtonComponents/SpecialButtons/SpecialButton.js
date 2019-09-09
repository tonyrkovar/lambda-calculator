import React from "react";
import { specials } from "../../../data";

const SpecialButton = ({props}) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className='specialButton'>{props}</button>
    </>
  );
};

export default SpecialButton;
