import { StyleSheet, Text, View } from 'react-native';
import Homepage from './src/screens/Homepage'
import {NavigationContainer} from "@react-navigation/native";
import AboutScreen from "./src/screens/About";
import TermsAndConditionsScreen from "./src/screens/TermsAndConditions";
import {createDrawerNavigator} from "@react-navigation/drawer";
import DrawerContent from "./src/Components/DrawerContent";

const RootStack = createDrawerNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <RootStack.Navigator useLegacyImplementation={true} drawerContent={DrawerContent}>
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
