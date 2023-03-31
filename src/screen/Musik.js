import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Audio } from "expo-av";
import { songs } from "../mock/mockSong.js";

function Musik({ navigation }) {
  const [sound, setSound] = useState(null);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [favorites, setFavorites] = useState([]);

  async function playSound(item) {
    if (sound !== null) {
      await sound.unloadAsync();
    }
    const { sound: newSound } = await Audio.Sound.createAsync(item.source);
    setSound(newSound);
    setCurrentSong(item);
    setIsPlaying(true);
    await newSound.playAsync();
  }

  async function pauseSound() {
    if (sound !== null) {
      setIsPlaying(false);
      await sound.pauseAsync();
    }
  }

  function toggleFavorite(item) {
    if (favorites.includes(item)) {
      setFavorites(favorites.filter((f) => f !== item));
    } else {
      setFavorites([...favorites, item]);
    }
  }

  function renderItem({ item }) {
    const isCurrentSong = currentSong?.id === item.id;
    const isFavorite = favorites.includes(item);
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() =>
            isPlaying && isCurrentSong ? pauseSound() : playSound(item)
          }
        >
          {isPlaying && isCurrentSong ? (
            <Image
              source={{
                uri: "https://img.icons8.com/stickers/100/null/pause-squared.png",
              }}
              style={styles.playIcon}
            />
          ) : (
            <Image
              source={{
                uri: "https://img.icons8.com/plasticine/100/null/play.png",
              }}
              style={styles.playIcon}
            />
          )}
        </TouchableOpacity>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.duration}>{item.duration}</Text>
        <TouchableOpacity onPress={() => toggleFavorite(item)}>
          {isFavorite ? (
            <Image
              source={{
                uri: "https://img.icons8.com/dusk/64/null/hearts.png",
              }}
              style={styles.favoriteIcon}
            />
          ) : (
            <Image
              source={{
                uri: "https://img.icons8.com/wired/64/null/hearts.png",
              }}
              style={styles.favoriteIcon}
            />
          )}
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View>
      <Text style={styles.text}>Musik Relaksasi</Text>
      <FlatList
        data={songs}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    paddingHorizontal: 12,
    paddingTop: 27,
    fontSize: 24,
    marginBottom: 24,
  },
  container: {
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingBottom: 24,
  },
  playIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    paddingLeft: 10,
  },
  duration: {
    fontSize: 16,
    textAlign: "right",
    flex: 1,
    alignItems: "flex-end",
    paddingRight: 12,
  },
  favoriteIcon: {
    width: 24,
    height: 24,
  },
});

export default Musik;
