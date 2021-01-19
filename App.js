import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/Login";
import SignUpTabs from "./src/screens/SignUp";
import Home from "./src/screens/Home";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Login}
          name="LoginScreen"
          options={{
            title: "Login",
          }}
        />
        <Stack.Screen
          component={SignUpTabs}
          name="SignUpScreen"
          options={{
            title: "SignUp",
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
