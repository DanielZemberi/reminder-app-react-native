import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React from "react";
import HomeScreen from "../screens/home-screen";
import LoginScreen from "../screens/login-screen";
import { NavigationContainer } from "@react-navigation/native";

const { Navigator, Screen } = createNativeStackNavigator();

export const UnauthorizedNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Welcome">
        <Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Screen name="Home" component={HomeScreen} />
      </Navigator>
    </NavigationContainer>
  );
};
