import React from "react";
import { Box, Container } from "@mui/material";
import "./style.css";
function index() {
  return (
    <Container className="min-h-[calc(100vh-56px)]">
      <Box className="relative p-2 md:p-5 flex flex-col gap-10 items-center py-10 backdrop-blur-md bg-white/30 rounded-lg min-h-[90vh]">
        <h1 className="md:text-[30px] text-[15px] text-center p-0">
          “TIQXMMI” MTU Buxoro tabiiy resurslarini boshqarish instituti <br />
          “Irrigatsiya va melioratsiya” kafedrasi
        </h1>
        <h2 className="md:text-[30px] text-[20px] font-bold ">
          Inoyatov Ikrom Shaxrilloyevich
        </h2>

        <h1 className="md:text-[50px] text-[35px] my-5 text-center font-bold">
          Suv ta'minoti
        </h1>
        <h3 className="text-center leading-6">
          “TIQXMMI” MTU Buxoro tabiiy resurslarini boshqarish instituti <br />
          60812900 - "Suv ta’minoti muhandislik tizimi" yo'nalishi uchun
        </h3>

        <p className="absolute font-bold bottom-3">Buxoro-2024</p>
      </Box>
    </Container>
  );
}

export default index;
