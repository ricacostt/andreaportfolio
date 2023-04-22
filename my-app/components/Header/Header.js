import React from "react";
import ToggleButton from "../ToggleButton/ToggleButton";


function Header() {
  return (
    <>
    <div className="flex flex-row justify-center max-w-screen-3xl mx-auto pt-12 ms:pt-20 xsm:px-2  px-8 "
    //  style={{position:'sticky', top: '0px', zIndex: '999'}}
     >
      <div className="logo flex-1" >
      
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="32" height="32" rx="16" fill="#00CDCD" />
        </svg>
      </div>
 
      <div className="toggle">
      <ToggleButton/>
 </div>
 </div>
    </>
  );
}

export default Header;