import React from "react";
import logo from "../../assets/logo.png";

function index() {
  return (
    <div className="w-[100%] h-[100vh] ">
      <div className="flex flex-col md:flex-row justify-center items-center backdrop-blur-md bg-white/30 rounded lg ">
        <div className="mt-5 p-2 text-[20px] font-bold flex flex-wrap justify-center">
          <img className="w-[200px]" src={logo} alt="logo" />
          <h1>Suv ta'minoti</h1>
        </div>
        <div className="m-2 p-10 md:mt-[20px] mt-[70px] text-xl">
          Ushbu dasturiy ta'minot talabalarga "Suv ta'minoti" fani bo'yicha
          bilimlarini xohlagan joyda, xohlagan vaqtda, internet tarmog'iga kira
          oluvchi xohalgan qurilma orqali oshirishlariga imkoniyat yaratadi.
        </div>
      </div>
    </div>
  );
}

export default index;
