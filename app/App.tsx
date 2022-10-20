import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MovementScreen from './src/screens/Movements';
import Homepage from './src/screens/Homepage'
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WeeklyTipsScreen from "./src/screens/WeeklyTips";
import AboutScreen from "./src/screens/About";
import TermsAndConditionsScreen from "./src/screens/TermsAndConditions";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createDrawerNavigator} from "@react-navigation/drawer";

const RootStack = createDrawerNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <RootStack.Navigator useLegacyImplementation={true}>
          <RootStack.Screen name="Pilates Gold" component={Homepage}/>
          <RootStack.Screen name="About" component={AboutScreen} />
          <RootStack.Screen name="Terms And Conditions" component={TermsAndConditionsScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150,
  },
});
