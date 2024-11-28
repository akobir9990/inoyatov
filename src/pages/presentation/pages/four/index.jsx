import React, { useState } from "react";

import one from "./img/1.png";
import two from "./img/2.png";
import three from "./img/3.png";
import four from "./img/4.png";
import five from "./img/5.png";
import six from "./img/6.png";
import seven from "./img/7.png";
import eight from "./img/8.png";
import nine from "./img/9.png";
import ten from "./img/10.png";
import eleven from "./img/11.png";
import twelve from "./img/12.png";
import threeTeen from "./img/13.png";
import fourTeen from "./img/14.png";
import fifTeen from "./img/15.png";
import sixteen from "./img/16.png";
import seventeen from "./img/17.png";
import eightteen from "./img/18.png";
import nineteen from "./img/19.png";
import twenty from "./img/20.png";
import twentyOne from "./img/21.png";
import twentyTwo from "./img/22.png";
import twentyThree from "./img/23.png";
import twentyFour from "./img/24.png";
import twentyFive from "./img/25.png";
import twentySix from "./img/26.png";
import twentySeven from "./img/27.png";
import twentyEight from "./img/28.png";
import twentyNine from "./img/29.png";
import thirty from "./img/30.png";
import thirtyOne from "./img/31.png";
import thirtyTwo from "./img/32.png";
import thirtyThree from "./img/33.png";
import thirtyFour from "./img/34.png";
import thirtyFive from "./img/35.png";
import thirtySix from "./img/36.png";
import thirtySeven from "./img/37.png";
import thirtyEight from "./img/38.png";
import thirtyNine from "./img/39.png";
import fourty from "./img/40.png";
import fortyOne from "./img/41.png";
import fortyTwo from "./img/42.png";
import fortyThree from "./img/43.png";
import fortyFour from "./img/44.png";
import fortyFive from "./img/45.png";
import fortySix from "./img/46.png";
import fortySeven from "./img/47.png";
import fortyEight from "./img/48.png";
import fortyNine from "./img/49.png";
import fifty from "./img/50.png";
import fiftyOne from "./img/51.png";
import fiftyTwo from "./img/52.png";
import fiftyThree from "./img/53.png";
import fiftyFour from "./img/54.png";
import fiftyFive from "./img/55.png";
import fiftySix from "./img/56.png";
import fiftySeven from "./img/57.png";
import "./style.css";

import { Button, Container, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { TelegramIcon, TelegramShareButton } from "react-share";

function One() {
  const [goBack, setGoBack] = useState(false);
  const path = "";

  const items = [
    { id: 1, name: one },
    { id: 2, name: two },
    { id: 3, name: three },
    { id: 4, name: four },
    { id: 5, name: five },
    { id: 6, name: six },
    { id: 7, name: seven },
    { id: 8, name: eight },
    { id: 9, name: nine },
    { id: 10, name: ten },
    { id: 11, name: eleven },
    { id: 12, name: twelve },
    { id: 13, name: threeTeen },
    { id: 14, name: fourTeen },
    { id: 15, name: fifTeen },
    { id: 16, name: sixteen },
    { id: 17, name: seventeen },
    { id: 18, name: eightteen },
    { id: 19, name: nineteen },
    { id: 20, name: twenty },
    { id: 21, name: twentyOne },
    { id: 22, name: twentyTwo },
    { id: 23, name: twentyThree },
    { id: 24, name: twentyFour },
    { id: 25, name: twentyFive },
    { id: 26, name: twentySix },
    { id: 27, name: twentySeven },
    { id: 28, name: twentyEight },
    { id: 29, name: twentyNine },
    { id: 30, name: thirty },
    { id: 31, name: thirtyOne },
    { id: 32, name: thirtyTwo },
    { id: 33, name: thirtyThree },
    { id: 34, name: thirtyFour },
    { id: 35, name: thirtyFive },
    { id: 36, name: thirtySix },
    { id: 37, name: thirtySeven },
    { id: 38, name: thirtyEight },
    { id: 39, name: thirtyNine },
    { id: 40, name: fourty },
    { id: 41, name: fortyOne },
    { id: 42, name: fortyTwo },
    { id: 43, name: fortyThree },
    { id: 44, name: fortyFour },
    { id: 45, name: fortyFive },
    { id: 46, name: fortySix },
    { id: 47, name: fortySeven },
    { id: 48, name: fortyEight },
    { id: 49, name: fortyNine },
    { id: 50, name: fifty },
    { id: 51, name: fiftyOne },
    { id: 52, name: fiftyTwo },
    { id: 53, name: fiftyThree },
    { id: 54, name: fiftyFour },
    { id: 55, name: fiftyFive },
    { id: 56, name: fiftySix },
    { id: 57, name: fiftySeven },
  ];
  return (
    <Container sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "20px 0px",
        }}
      >
        {goBack ? (
          <NavLink to={path}>
            <Button
              sx={{ bgcolor: "red", color: "white" }}
              onMouseEnter={() => setGoBack(!goBack)}
              variant="outlined"
            >
              X
            </Button>
          </NavLink>
        ) : (
          <NavLink to="/presentation">
            <Button onMouseLeave={() => setGoBack(!goBack)} variant="contained">
              ortga
            </Button>
          </NavLink>
        )}
        <TelegramShareButton sx={{ borderraius: "10px" }} url={path}>
          <TelegramIcon
            sx={{ borderraius: "10px" }}
            className="rounded w-8"
          ></TelegramIcon>
        </TelegramShareButton>
      </Box>
      {items.map((item) => (
        <img className="img" key={item.id} src={item.name} alt="???" />
      ))}
    </Container>
  );
}

export default One;
