import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../src/components/Theme";

test("renders the App Component", () => {
  render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
  expect(screen).toMatchSnapshot();
});
