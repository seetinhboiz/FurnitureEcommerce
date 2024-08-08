"use client";
import { items } from "@/app/static";
import { ThemeProvider } from "@emotion/react";
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Grid,
    Stack,
    Typography,
} from "@mui/material";
import { CSSProperties } from "react";
import Carousel from "react-material-ui-carousel";
import theme from "../theme";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function RecruitmentComponent() {
  const recruitmentTheme = theme;

  const sliderItems = 3;

  const styleProductTitle: CSSProperties = {
    fontFamily: "Inika",
    fontSize: "20px",
    fontWeight: "bold",
  };

  const showProductsCarousel = () => {
    const renderItems = [];
    for (let i = 0; i < items.length; i += sliderItems) {
      renderItems.push(
        <Box
          key={i}
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Grid container spacing={2} justifyContent="center">
            {items.slice(i, i + sliderItems).map((x: any) => (
              <Grid
                item
                xs={4}
                key={x.name}
                display="flex"
                justifyContent="center"
              >
                <Card variant="outlined">
                  <CardMedia
                    component="img"
                    height="300"
                    image={x.img}
                    alt={x.alt}
                  />
                  <CardContent>
                    <Stack direction={"row"} justifyContent={"center"}>
                      <Typography sx={styleProductTitle}>{x.name}</Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      );
    }
    return renderItems;
  };

  return (
    <ThemeProvider theme={recruitmentTheme}>
      <Grid xs={12} sx={{ minHeight: "30vh" }}>
        <Typography
          variant="h4"
          component="h2"
          textAlign={"center"}
          color={recruitmentTheme.palette.primary.main}
          fontFamily={"Inika"}
          fontWeight={"bold"}
          pt={2}
        >
          ĐÔI LỜI GIỚI THIỆU
        </Typography>
      </Grid>
      <Grid item container xs={12} justifyContent={"center"} mb={10}>
        <Grid
          item
          container
          xs={10}
          sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 2 }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography
            variant="h4"
            component="h2"
            textAlign={"center"}
            color={recruitmentTheme.palette.primary.contrastText}
            fontFamily={"Inika"}
            fontWeight={"bold"}
            pt={2}
          >
            THÔNG TIN TUYỂN DỤNG
          </Typography>
          <Carousel
            NextIcon={<ArrowForwardIosIcon />}
            PrevIcon={<ArrowBackIosNewIcon />}
            sx={{ width: 1, p: 5 }}
          >
            {showProductsCarousel().map((x) => x)}
          </Carousel>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
