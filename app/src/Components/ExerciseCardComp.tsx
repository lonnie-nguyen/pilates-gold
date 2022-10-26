import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

const handlerClick = () => {
  //handler for Long Click
  console.log("here");
};

const ExerciseCard = () => {
  return (
    <View>
      <Pressable style={styles.cardPressable} onPress={handlerClick}>
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require("../../assets/favicon.png")}
        />
        <Text style={[styles.pilatesMoveText, styles.mt2]}>
          Diaphragm Breathe
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#efefef",
    padding: 16,
    marginTop: 8,
  },
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
