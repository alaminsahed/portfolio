import React from "react";
 import { useEffect, useRef } from "react";
import "./CSS/HeaderMain.css";
// import $ from "jquery";
// import banner from '../image/background.png';
// import WaterWave from "react-water-wave";

const HeaderMain = () => {
//   const waterEffect = useRef();

  useEffect(() => {
    // const $el = $(waterEffect.current);
    // //console.log($el)
    // $el.ripples();
  }, []);

// <WaterWave
// imageUrl={banner}
// >

// </WaterWave>

  return (
    <div className="header" id="header">
    <h1>header</h1>
    </div>
  );
};

export default HeaderMain;
