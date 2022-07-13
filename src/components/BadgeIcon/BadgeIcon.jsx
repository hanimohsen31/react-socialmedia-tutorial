import * as React from "react";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import { createTheme,ThemeProvider  } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#f44336",
    },
  },
});

export function BadgeIcon(props) {
  return (
    <ThemeProvider theme={theme}>
    <Stack spacing={4} direction="row" sx={{ color: "action.active" }} style={{cursor:'pointer'}}>
      <span style={{ margin: "auto 10px" }}>
        <Badge color='secondary' badgeContent={props.badgeContent} showZero>
          <span style={{ color: "white" }}>{props.icon}</span>
        </Badge>
      </span>
    </Stack>
    </ThemeProvider>
  );
}
