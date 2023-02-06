import { AppBar, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import logo from "../assets/Logo.svg";
import { StyledButton } from "./StyledButton";

export const Header = () => {
  return (
    <Box>
      <AppBar position="static" sx={{ background: "none" }}>
        <Toolbar
          sx={{ display: "flex", justifyContent: "space-between", mx: "60px" }}
        >
          <Box
            component="img"
            alt="logo"
            src={logo}
            height="26px"
            width="104px"
          />
          <Box sx={{ my: "13px" }}>
            <StyledButton title="Users" anchor="#getReq" />
            <StyledButton title="Sign up" anchor="#putReq" />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
