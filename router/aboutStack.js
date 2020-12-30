import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";

const Stack = createStackNavigator();

export default () => (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#eee",
                    height: 120,
                },
                headerTintColor: "#444",
            }}
        >
            <Stack.Screen
                name="About"
                component={About}
                options={{
                    title: "About GameZone",
                }}
            />

        </Stack.Navigator>
);