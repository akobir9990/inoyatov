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
import thirteen from "./img/13.png";
import fourteen from "./img/14.png";
import fifteen from "./img/15.png";
import sixteen from "./img/16.png";
import seventeen from "./img/17.png";
import eighteen from "./img/18.png";
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
    { id: 13, name: thirteen },
    { id: 14, name: fourteen },
    { id: 15, name: fifteen },
    { id: 16, name: sixteen },
    { id: 17, name: seventeen },
    { id: 18, name: eighteen },
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
