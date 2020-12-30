import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import aboutStack from "./aboutStack";
import homeStack from "./homeStack";

const DrawerNavigation = () => {
    const Drawer = createDrawerNavigator();
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={homeStack} />
                <Drawer.Screen name="About" component={aboutStack} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerNavigation;
