import * as React from "react";
import { ThemeProvider } from "styled-components";
import getAppStyleGuide from "./src/lib/theme";
import { UnauthorizedNavigator } from "./src/navigators/UnauthorizedNavigator";

function App() {
  const { styleGuide } = getAppStyleGuide();
  return (
    <ThemeProvider theme={styleGuide}>
      <UnauthorizedNavigator />
    </ThemeProvider>
  );
}

export default App;
