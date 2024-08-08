"use client";
import { Grid, ThemeProvider } from "@mui/material";
import PotentialProductBox from "../products/components/potential-product-box";
import theme from "../theme";
import Footer from "@/components/Footer";

const Activity = () => {
  const activityTheme = theme;

  return (
    <ThemeProvider theme={activityTheme}>
      <Grid
        item
        container
        justifyContent={"center"}
        xs={12}
        alignItems={"center"}
        my={3}
      >
        <Grid xs={10} item>
          <PotentialProductBox direction="right" />
          <PotentialProductBox direction="right" />
          <PotentialProductBox direction="right" />
        </Grid>
      </Grid>
      <Footer />
    </ThemeProvider>
  );
};

export default Activity;
