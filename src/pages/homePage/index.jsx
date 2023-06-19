import React from "react";
import { Box, Container } from "@mui/material";
import "./style.css";
import logo from "../../assets/ava/logo1.jpeg";
function index() {
  return (
    <Container className="py-[20px]">
      <Box className=" p-2 md:p-5 flex flex-col items-center py-10 text-white backdrop-blur-md bg-white/30 rounded-lg ">
        <h1 className="md:text-[30px] text-[15px] p-5 text-center">
          "Toshkent irrigatsiya va qishloq xo'jaligini mexanizatsiyalashtirish
          muhandislari instituti "Milliy tadqiqot universiteti
        </h1>
        <h2 className="md:text-[30px] text-[20px] font-bold ">
          Ismailova Zuxra Karabayevna
        </h2>
        <h2 className="md:text-[30px] text-[20px] font-bold ">
          Mustafoyeva Durdona Asilovna
        </h2>

        <h1 className="md:text-[50px] text-[35px] my-5 text-center font-bold">
          Maxsus fanlarni o`qitish metodikasi
        </h1>
        {/* <h2 className="md:text-3xl text-4 mb-4"></h2> */}
        <h3 className="">"TIQXMMI" MTU talabalari uchun</h3>
        <img
          className="py-7 md:w-[400px] w-[200px] text-center"
          src={logo}
          alt="logo"
        />

        <p className="font-bold">Ташкент-2023 г.</p>
      </Box>
    </Container>
  );
}

export default index;
