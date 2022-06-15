import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import NavExplorer from ".";
import { BrowserRouter } from "react-router-dom";

describe("NavExplorer", () => {
  test("render Explore by category", () => {
    render(
      <BrowserRouter>
        <NavExplorer />
      </BrowserRouter>
    );
    const linkElement = screen.getByText("Explore by category");
    expect(linkElement).toBeInTheDocument();
  });

  test("should recently added text to be clickable", () => {
    render(
      <BrowserRouter>
        <NavExplorer />
      </BrowserRouter>
    );
    const ButtonElement = screen.getByText(/See recently added titles/);
    fireEvent.click(ButtonElement);
    expect(window.location.pathname).toBe("/");
  });
  test("it should See popular titles to be clickable", () => {
    render(
      <BrowserRouter>
        <NavExplorer />
      </BrowserRouter>
    );
    const ButtonElement = screen.getByText(/See popular titles/);
    fireEvent.click(ButtonElement);
    expect(window.location.pathname).toBe("/");
  });

  test("entrepreneurship page", () => {
    render(
      <BrowserRouter>
        <NavExplorer />
      </BrowserRouter>
    );
    const ButtonElement = screen.getByText(/Entrepreneurship/);
    fireEvent.click(ButtonElement);
    expect(window.location.pathname).toBe("/entrepreneur");
  });

  test("Explore by category text should be blue", () => {
    render(
      <BrowserRouter>
        <NavExplorer />
      </BrowserRouter>
    );
    const linkElement = screen.getByText("Explore by category");
    expect(linkElement).toHaveStyle("color: #116BE9");
  });
  test("Nav Icon count is 21", () => {
    render(
      <BrowserRouter>
        <NavExplorer />
      </BrowserRouter>
    );
    const navIconElements = screen.getAllByTestId("nav");
    expect(navIconElements.length).toBe(21);
  });
});
