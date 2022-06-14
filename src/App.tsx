import { useEffect, useState } from "react";
import "./App.css";
import BookDetail from "./components/Pages/BookDetails";
import Header from "./components/organisms/NavBar";
import image from "./components/organisms/NavBar/blinkListLogo.png";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyLibrary from "./components/Pages/MyLibrary";
import axios from "axios";
import { Box, CircularProgress, Container } from "@mui/material";
import Footer from "./components/organisms/AppFooter";
import Enterpreneur from "./components/Pages/Enterpreneurship";
import Explorer from "./components/organisms/NavExplorer";
import Blank from "./components/Atoms/Blank";
import Home from "./components/Pages/Home";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();
  const [books, setBooks] = useState<any>(null);
  const [exploreOption, setExploreOption] = useState<boolean>(false);
  const [extraData, setExtraData] = useState<any>(null);
  const handleExploreMenu = () => {
    setExploreOption(!exploreOption);
    setBlankStatus(!exploreOption);
  };
  const [reading, setReading] = useState<any>(null);
  const [finished, setFinished] = useState<any>(null);
  const [blankStatus, setBlankStatus] = useState<boolean>(false);

  console.log("isAuthenticated: " + isAuthenticated);

  const showExplore = () => {
    if (exploreOption) {
      if (isAuthenticated) {
        return (
          <Explorer
            handleExploreMenu={handleExploreMenu}
            exploreOption={exploreOption}
          />
        );
      } else {
        return "";
      }
    }
  };

  const showBlank = () => {
    if (blankStatus) {
      if (isAuthenticated) {
        return (
          <Blank
            handleExploreMenu={handleExploreMenu}
            exploreOption={exploreOption}
          />
        );
      } else {
        return "";
      }
    }
  };

  useEffect(() => {
    axios.get(`http://localhost:3000/books`).then((res) => {
      const books1 = res.data;
      setBooks(books1);
      const reading1 = books.filter(
        (book: { currentlyReading: boolean }) => book.currentlyReading === true
      );
      setReading(reading1);

      const finished1 = books.filter(
        (book: { finished: boolean }) => book.finished === true
      );
      setFinished(finished1);
    });

    axios.get(`http://localhost:3000/extra`).then((result) => {
      const extra = result.data;
      setExtraData(extra);
    });
  }, [books]);

  return !books ? (
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
    <Box sx={{ position: "absolute", width: "100%" }}>
      <Router>
        <Header
          url={image}
          handleExploreMenu={handleExploreMenu}
          exploreOption={exploreOption}
        />
        <Box sx={{ position: "absolute", width: "100%" }}>
          <Routes>
            <Route
              path="/entrepreneur"
              element={<Enterpreneur books={books} extraData={extraData} />}
            />
            <Route path="book-info/:bookId" element={<BookDetail />} />
            <Route
              path="/library"
              element={<MyLibrary reading={reading} finished={finished} />}
            />
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
          {showExplore()}
        </Box>
      </Router>
      {showBlank()}
    </Box>
  );
}

export default App;
