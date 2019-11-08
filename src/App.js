import React from "react";
import {MuiThemeProvider} from "@material-ui/core/styles";
import {BrowserRouter} from "react-router-dom";

import Main from './common/Main/Main.js';
import theme from "./theme";
import {AuthProvider} from "./common/AuthContext/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <Main/>
        </MuiThemeProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;