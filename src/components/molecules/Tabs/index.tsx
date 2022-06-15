import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material";
import tabstheme from "../../Theme";

export default function TabsWrappedLabel({ tabData, ...props }: any) {
  const [value, setValue] = React.useState(tabData && tabData[0].value);
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    props.statusHandler(newValue);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider", width: "912px" }}>
      <ThemeProvider theme={tabstheme}>
        <Tabs value={value} onChange={handleChange} data-testid="tabsTest">
          {tabData.map((currTab: any) => {
            return (
              <Tab
                data-testid={`tabTest-${currTab.value}`}
                value={currTab.value}
                label={currTab.label}
                key={currTab.value}
                {...props}
                sx={{
                  fontWeight: "700",
                  textTransform: "unset",
                  fontSize: "18px",
                  marginRight: "150px",
                  width: "200px",
                  alignItems: "start",
                }}
              />
            );
          })}
        </Tabs>
      </ThemeProvider>
    </Box>
  );
}
