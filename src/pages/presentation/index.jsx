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
      themeName:
        '"Maxsus fanlarni o`qitish metodikasi" fanining predmeti va vazifalari',
    },
    {
      id: 2,
      path: "",
      url: "2",
      themeName: "Maxsus fanlarni o`qitish shakllari, metodlari va vositalari",
    },
    {
      id: 3,
      path: "",
      url: "3",
      themeName:
        "Maxsus fanlarni o`qitish jarayonida talabalar mustaqil faoliyatini va mustaqil ta'limini tashkil etish",
    },
    {
      id: 4,
      path: "",
      url: "4",
      themeName: "Maxsus fanlarni o`qitishda texnologik yondashuv",
    },
    {
      id: 5,
      path: "",
      url: "5",
      themeName: "Maxsus fanlarni o`qitishda modul-kredit tizimi",
    },
  ];
  return (
    <Box sx={{ minWidth: 275, minHeight: "100vh" }}>
      {items.map((item) => (
        <div
          sx={{
            margin: "10px 0px",
          }}
          key={item.id}
          className="my-4 rounded-md shadow-inner border-[solid] border-[white] border-[1px] backdrop-blur-md bg-white/30"
        >
          <CardContent>
            <h1 color="text.secondary" gutterBottom className="text-white ">
              {item.id}-ma'ruza
            </h1>
            <Typography variant="h5" component="div">
              {item.themeName}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" size="small">
              <NavLink to={item.url} key={items.id}>
                ochish
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
