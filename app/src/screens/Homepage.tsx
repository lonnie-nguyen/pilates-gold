import {StyleSheet} from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import MovementScreen from "./Movements";
import WeeklyTipsScreen from "./WeeklyTips";

const HomeTab = createMaterialTopTabNavigator();

const Homepage = () => {

    return (
        <HomeTab.Navigator>
            <HomeTab.Screen name="Movements" component={MovementScreen}/>
            <HomeTab.Screen name="Weekly Tips" component={WeeklyTipsScreen}/>
        </HomeTab.Navigator>
    );

}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        marginTop: 24,
    },
    screenTitle: {
        fontSize: 24,
        marginTop: 8,
        fontWeight: 'bold',
    },
});

export default Homepage;