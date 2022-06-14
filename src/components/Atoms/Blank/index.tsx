import { Box } from "@mui/material";
import theme from "../../Theme";

const BlankComponent = (props: any) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "130vh",
        overflow: "hidden",
        backgroundColor: "#000",
        opacity: "0.5",
      }}
      onClick={props.handleExploreMenu}
      data-testid="blank"
    >
      A
    </Box>
  );
};

export default BlankComponent;
