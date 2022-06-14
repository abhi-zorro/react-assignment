import React from "react";
import { Button, ButtonProps } from "@mui/material";

interface Props extends ButtonProps {}

const ButtonComponent = (props: Props) => {
  return (
    <Button
      fullWidth={props.fullWidth}
      color={props.color}
      variant={props.variant}
      {...props}
      size={props.size}
      sx={props.sx}
    >
      {props.children}
    </Button>
  );
};

export default ButtonComponent;
