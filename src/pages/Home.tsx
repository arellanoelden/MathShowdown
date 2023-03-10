import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, PlatformColor } from "react-native";
import { Button, Surface, Text } from "react-native-paper";

export default function Home({ navigation }: any) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: PlatformColor("@android:color/system_accent1_300"),
      alignItems: "center",
      justifyContent: "center",
    },
    surface: {
      padding: 8,
      height: 80,
      width: 80,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: PlatformColor("@android:color/system_accent1_600"),
    },
    text: {
      color: "white",
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button
        buttonColor={PlatformColor("@android:color/system_accent1_600")}
        mode="contained"
        onPress={() => navigation.navigate("Equation")}
      >
        Start
      </Button>
      <Surface elevation={1} style={styles.surface}>
        <Text style={styles.text}>1</Text>
      </Surface>
    </View>
  );
}
