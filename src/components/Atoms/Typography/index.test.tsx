import { render, screen } from "@testing-library/react";
import TypographyComponents from ".";

describe("Typography", () => {
  test("text renderer", () => {
    render(<TypographyComponents children="Hello" variant="h5" />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });
});
