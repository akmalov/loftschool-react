import React from "react";
import {MuiThemeProvider} from "@material-ui/core/styles";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import createStorage from "./common/storage/storage"

import Main from './common/containers/Main/Main.js';
import theme from "./theme";

function App() {
  const store = createStorage();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <Main/>
        </MuiThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;