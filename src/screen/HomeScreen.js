import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 150, fontSize: 30, marginTop: -100 }}>
        Sleep Soundly
      </Text>
      <View>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Kuesioner")}
        >
          <Text style={styles.text}>Kuesioner PSQI</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Musik")}
        >
          <Text style={styles.text}>Musik Relaksasi</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Alarm")}
        >
          <Text style={styles.text}>Alarm</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Diary")}
        >
          <Text style={styles.text}>Sleep Diary</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Tips")}
        >
          <Text style={styles.text}>Tips & Trick</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9FAFC",
  },
  text: {
    textAlign: "center",
    color: "#F9FAFC",
    padding: 5,
  },
  button: {
    backgroundColor: "#57C5B6",
    width: 189,
    height: 31,
    marginBottom: 30,
    borderRadius: 10,
  },
  tulisan: {
    fontSize: 32,
  },
  tulisan1: {
    fontSize: 32,
    marginLeft: 30,
  },
});

export default HomeScreen;
