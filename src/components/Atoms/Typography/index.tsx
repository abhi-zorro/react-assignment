import { Typography } from "@mui/material";

const TypographyComponents = (props: any) => {
  return (
    <Typography variant={props.variant} mb={1} mt={1} {...props}>
      {props.children}
    </Typography>
  );
};

export default TypographyComponents;
