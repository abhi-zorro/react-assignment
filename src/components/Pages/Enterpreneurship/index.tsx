import { Search } from "@mui/icons-material";
import { Box, CircularProgress, Container } from "@mui/material";
import axios from "axios";
import Input from "../../Atoms/Input";
import Typography from "../../Atoms/Typography";
import Banner from "../../molecules/Banner";
import Card from "../../organisms/BookCard";
import theme from "../../Theme";

const EntrepreneurComp = ({ books, extraData }: any) => {
  console.log(extraData);
  const reading = books.filter((book: { currentlyReading: boolean }) => {
    return book.currentlyReading === true;
  });

  const finishedBook = books.filter((book: { finished: boolean }) => {
    return book.finished === true;
  });

  const libraryHandler = (
    bookId: number,
    currentlyReading: boolean,
    finished: boolean,
    bookState: string
  ) => {
    axios.patch(`http://localhost:3000/books/${bookId}`, {
      currentlyReading: currentlyReading,
      finished: finished,
      bookState: bookState,
    });
  };
  const checkInLibrary = (bookId: any) => {
    let checker = (curr: any) => {
      for (let currData of curr) {
        if (currData.id === bookId) {
          if (currData.bookState === "Read again")
            return { status: true, progress: 100 };
          else return { status: true, progress: 50 };
        }
      }
      return { status: false };
    };
    let inCurrRead = checker(reading);
    return inCurrRead.status ? inCurrRead : checker(finishedBook);
  };

  return (
    <Container sx={{ marginTop: "100px" }}>
      <Banner />
      <Input
        startIcon={<Search />}
        placeholder="Search by title or author"
        sx={{
          display: "flex",
          justifyContent: "start",
          margin: `${theme.spacing(5)} 0px`,
          height: theme.spacing(6),
          width: "100%",
          maxWidth: "658px",
          fontWeight: "bold",
          fontSize: "20px",
          fontFamily: "Cera",
        }}
      />
      <Box>
        {extraData.map((curr: any) => {
          return (
            <Box data-testid="container">
              <Typography
                sx={{
                  fontWeight: "700",
                  marginTop: "75px",
                  display: "flex",
                  justifyContent: "start",
                  color: "#03314B",
                  fontSize: "24px",
                  fontFamily: "Cera",
                }}
              >
                {curr.heading}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  margin: "10px",
                }}
              >
                {!curr.books ? (
                  <CircularProgress data-testid="circular-progress" />
                ) : (
                  curr.books.map((currData: any) => {
                    currData = books[currData.id];
                    const inLibrary = checkInLibrary(currData.id);
                    console.log("library stats: " + inLibrary.status);
                    return (
                      <Card
                        cardId={currData.id}
                        bookId={currData.id}
                        url={currData.url}
                        // imgHeight={240}
                        bookName={currData.name}
                        authorName={currData.authorName}
                        timeRead={currData.timeRead}
                        width={320}
                        inLibrary={inLibrary.status}
                        progress={inLibrary.progress}
                        libraryHandler={libraryHandler}
                      />
                    );
                  })
                )}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};

export default EntrepreneurComp;
