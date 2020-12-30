import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ navigation, title }) {
    const openDrawer = () => {
        navigation.openDrawer();
      };
    return (
        <View style={styles.header}>
            <MaterialIcons name='menu' size={28} onPress={openDrawer} style={styles.icon}/>
            <View style={styles.headerTitle}>
                <Image style={styles.headerImage} source={require('../assets/heart_logo.png')}/>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width:'100%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    icon:{
        position:'absolute',
        left: -50
    },
    headerImage: {
        height:26,
        width:26,
        marginHorizontal:10
    },
    headerTitle:{
        flexDirection:'row'
    }

})