import * as React from "react";
import { View, Text } from "react-native";
import { ThemeProvider, useTheme } from "styled-components";
import getAppStyleGuide from "./src/lib/theme";

const Test = () => {
  const theme = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.color.bg }}>
      <Text style={{ backgroundColor: theme.color.primary }}>asdasd</Text>
    </View>
  );
};

function App() {
  const { styleGuide } = getAppStyleGuide();
  return (
    <ThemeProvider theme={styleGuide}>
      <Test />
    </ThemeProvider>
  );
}

export default App;
