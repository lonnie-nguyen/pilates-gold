import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Movements from "./screens/Movements";
import MovementScreen from "./screens/Movements";
import WeeklyTipsScreen from "./screens/WeeklyTips";

export default function App() {

  return (
      <MovementScreen/>//Home Page
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
