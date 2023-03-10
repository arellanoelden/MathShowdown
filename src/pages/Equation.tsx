import * as React from "react";
import {
  View,
  StyleSheet,
  PlatformColor,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Card, Surface, Text, TouchableRipple } from "react-native-paper";

export default function Equation() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: PlatformColor("@android:color/system_accent1_300"),
      alignItems: "center",
      justifyContent: "space-evenly",
    },
    text: {
      color: "white",
    },
    optionsContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "flex-end",
    },
    optionRipple: {
      justifyContent: "center",
      alignItems: "center",
      width: "45%",
      height: "40%",
      margin: 10,
    },
    optionCard: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      width: "100%",
      backgroundColor: PlatformColor("@android:color/system_accent1_500"),
      borderColor: "black",
    },
  });

  const equation = "5 + 5";
  const options = [
    { value: 1, isCorrect: false },
    { value: 3, isCorrect: false },
    { value: 10, isCorrect: true },
    { value: 5, isCorrect: false },
  ];

  const checkValue = (option: any) => {
    console.log(option.isCorrect);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{equation}</Text>
      <View style={styles.optionsContainer}>
        {options.map((option) => {
          return (
            <TouchableOpacity
              onPress={() => checkValue(option)}
              key={option.value}
              style={styles.optionRipple}
              activeOpacity={1}
            >
              <Card
                mode="elevated"
                elevation={5}
                onPress={() => checkValue(option)}
                style={styles.optionCard}
                key={option.value}
              >
                <Text style={styles.text} variant="titleLarge">
                  {option.value}
                </Text>
              </Card>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
