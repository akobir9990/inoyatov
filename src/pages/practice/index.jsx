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
        '"Maxsus fanlarni o`qitish metodikasi" fanining predmeti, maqsadi va vazifalari',
    },
    {
      id: 2,
      path: "",
      url: "2",
      themeName: "Ma'ruza darslarini tashkil etish metodikasi",
    },
    {
      id: 3,
      path: "",
      url: "3",
      themeName: "Amaliy mashg'ulotlarni tashkil etish va o'tkazish metodikasi",
    },
    {
      id: 4,
      path: "",
      url: "4",
      themeName:
        "Mustaqil ta'lim va uni tashkil etish metodikasi. Maxsus fanlarni kurs ishi(loyihasi)ni tayyorlash metodikasi",
    },
    {
      id: 5,
      path: "",
      url: "5",
      themeName:
        "Maxsus fanlarni o'qitish jarayonida talabalarning bilim ko'nikma ",
    },
    {
      id: 6,
      path: "",
      url: "6",
      themeName: "Maxsus fanlarni o'qitish jarayonida texnologik yondashuv",
    },
    {
      id: 7,
      path: "",
      url: "7",
      themeName: "Maxsus fanlarni o'qitishda interfaol texnologiyalar",
    },
    {
      id: 8,
      path: "",
      url: "8",
      themeName: "Maxsus fanlarni o'qitishda keys-stadi metodi",
    },
    {
      id: 9,
      path: "",
      url: "9",
      themeName: "Maxsus fanlarni o'qitishda o'qitishda loyiha metodi",
    },
    {
      id: 10,
      path: "",
      url: "10",
      themeName: "Maxsus fanlarni o'qitishda modulli yondashuv",
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
            <h1 className="" color="text.secondary" gutterBottom>
              {item.id} - amaliy mashg'ulot
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
