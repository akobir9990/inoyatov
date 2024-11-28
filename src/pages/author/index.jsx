import * as React from "react";
import CardContent from "@mui/material/CardContent";
import inoyatov from "../../assets/images/inoyatov.png";

export default function MediaCard() {
  return (
    <div className="min-h-[100vh]">
      <h1 className="text-4xl font-bold text-center my-10">
        Dasturiy ta'minot mualliflari
      </h1>
      <div className="flex flex-col p-7 items-center sm:flex-row my-7 backdrop-blur-md bg-white/30 rounded-lg ">
        <div>
          <img
            className=" max-w-[150px] rounded-lg"
            src={inoyatov}
            alt="Mustafoyeva Durdona Asilovna
            "
          />
        </div>
        <CardContent className="sm:text-4xl">
          <h1 className="text-[30px] font-bold">
            Inoyatov Ikrom Shaxrilloyevich
          </h1>
          <h2 className="text-[20px]">
            “TIQXMMI” MTU Buxoro tabiiy resurslarini boshqarish instituti <br />
            “Irrigatsiya va melioratsiya” kafedrasi katta o’qituvchisi
            <br />
            I.ikrom197531@gmail.com
          </h2>
        </CardContent>
      </div>
    </div>
  );
}
