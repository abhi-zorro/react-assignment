import { Container, Box } from "@mui/material";
import Logo from "../../molecules/Logo";
import url from "./blinkist_logo.png";
import Typography from "../../Atoms/Typography";
import { ThemeProvider } from "@mui/material";
import theme from "../../Theme";

const FooterComponent = () => {
  const data = [
    {
      heading: "Editorial",
      topics: [
        "Book lists",
        "What is Notfication?",
        "What to read next?",
        "Benefits of reading",
      ],
    },
    {
      heading: "Useful links",
      topics: [
        "Pricing",
        "Blinkist business",
        "Gift cards",
        "Blinkist magaine",
      ],
    },
    {
      heading: "Company",
      topics: ["About", "Carrer", "partners", "Code of Conduct"],
    },
  ];
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          height: "270px",
          width: "100%",
          backgroundColor: "#F1F6F4",
          display: "flex",
          position: "sticky",
          top: "100vh",
          padding: "24px 0px",
          marginTop: "24px",
        }}
      >
        <Container sx={{ display: "flex", justifyContent: "start" }}>
          <Box sx={{ marginRight: "150px" }}>
            <Logo height={100} url={url} />
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#0365F2", fontSize: "24px" }}
              data-testid="slogan"
            >
              Big ideas in small packages
              <br />
              Start learning now
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            {data.map((curr) => {
              return (
                <Box
                  sx={{
                    margin: "0px 32px",
                  }}
                  data-testid="topics"
                >
                  <Typography
                    pb={2}
                    sx={{
                      fontWeight: "bold",
                      display: "flex",
                      justifyContent: "start",
                      color: "#03314B",
                      fontSize: "17px",
                    }}
                  >
                    {curr.heading}
                  </Typography>
                  {curr.topics.map((currTopic) => {
                    return (
                      <Typography
                        pb={1}
                        sx={{
                          display: "flex",
                          justifyContent: "start",
                          color: "#6D787E",
                        }}
                      >
                        {currTopic}
                      </Typography>
                    );
                  })}
                </Box>
              );
            })}
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default FooterComponent;
