import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Tabs from ".";
import tabTheme from "../../Theme";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";

const tabData = [
  {
    value: "category",
    label: "Explore by category",
  },
  {
    value: "recent",
    label: "See recently added titles",
  },
];

describe("Just tabs", () => {
  test("it should render the tabs data", () => {
    render(<Tabs tabData={tabData} />);
    expect(screen.getAllByTestId("tabsTest").length).toBe(1);
  });
});

describe("Tab renderer", () => {
  test("it should render the 2 tabs for 2 length data", () => {
    render(
      //   <BrowserRouter>
      // <ThemeProvider theme={tabTheme}>
      <Tabs tabData={tabData} />
      // </ThemeProvider>
      //   </BrowserRouter>
    );
    expect(screen.getAllByTestId(/tabTest-/).length).toBe(2);
  });
});

const mockCallback = jest.fn();

it("this should have green indicator color for currently reading tab by default", () => {
  render(
    <BrowserRouter>
      <ThemeProvider theme={tabTheme}>
        <Tabs tabData={tabData} stateHandler={mockCallback} />
      </ThemeProvider>
    </BrowserRouter>
  );
  const tabsElement = screen.getByTestId("tabTest-recent");
  fireEvent.click(tabsElement);
});
