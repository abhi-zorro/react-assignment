import { Typography } from "@mui/material";
import React from "react";
import Theme from "../../Theme";

const TypographyComponents = (props: any) => {
  return (
    <Typography variant={props.variant} mb={1} mt={1} {...props}>
      {props.children}
    </Typography>
  );
};

export default TypographyComponents;
