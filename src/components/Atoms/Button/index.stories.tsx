import React from "react";
import ButtonComponent from ".";
import { ThemeProvider } from "@emotion/react";
import theme from "../../Theme";

export default {
  title: "components/atoms/ButtonComponent",
  component: ButtonComponent,
};

export const Primary = () => (
  <ThemeProvider theme={theme}>
    <ButtonComponent variant="contained" color="primary">
      Primary
    </ButtonComponent>
  </ThemeProvider>
);
export const Secondary = () => (
  <ThemeProvider theme={theme}>
    <ButtonComponent variant="contained" color="secondary">
      Secondary
    </ButtonComponent>
  </ThemeProvider>
);
export const Success = () => (
  <ThemeProvider theme={theme}>
    <ButtonComponent variant="contained" color="primary">
      Primary
    </ButtonComponent>
  </ThemeProvider>
);
