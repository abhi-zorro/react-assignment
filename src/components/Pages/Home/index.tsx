import { ThemeProvider } from "@emotion/react";
import { Box, Grid, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import theme from "../../Theme";
import Image from "../../Atoms/Image";
import Button from "../../Atoms/Button";
import url from "../../../Images/blinkListTemp.png";
import { useAuth0 } from "@auth0/auth0-react";

const HomePage = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

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
        <Grid item xs={4}>
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
