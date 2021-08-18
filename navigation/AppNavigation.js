import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import LogFoodScreen from "../screens/LogFoodScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home Screen" component={HomeScreen} />
      <Tab.Screen name="About Screen" component={AboutScreen} />
      <Tab.Screen name="Log Food Screen" component={LogFoodScreen} />
    </Tab.Navigator>
  );
};

const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTabNav" component={BottomTabNav} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
};

export default AppNavigator;
