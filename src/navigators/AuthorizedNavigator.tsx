import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React from "react";
import HomeScreen from "../screens/home-screen";

const { Navigator, Screen } = createNativeStackNavigator();

export const AuthorizedNavigator: React.FC = () => {
  return (
    <Navigator initialRouteName="Welcome">
      <Screen name="Home" component={HomeScreen} />
    </Navigator>
  );
};
