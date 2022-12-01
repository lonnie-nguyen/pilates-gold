import { StyleSheet } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import MovementScreen from './Movements'
import WeeklyTipsScreen from './WeeklyTips'
import MovementInfo from './MovementInfo'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

const HomeTab = createMaterialTopTabNavigator()
const Stack = createNativeStackNavigator()

function Root () {
  return (
        <HomeTab.Navigator>
            <HomeTab.Screen name="Movements" component={MovementScreen}/>
            <HomeTab.Screen name="Weekly Tips" component={WeeklyTipsScreen}/>
        </HomeTab.Navigator>
  )
}

const Homepage = () => {
  return (
            <NavigationContainer independent={true}>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen
                        name="Root"
                        component={Root}
                    />
                    <Stack.Screen
                        name="MovementInfo"
                        component={MovementInfo}
                        options={{ headerShown: true, headerTitle: 'Movement', headerTitleAlign: 'center' }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 24
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: 'bold'
  }
})

export default Homepage
