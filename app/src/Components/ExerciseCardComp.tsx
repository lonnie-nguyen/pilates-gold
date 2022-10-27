import React from "react";
import { View, Text, Image, StyleSheet, Pressable, ImageSourcePropType } from "react-native";
// import MovementInfo from "../screens/MovementInfo";
import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// You can define and add ExerciseCard for each movement inside MovementScreen() (Movements.tsx) as follow:
// <ExerciseCard imageAddr={require('../../assets/pic1.jpeg')} name='Diaphragm Breathe' screenName="MovementInfo" />
const ExerciseCard = (props: { screenName: any; imageAddr: ImageSourcePropType; name: string; }) => {
  const navigation = useNavigation<NativeStackNavigationProp>();
  return (
    <View>
      <Pressable
        style={styles.cardPressable}
        //We need to add screens for each movement which would contain muscle map
        onPress={() => navigation.navigate(props.screenName)}
      >
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={props.imageAddr}
        />
        <Text style={[styles.pilatesMoveText, styles.mt2]}>
          {props.name}
        </Text>
      </Pressable>
    </View>
    );
};

const styles = StyleSheet.create({
  mt2: {
    marginTop: 2,
  },
  cardPressable: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  rectangleIcon: {
    position: "relative",
    borderRadius: 10,
    width: 162,
    height: 108,
    flexShrink: 0,
    overflow: "hidden",
    borderWidth: 0.25,
    borderColor: "#000",
  },
  pilatesMoveText: {
    position: "relative",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Poppins",
    color: "#000",
    textAlign: "center",
    width: 162,
  },
});

export default ExerciseCard;