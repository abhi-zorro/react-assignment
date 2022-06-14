import { useState } from "react";
import { Container, Box } from "@mui/material";
import Typography from "../../Atoms/Typography";
import BookTabs from "../../molecules/Tabs";
import Card from "../../organisms/BookCard";
import CircularProgress from "@mui/material/CircularProgress";
import Theme from "../../Theme";

const MyLibrary = ({ reading, finished }: any) => {
  const tabs = [
    {
      value: "reading",
      label: "Currently reading",
    },
    {
      value: "finished",
      label: "Finished",
    },
  ];

  const [currState, setCurrState] = useState(tabs[0].value);
  const booksTabStateHandler = (state: string) => {
    setCurrState(state);
  };

  const cards = () => {
    if (reading.length === 0 && finished.length === 0) {
      return <CircularProgress data-testid="circular-progress" />;
    } else {
      if (currState === "reading") {
        if (reading.length > 0) {
          return reading.map((curr: any) => {
            return (
              <Card
                bookId={curr.id}
                mykey={curr.id}
                imgHeight={240}
                url={curr.url}
                bookName={curr.name}
                authorName={curr.authorName}
                timeRead={curr.timeRead}
                width={280}
                inLibrary={true}
                progress={50}
                currentlyReading={curr.currentlyReading}
                bookState={curr.bookState}
              />
            );
          });
        } else {
          console.log("inside else");
          <Typography theme={Theme} mb={4}>
            {`nope`}
          </Typography>;
        }
      } else if (currState === "finished") {
        return finished.map((curr: any) => {
          return (
            <Card
              bookId={curr.id}
              mykey={curr.id}
              imgHeight={240}
              url={curr.url}
              bookName={curr.name}
              authorName={curr.authorName}
              timeRead={curr.timeRead}
              width={280}
              inLibrary={true}
              progress={100}
              currentlyReading={curr.currentlyReading}
              bookState={curr.bookState}
            />
          );
        });
      }
    }
  };

  return (
    <Container
      sx={{ paddingTop: "50px", marginBottom: "100px", marginTop: "50px" }}
    >
      <Typography
        variant1="h5"
        theme={Theme}
        mb={4}
        sx={{
          display: "flex",
          justifyContent: "start",
          color: "#03314B",
          fontSize: "36px",
        }}
      >
        My Library
      </Typography>
      <BookTabs statusHandler={booksTabStateHandler} tabData={tabs} />
      <Box display={"flex"} mt={4} sx={{ flexWrap: "wrap" }}>
        {cards()}
      </Box>
    </Container>
  );
};

export default MyLibrary;
