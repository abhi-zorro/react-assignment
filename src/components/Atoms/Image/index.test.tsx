import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import url from "../../../Images/2.png";
import Image from ".";

describe("Image", () => {
  test("Renders the Images", () => {
    render(<Image src={url} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
