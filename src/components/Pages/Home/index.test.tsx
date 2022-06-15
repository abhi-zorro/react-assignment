import { render, screen } from "@testing-library/react";
import Home from ".";

describe("Home page", () => {
  test("Display Only Homepage", () => {
    render(<Home />);
    expect(screen.getByText(/Blinkist/)).toBeInTheDocument();
  });
});
