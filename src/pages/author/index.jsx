import * as React from "react";
import CardContent from "@mui/material/CardContent";
import mustafoyeva from "../../assets/images/mustafoyeva.jpeg";
import ismailova from "../../assets/images/ismailova.jpeg";

export default function MediaCard() {
  return (
    <div className="min-h-[100vh]">
      <h1 className="text-4xl text-white font-bold text-center my-10">
        Dasturiy ta'minot mualliflari
      </h1>
      <div className="flex flex-col p-7 items-center sm:flex-row my-7 backdrop-blur-md bg-white/30 rounded-lg">
        <div>
          <img
            className=" max-w-[150px] rounded-lg"
            src={ismailova}
            alt="Tadjibekova Dilnoza Baxtiyarovna"
          />
        </div>

        <CardContent className="sm:text-4xl">
          <h1 className="text-[30px] font-bold">Ismailova Zuxra Karabayevna</h1>
          <h2 className="text-[20px]">
            Pedagogika fanlari doktori, professor <br />
            z.ismailova@tiiame.uz
          </h2>
        </CardContent>
      </div>
      <div className="flex flex-col p-7 items-center sm:flex-row my-7 backdrop-blur-md bg-white/30 rounded-lg ">
        <div>
          <img
            className=" max-w-[150px] rounded-lg"
            src={mustafoyeva}
            alt="Mustafoyeva Durdona Asilovna
            "
          />
        </div>

        <CardContent className="sm:text-4xl">
          <h1 className="text-[30px] font-bold">
            Mustafoyeva Durdona Asilovna
          </h1>
          <h2 className="text-[20px]">
            педагогика фанлари буйича фалсафа доктори, PhD <br />
            d.mustafoyeva@tiiame.uz
          </h2>
        </CardContent>
      </div>
    </div>
  );
}
