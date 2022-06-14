import { Box } from "@mui/material";
import Typography from "../../Atoms/Typography/index";
import Image from "../../Atoms/Image";

const LogoComponent = ({ height = 33, url, name }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Image height={height} alt="blinklist" component="img" src={url} />
      <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
        {name}
      </Typography>
    </Box>
  );
};

export default LogoComponent;
