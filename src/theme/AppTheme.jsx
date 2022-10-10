import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "styled-components";
import { purpleTheme } from "./purple";
import React from "react";

const AppTheme = ({ children }) => {
  return (
    <div>
      <ThemeProvider theme={purpleTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </div>
  );
};

export default AppTheme;
