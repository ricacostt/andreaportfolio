import React from "react";

function Button({ text, href }) {
  return (
    <div className="">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <button
          type="button"
          className=" text-textButtonLight dark:text-textPrimaryDark bg-bgButtonLight 
    dark:bg-bgButtonDark text-xsm tracking-normal rounded-3xl 
sm:text-sm sm:tracking-wider font-semibold py-py px-2 h-6"
        >
          {text}
        </button>
      </a>
    </div>
  );
}

export default Button;
