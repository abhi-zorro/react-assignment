import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import EntrepreneurComp from ".";
import { BrowserRouter } from "react-router-dom";

const router = (books: any, extraData: any) => {
  return (
    <BrowserRouter>
      <EntrepreneurComp books={books} extraData={extraData} />
    </BrowserRouter>
  );
};

describe("Entrepreneurship page", () => {
  let response, extraData: any, books: any;
  beforeAll(async () => {
    response = await fetch("http://localhost:3000/extra");
    extraData = await response.json();
    response = await fetch("http://localhost:3000/books");
    books = await response.json();
  });

  test("Render input", () => {
    render(router(books, extraData));
    const bannerElement = screen.getByPlaceholderText(
      "Search by title or author"
    );
    expect(bannerElement).toBeInTheDocument();
  });
  test("it should render the containers matching to data length", async () => {
    render(router(books, extraData));
    const extraElement = await screen.findAllByTestId("container");
    expect(extraElement.length).toBe(extraData.length);
  });
  // test("Check if books are empty", async () => {
  //   render(router(books, extraData));
  //   const circularElement = await screen.findAllByTestId("circular-progress");
  //   expect(circularElement.length).toBe(extraData.length);
  // });
});
