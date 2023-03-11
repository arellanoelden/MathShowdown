import { StatusBar } from "expo-status-bar";
import * as React from "react";
import {
  View,
  StyleSheet,
  PlatformColor,
  TouchableOpacity,
} from "react-native";
import {
  Divider,
  MD3Colors,
  ProgressBar,
  Surface,
  Switch,
  Text,
} from "react-native-paper";
import { generateRandomEquationWithOptions } from "../utils";

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
    equationSurface: {
      justifyContent: "center",
      alignItems: "center",
      width: "90%",
      height: "15%",
      backgroundColor: PlatformColor("@android:color/system_accent1_500"),
      borderColor: "black",
      borderRadius: 10,
    },
    surface: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      width: "100%",
      backgroundColor: PlatformColor("@android:color/system_accent1_500"),
      borderColor: "black",
      borderRadius: 10,
    },
    horizontalRule: {
      height: 5,
      width: "100%",
      backgroundColor: PlatformColor("@android:color/system_accent1_500"),
    },
  });

  const { equation, options } = generateRandomEquationWithOptions();

  const checkValue = (option: any) => {
    console.log(option.isCorrect);
  };

  return (
    <View style={styles.container}>
      <Surface elevation={3} style={styles.equationSurface}>
        <Text style={styles.text} variant="displayLarge">
          {equation}
        </Text>
      </Surface>
      <Divider bold={true} style={styles.horizontalRule} />
      <View style={styles.optionsContainer}>
        {options.map((option) => {
          return (
            <TouchableOpacity
              onPress={() => checkValue(option)}
              key={option.value}
              style={styles.optionRipple}
              activeOpacity={1}
            >
              <Surface elevation={3} style={styles.surface}>
                <Text style={styles.text} variant="displayMedium">
                  {option.value}
                </Text>
              </Surface>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
