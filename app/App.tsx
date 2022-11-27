import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import Homepage from './src/screens/Homepage'
import { NavigationContainer } from '@react-navigation/native'
import AboutScreen from './src/screens/About'
import TermsAndConditionsScreen from './src/screens/TermsAndConditions'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerContent from './src/Components/DrawerContent'
import { LinearGradient } from 'expo-linear-gradient'

const RootStack = createDrawerNavigator()

function HeaderLogo () {
  return (
        <View style={styles.container}>
            <Image source={require('../app/assets/header-logo.png')} />
        </View>
  )
}

export default function App () {
  return (
      <NavigationContainer>
        <RootStack.Navigator useLegacyImplementation={true}
                             drawerContent={DrawerContent}
                             screenOptions={{
                               headerBackground: () => (
                                   <LinearGradient colors={['#0064A4', '#4DA4C6']} style={{ width: '100%', height: '100%' }} />
                               ),
                               headerTitleStyle: {
                                 fontSize: 26,
                                 fontWeight: 'bold'
                               },
                               headerTitleAlign: 'center',
                               headerTintColor: '#000'
                             }}
        >
          <RootStack.Screen name="Pilates Gold" component={Homepage} options={{ headerTitle: () => <HeaderLogo /> }} />
          <RootStack.Screen name="About" component={AboutScreen} />
          <RootStack.Screen name="Terms of Use" component={TermsAndConditionsScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
