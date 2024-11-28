import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TelegramIcon, TelegramShareButton } from "react-share";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";

export default function BasicCard() {
  const items = [
    {
      id: 1,
      path: "",
      url: "1",
      themeName: "1-topshiriq",
    },
    {
      id: 2,
      path: "",
      url: "2",
      themeName: "2-topshiriq",
    },
    {
      id: 3,
      path: "",
      url: "3",
      themeName: "3-topshiriq",
    },
    {
      id: 4,
      path: "",
      url: "4",
      themeName: "4-topshiriq",
    },
    {
      id: 5,
      path: "",
      url: "5",
      themeName: "5-topshiriq",
    },
    {
      id: 6,
      path: "",
      url: "6",
      themeName: "6-topshiriq",
    },
    {
      id: 7,
      path: "",
      url: "7",
      themeName: "7-topshiriq",
    },
    {
      id: 8,
      path: "",
      url: "8",
      themeName: "8-topshiriq",
    },
    {
      id: 9,
      path: "",
      url: "9",
      themeName: "9-topshiriq",
    },
    {
      id: 10,
      path: "",
      url: "10",
      themeName: "10-topshiriq",
    },
    {
      id: 11,
      path: "",
      url: "11",
      themeName: "11-topshiriq",
    },
    {
      id: 12,
      path: "",
      url: "12",
      themeName: "12-topshiriq",
    },
  ];
  return (
    <Box
      sx={{
        minWidth: 275,
        minHeight: "calc(100vh-56px)",
        paddingBottom: "10px",
      }}
    >
      {items.map((item) => (
        <div
          sx={{
            margin: "10px 0px",
          }}
          key={item.id}
          className="my-4 rounded-md shadow-inner border-[solid] border-[white] border-[1px] backdrop-blur-md bg-white/30"
        >
          <CardContent>
            <h1 className="" color="text.secondary" gutterBottom>
              Amaliy topshiriq
            </h1>
            <Typography variant="h5" component="div">
              {item.themeName}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" size="small">
              <NavLink to={item.url} key={items.id}>
                открыть
              </NavLink>
            </Button>

            <TelegramShareButton url={item.path}>
              <TelegramIcon className="rounded w-8"></TelegramIcon>
            </TelegramShareButton>
          </CardActions>
        </div>
      ))}
    </Box>
  );
}
