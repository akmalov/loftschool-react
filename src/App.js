import React from "react";
import {MuiThemeProvider} from "@material-ui/core/styles";

import Layout from './common/Layout.js';
import theme from "./theme";
import {AuthProvider} from "./common/AuthContext";

function App() {
  return (
    <AuthProvider>
      <MuiThemeProvider theme={theme}>
        <Layout/>
      </MuiThemeProvider>
    </AuthProvider>
  );
}

export default App;