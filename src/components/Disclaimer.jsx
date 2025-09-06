import React from "react";

const Disclaimer = () => {
  return (
    <div className="flex gap-3 py-15 px-24 justify-center items-center">
      <div>
        <span className="font-semibold text-red-800">Disclaimer:</span>
      </div>
      <div>
        <p className="text-[17px] font-medium leading-[30px] text-black tracking-wide">
          The brand names and logos have only been used for informative
          purposes; they are the legal properties of their respective brands. If
          you have any concerns regarding the same, feel free to contact us at
          <a className="text-red-500" href="">info@ecomarray.com.</a>
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
