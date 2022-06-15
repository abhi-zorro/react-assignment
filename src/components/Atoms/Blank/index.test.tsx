import { render, screen } from "@testing-library/react";
import Blank from ".";

describe("Blank", () => {
  test("Render blank bg component", () => {
    render(<Blank />);
    expect(screen.getByText("A")).toBeInTheDocument();
  });
});
