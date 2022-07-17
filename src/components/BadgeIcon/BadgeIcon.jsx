import React , { useContext ,useState , useEffect}from "react";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { PalletContext } from "./../../store/PalletsContext";

export function BadgeIcon(props) {
  const ctx = useContext(PalletContext);

  const [pallet, setPallet] = useState(ctx.defaultPallet);
  useEffect(() => {
    // console.log("use effect");
    setPallet(ctx.defaultPallet);
  }, [ctx.defaultPallet]);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      secondary: {
        main: pallet.badgeColor,
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Stack
        spacing={4}
        direction="row"
        sx={{ color: "action.active" }}
        style={{ cursor: "pointer" }}
      >
        <span style={{ margin: "auto 10px" }}>
          <Badge color="secondary" badgeContent={props.badgeContent} showZero>
            <span style={{ color: "white" }}>{props.icon}</span>
          </Badge>
        </span>
      </Stack>
    </ThemeProvider>
  );
}
