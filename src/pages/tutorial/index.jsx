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
      path: "https://t.me/tashkentInstituteOfFinance/31",
      url: "1",
      themeName: "РЕФОРМИРОВАНИЕ ФИНАНСОВ ХОЗЯЙСТВУЮЩИХ СУБЪЕКТОВ",
    },
    {
      id: 2,
      path: "https://t.me/tashkentInstituteOfFinance/32",
      url: "2",
      themeName: "ФИНАНСОВЫЕ РЕСУРСЫ ХОЗЯЙСТВУЮЩИХ СУБЪЕКТОВ",
    },
    {
      id: 3,
      path: "https://t.me/tashkentInstituteOfFinance/33",
      url: "3",
      themeName:
        "ФИНАНСОВЫЕ АСПЕКТЫ КРУГООБОРОТА ОСНОВНОГО И ОБОРОТНОГО КАПИТАЛА",
    },
    {
      id: 4,
      path: "https://t.me/tashkentInstituteOfFinance/34",
      url: "4",
      themeName: "ПРОИЗВОДСТВЕННЫЕ ЗАТРАТЫ И ПРИБЫЛЬ ХОЗЯЙСТВУЮЩИХ СУБЪЕКТОВ",
    },
    {
      id: 5,
      path: "https://t.me/tashkentInstituteOfFinance/35",
      url: "5",
      themeName:
        "ОСНОВЫ ЦЕНОВОЙ ПОЛИТИКИ И ЦЕНООБРАЗОВАНИЯ, ФИНАНСОВЫЕ АСПЕКТЫ МАРКЕТИНГОВОЙ СТРАТЕГИИ ХОЗЯЙСТВУЮЩИХ СУБЪЕКТОВ",
    },
    {
      id: 6,
      path: "https://t.me/tashkentInstituteOfFinance/36",
      url: "6",
      themeName: "ФИНАНСЫ МАЛОГО БИЗНЕСА",
    },
    {
      id: 7,
      path: "https://t.me/tashkentInstituteOfFinance/37",
      url: "7",
      themeName: "ФИНАНСИРОВАНИЕ СТАРТАПОВ",
    },
    {
      id: 8,
      path: "https://t.me/tashkentInstituteOfFinance/38",
      url: "8",
      themeName: "ФУНКЦИИ ФИНАНСОВОЙ ОТЧЕТНОСТИ И ИХ ВИДЫ",
    },
    {
      id: 9,
      path: "https://t.me/tashkentInstituteOfFinance/39",
      url: "9",
      themeName: "Разичия в финансовой оРАЗЛИЧИЯ В ФИНАНСОВОЙ ОТЧЕТНОСТИ",
    },
    {
      id: 10,
      path: "https://t.me/tashkentInstituteOfFinance/40",
      url: "10",
      themeName:
        "ИСПОЛЬЗОВАНИЕ ФИНАНСОВЫХ КОЭФФИЦИЕНТОВ В ФИНАНСОВОЙ ОТЧЕТНОСТИ",
    },
    {
      id: 11,
      path: "https://t.me/tashkentInstituteOfFinance/41",
      url: "11",
      themeName:
        "ФИНАНСИРОВАНИЕ ИНВЕСТИЦИОННЫХ ПРОГРАММ ДИВЕРСИФИКАЦИИ И МОДЕРНИЗАЦИИ ПРОИЗВОДСТВА",
    },
    {
      id: 12,
      path: "https://t.me/tashkentInstituteOfFinance/42",
      url: "12",
      themeName:
        "ФИНАНСОВАЯ УСТОЙЧИВОСТЬ ХОЗЯЙСТВУЮЩИХ СУБЪЕКТОВ: ОЦЕНКА, ПОКАЗАТЕЛИ, ПУТИ ПОВЫШЕНИЯ",
    },
    {
      id: 13,
      path: "https://t.me/tashkentInstituteOfFinance/43",
      url: "13",
      themeName: "ФИНАНСОВАЯ ОТЧЕТНОСТЬ И ФИНАНСОВОЕ ПЛАНИРОВАНИЕ",
    },
    {
      id: 14,
      path: "https://t.me/tashkentInstituteOfFinance/44",
      url: "14",
      themeName: "СОДЕРЖАНИЕ",
    },
    {
      id: 15,
      path: "https://t.me/tashkentInstituteOfFinance/45",
      url: "15",
      themeName: "ГЛОССАРИЙ",
    },
    {
      id: 16,
      path: "https://t.me/tashkentInstituteOfFinance/46",
      url: "16",
      themeName: "Список литератур",
    },
  ];
  return (
    <Box sx={{ minWidth: 275 }}>
      {items.map((item) => (
        <div
          sx={{
            margin: "10px 0px",
          }}
          key={item.id}
          className="my-4 roundedn-md rounded  border-[solid] border-[white] border-[1px] backdrop-blur-md bg-white/30"
        >
          <CardContent>
            <h1 className="text-white" color="text.secondary" gutterBottom>
              {item.id}-лекция
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
