import React, { useState } from "react";

import one from "./img/1.jpg";
import two from "./img/2.jpg";
import three from "./img/3.jpg";
import four from "./img/4.jpg";
import five from "./img/5.jpg";
import six from "./img/6.jpg";
import seven from "./img/7.jpg";
import eight from "./img/8.jpg";
import nine from "./img/9.jpg";
import ten from "./img/10.jpg";
import eleven from "./img/11.jpg";
import twelve from "./img/12.jpg";
import thirteen from "./img/13.jpg";
import fourteen from "./img/14.jpg";
import fifteen from "./img/15.jpg";
import sixteen from "./img/16.jpg";
import seventeen from "./img/17.jpg";
import eighteen from "./img/18.jpg";
import ninenteen from "./img/19.jpg";
import twenty from "./img/20.jpg";
import twentyOne from "./img/21.jpg";
import twentyTwo from "./img/22.jpg";
import twentyThree from "./img/23.jpg";
import twentyFour from "./img/24.jpg";
import twentyFive from "./img/25.jpg";
import twentySix from "./img/26.jpg";
import twentySeven from "./img/27.jpg";
import twentyEight from "./img/28.jpg";
import twentyNine from "./img/29.jpg";
import thirty from "./img/30.jpg";
import thirtyOne from "./img/31.jpg";
import thirtyTwo from "./img/32.jpg";
import thirtyThree from "./img/33.jpg";
import thirtyFour from "./img/34.jpg";
import thirtyFive from "./img/35.jpg";
import thirtySix from "./img/36.jpg";
import thirtySeven from "./img/37.jpg";
import thirtyEight from "./img/38.jpg";
import thirtyNine from "./img/39.jpg";
import fourty from "./img/40.jpg";
import fortyOne from "./img/41.jpg";
import fortyTwo from "./img/42.jpg";
import fortyThree from "./img/43.jpg";
import fortyFour from "./img/44.jpg";
import fortyFive from "./img/45.jpg";

import { Button, Container, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { TelegramIcon, TelegramShareButton } from "react-share";

function One() {
  const [goBack, setGoBack] = useState(false);
  const path = "https://t.me/tashkentInstituteOfFinance/35";

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
    { id: 13, name: thirteen },
    { id: 14, name: fourteen },
    { id: 15, name: fifteen },
    { id: 16, name: sixteen },
    { id: 17, name: seventeen },
    { id: 18, name: eighteen },
    { id: 19, name: ninenteen },
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
          <NavLink to="/tutorial">
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
