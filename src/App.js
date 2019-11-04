import React from "react";
import {MuiThemeProvider} from "@material-ui/core/styles";

import Main from './common/Main/Main.js';
import theme from "./theme";
import {AuthProvider} from "./common/AuthContext/AuthContext";

function App() {
  return (
    <AuthProvider>
      <MuiThemeProvider theme={theme}>
        <Main/>
      </MuiThemeProvider>
    </AuthProvider>
  );
}

export default App;