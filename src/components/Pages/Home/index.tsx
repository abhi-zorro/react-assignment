import { ThemeProvider } from "@emotion/react";
import { Grid, Typography } from "@mui/material";
import theme from "../../Theme";
import Image from "../../Atoms/Image";
import url from "../../../Images/blinkListTemp.png";

const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        spacing={2}
        sx={{
          paddingLeft: "200px",
          marginTop: "100px",
          alignItems: "normal",
          justifyContent: "center",
        }}
      >
        <Grid item xs={5} sx={{ marginTop: "80px" }}>
          <Typography variant="h6">
            Blinks Labs GmbH, commonly known as Blinkist, is a German
            book-summarizing subscription service based in Berlin, Germany. It
            was founded in 2012 by Holger Seim, Niklas Jansen, Sebastian Klein,
            Tobias Balling and has 18 million users as of 2021.
          </Typography>
        </Grid>
        <Grid item xs={4} sx={{ marginBottom: "150px" }}>
          <Image
            src={url}
            sx={{
              width: "70%",
            }}
          ></Image>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default HomePage;
