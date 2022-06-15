import { fireEvent, render, screen } from "@testing-library/react";
import BookCard from ".";
import theme from "../../Theme";
import { BrowserRouter } from "react-router-dom";
import { Container } from "@mui/material";
const props = {
  bookId: 2,
  url: "2.png",
  bookName: "Bring Your Human",
  bookState: "Finished",
  authorName: "Kathleen Shannon and Emily...",
  timeRead: "13-minute read",
  width: 300,
  inLibrary: false,
};

describe("BookCard", () => {
  test("Render name of the book", () => {
    render(
      <BrowserRouter>
        <BookCard {...props} />
      </BrowserRouter>
    );
    expect(screen.getByText("Bring Your Human")).toBeInTheDocument();
  });

  test("Render author name", () => {
    render(
      <BrowserRouter>
        <BookCard {...props}></BookCard>
      </BrowserRouter>
    );
    const linkElement = screen.getByText("Kathleen Shannon and Emily...");
    expect(linkElement).toBeInTheDocument();
  });

  test("should render same time read text", () => {
    render(
      <BrowserRouter>
        <BookCard {...props}></BookCard>
      </BrowserRouter>
    );
    const linkElement = screen.getByText("13-minute read");
    expect(linkElement).toBeInTheDocument();
  });

  test("should render white background color if inLibrary is true", () => {
    render(
      <BrowserRouter>
        <BookCard {...props} inLibrary={true} bookState={"Finished"}></BookCard>
      </BrowserRouter>
    );
    const linkElement = screen.getByTestId("card");
    expect(linkElement).toHaveStyle("background-color: rgb(255,255,255)");
  });

  test("color rendering", () => {
    render(
      <BrowserRouter>
        <BookCard {...props}></BookCard>
      </BrowserRouter>
    );
    const linkElement = screen.getByTestId("card");
    fireEvent.mouseEnter(linkElement);
    expect(linkElement).toHaveStyle(`background-color: rgb(255,255,255)`);
  });
});
