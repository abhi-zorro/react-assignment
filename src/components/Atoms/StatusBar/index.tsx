import { LinearProgress } from "@mui/material";

const style = {
  height: "15px",
  opacity: "0.5",
  borderRadius: "0px 0px 10px 10px",
  backgroundColor: "#E1ECFC",
};

const StatusBar = ({ value, ...props }: any) => {
  return (
    <LinearProgress value={value} {...props} sx={style} variant="determinate" />
  );
};

export default StatusBar;
