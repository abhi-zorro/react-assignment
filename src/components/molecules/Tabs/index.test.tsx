import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Tabs from ".";
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
    render(<Tabs tabData={tabData} />);
    expect(screen.getAllByTestId(/tabTest-/).length).toBe(2);
  });
});
