import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const NavIcon = (props: any) => {
  const [hoverState, setHoverState] = useState(false);

  const hoverStateHandler = () => {
    setHoverState(!hoverState);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        width: "auto",
        margin: "10px 10px 5px 0px",
      }}
    >
      {props.leftIcon ? props.leftIcon : ""}
      <Typography
        pl={1}
        onMouseEnter={hoverStateHandler}
        onMouseLeave={hoverStateHandler}
        sx={{
          color: `${hoverState ? "#0365F2" : "#6D787E"}`,
          fontFamily: "Cera",
        }}
      >
        {props.label}
      </Typography>
      {props.rightIcon ? props.rightIcon : ""}
    </Box>
  );
};

export default NavIcon;
