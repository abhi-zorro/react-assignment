import { Box, CircularProgress, Container } from "@mui/material";
import theme from "../../Theme";
import { useEffect, useState } from "react";
import Typography from "../../Atoms/Typography";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Icon from "../../Atoms/Icon";
import Image from "../../Atoms/Image";
import Button from "../../Atoms/Button";
import Tab from "../../molecules/Tabs";
import { ArrowForward } from "@mui/icons-material";
import axios from "axios";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();

  const [book, setBook] = useState<any>(null);

  const libraryStatusHandler = (
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

  useEffect(() => {
    axios.get(`http://localhost:3000/books/${bookId}`).then((res) => {
      setBook(res.data);
    });
  });
  console.log("book params: ", book);

  const tabData = [
    {
      value: "synopsis",
      label: "Synopsis",
    },
    {
      value: "audience",
      label: "Who is it for?",
    },
    {
      value: "author",
      label: "About the author",
    },
  ];
  const [currState, setCurrState] = useState(tabData[0].value);
  const handleState = (state: any) => {
    setCurrState(state);
  };
  const showDescription = () => {
    if (currState === tabData[0].value) {
      return (
        <Typography
          theme={theme}
          sx={{ color: "#03314B", fontWeight: "400", fontSize: "16px" }}
        >
          Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill
          Lazier's essential 1992 business handbook, Beyond Entrepreneurship for
          the
          <br /> entrepreneurs, visionaries, and innovators of today. This new
          edition combines the timeless business advice and strategy of the
          original text,
          <br /> supplemented with cutting-edge insights and case studies
          pertinent to today's business world.
        </Typography>
      );
    } else if (currState === tabData[1].value) {
      return (
        <Typography
          theme={theme}
          sx={{ color: "#03314B", fontWeight: "400", fontSize: "16px" }}
        >
          {book.for}
        </Typography>
      );
    } else if (currState === tabData[2].value) {
      return (
        <Typography
          theme={theme}
          sx={{ color: "#03314B", fontWeight: "400", fontSize: "16px" }}
        >
          {book.about_author}
        </Typography>
      );
    }
  };

  const bookHandler = () => {
    if (book.currentlyReading) {
      return (
        <Button
          data-testid="status-handler"
          children="Finished Reading"
          size="medium"
          variant="contained"
          color="success"
          onClick={() => {
            libraryStatusHandler(false, true, "Read again");
          }}
          sx={{ margin: `0 ${theme.spacing(4)} 0 0`, fontFamily: "Cera" }}
        />
      );
    } else {
      return "";
    }
  };

  return !book ? (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CircularProgress data-testid="circular-progress" />
    </Container>
  ) : (
    <Container sx={{ marginTop: "100px" }}>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "start",
          fontSize: "18px",
          margin: `${theme.spacing(3)} 0`,
          fontFamily: "Cera",
        }}
      >
        Get the key ideas from
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: theme.spacing(5),
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{
                display: "flex",
                justifyContent: "start",
                color: "#03314B",
                fontWeight: "bold",
                marginBottom: theme.spacing(4),
                fontFamily: "Cera",
              }}
            >
              {book.name}
            </Typography>
            <Typography
              sx={{
                marginBottom: theme.spacing(4),
                display: "flex",
                jusstifyContent: "start",
                fontSize: "20px",
                fontWeight: "550",
                fontFamily: "Cera ",
                color: "#03314B",
              }}
            >
              {book.aim}
            </Typography>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "start",
                color: "#6D787E",
                fontWeight: "400",
                marginBottom: theme.spacing(4),
                fontFamily: "Cera",
              }}
            >
              {book.authorName}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Icon
                icon={
                  <AccessTimeIcon
                    sx={{
                      paddingRight: theme.spacing(0),
                      marginTop: theme.spacing(0),
                    }}
                  />
                }
              />
              <Typography
                sx={{
                  color: "#6D787E",
                  fontSize: theme.spacing(4),
                }}
                variant="body"
              >
                {book.timeRead}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              fontWeight: "700",
              display: "flex",
            }}
          >
            <Button
              children="Read now"
              size="medium"
              variant="outlined"
              color="success"
              sx={{ margin: `0 ${theme.spacing(4)} 0 0`, fontFamily: "Cera" }}
            />
            {bookHandler()}
            <Button
              children="Send to Kindle"
              size="medium"
              sx={{
                color: "grey",
                margin: `0 ${theme.spacing(4)} 0 0`,
                fontFamily: "Cera",
              }}
              endIcon={<ArrowForward />}
            />
          </Box>
        </Box>
        <Box sx={{ marginRight: "200px" }}>
          <Image
            height="300"
            width="280"
            src={require(`/src/Images/books/${book.url}`)}
          />
        </Box>
      </Box>
      <Box
        sx={{
          marginBottom: "260px",
          borderBottom: "1px solid lightGrey",
          padding: `${theme.spacing(4)} 0px`,
        }}
      >
        <Tab stateHandler={handleState} tabData={tabData} />
        <Box sx={{ height: "100px" }}>{showDescription()}</Box>
      </Box>
    </Container>
  );
};

export default BookDetails;
