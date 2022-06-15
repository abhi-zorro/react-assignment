import { render, screen } from "@testing-library/react";
import Banner from ".";

describe("Banner", () => {
  test("banner is the Heading", () => {
    render(<Banner />);
    expect(screen.getByTestId("banner1")).toBeInTheDocument();
  });
});
