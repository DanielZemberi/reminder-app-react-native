import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React from "react";
import LoginScreen from "../screens/login-screen";

const { Navigator, Screen } = createNativeStackNavigator();

export const UnauthorizedNavigator: React.FC = () => {
  return (
    <Navigator initialRouteName="Welcome">
      <Screen
        options={{ headerShown: false }}
        name="Login"
        component={LoginScreen}
      />
    </Navigator>
  );
};
