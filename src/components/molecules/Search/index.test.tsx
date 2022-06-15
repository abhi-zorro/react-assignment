import { fireEvent, render, screen } from "@testing-library/react";
import Search from ".";
import { BrowserRouter as Router } from "react-router-dom";

const SearchComponent = (books: any) => {
  return (
    <Router>
      <Search books={books} />
    </Router>
  );
};

describe("Search", () => {
  test("it should render the input box", () => {
    render(<Search />);
    const linkElement = screen.getByPlaceholderText(
      "Search by title or author"
    );
    expect(linkElement).toBeInTheDocument();
  });
});

describe("Search Functionality", () => {
  test("it should render filtered result of length 1 for Bring Your Human to Work search", async () => {
    let response = await fetch("http://localhost:3000/books");
    let books = await response.json();
    render(SearchComponent(books));
    const inputElement = screen.getByPlaceholderText(
      "Search by title or author"
    );
    fireEvent.keyUp(inputElement as HTMLInputElement, {
      target: { value: "Bring Your Human" },
    });
    const filteredData = screen.queryAllByTestId("result");
    expect(filteredData.length).toBe(1);
  });
});
