import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MovementScreen from './src/screens/Movements';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WeeklyTipsScreen from "./src/screens/WeeklyTips";
import AboutScreen from "./src/screens/About";
import TermsAndConditionsScreen from "./src/screens/TermsAndConditions";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createDrawerNavigator} from "@react-navigation/drawer";

const RootStack = createDrawerNavigator<RootStackParams>();

export type RootStackParams = {
  Movements: undefined;
  WeeklyTips: undefined;
  About: undefined;
  TermsAndConditions: undefined;
};

export default function App() {
  return (
      <NavigationContainer>
        <RootStack.Navigator useLegacyImplementation={true}>
          <RootStack.Screen name="Movements" component={MovementScreen} />
          <RootStack.Screen name="WeeklyTips" component={WeeklyTipsScreen} />
          <RootStack.Screen name="About" component={AboutScreen} />
          <RootStack.Screen name="TermsAndConditions" component={TermsAndConditionsScreen} />
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
