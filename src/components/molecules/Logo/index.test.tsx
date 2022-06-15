import { render, screen } from "@testing-library/react";
import Logo from ".";

describe("Logo", () => {
  test("it should render Logo", () => {
    render(<Logo name="blinklist" />);
    expect(screen.getByText("blinklist")).toBeInTheDocument();
  });
});
