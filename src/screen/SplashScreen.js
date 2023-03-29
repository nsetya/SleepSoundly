import { StackActions } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

function SplashScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View>
        <Text style={styles.text}>Sleep</Text>
        <Text style={styles.text1}>Soundly</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
  },
  text1: {
    fontSize: 32,
    marginLeft: 30,
  },
});

export default SplashScreen;
