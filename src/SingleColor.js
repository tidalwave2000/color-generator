import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
	// setup state variables
  console.log(hexColor);
	const [alert, setAlert] = useState(false);
	// converting the rgb value to an string
  const bcg = rgb.join(",");
  // use hex if you are going to use the function
  const hex = rgbToHex(...rgb);
  // use hexValue if you are going to get your value from the library
  const hexValue = `#${hexColor}`;
  console.log(bcg);
	return (
    <article
      // change the color of the letters if index os greater 9 to a lighter color
      className={`color ${index > 9 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}>
      {/* display the color weight value */}
      <p className="percent-value">{weight}%</p>
      {/* display the the color hex value */}
      <p className="color-value">{hexValue} </p>
      
    </article>
	);
};

export default SingleColor;
