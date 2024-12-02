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
      themeName: "Laboratoriya mashg'uloti",
    },
  ];
  return (
    <Box
      sx={{
        minWidth: 275,
        minHeight: "calc(100vh-76px)",
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
            <h1 color="text.secondary" gutterBottom>
              laboratoriya
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
