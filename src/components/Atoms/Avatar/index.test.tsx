import { render, screen } from "@testing-library/react";
import Avatar from ".";

describe("Avatar", () => {
  test("Render User Avatar", () => {
    render(<Avatar children="A" />);
    expect(screen.getByText("A")).toBeInTheDocument();
  });
});
