import AppFooter from ".";
import { render, screen } from "@testing-library/react";

describe("AppFooter", () => {
  test("renders Footer", () => {
    render(<AppFooter />);

    expect(screen.getByTestId("topics")).toBeInTheDocument();
  });
});
