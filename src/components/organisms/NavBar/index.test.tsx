import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from ".";

describe("Testing NavBar", () => {
  test("Testing Login button", () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    expect(screen.getByText(/Login/)).toBeInTheDocument();
  });

  test("Testing Explore button", () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    expect(screen.getByText(/Explore/)).toBeInTheDocument();
  });

  test("Testing Library button", () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    expect(screen.getByText(/Library/)).toBeInTheDocument();
  });
});
