import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://img.icons8.com/external-filled-outline-geotatah/64/null/external-bedroom-sleepless-night-color-filled-outline-geotatah-4.png",
        }}
        style={styles.headerImage}
      />
      <Text style={styles.headerText}>Sleep Soundly</Text>
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
          <Text style={styles.text}>Pengingat Tidur</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          // onPress={() => navigation.navigate("Diary")}
          onPress={() => navigation.navigate("SleepDiary")}
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
    backgroundColor: "#33424A",
  },
  text: {
    textAlign: "center",
    color: "#F9FAFC",
    padding: 5,
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#57C5B6",
    width: 210,
    height: 40,
    marginBottom: 30,
    borderRadius: 10,
  },
  headerText: {
    fontSize: 30,
    marginTop: 16,
    marginBottom: 100,
    color: "#F4F7F6",
    fontSize: 32,
  },
  headerImage: {
    width: 80,
    height: 80,
    marginBottom: 12,
  },
});

export default HomeScreen;
