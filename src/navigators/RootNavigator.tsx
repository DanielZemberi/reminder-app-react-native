import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAppSelector } from "@store/index";
import { AuthorizedNavigator } from "./AuthorizedNavigator";
import { UnauthorizedNavigator } from "./UnauthorizedNavigator";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

const { Navigator, Screen } = createNativeStackNavigator();

const RootNavigator: React.FC = () => {
  const isLoggedIn = useAppSelector((state) => state.app.hasTokens);

  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <Screen
            name="AuthorizedNavigator"
            component={AuthorizedNavigator}
            options={{ headerShown: false }}
          />
        ) : (
          <Screen
            name="UnauthorizedNavigator"
            component={UnauthorizedNavigator}
            options={{ headerShown: false, animationTypeForReplace: "pop" }}
          />
        )}
      </Navigator>
    </NavigationContainer>
  );
};

export default React.memo(RootNavigator);
