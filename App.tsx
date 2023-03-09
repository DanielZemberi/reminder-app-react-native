import * as React from "react";
import { ThemeProvider } from "styled-components";
import getAppStyleGuide from "./src/lib/theme";
import { UnauthorizedNavigator } from "./src/navigators/UnauthorizedNavigator";
import { Provider as ReduxProvider } from "react-redux";
import store from "@store/index";
import RootNavigator from "@navigators/RootNavigator";

function App() {
  const { styleGuide } = getAppStyleGuide();
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={styleGuide}>
        <RootNavigator />
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default App;
