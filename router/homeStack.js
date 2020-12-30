import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Image } from 'react-native';
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";


const homeStack = ({ navigation }) => {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#D3D3D3',
          },
          headerBackground: () => <Image source={require('../assets/game_bg.png')} style={{height:100}}/>,
          headerTitleStyle: {
            fontFamily: 'nunito-regular',
          },
          // headerTintColor: '#fff',
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: () => <Header navigation={navigation} title="Reviews" />,
          }}
  
        />
        <Stack.Screen name="ReviewDetails" component={ReviewDetails} options={{ title: 'Details' }} />
      </Stack.Navigator>
    );
  };
  
  export default homeStack;