import React from "react";

const Button = ({ className, buttonName, onClick }) => {
  return (
    <div className="flex justify-center items-center">
      <button
        type="submit"
        onClick={onClick}
        className={`${className} p-2 w-[10rem] rounded-3xl`}
      >
        {buttonName}
      </button>
    </div>
  );
};

export default Button;
