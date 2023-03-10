import * as React from "react";
import { AppRegistry, PlatformColor } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { MD3LightTheme as DefaultTheme } from "react-native-paper";
import Home from "./src/pages/Home";
import {
  MaterialYouService,
  defaultPalette,
} from "@assembless/react-native-material-you";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Equation from "./src/pages/Equation";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

const Stack = createNativeStackNavigator();

export function App() {
  return (
    <MaterialYouService fallbackPalette={defaultPalette}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                title: "My home",
                headerStyle: {
                  backgroundColor: PlatformColor(
                    "@android:color/system_accent1_500"
                  ),
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
            <Stack.Screen
              name="Equation"
              component={Equation}
              options={{
                headerStyle: {
                  backgroundColor: PlatformColor(
                    "@android:color/system_accent1_500"
                  ),
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </MaterialYouService>
  );
}

AppRegistry.registerComponent("main", () => App);
