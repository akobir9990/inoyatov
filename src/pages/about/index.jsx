import React from "react";
import logo from "../../assets/logo1.png";

function index() {
  return (
    <div className="w-[100%] h-[100vh] ">
      <div className="flex flex-col md:flex-row justify-center items-center backdrop-blur-md bg-white/30 rounded lg ">
        <div className="mt-5 p-2 text-[20px] font-bold flex ">
          <img className="w-[100%]" src={logo} alt="logo" />
        </div>
        <div className="m-2 p-10 md:mt-[20px] mt-[70px] text-white">
          Ushbu dasturiy ta'minot talabalarga ushbu fan bo'yicha bilimlarini
          xohlagan joyda, xohlagan vaqtda, internet tarmog'iga kira oluvchi
          xohalgan qurilma orqali oshirishlariga imkoniyat yaratadi.
        </div>
      </div>
    </div>
  );
}

export default index;
