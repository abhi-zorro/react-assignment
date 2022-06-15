import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import url from "2.png";
import Image from ".";
import { BrowserRouter } from "react-router-dom";

describe("Image", () => {
  test("Renders the Images", () => {
    render(
      <BrowserRouter>
        <Image src={url} />
      </BrowserRouter>
    );
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
