import { render, screen } from "@testing-library/react";
import Button from ".";

describe("Button", () => {
  test("Render the Button", () => {
    render(<Button children="Check" />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
