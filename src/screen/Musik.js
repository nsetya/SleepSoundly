import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { Audio } from "expo-av";

function Musik({ navigation }) {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      // require("../../assets/mp3/Camp_Fire_Sound.mp3")
      require("../../assets/Alarm.mp3")
    );
    setSound(sound);
    setIsPlaying(true);
    console.log("Playing Sound");
    await sound.playAsync();
  }

  async function pauseSound() {
    if (sound !== null) {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  }

  return (
    <View>
      <Text style={styles.text}>Musik Relaksasi</Text>
      <View style={{ flexDirection: "row", padding: 10 }}>
        <TouchableOpacity
          onPress={() => (isPlaying ? pauseSound() : playSound())}
        >
          {isPlaying ? (
            <Image
              source={{
                uri: "https://img.icons8.com/stickers/100/null/pause-squared.png",
              }}
              style={{ width: 24, height: 24, marginLeft: 27, marginTop: 71 }}
            />
          ) : (
            <Image
              source={{
                uri: "https://img.icons8.com/plasticine/100/null/play.png",
              }}
              style={{ width: 24, height: 24, marginLeft: 27, marginTop: 71 }}
            />
          )}
        </TouchableOpacity>
        <Text style={{ marginLeft: 20, marginTop: 71 }}>Replenish</Text>
        <Text style={{ marginLeft: 120, marginTop: 71 }}>09.42</Text>
        <Image
          source={{
            uri: "https://img.icons8.com/ios/50/null/like--v1.png",
          }}
          style={{ width: 24, height: 24, marginLeft: 10, marginTop: 71 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginLeft: 27,
    fontSize: 24,
    marginTop: 27,
    marginBottom: 26,
  },
});

export default Musik;
