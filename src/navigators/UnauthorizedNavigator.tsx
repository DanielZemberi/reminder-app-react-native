import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();
import React from "react";

export const UnauthorizedNavigator: React.FC = () => {
  return (
    <Navigator initialRouteName="Welcome">
      <Screen name="Welcome"></Screen>
    </Navigator>
  );
};
