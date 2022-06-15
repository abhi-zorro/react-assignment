import StatusBar from ".";
import { render, screen } from "@testing-library/react";

describe("StatusBar", () => {
  test("it should render progressbar", () => {
    render(<StatusBar value={0} />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
});

describe("StatusBar With Progress", () => {
  test("it should render the progressbar with value", () => {
    render(<StatusBar value={60} />);
    expect(screen.getByRole("progressbar").getAttribute("aria-valuenow")).toBe(
      "60"
    );
  });
});
