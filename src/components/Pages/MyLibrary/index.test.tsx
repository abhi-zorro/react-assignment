/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import MyLibrary from ".";
import { BrowserRouter } from "react-router-dom";

const router = (reading: any, finished: any) => {
  return (
    <BrowserRouter>
      <MyLibrary reading={reading} finished={finished} />
    </BrowserRouter>
  );
};

describe("My Library", () => {
  let response, data, apiResponse: any, reading: any, finished: any;
  beforeAll(async () => {
    response = await fetch("http://localhost:3000/extra");
    data = await response.json();
    response = await fetch("http://localhost:3000/books");
    apiResponse = await response.json();
    reading = apiResponse.filter(
      (book: { currentlyReading: boolean }) => book.currentlyReading === true
    );
    finished = apiResponse.filter(
      (book: { finished: boolean }) => book.finished === true
    );
  });
  test("Loading Icon if books not present", async () => {
    let books: any = [],
      finished: any = [];
    render(router(books, finished));
    const linkElement = screen.getByTestId("circular-progress");
    expect(linkElement).toBeInTheDocument();
  });
  test(" books are available", async () => {
    render(router(reading, finished));
    const linkElement = screen.queryByTestId("circular-progress");
    expect(linkElement).not.toBeInTheDocument();
  });
  test("Render finished books", async () => {
    render(router(reading, finished));
    const tabsElement = screen.getByTestId(/tabTest-finished/);
    fireEvent.click(tabsElement);
    const progressBarElement = await screen.findAllByRole("progressbar");
    expect(progressBarElement.length).toBe(finished.length);
  });
  test("should render same no of currently books", async () => {
    render(router(reading, finished));
    const tabsElement = screen.getByTestId(/tabTest-reading/);
    fireEvent.click(tabsElement);
    const progressBarElement = await screen.findAllByRole("progressbar");
    expect(progressBarElement.length).toBe(reading.length);
  });
});
