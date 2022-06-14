import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Box, Paper, ThemeProvider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Typography from "../../Atoms/Typography";
import Icon from "../../Atoms/Icon";
import Image from "../../Atoms/Image";
import axios from "axios";
import theme from "../../Theme/index";
import ProgressBar from "../../Atoms/StatusBar";
import { MoreHoriz } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CardStyles = {
  parent: {
    borderRadius: theme.spacing(2),
    margin: `${theme.spacing(3)} ${theme.spacing(3)} ${theme.spacing(3)}`,
  },
  image: {
    borderRadius: `${theme.spacing(2)} ${theme.spacing(2)} 0 0`,
    width: "100%",
  },
  content: {
    padding: theme.spacing(2),
    paddingBottom: "0px",
  },
  rightIcon: {
    fontSize: theme.spacing(5),
  },
  timeIcon: {
    fontSize: theme.spacing(4),
    marginTop: theme.spacing(0),
    padding: "0 3px 0 16px",
  },
  progress: {
    borderRadius: `0 0 ${theme.spacing(1)} ${theme.spacing(1)}`,
    overflow: "hidden",
  },
  flex: {
    display: "flex",
    alignItems: "center",
  },
  bookName: {
    fontWeight: "bold",
    fontSize: "18px",
    paddingLeft: theme.spacing(4),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  finishedButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: theme.spacing(6),
    borderRadius: `0 0 ${theme.spacing(1)} ${theme.spacing(1)}`,
    width: "100%",
  },
  libraryButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: theme.spacing(10),
    borderTop: "1px solid lightGrey",
    borderRadius: `0 0 ${theme.spacing(1)} ${theme.spacing(1)}`,
    width: "100%",
  },
};

const BookCard = (props: any) => {
  let bookId: number = props.bookId;
  let bookName: string = props.bookName;
  let authorName: string = props.authorName;
  let timeRead: string = props.timeRead;
  let url: string = props.url;
  let bookStatus: boolean = props.inLibrary;
  let currentlyReading: boolean = props.currentlyReading;
  let progress: number = props.progress;
  let bookState: string = props.bookState;

  const [hoverState, setHoverState] = useState(false);

  const hoverStateHandler = () => {
    setHoverState(!hoverState);
  };

  const updateJsonData = (
    currRead: boolean,
    finished: boolean,
    bState: string
  ) => {
    axios.patch(`http://localhost:3000/books/${bookId}`, {
      currentlyReading: currRead,
      finished: finished,
      bookState: bState,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper
        elevation={1}
        style={CardStyles.parent}
        onMouseEnter={hoverStateHandler}
        onMouseLeave={hoverStateHandler}
      >
        <Box style={CardStyles.content}>
          <Link to={`/book-info/${bookId}`}>
            <Image
              component="img"
              src={require(`/src/Images/books/${url}`)}
              style={CardStyles.image}
            ></Image>
          </Link>
          <Typography
            variant1="subtitle1"
            style={CardStyles.bookName}
            sx={{ display: "flex", justifyContent: "start", color: "#03314B" }}
          >
            {bookName}
          </Typography>
          <Typography
            variant1="body1"
            sx={{
              display: "flex",
              justifyContent: "start",
              color: "#6D787E",
              padding: "0 16px",
            }}
          >
            {authorName}
          </Typography>
          <Box
            style={CardStyles.flex}
            sx={{ display: "flex", justifyContent: "start" }}
          >
            <Icon icon={<AccessTimeIcon style={CardStyles.timeIcon} />} />
            <Typography variant1="caption2" color={"#6D787E"}>
              {timeRead}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            {bookStatus ? (
              <Icon
                icon={
                  <MoreHoriz
                    sx={{
                      padding: theme.spacing(0),
                      color: "#6D787E",
                      marginRight: "15px",
                    }}
                    style={CardStyles.rightIcon}
                  />
                }
              />
            ) : (
              ""
            )}
          </Box>
        </Box>
        <Box>
          {bookStatus && bookState !== "" ? (
            <Box
              sx={{ cursor: `${hoverState ? "pointer" : ""}` }}
              onClick={() => {
                if (currentlyReading === true) {
                  updateJsonData(false, true, "Read again");
                } else if (currentlyReading === false) {
                  updateJsonData(true, false, "Finished");
                }
              }}
            >
              <Typography
                variant="button"
                style={CardStyles.finishedButton}
                sx={{
                  color: `${"#0365F2"}`,
                  marginBottom: "0px",
                }}
              >
                {bookState}
              </Typography>
              <ProgressBar width={100} value={progress} />
            </Box>
          ) : (
            <Box
              sx={{
                color: `${!hoverState ? "#0365F2" : "white"}`,
                cursor: `${hoverState ? "pointer" : ""}`,
                backgroundColor: `${hoverState ? "#0365F2" : "white"}`,
                marginTop: "10px",
                paddingTop: "15px",
                paddingBottom: "20px",
              }}
              onClick={() => {
                console.log("inside onclick: bookId" + props.bookId);
                props.libraryHandler(props.cardId, true, false, "Finished");
              }}
              style={CardStyles.libraryButton}
            >
              <Icon variant1="body" icon={<AddIcon />} />
              <Typography variant1="button">Add to library</Typography>
            </Box>
          )}
        </Box>
      </Paper>
    </ThemeProvider>
  );
};
export default BookCard;
